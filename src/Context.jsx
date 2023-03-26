import axios from "axios";
import { createContext , useEffect ,useState } from "react"

const contextData = createContext();

const AppContext = ({children}) => {

  const [products , setProducts] =  useState([]) 
  const [cartItem , setCartItem] = useState([])


  // const Api1 = "https://api.pujakaitem.com/api/products"
  const Api1 = "https://fakestoreapi.com/products/"
  useEffect(() => {
    
    const getData = async (url) => {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }
    getData(Api1)
  }, [])
   
  
  return (
  
  <contextData.Provider value={{ products , cartItem , setCartItem}}>
    {children}
  </contextData.Provider>

  

  )
}

export {contextData , AppContext}