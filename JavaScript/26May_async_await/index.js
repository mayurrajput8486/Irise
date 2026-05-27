

//Custome Promise - new Promise()
/* const myFirstPromise = new Promise((resolve,reject)=>{
    let success = false
    if(success){
        resolve({
            name : 'Sachin Tendulkar',
            age : 45,
            city : 'Mumbai'
        })
    }else{
        reject('Failed to get user data')
    }
})
//then(), catch() 
myFirstPromise.then((user)=>{
    console.table(user)
}).catch((error)=>{
    console.error(error)
}) */
/* 
    //step - 1
    const fetchUsers = fetch('https://dummyjson.com/users').then((data)=>{
        console.log(data)
    }) 
    //return response object

 */

/* 
    //step - 2

    const fetchUsers = fetch('https://dummyjson.com/users').then((data)=>{
        return data.json()
    }).then((data)=>{
        console.table(data.users)
    }).catch((error)=>{
        console.log(error)
    }) 
*/

//modern approach using async and await 
//await is always used within a async function

//Create a reusable function to fetch data

let controller = new AbortController()
async function fetchAPIdata (url) {
    try {
        const response = await fetch(url,{
            signal : controller.signal
        })

        if(!response.ok){
            throw new Error(`HTTP Error- ${response.status}`)
        }

        const data = await response.json()
        console.log(data.users)
    } catch (error) {
        console.log(error)
    }
}

function cancleAPI () {
    controller.abort()
}

//fetchAPIdata('https://dummyjson.com/users')
//fetchAPIdata('https://dummyjson.com/posts')

//fetch() - manually implement json() method
//axios  - automatically parse the response onbject in json()


/* const userData = await fetch('http://apidata.com/data',{
    method : 'POST',
    headers : {
        'Content-Type' : 'html/json'
    },
    body : JSON.stringify({name : 'Virat', age : 35})
}) */

//call API function - https://dummyjson.com/quotes
//axios.get(), axios.post(), axios.put()
async function fetchQuotes (url) {
    try {
       let response = await fetch(url)
        //response - error - response.ok  ---- false -----> !false ------> true
       //if(true)

       if(!response.ok){
        throw new Error(`HTTP Error - ${response.status} : ${response.statusText}`)
       }
       let result = await response.json()
       console.log(result) 
    } catch (error) {
        console.log('Failed to get data !!!')
    }finally{
       console.log('Promise End !!')
    }
}
fetchQuotes('https://dummyjson.com/quotes')


/* let success = false
if(!success){
    console.log('I am success')
} */



