/* import "./PlayersInfo.css";

const PlayersInfo = (props) => {
  

  return (
    <div>
      <div className="player-card">
        <div className="profile">
          <img src={props.profile} alt={props.fullname} loading="lazy" />
        </div>
        <div className="country">
          <img src={props.country} alt="India" loading="lazy" />
        </div>
        <div className="fullname"> {props.fullname}</div>
        <div className="role">{props.role}</div>
        <div className="date">{props.date}</div>
      </div>
    </div>
  );
};

export default PlayersInfo;
 */

import "./PlayersInfo.css";

const PlayersInfo = ({profile, country, fullname, role, date}) => {
  

  return (
    <div>
      <div className="player-card">
        <div className="profile">
          <img src={profile} alt={fullname} loading="lazy" />
        </div>
        <div className="country">
          <img src={country} alt="India" loading="lazy" />
        </div>
        <div className="fullname"> {fullname}</div>
        <div className="role">{role}</div>
        <div className="date">{date}</div>
      </div>
    </div>
  );
};

export default PlayersInfo;
