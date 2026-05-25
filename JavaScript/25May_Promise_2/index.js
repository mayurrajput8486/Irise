
//Network  - req/response cycle over the internet ------> HTTP

//network - WEB API - fetch() / Axios (JavaScript Library - HTTP CLient provide )


//Promise - 3 state 
//pending
//fullfilled
//reject
/* const fetchUsers = fetch('https://dummyjson.com/users').then((data)=>{
    return data.json()
}).then((data)=>{
    console.log(data.users)
}) */
//This is a lighweight format - REST API
//console.log(fetchUsers)

//Create your own promise
//Promise accept callback function with two parameters 

/* const myPromise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve({
            name : 'Rohit',
            age : 38,
            city : 'Nagpur',
            team : 'India'
        })
    }else{
        reject('Failed to Fetch User Data')
    }
})

myPromise.then((data)=>{
    console.table(data)
}).catch((error)=>{
    console.error(error)
}) */

//before async and await 
/* const fetchUsres = fetch('https://dummyjson.com/users').then((data)=>{
    return data.json()
    //console.log(data.json())
}).then((data)=>{
    console.log(data.users)
}).catch((error)=>{
    console.log(error)
}) */


//Modern JavaScript - async and await 
//What is difference between fetch () and axios ?
async function geUsersdata(url) {
    try {
        const response = await fetch(url)
        const result = await response.json()
        console.log(result.users)
    } catch (error) {
        console.log('User Data -',error)
    }

}
geUsersdata('https://ummyjson.com/users')
//Promise() - resolve(), reject()
//resolve().then()
//reject().catch()

//console.log(myPromise)


//{name : 'Virat', age : 35, team : 'RCB'}