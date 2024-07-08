import NavigationBar from "../NavigationBar/NavigationBar"
import Fotter from "../Fotter/Fotter"

function MasterLayout(props) {
  return (
 <>
 
 <NavigationBar/>

{props.children}
  <Fotter/> 
 
 
 
 
 
 </>
  )
}

export default MasterLayout