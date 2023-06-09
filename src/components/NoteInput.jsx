import React from 'react';

class NoteInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
            maxText: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        const max = 50
        const titleInputUser = event.target.value.slice(0, max);
        const titleInputUserLength = titleInputUser.length
        this.setState((prevState) => {
            return {
                ...prevState,
                title: titleInputUser,
                maxText : max - titleInputUserLength
            }
        })
    }

    onBodyChangeEventHandler(event){
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state)
    }

    render(){
        return(
            <>
                <h2>Buat Catatan</h2>
                <div className="note-input">
                    <p className="note-input__title__char-limit">Sisa karakter: {this.state.maxText}</p>
                    <form onSubmit={this.onSubmitEventHandler} >
                        <input type="text" className="note-input__title" placeholder="ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
                        <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu disini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
                        <button type="submit">Buat</button>
                    </form>
                </div>
            </>
        )
    }
}

export default NoteInput;