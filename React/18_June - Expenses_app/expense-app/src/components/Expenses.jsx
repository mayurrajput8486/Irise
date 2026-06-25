import { useState } from "react";

const Expenses = () => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const [expense, setExpense] = useState(() => {
    const data = localStorage.getItem("expense");
    return data ? JSON.parse(data) : [];
  });
  //const [expense, setExpense] = useState([]);
  const [error, setError] = useState("");

  //state for search
  const [search, setSearch] = useState('')

  const handleExpense = (event) => {
    event.preventDefault();
    const isValid = date && title.trim() && Number(amount) > 0 && category;

    if (isValid) {
      const newExpense = {
        id: Date.now(),
        date,
        title,
        amount,
        category,
      };

      //Data stored in localStorage - setItem(key, value) --- JSON.stringify()
      const updateExpense = [...expense, newExpense];
      setExpense(updateExpense); //for UI update

      //for localStorage
      localStorage.setItem("expense", JSON.stringify(updateExpense));

      setDate("");
      setTitle("");
      setAmount("");
      setCategory("");
      setError("");
    } else {
      setError("All Fields are Required !!!");
    }
  };

  //to update data or delete we always prefere id
  //delete feature
  const deleteExpense = (id) => {
    const latestExpense = expense.filter((item) => item.id !== id);

    //Data update on UI - setExpense()
    setExpense(latestExpense)

    localStorage.setItem("expense",
      JSON.stringify(latestExpense)
    )

  };

  //filter data 
  const filterExpense = expense.filter((item)=>  item.category.toLowerCase().includes(search.toLowerCase())
  )
 
  return (
    <div className="bg-gray-800 p-3 text-white rounded-2xl">
      <h2 className="text-2xl text-center font-bold mb-10">
        Welcome to Expense App
      </h2>
      <form onSubmit={handleExpense}>
        <input 
          type="searcg" 
          placeholder="Search Category" className="border-2 rounded-2xl p-2"
          value={search}
          onChange={(event)=>setSearch(event.target.value)}
        />
        <div className="mt-2">
          <input
            id="expensedate"
            name="expensedate"
            type="date"
            autoComplete="expense-date"
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            value={date}
            onChange={(event) => setDate(event.target.value)}
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
            value={title}
            onChange={(event) => setTitle(event.target.value)}
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
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div className="mt-2">
          <select
            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-gray-400 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Select Category</option>
            <option value="EMI">EMI</option>
            <option value="Grossary">Grossary</option>
            <option value="Shopping">Shopping</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
          </select>
        </div>

        <div className="mt-2 flex justify-center">
          <button className="bg-blue-900 p-3 rounded-2xl w-100 font-bold">
            Add Expense
          </button>
        </div>
      </form>

      {/* Error Message */}
      <div className="text-red-600 text-center">{error}</div>

      {/* Expense Data */}
      <div className="bg-black p-3 rounded-2xl mt-5">
        <h1 className="text-2xl font-bold text-center">Monthly Expense </h1>
        {filterExpense.map((item) => {
          return (
            <div
              className="mb-2 flex justify-between items-center bg-gray-700 p-3 rounded-2xl mt-3"
              key={item.id}
            >
              <div className="border-2 p-2 text-center bg-black text-orange-300 rounded-2xl">
                {/* Date() Object Method - new Date({item.date}) */}
                <div>{new Date(item.date).getFullYear()}</div>
                <div>
                  {new Date(item.date).toLocaleString("en", { month: "long" })}
                </div>
                <div>{new Date(item.date).getDay()}</div>
              </div>
              <div>{item.title}</div>
              <div>{item.amount}</div>
              <div>{item.category}</div>
              <div>
                <button
                  className="border-2 p-3 rounded-2xl bg-black"
                  onClick={() => deleteExpense(item.id)}
                >
                  ❌
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expenses;
