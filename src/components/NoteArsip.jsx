import React from 'react'
import NoteItem from './NoteItem';

function NoteArsip({ notes, date, onDelete, onArsip }) {
    const archived = notes.filter(note => note.archived === true);
    return (
        <>
            <h2>Arsipkan</h2>
            {archived.length ?
                <>
                    <div className="notes-list">
                        {
                            notes.map((note) => {
                                if (note.archived) {
                                    return (
                                        <NoteItem key={note.id} id={note.id} date={date} onDelete={onDelete} onArsip={onArsip} {...note} />
                                    )
                                }
                            })
                        }
                    </div>
                </>
                : <p className="notes-list__empty-message">Tidak ada catatan</p>
            }
        </>
    )
}


export default NoteArsip;