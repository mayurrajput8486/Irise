import "./Intro.css";
import tata from "../assets/ratan_sir.jpg";
import virat from "../assets/Virat_Kohli.webp";
function Intro() {
  const fullName = "Ratan Naval Tata";
  const dob = "28 December 1937";
  const city = "Bombay Presidency, British India";
  const age = 86;

  const ratan_tata = {
    fullName: "Ratan Naval Tata",
    dob: "28 December 1937",
    age: 86,
    city: "Bombay Presidency, British India",
    profile: tata,
  };

  const virat_kohli = {
    fullName: "Virat Kohli",
    dob: "5 November 1988",
    city: "New Delhi, India",
    avatar: virat,
    age: 37,
  };

  return (
    <div>
      <h1 className="hero">Hello Everyone,</h1>
      <h1>hard coded values</h1>
      <div className="card">
        <div className="cardImg">
          {/* Image present in public folder */}
          {/* <img src="ratan_tata.jpg" alt="ratan_tata" loading='lazy'/> */}

          {/* Image present in assets folder */}
          <img src={tata} alt="ratan_tata" loading="lazy" />
        </div>
        <div className="card_desc">
          <p>Full Name - Ratan Naval Tata</p>
          <p>Date of Birth - 28 December 1937</p>
          <p>Born City - Bombay Presidency, British India</p>
          <p>Age - 86</p>
        </div>
      </div>

      <h1>
        To write javascript code in JSX we always use single curly braces.
      </h1>

      <div className="card">
        <div className="cardImg">
          <img src={tata} alt="ratan_tata" loading="lazy" />
        </div>
        <div className="card_desc">
          <p>Full Name - {fullName}</p>
          <p>Date of Birth - {dob}</p>
          <p>Born City - {city}</p>
          <p>Age - {age}</p>
        </div>
      </div>

      <h1>Data Access in Card via Object </h1>

      <div className="card">
        <div className="cardImg">
          <img src={ratan_tata.profile} alt="ratan_tata" loading="lazy" />
        </div>
        <div className="card_desc">
          <p>Full Name - {ratan_tata.fullName}</p>
          <p>Date of Birth - {ratan_tata.dob}</p>
          <p>Born City - {ratan_tata.city}</p>
          <p>Age - {ratan_tata.age}</p>
        </div>
      </div>

      <div className="card">
        <div className="cardImg">
          <img
            src={virat_kohli.avatar}
            alt="virat"
            loading="lazy"
            width="200px"
          />
        </div>
        <div className="card_desc">
          <p>Full Name - {virat_kohli.fullName}</p>
          <p>Date of Birth - {virat_kohli.dob}</p>
          <p>Born City - {virat_kohli.city}</p>
          <p>Age - {virat_kohli.age}</p>
        </div>
      </div>
    </div>
  );
}
export default Intro;
