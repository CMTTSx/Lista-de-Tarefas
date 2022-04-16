import React from 'react';

import styles from '../Tarefas/tarefas.css'

import { FaPlus } from 'react-icons/fa'
import { FaEdit, FaWindowClose } from 'react-icons/fa'


export default function Tarefas({tarefas, handleEdit, handleDelete}){
    
    
    return(

        <ul className="tarefas" >
    {tarefas.map((tarefa, index) => (
    <li key={tarefa} >
     {tarefa}
    
    <div className="btn">
        <FaEdit
         onClick={(e) => handleEdit(e, index)} 
         className="edit"
         color="#23B5D3" />
        
        <FaWindowClose 
         onClick={(e) => handleDelete(e, index)} 
         className="delete"
         color="#FF0000" />
    </div>
    
    </li>
    
    
))} 
</ul>
    
    
    )
}