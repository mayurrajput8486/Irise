const Users = ({username, isPresent="Unknown"}) =>{
    return(
        <div>
            <h2>Hey {username} - T20 : {isPresent}</h2>
        </div>
    )
}
export default Users;