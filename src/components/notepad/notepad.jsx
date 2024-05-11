import React from "react";
import './notepad.css';

const Notepad=({title,note,deleteNote,editNote})=>{
    return(
        <div className="notepad">
            <div className="note">
                <h1 className="btnClose fa fa-lg fa-trash" onClick={deleteNote}></h1>
            <h4>{title}</h4>
            {/* <textarea  rows={3} style={{textAlign:"center",borderRadius:'10px',padding:'10px',opacity:'0.9',}}>{note}</textarea> */}
            <p>{note}</p>
            <input className="input form-control " type="text" placeholder="Edit report" onChange={editNote}  />
            </div>
        </div>
    )
}

export default Notepad;