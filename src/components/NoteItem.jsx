import React from 'react'
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({id, title, body, createdAt, archived, date, onDelete, onArsip}){
    return(
        <>
            <div className="note-item">
                <NoteItemContent id={id} title={title} body={body} createdAt={createdAt} archived={archived} date={date} onDelete={onDelete} onArsip={onArsip} />
            </div>
        </>
    )
}

export default NoteItem;