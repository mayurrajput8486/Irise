console.warn(`-------- filter () -------`);
const txns = [
    {id : 101, status : 'failed', date : '2026-05-15'},
    {id : 102, status : 'success', date : '2026-05-18'},
    {id : 103, status : 'failed', date : '2026-05-20'},
    {id : 104, status : 'success', date : '2026-05-23'},
    {id : 105, status : 'failed', date : '2026-05-16'},
    {id : 106, status : 'failed', date : '2026-05-19'},
    {id : 107, status : 'success', date : '2026-05-10'},
     {id : 107, status : 'success', date : '2026-05-24'}
]
//latest txn 
/* const today = new Date()
console.log(today)
console.log(today.toDateString())
console.log(today.toTimeString())
console.log(today.toLocaleTimeString())
console.log(today.toISOString())
console.log(today.getDate())
console.log(today.getFullYear())
console.log(today.getMonth()+1)
console.log(today.getDate()) */
//[Jan, Feb, Mar, Apr,May]


// last7days - 23 22 21 20 19 18 17
//              1 2  3   4 5  6  7
// last15day  - 23 22 21 20 19 18 17 16 15 14 13 12 11 10

const currentDate = new Date('2026-05-23')
//console.log(currentDate, typeof currentDate)
const last7days = new Date()
last7days.setDate(last7days.getDate() - 7)
//console.log(last7days)

const txnlast7days = txns.filter((txn)=>{
    return (
        txn.status === 'failed' &&
        new Date(txn.date) >= last7days &&
        new Date(txn.date) <= currentDate
    )
})
console.log(txnlast7days)


