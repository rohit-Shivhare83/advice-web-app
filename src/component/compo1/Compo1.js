import React from "react";

const Compo1 = ({ advice }) => {
  return (
    <div className="container">
      <div className="container text-center py-5  shadow p-3 mb-5 bg-body-tertiary rounded">
        <h2>
          <q className="fst-italic">{advice}</q>
        </h2>
      </div>
    </div>
  );
};

export default Compo1;
