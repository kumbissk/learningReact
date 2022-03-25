import {useState} from 'react'
import Item from './Item'



export default function Form(){

    const[dataArr, setDataArr] = useState([
        {txt: "Cours React sur udemy"},
        {txt: "Documentation sur laravel"},
        {txt: "Creaction d'une application Boite A idée"},

    ])

    const [stateInput, setStateInput] = useState();


    const addTodo = e => {
        e.preventDefault();
        const newArr = [...dataArr]

        const newTodo = {};
        newTodo.txt = stateInput;

        newArr.push(newTodo);
        setDataArr(newArr);
        
        setStateInput('')
    }


    const linkedInput = e => {
        setStateInput(e);
    }

    return(


        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">


            <form onSubmit={e => addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Les taches</label>
                <input 
                value={stateInput}
                onInput={e => linkedInput(e.target.value)}
                type="text" 
                className="form-control" 
                id="todo" />

                <button className="mt-2 btn btn-primary 
                d-block">Envoyer</button>
            </form>

            <h2>Liste des taches a faire :</h2>
            <ul className="list-group">
                {dataArr.map((item, index) => {
                    return (
                        <Item 
                        txt={item.txt}
                        key={index}
                        />
                    )
                })}
            </ul>
        </div>
    )
}





