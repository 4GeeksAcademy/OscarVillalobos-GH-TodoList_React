import React, { useState } from "react";

export const Home = () => {

    const [task, setTask] = useState("");
    const [todoList, setTodoList] = useState(['Ejemplo: Limpiar Cocina']);

    // Maneja el cambio en el input.. revisar mas sobre hand..

    const handletask = (event) => {
        setTask(event.target.value);
    }

    // Borro la tarea ingresada segun su index...

    const handRemove = (index) => {
        setTodoList(todoList.filter((item, i) => i !== index));
    }

    // Aca se agregara una nueva tarea..e ira enganchada al form..

    const inputSubmit = (event) => {
        event.preventDefault();

        if (task.trim() === '') {
            setTask('');
            return;
        }
        setTodoList([...todoList, task]);
        setTask('');
    }

    return (
        <div className="container">
            <h1>Todos</h1>

            <form onSubmit={inputSubmit}>
                <input
                    className="form-control"
                    list="datalistOptions"
                    id="ListOfInput"
                    placeholder="Escribe una tarea."
                    value={task}
                    onChange={handletask}
                />
            </form>

            <ul className="list-group">
                {todoList.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between hidden-icon">
                        {item}
                         <button className="btn btn-outline-dark" onClick={() => handRemove(index)}>X</button>
                    </li>
                ))}
                
                <li id="inputTask">
                    {todoList.length} Tareas ingresadas Actualmente
                </li>
            </ul>
        </div>
    );
};

export default Home;