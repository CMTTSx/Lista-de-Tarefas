import React, { Component } from "react";

import styles from '../Main/Main.css'

//Adicionar Components
import Form from "../Form";
import Tarefas from '../Tarefas'


export default class Main extends Component {
    
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1,
    };

    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));

        if(!tarefas) return;

        this.setState({tarefas})
    }

    componentDidUpdate(prevProps, prevState) {
        const { tarefas } = this.state;

        if(tarefas === this.state.tarefas)

        localStorage.setItem('tarefas', JSON.stringify(tarefas));

    }


    
    handleSubmit = (e) => {
        e.preventDefault();
        //Criando Tarefa
        const { tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        //Validação de Tarefa já adicionada uma vez
        if(tarefas.indexOf(novaTarefa) !== -1 ){
            alert("Tarefa já adicionada!")
            return;
        } 

        //Validação de não adicionar uma tarefa em branco
        if(novaTarefa === '') {
            alert("Precisa adicionar uma tarefa!")
            return;
        }
        

        const novasTarefas = [... tarefas];


        //Editando Tarefa
        if(index === -1) {
            this.setState({
                tarefas: [... novasTarefas, novaTarefa],
                novaTarefa: '',
            });
        } else {
            novasTarefas[index] = novaTarefa;

            this.setState({
                tarefas: [...novasTarefas],
                index: -1,
            });

        }

        

    }

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
            
        })
    }

    handleEdit = (e, index) => {
        const { tarefas } = this.state;
        
        this.setState({
            index,
            novaTarefa: tarefas[index], 
        });
    }

    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        const novasTarefas = [... tarefas];
        novasTarefas.splice(index, 1); 

        this.setState({
            tarefas: [... novasTarefas],
        })
    }
    
    render() {

        const { novaTarefa, tarefas } = this.state;

        return (
            
            <div className="main" >
                
                <h1>Lista de Tarefas</h1>
            
                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    novaTarefa={novaTarefa}
                />

                <Tarefas
                tarefas={tarefas}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
                />
               

            </div>
        )
    }
}