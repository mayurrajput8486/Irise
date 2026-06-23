import {useState} from "react"
const FormHandling = () => {
    const [date, setDate] = useState("")
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [users, setUsers] = useState([])

    /* const dateHandler = (event) =>{
        setDate(event.target.value)
    }

    const fullnameHandler = (e) =>{
        setFullname(e.target.value)
    }

     const emailHandler = (e) =>{
        setEmail(e.target.value)
    } */

    function addFormData (e) {
        e.preventDefault()

        const newuser = {
            id : Date.now(),
            date,
            fullname,
            email
        }

        setUsers([...users, newuser])

        setDate('')
        setFullname('')
        setEmail('')
    }

  return (
    <div className="border-2 p-4 w-100 mx-auto mt-10">
      <form onSubmit={addFormData}>
        <div className="mb-3">
          <input type="date" 
            className="border-2 w-75" 
            value={date}
            /* onChange={dateHandler} */
            onChange={(e)=>setDate(e.target.value)}
        />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter Name"
            className="border-2 w-75"
            value={fullname}
           /*  onChange={fullnameHandler} */
           onChange={(e)=>setFullname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="border-2 w-75"
            placeholder="Enter Email"
            value={email}
            /* onChange={emailHandler} */
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div>
          <button className="bg-black p-3 w-75 text-amber-200 font-bold">
            Add Data
          </button>
        </div>
      </form>
      <div>
       {
            users.map((user)=>{
                return(
                    <div key={user.id} className="border-2 mt-3 p-3 rounded-2xl">
                        <div>Id - {user.id}</div>
                        <div>Date - {user.date}</div>
                        <div>Fullname - {user.fullname}</div>
                        <div>Email - {user.email}</div>
                    </div>
                )
            })
       }
      </div>
    </div>
  );
};

export default FormHandling;
