const Data = (props) => {
  return (
    <h4>Total Gross: {props.broadway.totalGross}</h4>,
    <h4>Average Cost Per Ticket: {props.broadway.averageCost}</h4>,
    <h4>Number of Seats Sold: {props.broadway.seatsSold}</h4>,
    <h4>Total Number of Performances: {props.broadway.totalPerformances}</h4>,
    <h4>Original Broadway Run: {props.broadway.broadwayRun}</h4>
  )}

  export default Data