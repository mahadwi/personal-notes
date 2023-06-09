import React from 'react'
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import {getInitialData, showFormattedDate} from '../utils';

class PersonalNoteApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
            date: showFormattedDate(new Date()),
            search: '',
        }

        this.onAddNoteList = this.onAddNoteList.bind(this);
        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onArsipEventHandler = this.onArsipEventHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    onAddNoteList({title, body}){
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body
                    }
                ]
            }
            
        })
    }

    onDeleteEventHandler(id){
        const notes = this.state.notes.filter(notes => notes.id !== id)
        this.setState({notes})
    }

    onArsipEventHandler(id){
        const arsip = this.state.notes.map((note) => {
            if(note.id == id){
                note.archived = !note.archived
            }
            return note
        })
        this.setState(() => {
            return{
                notes: [
                    ...arsip
                ]
            }
        })
    }

    onSearchEventHandler(event){
        this.setState((prevState)=> {
            return {
                search: event.target.value
            }
        })
    }

    render(){
        const searchNote = this.state.notes.filter((note) => note.title.toLocaleLowerCase().indexOf(this.state.search.toLowerCase()) > -1);
        const searchtemp = this.state.search.length > 0 ? searchNote : this.state.notes
        return(
            <>
                <div className="note-app__header">
                    <h1>Notes</h1>
                    <div className="note-search">
                        <input type="text" placeholder="Cari catatan ..." value={this.state.search} onChange={this.onSearchEventHandler} />
                    </div>
                </div>
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteList} />
                    <NoteList notes={searchtemp} date={this.state.date} onDelete={this.onDeleteEventHandler} onArsip={this.onArsipEventHandler} />
                </div>
            </> 
        );
    }
}

export default PersonalNoteApp;
