import React, { useState } from "react";
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"
import TextArea from "./components/TextArea";



function App() {

  const [notes,setnotes]=useState([]);

  function addNote(note){
    setnotes(prevnotes=>{
      return [...prevnotes,note]
    })

  }

  function deleteNote(id){
    setnotes(prevnotes=>{
     return  prevnotes.filter((noteitem,index)=>{
        return  index!==id;
      });
    });
  }
  return (
    <div className="App">
        <Header/>
        <TextArea onAdd={addNote}/>
        {notes.map((noteitem,index)=>{
          return (
            <Note key={index} id={index} title={noteitem.title} content={noteitem.content} onDelete={deleteNote}/>
            )
        })}
        <Footer/>
    </div>
  );
}

export default App;
