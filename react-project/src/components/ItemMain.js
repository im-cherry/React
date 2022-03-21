import React, { useCallback, useEffect, useMemo, useState } from "react";
import ItemInput from "./ItemInput";
import ItemList from "./ItemList";
import ItemTotal from "./ItemTotal";

const ItemMain = () => {
  // ========================== 더미 데이터 생성 ==================================
  /*
  function createDummyItems() {
    const itemDataArray = [];

    for (let i = 1; i < 2000; i++) {
      itemDataArray.push({
        name: `item${i}`,
        price: parseInt(100000 * Math.random(), 10),
        quantity: 1 + parseInt(10 * Math.random(), 10),
      });
    }

    return itemDataArray;
  }

  const [items, setItems] = useState(createDummyItems());
  */
  // ==============================================================================

  const itemDataArray = [
    {
      name: "CPU",
      price: 462984,
      quantity: 1,
    },
    {
      name: "메인보드",
      price: 112053,
      quantity: 1,
    },
    {
      name: "메모리",
      price: 79608,
      quantity: 2,
    },
  ];

  // useState
  const [items, setItems] = useState(itemDataArray);

  // useCallback
  const onChangePrice = useCallback((name, price) => {
    setItems((items) =>
      items.map((item) =>
        item.name === name ? { ...item, price: price } : item
      )
    );
  }, []);

  // useEffect
  useEffect(() => {
    console.log("Mount or Update");
    return () => {
      console.log("cleanup");
    };
  }, [items]);

  return (
    <>
      <ItemInput items={items} onChangePrice={onChangePrice} />
      <hr />
      <ItemList items={items} />
      <ItemTotal items={items} />
    </>
  );
};

export default ItemMain;
