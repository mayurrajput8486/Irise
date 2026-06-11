//import Users from './components/Users'
import "./App.css";
import PlayersInfo from "./components/PlayersInfo";
const App = () => {
  const players_data = [
    {
      profile: "shreyas-iyer.webp",
      country: "./india.webp",
      fullname: "Shreyas Iyer",
      role: "Batsman",
      date: "December 06, 1994 ",
    }, //0
    {
      profile: "rajat-patidar.webp",
      country: "./india.webp",
      fullname: "Rajat Patidar",
      role: "Batsman",
      date: "June 01, 1993 ",
    }, //1
    {
      profile: "shivam-dube.webp",
      country: "./india.webp",
      fullname: "Shivam Dube",
      role: "Batsman",
      date: "March 15 1996",
    }, //2
    {
      profile: "sai-sudharsan.webp",
      country: "./india.webp",
      fullname: "Sai Sudharsan",
      role: "Batsman",
      date: "March 17 1998",
    },
  ];
  return (
    <div>
      <h1 className="heading">Let's start with Props in React</h1>
      {/* <Users/> */}
      <PlayersInfo
        profile={players_data[0].profile}
        country={players_data[0].country}
        fullname={players_data[0].fullname}
        role={players_data[0].role}
        date={players_data[0].date}
      />
      <PlayersInfo
        profile={players_data[1].profile}
        country={players_data[1].country}
        fullname={players_data[1].fullname}
        role={players_data[1].role}
        date={players_data[1].date}
      />
      <PlayersInfo
        profile={players_data[2].profile}
        country={players_data[2].country}
        fullname={players_data[2].fullname}
        role={players_data[2].role}
        date={players_data[2].date}
      />
      <PlayersInfo
        profile={players_data[3].profile}
        country={players_data[3].country}
        fullname={players_data[3].fullname}
        role={players_data[3].role}
        date={players_data[3].date}
      />
    </div>
  );
};
export default App;
