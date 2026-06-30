import ProductsList from "./components/ProductsList"

//import Sideeffect from "./components/Sideeffect"
const App = () => {
  return (
    <div>
      {/* <h1 style={{textAlign : 'center'}}>Learn useEffect () hook</h1> */}
      {/* <Sideeffect/> */}
      <h2 className="text-3xl text-center mt-5 mb-10">My Products </h2>
      <ProductsList/>
    </div>
  )
}

export default App