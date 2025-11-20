import { useState } from "react";

export const Tareas = () => {

    const [tareas, setTareas] = useState(["comprar leche"])
    const [nuevaTarea, setNuevaTarea] = useState("")

    


    return(

        <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">@</span>

         value={nuevaTarea}
        <input onChange={(event) => {

            setNuevaTarea(event.target.value)
        }}
        type="text" 
        class="form-control" 
        placeholder="Username" 
        aria-label="Username" 
        aria-describedby="addon-wrapping"/>
        <button onClick={() =>{
            setTareas([nuevaTarea])
            setNuevaTarea(' ')

        }}
        type="button" 
        class="btn btn-primary">agregar</button>

        <ul>
            {tareas.map((tareas, index) => 
            <li key={index}>{tareas}</li>
            )}
        </ul>
        </div>
    )
}