import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {dataBase} from "../../../firebase-config";
import * as React from 'react';
import {Button} from "@mui/material";
import { getStorage, ref, deleteObject } from "firebase/storage";




function CardView() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const querySnapshot = await getDocs(collection(dataBase, "note-taker-2022"));
        setNotes(querySnapshot.docs.map((doc) => ({...doc.data()})))

   }

   const deleteData = () =>{

       const dataBase = getStorage();
       const deleteDetails = ref(dataBase, "note-taker-2022");

       deleteObject(deleteDetails).then(() => {
           alert("Deleting Success")
       }).catch((error) => {
          alert("Deleting failed")
       });
   }

   //---------------------------------------------------------------------------------------------
    return (

        <table className="table table-striped table-dark">
            <thead className="table-head">
            <tr className="table-row">

                <th  scope="col">Date</th>
                <th  scope="col">Title</th>
                <th  scope="col" >Note</th>
                <th  scope="col" >Option</th>
            </tr>
            </thead>
            <tbody>
            {notes.map(note =>{
                return(

                    <tr>
                        <td className="col-date">{note.date}</td>
                        <td className="col-title">{note.title}</td>
                        <td className="col-note">{note.note}</td>
                        <td className="col-note"><Button className="btn-danger" onClick={deleteData}>Delete</Button></td>

                    </tr>
                );

            })}
            </tbody>
        </table>
    );
}
export default CardView;
