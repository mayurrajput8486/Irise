import { NavLink, Outlet, useNavigate} from "react-router-dom";
const Career = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className="text-center mt-5">Career Comp</h1>
      <div className="mt-4 bg-dark p-2 w-50 mx-auto d-flex justify-content-between rounded-3">
        <NavLink to="/career/marketing">
          <button className="bg-secondary text-light rounded-3">
            Marketing
          </button>
        </NavLink>
        <NavLink to="/career/technical">
          <button className="bg-secondary text-light rounded-3">
            Technical
          </button>
        </NavLink>
        <NavLink to="/career/hr">
          <button className="bg-secondary text-light rounded-3">HR</button>
        </NavLink>
        <NavLink to="/career/nontechnical">
          <button className="bg-secondary text-light rounded-3">
            Non-technical
          </button>
        </NavLink>
      </div>
      <Outlet/>

      <div onClick={()=>navigate('/home')} className="text-center">Go to Homepage</div>
    </div>
  );
};

export default Career;
