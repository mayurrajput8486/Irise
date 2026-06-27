/* import Grandchild from "./Grandchild"

const Child = ({fullname}) => {
  return (
    <div>
        <h2>Child Comp</h2>
        <Grandchild fullname={fullname}/>
    </div>
  )
}

export default Child */

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