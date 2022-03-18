# 04 useEffect

> **목차**
>
> 1. useEffect 훅
> 2. useEffect 훅 : 처음 렌더링될 때만 실행
> 3. useEffect 훅 : 업데이트 될 때만 실행
> 4. useEffect 훅 : clean-up 함수 반환

### 1. useEffect 훅

useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook이다. useEffect Hook을 componentDiMound와 componentDidUpdate, componentWillUnmount가 합쳐진 것으로 생각해도 무방하다.

- /src/App.js

  ```javascript
  const App = () => {
    const [userName, setUserName] = useState("cherry");

    // 마운트될 때와 값이 변결될 때 실행
    useEffect(() => {
      console.log("useEffect");
      console.log("userName : " + userName);
    });

    const handleClickApple = () => setUserName("Apple");
    const handleClickOrange = () => setUserName("Orange");

    return (
      <>
        <h1>Hello {userName}!</h1>
        <button onClick={handleClickApple}>Apple</button>
        <button onClick={handleClickOrange}>Orange</button>
      </>
    );
  };
  ```

### 2. useEffect 훅 : 처음 렌더링될 때만 실행

두 번째 파라미터에 비어있는 배열을 넣어주면 컴포넌트가 화면에 처음 렌더링될 때만 실행하고, 업데이트 될때는 실행하지 않는다.

- /src/App.js

  ```javascript
  const App = () => {
    const [userName, setUserName] = useState("cherry");

    // 처음 렌더링될 때만 실행
    useEffect(() => {
      console.log("useEffect");
      console.log("userName : " + userName);
    }, []);

    const handleClickApple = () => setUserName("Apple");
    const handleClickOrange = () => setUserName("Orange");

    return (
      <>
        <h1>Hello {userName}!</h1>
        <button onClick={handleClickApple}>Apple</button>
        <button onClick={handleClickOrange}>Orange</button>
      </>
    );
  };
  ```

### 3. useEffect 훅 : 업데이트 될 때만 실행

두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어 주면 설정한 값이 업데이트될 때만 실행한다.

- /src/App.js

  ```javascript
  const App = () => {
    const [userName, setUserName] = useState("cherry");

    // 값이 변결될 때 실행
    useEffect(() => {
      console.log("useEffect");
      console.log("userName : " + userName);
    }, [userName]);

    const handleClickApple = () => setUserName("Apple");
    const handleClickOrange = () => setUserName("Orange");

    return (
      <>
        <h1>Hello {userName}!</h1>
        <button onClick={handleClickApple}>Apple</button>
        <button onClick={handleClickOrange}>Orange</button>
      </>
    );
  };
  ```

### 4. useEffect 훅 : clean-up 함수 반환

useEffect 첫번째 인자로 전달한 함수에서 clean-up 함수를 반환하면 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 반환된 함수를 수행한다.

- /src/App.js

  ```javascript
  const App = () => {
    const [userName, setUserName] = useState("cherry");

    // 값이 변결될 때 실행
    useEffect(() => {
      console.log("useEffect");
      console.log("userName : " + userName);

      // 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 수행
      return () => {
        console.log("cleanup");
        console.log("userName : " + userName);
      };
    }, [userName]);

    const handleClickApple = () => setUserName("Apple");
    const handleClickOrange = () => setUserName("Orange");

    return (
      <>
        <h1>Hello {userName}!</h1>
        <button onClick={handleClickApple}>Apple</button>
        <button onClick={handleClickOrange}>Orange</button>
      </>
    );
  };
  ```
