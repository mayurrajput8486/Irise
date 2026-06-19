
const Expenses = () => {
  return (
    <div className="bg-gray-800 p-3 text-white rounded-2xl">
        <h2 className="text-2xl text-center font-bold mb-10">Welcome to Expense App</h2>
        <form>
            <div className="mt-2">
                <input
                  id="expensedate"
                  name="expensedate"
                  type="date"
                  autoComplete="expense-date"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              <div className="mt-2">
                <input
                  id="expensetitle"
                  name="expensetitle"
                  type="text"
                  autoComplete="expensetitle"
                  placeholder="Enter Title"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              <div className="mt-2">
                <input
                  id="expenseamount"
                  name="expenseamount"
                  type="text"
                  autoComplete="street-address"
                  placeholder="Enter Amount"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              <div className="mt-2 flex justify-center">
                <button className="bg-blue-900 p-3 rounded-2xl w-100 font-bold">Add Expense</button>
              </div>
        </form>

        {/* Expense Data */}
        <div className="">

        </div>
    </div>
  )
}

export default Expenses