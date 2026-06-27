import { useNavigate } from "react-router-dom"


const Home = () => {
  //useNavigate hook return a funtion - navigate()
  const navigate = useNavigate()
  return (
    <div>
        <h1 className="text-center mt-5">Home Comp</h1>

        <button onClick={()=>navigate('/career')}>Go To Career</button>
    </div>
  )
}

export default Home