import React, {useState } from "react"

/*cuando se usan reducers este va en un archivo aparte y se inicializa coin el initialState
* y se exportan tanto context como el initialstate por separado
*/
const Context = React.createContext({})


/*este provider es en donde en vez de useState se usaría useReducer(reducerArriba,initialstate)
* se debe declarar el reducer entes como const reducer (state=initialState,action) =>{ switch(action.type){}}
*/
export function GifsContextProvider ({children}) {

    const [gifs, setGifs] = useState([])
    

    /* Este si es igualito */
    return <Context.Provider value={{gifs,setGifs}}>
        {children}    
    </Context.Provider>
}      

export default Context