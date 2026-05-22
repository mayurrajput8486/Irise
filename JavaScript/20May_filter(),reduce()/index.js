console.warn(`---------- map () -------------`)

const cartItems = [
    {name : 'Laptop', price : 50000},
    {name : 'Mobile', price : 15000},
    {name : 'BT Speaker', price : 6000},
    {name : 'Headphone', price : 1000}
]
//tag : '30% OFF', discountedPrice 
//price greater 10000 30% discount
//price greater 5000  10% discount
//price below 5000 no discount
//[{name : 'Laptop', price : 50000, tag : '30% OFF', finalPrice : 35000}]
const finalCartItem = cartItems.map((item)=>{
    let tag;
    let finalPrice;
    if(item.price >= 10000){
        tag = '30% OFF',
        finalPrice = item.price - 0.3*item.price
    }else if(item.price >= 5000){
        tag = '10% OFF'
        finalPrice = item.price - 0.1*item.price
    }else{
        tag = 'No Discount because value less than 5000'
        finalPrice = item.price
    }
    return {...item, tag, finalPrice}
})
console.log(finalCartItem)

console.warn(`--------- reduce () -----------------`)

let numbers = [1,2,3,4,5,6,7,8,9,10] //length = 5
let sum = 0;
for(let i=0; i < numbers.length; i++){
    sum = sum + numbers[i]
}
console.log(sum)

const total = numbers.reduce((prevValue,currValue)=>{
    return prevValue + currValue
},0)
console.log(total)
//prevValue = initialValue

console.log(finalCartItem)

const payment = finalCartItem.reduce((prev,cur)=>{
    return prev + cur.finalPrice
},0)
console.log('Please Payment - ',payment)

const prodcuts = [
    {name : 'Laptop', price : 50000, category : 'Electronics'},
    {name : 'Travel Bag', price : 15000,category : 'Clothing'},
    {name : 'Shoes', price : 6000,category : 'Clothing'},
    {name : 'Table', price : 1000,category : 'Furniture'}
]
//{electonics : 2, clothing : 1, furniture : 1}
const categories = prodcuts.reduce((prev,prod)=>{
    prev[prod.category] = (prev[prod.category] || 0) + 1
    return prev

},{})
console.log(categories)

//prev = {electronic : 2, furniture : 2, clothing : 1}
//{} ----           (undefined || 0) ---> 0 + 1 = 1 ----- {electronics : 1}
//{electronics : 1} (undefined || 0) ---> 0 + 1 = 1 ----- {electronics : 1, clothing : 1}
//{electronics : 1, clothing : 1} --- (1 || 0) ---> 1 + 1 ---- {electronics : 1, clothing : 2}

const emp = {
    name : 'Rohit',
    age : 36
}
console.log(emp.name)
console.log(emp['role'])

const item1 = "welcome"
const item2 = 0    //falsy
const result = item1 || item2
console.log(result)


//without reduce() method

/* let freq = {}
for(){

} */

console.warn(`------------------ filter () -------------`)

const ages = [10,15,20,35,18,40,60,45,39,21]
console.log(ages)
//output = [20,35,18,40,60,45,39,21]
//filter () method always return new array
//filter () method not return a same length array
//filter () use always comparison operator
const verifiedAge = ages.filter((num)=>{
    return num >= 22
})
console.log(verifiedAge)

/* const mapAge = ages.map((age)=>{
    return age >= 22
})
console.log(mapAge) */

const oddNums = ages.filter((num)=>{
    return num % 2 !== 0
})
console.log(oddNums)

const prodcutDetails = [
    {name : 'Laptop', price : 50000, category : 'Electronics'},
    {name : 'Travel Bag', price : 15000,category : 'Clothing'},
    {name : 'Shoes', price : 6000,category : 'Clothing'},
    {name : 'Table', price : 1000,category : 'Furniture'}
]

const clothingItem = prodcutDetails.filter((item)=>{
    return item.category === 'Clothing'
})
console.log(clothingItem)


const mobiles = [
    {name : 'Vivo', price : 10000},
    {name : 'OnePlus', price : 15000},
    {name : 'Iphone', price : 49000},
    {name : 'Xiomi', price : 12000},
    {name : 'Pixel', price : 55000},
    {name : 'samsung', price : 20000}
]

const below20k =  mobiles.filter((mobile)=>{
    return mobile.price <= 20000
})
console.log(below20k)

//between 15k to 50k
const bet15kTo50k = mobiles.filter((mobile)=>{
    return mobile.price >= 15000 && mobile.price <= 50000
})
console.log(bet15kTo50k);















