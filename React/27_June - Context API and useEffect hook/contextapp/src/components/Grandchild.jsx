/* import GreateGrandChild from "./GreateGrandChild"

const Grandchild = ({fullname}) => {
  return (
    <div>
        <h2>Grandchild Comp</h2>
        <GreateGrandChild fullname={fullname}/>
    </div>
  )
}

export default Grandchild */

import Grandchild from "./Grandchild"

const Child = () => {
  return (
    <div>
        <h2>Child Comp</h2>
        <Grandchild/>
    </div>
  )
}

export default Child