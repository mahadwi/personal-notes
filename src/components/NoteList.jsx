import React from 'react';
import NoteItem from './NoteItem';
import NoteArsip from './NoteArsip';

function NoteList({ notes, date, onDelete, onArsip }) {
    return (
        <>
            <h2>Catatan aktif</h2>
            {
                notes.length ?
                    <div className="notes-list">
                        <>
                            {
                                notes.map((note) => {
                                    if (!note.archived) {
                                        return (
                                            <NoteItem key={note.id} id={note.id} date={date} onDelete={onDelete} onArsip={onArsip} {...note} />
                                        )
                                    }
                                })
                            }
                        </>

                    </div>
                    : <p className="notes-list__empty-message">Tidak ada catatan</p>
            }
            <NoteArsip notes={notes} date={date} onDelete={onDelete} onArsip={onArsip} />
        </>
    )
}

export default NoteList;