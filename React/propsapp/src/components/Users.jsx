import "./Users.css";
const Users = () => {

    const fullname = 'Rohit Sharma'
    const age = 38
    const role = 'batsman'

    const user = {
        fullname : 'Rishabh Pant',
        age : 30,
        role : 'wk-batsman'
    }

    const fruits = ['mango','oranges','banana']

    const products = [
        {pname : 'Laptop', price : 45000},
        {pname : 'mobile', price : 30000},
        {pname : 'AC', price : 25000},
    ]

  return (
    <div>
      <h2>Users Details</h2>
      <div className="user-card">
        <div className="fullname">
            Name - {fullname}
        </div>
        <div className="age">
            Age - {age}
        </div>
        <div className="role">
            Role -{role}
        </div>
      </div>

    {/* data access from object */}

      <div className="user-card">
        <div className="fullname">
            Name - {user.fullname}
        </div>
        <div className="age">
            Age - {user.age}
        </div>
        <div className="role">
            Role -{user.role}
        </div>
      </div>

    {/* Access data from array */}
    <ul>
        <li>{fruits[0]}</li>
        <li>{fruits[1]}</li>
        <li>{fruits[2]}</li>
    </ul>

    {/* Access data from Array of Object */}
    <div>
        <p>
            {products[0].pname} - {products[0].price}
        </p>
        <p>
            {products[1].pname} - {products[1].price}
        </p>
    </div>
    </div>
  );
};
export default Users;
