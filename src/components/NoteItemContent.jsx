import React from 'react';
import NoteItemAction from './NoteItemAction';

function NoteItemContent({id, title, body, createdAt, archived, date, onDelete, onArsip}){
    return(
        <>
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{date}</p>
                <p className="note-item__body">{body}</p>
            </div>
            <NoteItemAction id={id} archived={archived} onDelete={onDelete} onArsip={onArsip} />
        </>
    )
}

export default NoteItemContent;