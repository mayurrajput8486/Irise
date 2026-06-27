/* import Child from "./Child"

const Parent = ({fullname}) => {
  return (
    <div>
        <h2>Parent Comp</h2>
        <Child fullname={fullname}/>
    </div>
  )
}

export default Parent */

import Child from "./Child"

const Parent = () => {
  return (
    <div>
        <h2>Parent Comp</h2>
        <Child/>
    </div>
  )
}

export default Parent