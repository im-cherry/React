// 리액트 임포트
import React, { useState } from "react";
import ItemMain from "./components/ItemMain";

// App 컴포넌트 생성
function App() {
  // 상태 정의
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [foreigner, setForeigner] = useState(false);
  const [gender, setGender] = useState("male");
  const [nationality, setNationality] = useState("");

  // 이벤트 처리 함수 정의
  const handleChangeUserId = (e) => {
    setUserId(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeIntroduction = (e) => {
    setIntroduction(e.target.value);
  };
  const handleChangeForeigner = (e) => {
    setForeigner(e.target.value);
  };
  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };
  const handleChangeNationality = (e) => {
    setNationality(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userId);
    console.log(password);
    console.log(introduction);
    console.log(foreigner);
    console.log(gender);
    console.log(nationality);
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>아이디</td>
            <td>
              <input type="text" value={userId} onChange={handleChangeUserId} />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                type="password"
                value={password}
                onChange={handleChangePassword}
              />
            </td>
          </tr>
          <tr>
            <td>소개</td>
            <td>
              <textarea
                rows="5"
                value={introduction}
                onChange={handleChangeIntroduction}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>외국인 여부</td>
            <td>
              <input
                type="checkbox"
                value={foreigner}
                onChange={handleChangeForeigner}
              />
            </td>
          </tr>
          <tr>
            <td>성별</td>
            <td>
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={handleChangeGender}
              />
              남성
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={handleChangeGender}
              />
              여성
            </td>
          </tr>
          <tr>
            <td>국적</td>
            <td>
              <select value={nationality} onChange={handleChangeNationality}>
                <option value="">Please select one</option>
                <option value="01">Korea</option>
                <option value="02">Germany</option>
                <option value="03">Australia</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <button type="submit">등록</button>
      </div>
    </form>
  );
}
// function App() {
//   return <ItemMain />;
// }

export default App;
