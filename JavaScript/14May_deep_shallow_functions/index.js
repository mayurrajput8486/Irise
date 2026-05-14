console.warn(`------- shallow and deep copy -------`)

const movies = ['KGF','Pushpa','Avengers','Bahubali','Dhurandar']
console.log(movies)

const [m1,m2,m3,...allMovies] = movies
console.log(m1, m2)
console.log(allMovies)

const employee = {
    name : 'Ajinkya',
    age : 40,
    city : 'Pune',
    contact : 7744558877,
    address : 'Karve Nagar, 411052'
}

const {name, age, city, ...empAddress} = employee
console.log(empAddress)

const userAddress = {
    city : 'Pune',
    address : 'Karve Nagar, 411052'
}

const userProfile = {
    name : 'Kartik',
    age : 25,
    role : 'Fullstack'
}

const userInfo = {...userProfile,...userAddress}

console.log(userInfo)

function sum (...args) {
    console.log(args)
}

const shop1 = {
    name : 'Chroma',
    prod : 'Mobile',
    model : 'Iphone 17',
    price : 80000,
    address : {
        street : 'Karve Nagar, near DMart',
        area : {
            pincode : 411052
        }
    }
}
//ref address - 101
//const shop2 = {...shop1}
//const shop2 = JSON.parse(JSON.stringify(shop1))
const shop2 = structuredClone(shop1)
//    102
shop2.name = 'iVenus'
shop2.price = 75000
shop2.address.street = 'Kothrud'
shop2.address.area.pincode = 411021
//102.price = 
console.log(shop1)
console.log(shop2);
