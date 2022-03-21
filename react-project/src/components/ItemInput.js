import React from "react";

const ItemInput = ({ items, onChangePrice }) => {
  const handelChange = (e) => {
    onChangePrice(e.target.name, e.target.value);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          {item.name}의 가격 :{" "}
          <input
            type="text"
            name={item.name}
            value={item.price}
            onChange={handelChange}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemInput;
