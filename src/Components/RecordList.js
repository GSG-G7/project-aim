import React from "react";
import "./RecordList.css";
export default ({ record, stage }) => {
  const formattedRec = {
    arr: record.map(({ activated, clicked }, index) =>
      clicked && activated ? clicked - activated : index >= stage ? 0 : 1000
    )
  };
  formattedRec.average = formattedRec.arr.reduce(
    (acc, ele, index) => acc + ele,
    0
  );
  return (
    <div className="list">
      {"Average: "}
      {formattedRec.average / stage
        ? Math.floor(formattedRec.average / stage)
        : 0}
      {formattedRec.arr.map((e, i) => (
        <h5 className="data" key={i}>
          {e}
        </h5>
      ))}
    </div>
  );
};
