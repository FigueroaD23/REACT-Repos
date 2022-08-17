/* Este es el que va a devolver el lazy loading, ara una importación dinámica en caso de ser necesitada */
import { lazy , Suspense} from "react";
import useInterObsCustomHook from "../../hooks/useInterObserver";
/* Aquí se devuelve el import dinamico dle componente deseado a utilizar, devulve el import dinámico
es asincrono y devulve una promesa, entonces el import() descarga el componente solo cuando lo va a usar  */
const TrendingSearches = lazy(
  ()=>import("./TrendingLazy")
  )

export default function LazyTrending(){  
  const {show,refFromHook} = useInterObsCustomHook({distance:'100px'})
  
  return <div ref={refFromHook}>
    <Suspense fallback={null}>
      {show ? <TrendingSearches/> : null }
    </Suspense>
  </div>
}