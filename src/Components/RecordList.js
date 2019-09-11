import React from "react";

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
    <table class="tg">
      <p>
        Average:{" "}
        {formattedRec.average / stage
          ? Math.floor(formattedRec.average / stage)
          : 0}
      </p>
      {formattedRec.arr.map((e, i) => (
        <tr key={i}>
          <td className="data">{e}</td>
        </tr>
      ))}
    </table>
  );
};
