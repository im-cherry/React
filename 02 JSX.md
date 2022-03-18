# 02 JSX

JSX는 **JavaScript를 확장한 문법**이다.

> **목차**
>
> 1. [JSX](#1-jsx)
> 2. [하나의 요소 반환](#2-하나의-요소-반환)
> 3. [Fragment 태그](#3-fragment-태그)
> 4. [<> 태그](#4--태그)
> 5. [자바스크립트 표현식 사용](#5-자바스크립트-표현식-사용)
> 6. [반복문(for)](#6-반복문for)
> 7. [AND 연산자 조건식](#7-and-연산자-조건식)
> 8. [JSX 외부에서 조건문 사용](#8-jsx-외부에서-조건문-사용)

### 1. JSX

JSX는 일반적인 HTML 태그의 형태를 가진다.

- /src/App.js

  ```javascript
  function App() {
    return <h1>Hello React!</h1>;
  }
  ```

### 2. 하나의 요소 반환

JSX는 반드시 하나의 요소만을 반환해야 한다.

- /src/App.js

  ```javascript
  function App() {
    return (
      <div>
        <p>Edit src/App.js and save to reload.</p>
        <a href="https://reactjs.org">Learn React</a>
      </div>
    );
  }
  ```

### 3. Fragment 태그

JSX는 반드시 하나의 요소만을 가져야 한다는 규칙때문에 div 태그를 사용한다. 리액트 v16이상부터는 div 태그 대신 Fragment 태그를 사용한다.

- /src/App.js

  ```javascript
  function App() {
    return (
      <Fragment>
        <p>Edit src/App.js and save to reload.</p>
        <a href="https://reactjs.org">Learn React</a>
      </Fragment>
    );
  }
  ```

### 4. <> 태그

Fragment 태그 대신 빈 태그를 사용할 수 있다.

- /src/App.js

  ```javascript
  function App() {
    return (
      <>
        <p>Edit src/App.js and save to reload.</p>
        <a href="https://reactjs.org">Learn React</a>
      </>
    );
  }
  ```

### 5. 자바스크립트 표현식 사용

JSX 내부에서 자바스크립트 표현식을 작성하려면 JSX에서 코드를 { }로 감싸면 된다.

- /src/App.js

  ```javascript
  function App() {
    const userName = "cherry";

    return <h1>Hello {userName}!</h1>;
  }
  ```

### 6. 반복문(for)

자바스크립트 배열 변수를 배열 함수를 사용하여 JSX문을 생성한다.

- /src/App.js

  ```javascript
  function App() {
    const hobbyArray = ["Sports", "Music", "Movie"];
    const hobbyList = hobbyArray.map((hobby, index) => (
      <li key={index}>{hobby}</li>
    ));

    return <ul>{hobbyList}</ul>;
  }
  ```

자바스크립트 객체 변수를 배열 함수를 사용하여 JSX문을 생성한다.

- /src/App.js

  ```javascript
  function App() {
    const hobbyArray = [
      { id: 1, name: "Sports" },
      { id: 2, name: "Music" },
      { id: 3, name: "Movie" },
    ];
    const hobbyList = hobbyArray.map((hobby) => (
      <li key={hobby.id}>{hobby.name}</li>
    ));

    return <ul>{hobbyList}</ul>;
  }
  ```

### 7. AND 연산자 조건식

&& 연산자를 사용해서 조건식을 표현할 수 있다.

- /src/App.js

  ```javascript
  function App() {
    const isDeveloper = true;

    return (
      <div>
        {isDeveloper && <h1>developer</h1>}
        {!isDeveloper && <h1>not developer</h1>}
      </div>
    );
  }
  ```

문자열이 일치하는지 비교한 후에 && 연산자를 사용해서 조건식을 표현할 수 있다.

- /src/App.js

  ```javascript
  function App() {
    const userName = "cherry";

    return (
      <div>
        {userName === "cherry" && <h1>cherry</h1>}
        {!(userName === "cherry") && <h1>not cherry</h1>}
      </div>
    );
  }
  ```

문자열이 일치하는지 비교하여 참/거짓 판명한 후에 && 연산자를 사용해서 조건식을 표현할 수 있다.

- /src/App.js

  ```javascript
  function App() {
    const userName = "cherry";
    let isCherry = userName === "cherry" ? true : false;

    return (
      <div>
        {isCherry && <h1>cherry</h1>}
        {!isCherry && <h1>not cherry</h1>}
      </div>
    );
  }
  ```

### 8. JSX 외부에서 조건문 사용

JSX 외부에서 조건문을 사용하여 결과값만 JSX에서 표현할 수 있다.

- /src/App.js

  ```javascript
  function App() {
    const code = "01";

    let nationality;
    switch (code) {
      case "01":
        nationality = "Korea";
        break;
      case "02":
        nationality = "Germany";
        break;
      case "03":
        nationality = "Australia";
        break;
      default:
        nationality = "None";
        break;
    }

    return <h1>cherry's nationality is {nationality}.</h1>;
  }
  ```

JSX 외부에서 조건문을 이용한 함수를 사용하여 JSX에서 표현할 수 있다.

- /src/App.js

  ```javascript
  function App() {
    const code = "01";

    const getNationality = (code) => {
      switch (code) {
        case "01":
          return "Korea";
        case "02":
          return "Germany";
        case "03":
          return "Australia";
        default:
          return "None";
      }
    };

    return <h1>cherry's nationality is {getNationality(code)}.</h1>;
  }
  ```

- /src/App.js

  ```javascript
  const code = "01";

  const getNationality = () => {
    switch (code) {
      case "01":
        return "Korea";
      case "02":
        return "Germany";
      case "03":
        return "Australia";
      default:
        return "None";
    }
  };

  return <h1>cherry's nationality is {getNationality()}.</h1>;
  ```

<br/>  
<br/>

:arrow_forward: [03 컴포넌트](./03%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8.md) :arrow_forward:
