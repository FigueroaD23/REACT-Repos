export function Tarea({item,index,editarTarea,eliminarTarea}){
    /* const handleTodoClick = () => {
        editarTarea(index);
      }; */
    return (
        <div className="mt-3 animacion">    
            <div className={`alert d-flex justify-content-between align-items-center ${!item.estado?'alert-secondary':''} ${item.estado?'alert-success':''}`} role="alert">
              <div className="tituloTarea" style={{textDecoration:!item.estado?'line-through':''}}>
                {index}. {item.nombre}
              </div>       
              <div className="contenedor-botones">
                <button className="btn btn-success m-2" onClick={()=>{editarTarea(index)}}>OK</button>
                <button className="btn btn-danger" onClick={()=>{eliminarTarea(index)}}>X</button>
              </div>
            </div>
          </div>
    )
}