import React from "react";

const Item = ({ q, a }) => (
  <div
    tabIndex={0}
    className="collapse collapse-arrow bg-base-200 text-primary-content focus:bg-secondary focus:text-secondary-content mb-3"
  >
    <div className="collapse-title text-xl font-bold">{q}</div>
    <div className="collapse-content">
      <p>{a}</p>
    </div>
  </div>
);

export default Item;
