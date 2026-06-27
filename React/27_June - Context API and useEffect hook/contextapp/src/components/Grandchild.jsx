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

import GreateGrandChild from './GreateGrandChild'
import { useContext } from 'react'
import { Personinfo } from '../context/Context'
const Grandchild = () => {
  const details = useContext(Personinfo)
  return (
    <div>
        <h2>Grandchild Comp - {details.name} - {details.age} - {details.city}</h2>
        <GreateGrandChild/>
    </div>
  )
}

export default Grandchild 