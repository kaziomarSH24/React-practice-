import Clock from "./Clock";

// eslint-disable-next-line react/prop-types
function ClockList({quantities = []}) {
  return (
    <div>
      {
        quantities.map((key) => (
          <Clock key={key} />
        ))
      }
    </div>
  );
}

export default ClockList;