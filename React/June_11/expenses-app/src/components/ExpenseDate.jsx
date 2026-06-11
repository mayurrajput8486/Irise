import './ExpenseDate.css'
const ExpenseDate = ({date}) => {

  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const current_date = date.getDate();

  return (
    <div className="date">
      <div className="year">{year}</div>
      <div className="month">{month}</div>
      <div className="current_date">{current_date}</div>
    </div>
  );
};

export default ExpenseDate;
