# 08 Hook

> **목차**
>
> 1. Hooks 사용
> 2. Hooks 사용 코드 설명

### 1. Hooks 사용

useState, useCallback, useEffect 훅을 사용한다.

- /src/components/ItemMain.js

  ```javascript
  import React, { useState, useCallback, useEffect } from "react";
  import ItemInput from "./ItemInput";
  import ItemList from "./ItemList";
  import ItemTotal from "./ItemTotal";

  const ItemMain = () => {
    var itemDataArray = [
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

    // useState 훅
    const [items, setItems] = useState(itemDataArray);

    // useCallback 훅
    const onChangePrice = useCallback((name, price) => {
      setItems((items) =>
        items.map((item) =>
          item.name === name ? { ...item, price: price } : item
        )
      );
    }, []);

    // useEffect 훅
    useEffect(() => {
      console.log("componentDidMount");
      console.log("componentDidUpdate");
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
  ```

### 2. Hooks 사용 코드 설명

#### 훅 임포트

useState, useCallback, useEffect 훅을 불러온다.

```javascript
import React, { useState, useCallback, useEffect } from "react";
```

#### useState훅

함수형 컴포넌트가 상태를 가질 수 있게 한다.

```javascript
const [items, setItems] = useState(itemDataArray);
```

#### useCallback 훅

이벤트 처리 함수를 필요할 때만 생성하여 렌더링 성능을 향상시킨다.

```javascript
const onChangePrice = useCallback((name, price) => {
  setItems((items) =>
    items.map((item) => (item.name === name ? { ...item, price: price } : item))
  );
}, []);
```

#### useEffect 훅

리액트 컴포넌트가 랜더링될 때마다 특정 작업을 수행하도록 설정할 수 있다.

```javascript
useEffect(() => {
  console.log("componentDidMount");
  console.log("componentDidUpdate");
  return () => {
    console.log("cleanup");
  };
}, [items]);
```
