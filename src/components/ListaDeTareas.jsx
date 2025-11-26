import { useState } from "react";

export const Tareas = () => {
  const [tareas, setTareas] = useState(["comprar leche"]);
  const [nuevaTarea, setNuevaTarea] = useState("");

   const eliminarTarea = (index) => {
    const copia = [...tareas];
    copia.splice(index, 1);
    setTareas(copia);
  };

  return (
    <>
    <div class="input-group flex-nowrap">
      <span class="input-group-text" id="addon-wrapping">

      </span>

      <input
        value={nuevaTarea}
        onChange={(event) => {
          setNuevaTarea(event.target.value);
        }}
        onKeyDown={(event)=>{
            if (event.key==="Enter"){
                setTareas((prev) => {
            return [...prev, nuevaTarea];
          });
          setNuevaTarea(" ")
            }
        }}
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
      <button
        onClick={() => {
          setTareas((prev) => {
            return [...prev, nuevaTarea];
          });
          setNuevaTarea(" ")
        }}
        
        type="button"
        class="btn btn-primary"
      >
        agregar
      </button>

    </div>


    
      <ul>
        {tareas.map((tareas, index) => (
          <li 
          key={index}>{tareas}
          <button onClick={() => eliminarTarea(index)}>eliminar</button>
          
          </li>
        ))}
       
      
      </ul>
      </>
  );
};
