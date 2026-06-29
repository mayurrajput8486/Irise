import { useState } from "react";

const Logicstate = () => {

    //const [players, setPlayers] = useState(['virat','laxman','rohit'])

    const [user, setUser] = useState({
        name : 'Virat',
        age : 36,
        address : {
            city : 'Pune',
            pincode : 411052,
            street : 'Karve nagar'
        }
    })

    /* const handlePlayers = () =>{
        //setPlayers((prev)=>[...prev,'Sachin'])
        //To remove duplicate elements - new Set()
        //setPlayers([...players,'Sachin'])
        setPlayers([...new Set([...players,'Sachin'])])
    } */

    const handleUser = () =>{
        /* setUser({
            name : 'Rohit',
            age : 39
        }) */
       setUser({
        ...user,
        age : 38,
        address : {
           ...user.address,
            city : 'Mumbai',
            pincode : 411011
        }
       })
    }

  return (
    <div>
      <h2 className="text-indigo-600 text-3xl text-center font-bold">
        Learn more about state
      </h2>

      {/* <div className="bg-gray-300 w-2xl text-4xl p-3 text-center mt-3 rounded-2xl m-auto">
        {
            players.map((item,index)=>{
                return(
                    <ul key={index}>
                        <li>{index + 1} - {item}</li>
                    </ul>
                )
            })
        }
        
      </div> */}
      <div className="bg-gray-300 w-2xl text-4xl p-3 text-center mt-3 rounded-2xl m-auto">
            {user.name} - {user.age} - {user.address.city} - {user.address.street} - {user.address.pincode}
      </div> 
      <div className="text-center">
        {/* <button className="border-2 p-2 bg-black text-white w-50 rounded-2xl" onClick={handlePlayers}>Click</button> */}
        <button className="border-2 p-2 bg-black text-white w-50 rounded-2xl" onClick={handleUser}>Click</button>
      </div>
    </div>
  );
};

export default Logicstate;
