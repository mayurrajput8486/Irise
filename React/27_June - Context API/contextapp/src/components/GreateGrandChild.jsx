/* 
const GreateGrandChild = ({fullname}) => {
  return (
    <h2>GreateGrandChild Name - {fullname}</h2>
  )
}

export default GreateGrandChild */

import { useContext } from "react";
import { Fullname } from "../context/Context";

const GreateGrandChild = () => {
  const name = useContext(Fullname)
  return (
    <div>
      <h2>GreateGrandChild Name - {name}</h2>
    </div>
  );
};

export default GreateGrandChild;
