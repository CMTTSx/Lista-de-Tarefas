import React from 'react';

import styles from '../Form/Form.css'

import { FaPlus } from 'react-icons/fa';


export default function Form(props){
    return(
        
        <div className="Form">
            
            <form onSubmit={props.handleSubmit} >
                    <input 
                    onChange={props.handleChange} 
                    type="text"
                    placeholder="Digite uma Tarefa"
                    value={props.novaTarefa}
                    />
                    <button type="submit">
                        <FaPlus className="FaPlus" size="20px" />
                    </button>
                </form>

        </div>
    )
}