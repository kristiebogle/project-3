import Poster from './Poster.js'
import Overview from './Overview.js'
import Data from './Data.js'

const Broadway = (props) => {
  return (
    <div className= 'info' >
      <h2>{props.broadway.show}</h2>
      <Poster poster ={props.broadway} />
      <Overview overview ={props.broadway} />
      <Data broadwayData ={props.broadway} />
    </div>
    )
    }
    
  export default Broadway