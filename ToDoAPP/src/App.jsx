import {useState,useEffect} from "react"
import logoReact from "../src/logo.svg"
import {Tarea} from "./components/Tarea.jsx"
export default App = ()=> {
  const [nuevaTarea, setNuevaTarea] = useState("") //estado del valor del input llamado "tarea"
  const [alerta, setAlerta] = useState(false)
  const [tareas, setTareas] = useState([]) // arreglo ccon todas las tareas que se vayan acumulando
  useEffect(() => {
    let datosLS = JSON.parse(localStorage.getItem("datos")) 
    if(datosLS===null) setTareas([])
    else setTareas([...datosLS])  
     console.log("tareakjhs",tareas)         
  }, [])
  useEffect(() => {
    console.log("useEffect tareas de act",tareas)
    localStorage.setItem("datos",JSON.stringify(tareas))        
  }, [tareas])
  
  const agregarTarea = ()=>{    
    if(nuevaTarea.length<=0){setAlerta(true); return;}
    setTareas([{nombre:nuevaTarea,estado:true},...tareas]) 
    setAlerta(false)
    /*  setTareas((previo) => {
      return [...previo,{nombre:nuevaTarea,estado:true}]
    }) */
    setNuevaTarea('')  
  }
  const handleKeyUp = (e)=>{if(e.keyCode===13)agregarTarea()}

  const limpiarTodo = ()=>{setTareas([])}

  const editarTarea = (id)=>{
    console.log("tareas",tareas) 
    const todo = tareas[id]
    todo.estado = !todo.estado;
    const newTodos = [...tareas];
    newTodos[id] = todo;
    setTareas(newTodos);
  }

  const eliminarTarea = (id)=>{    
    const newTodos = [...tareas]
    newTodos.splice(id,1)
    setTareas(newTodos)
  }

  return (
    <>
    <div className="container mt-5 animacion contenedor">
      <h3 style={{display:'inline-block'}}>ToDo con React y Vite</h3><img src={logoReact} alt="React-logo" width="50" height="50" className="mb-2"/>
      <input type="text" autoFocus placeholder="Agrega una tarea" className="form-control my-3"
        value={nuevaTarea} onChange={(e)=>{setNuevaTarea(e.target.value)}}
        onKeyUp={(e)=>{handleKeyUp(e)}}
      />
      
      <button className="btn btn-primary" onClick={agregarTarea} >Agregar</button>    
      <button className="btn btn-warning m-2" onClick={limpiarTodo}>Limpiar todo</button>
      {alerta?<div className="alert alert-danger  d-flex justify-content-between align-items-center" role="alert">El campo está vacío, agrega texto</div>:null}
      {tareas.length<=0?<div className="alert alert-warning  d-flex justify-content-between align-items-center" role="alert">Awb no hay na que hacer</div>:
      tareas.map((item,index) =>{
        return(
          <Tarea key={index} item={item} index={index} editarTarea={editarTarea} eliminarTarea={eliminarTarea}/>
        )
      })}
    </div>
    </>    
  )
}
