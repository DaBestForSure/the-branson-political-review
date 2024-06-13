import "./property1-default.css";

const Property1Default = ({ totalNumberOfVisits, number }) => {
  return (
    <div className="property-1default">
      <h2 className="total-number-of">{totalNumberOfVisits}</h2>
      <div className="line" />
      <h2 className="h2">{number}</h2>
    </div>
  );
};

export default Property1Default;
