import React, { useState } from "react";

function TextArea(props){

    const [note,setnote]=useState({
        title:"",
        content:""
    })

    function handlechange(event){
        const {name,value}=event.target;

        setnote(prevnote=>{
            return {
                ...prevnote,[name]:value
            };
        });
    }

    function submitnote(event){
        props.onAdd(note);
        setnote({
            title:"",
            content:""
        })
        event.preventDefault();
        
    }

    return (
        <div className>
            <form>
                <input type="text" name="title" onChange={handlechange} placeholder="title" value={note.title} />
                <textarea name="content" onChange={handlechange} id="" rows="5" placeholder="Take a note" value={note.content}/>
                <button onClick={submitnote}>Add</button>
            </form>
        </div>
    );
}

export default TextArea;