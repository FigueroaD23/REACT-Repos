import {useState,useEffect} from "react"
import logoReact from "../src/logo.svg"
import {Tarea} from "./components/Tarea.jsx"
const App = ()=> {
  const [nuevaTarea, setNuevaTarea] = useState("") //estado del valor del input llamado "tarea"
  const [alerta, setAlerta] = useState(false)
  const [tareas, setTareas] = useState([]) // arreglo ccon todas las tareas que se vayan acumulando
  useEffect(() => {    
    let datosLS = JSON.parse(localStorage.getItem("datos")) 
    if(datosLS===null || datosLS.length==0) return
    else
    setTareas([...datosLS])            
  }, [])
  useEffect(() => {      
    if(tareas.length>0)
      localStorage.setItem("datos",JSON.stringify(tareas))  
    if(tareas.length <=0)
      localStorage.setItem("datos",JSON.stringify([]))  
    console.log("tareas useffect", tareas)
  }, [tareas])
  
  
  const agregarTarea = ()=>{    
    if(nuevaTarea.length<=0){setAlerta(true); return;}
    setAlerta(false)
    //este tabién funciona correctamente
    //setTareas([{nombre:nuevaTarea,estado:true},...tareas]) 
     setTareas((previo) => {
      return [...previo,{nombre:nuevaTarea,estado:true}]
    })
    setNuevaTarea('')      
  }
  const handleKeyUp = (e)=>{if(e.keyCode===13)agregarTarea()}

  const limpiarTodo = ()=>{
    setTareas([])
    localStorage.setItem("datos",JSON.stringify([]))        
  }

  const editarTarea = (id)=>{
    const todo = tareas[id]
    todo.estado = !todo.estado;
    const newTodos = [...tareas];
    newTodos[id] = todo;
    setTareas(newTodos);    
  }

  const eliminarTarea = (id)=>{    
    let newTodos = [...tareas]
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

export default App