
import TextField from '@mui/material/TextField';
import {Box, Button, TextareaAutosize} from "@mui/material";
import * as React from 'react';
import SendIcon from '@mui/icons-material/Send';
import {dataBase} from "../../../firebase-config";
import {addDoc, collection, getDocs} from "firebase/firestore";
import {useEffect, useState} from "react";

function Home (){

    const current = new Date();
    const today = `${current.getFullYear()} / ${current.getMonth()+1} / ${current.getDate()}`

    const [note,setNote] =useState("");
    let   [date,setDate] =useState("");
    const [title,setTitle] =useState("");

    const addNote = async ()=>{
        date = today
        const docRef = await addDoc(collection (dataBase, "note-taker-2022"),{

            date: date,
            title:title,
            note: note,

        }).then (res =>{
            alert("Note Saved...")
        }).catch(err =>{
            alert("Failed to save...")
        });

    }

    return(


    <div style={{paddingLeft:100}}>

            <br/><br/>

           <TextField id="outlined-basic" value={today} onChange={(e) => setDate(e.target.value)} label="Date" variant="outlined"/>
            <br/><br/><br/>


           <TextField id="outlined-basic" value={title} aria-colspan={10} onChange={(e) => setTitle(e.target.value)} label="Title" variant="outlined"/>
            <br/><br/><br/><br/>
            <TextareaAutosize value={note} onChange={(e) => setNote(e.target.value)}
                              minRows={15}
                placeholder="Take your notes here"
                style={{ width: 1750}}
            />

            <Box m={4} pt={5}/>
            <Button onClick={addNote} variant="contained" endIcon={<SendIcon />}>
                Save and add to Summery
            </Button>

        </div>

    );
}
export default Home;

