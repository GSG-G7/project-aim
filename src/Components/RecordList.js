import React from "react";
import "./RecordList.css";
export default ({ record, stage }) => {
  const formattedRec = record.map(({ activated, clicked }, index) =>
    clicked && activated ? clicked - activated : index >= stage ? 0 : 1000
  );
  const bestOneClick = formattedRec.reduce(
    (min, ele, index) => (index >= stage ? min : min > ele ? ele : min),
    1000
  );
  let average = formattedRec.reduce((acc, ele) => acc + ele, 0);
  average = average / stage ? Math.floor(average / stage) : 0;
  populatebestOneClick(bestOneClick);
  populateAverage(average, stage);
  const bestAverageEver = localStorage.getItem("bestAverageEver");
  const bestOneClickEver = localStorage.getItem("bestOneClickEver");
  return (
    <div className="list">
      {"Best Average Ever: "}
      <br />
      {bestAverageEver}
      <br />
      {"Best Click Ever: "}
      <br />
      {bestOneClickEver}
      <br />
      {"Average: "}
      <br />
      {average}
      <br />
      {"Best Click: "}
      {bestOneClick}
      {formattedRec.map((e, i) => (
        <h5 className="data" key={i}>
          {e}
        </h5>
      ))}
    </div>
  );
};
const populatebestOneClick = bestOneClick => {
  if (typeof localStorage !== undefined) {
    let bestOneClickEver = +localStorage.getItem("bestOneClickEver") || 1000;
    if (bestOneClickEver > bestOneClick)
      localStorage.setItem("bestOneClickEver", bestOneClick);
  }
};
const populateAverage = (average, stage) => {
  if (stage > 9)
    if (typeof localStorage !== undefined) {
      let bestAverageEver = +localStorage.getItem("bestAverageEver") || 1000;
      if (bestAverageEver > average)
        localStorage.setItem("bestAverageEver", average);
    }
};
