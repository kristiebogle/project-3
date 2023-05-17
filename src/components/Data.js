const Data = (props) => {
  return (
    <div>
    <h4>Total Gross:</h4><p>{props.broadwayData.totalGross}</p>,
    <h4>Average Cost Per Ticket:</h4><p>{props.broadwayData.averageCost}</p>,
    <h4>Number of Seats Sold:</h4><p>{props.broadwayData.seatsSold}</p>,
    <h4>Total Number of Performances:</h4><p>{props.broadwayData.totalPerformances}</p>,
    <h4>Original Broadway Run:</h4><p>{props.broadwayData.broadwayRun}</p>
    </div>
  )}

  export default Data