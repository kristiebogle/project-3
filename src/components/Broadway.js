import Poster from './Poster.js'

const Broadway = (props) => {
  return (
    <div classname= 'info' >
      <h2>{props.broadway.show}</h2>
      <h3>{props.broadway.overview}</h3>
      <h4>Total Gross: {props.broadway.totalGross}</h4>
      <h4>Average Cost Per Ticket: {props.broadway.averageCost}</h4>
      <h4>Number of Seats Sold: {props.broadway.seatsSold}</h4>
      <h4>Total Number of Performances: {props.broadway.totalPerformances}</h4>
      <h4>Original Broadway Run: {props.broadway.broadwayRun}</h4>
      <h4>Release Date: {props.broadway.broadwayRun}</h4>
      <div className= 'poster'>
          <Poster poster ={props.broadway} />
        </div>
      </div>
    )
    }
    
  
  export default Broadway