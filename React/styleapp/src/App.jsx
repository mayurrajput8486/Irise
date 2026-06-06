import Intro from "./components/Intro";

function App() {
  
  const myStyle = {
    color : 'navy',
    textAlign : 'center',
    backgroundColor : 'lightgrey'
  }

  return (
    <div>
      <h1 style={{color : 'orangered', textAlign : 'center', fontFamily : 'sans-serif'}}>
        Let's Start with React - styling, variables 
      </h1>
      <h2 style={myStyle}>React use Virtual DOM to improve the performance</h2>
      <Intro/>
    </div>
  );
}
export default App;
