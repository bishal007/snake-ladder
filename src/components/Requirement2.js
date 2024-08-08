import { useState } from "react";

export default function Board() {
  const [turn, setTurn] = useState(false);
  const [value, setValue] = useState(1);
  //   const [value2, setValue2] = useState(1);
  const [datas1, setDatas1] = useState([]);
  const [datas2, setDatas2] = useState([]);
  const [dataPos1, setDataPos1] = useState([]);
  const [dataPos2, setDataPos2] = useState([]);
  //   const [datas2, setDatas2] = useState([]);
  const [data, setData] = useState("");
  const [position, setPosition] = useState(1);
  //   const [data2, setData2] = useState("");
  const playsTurn = [1, 2, 3, 4, 5];
  const [nextTurn, setNextTurn] = useState(1);
  const handleRoll1 = () => {
    setTurn(true);
    setValue(rndInt);
    // setValue2(rndInt2);
    setDatas1([[...datas1, rndInt]]);
    setDataPos1([[...dataPos1, rndPos]]);
    setNextTurn((prevNextTurn) => prevNextTurn + 1);
    // setDatas2([...datas2, rndInt2]);
    console.log("datas1", datas1);
    console.log("dataPos1", dataPos1);
  };

  const handleRoll2 = () => {
    setTurn(true);
    setValue(rndInt);
    // setValue2(rndInt2);
    setDatas2([[...datas2, rndInt]]);
    setDataPos2([[...dataPos2, rndPos]]);
    setNextTurn((prevNextTurn) => prevNextTurn + 1);
    // setDatas2([...datas2, rndInt2]);
    console.log("datas2", datas2);
    console.log("dataPos2", dataPos2);
  };

  const handleRoll3 = () => {
    setTurn(true);
    setValue(rndInt);
    // setValue2(rndInt2);
    setDatas2([[...datas2, rndInt]]);
    setDataPos2([[...dataPos2, rndPos]]);
    setNextTurn((prevNextTurn) => prevNextTurn + 1);
    // setDatas2([...datas2, rndInt2]);
    console.log("datas2", datas2);
    console.log("dataPos2", dataPos2);
  };

  const handleRoll4 = () => {
    setTurn(true);
    setValue(rndInt);
    // setValue2(rndInt2);
    setDatas2([[...datas2, rndInt]]);
    setDataPos2([[...dataPos2, rndPos]]);
    setNextTurn((prevNextTurn) => prevNextTurn + 1);
    // setDatas2([...datas2, rndInt2]);
    console.log("datas2", datas2);
    console.log("dataPos2", dataPos2);
  };

  const handleRoll5 = () => {
    setTurn(true);
    setValue(rndInt);
    // setValue2(rndInt2);
    setDatas2([[...datas2, rndInt]]);
    setDataPos2([[...dataPos2, rndPos]]);
    setNextTurn(1);
    // setDatas2([...datas2, rndInt2]);
    console.log("datas2", datas2);
    console.log("dataPos2", dataPos2);
  };

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(1, 6);
  const rndPos = randomIntFromInterval(1, 30);
  //   const rndInt2 = randomIntFromInterval(1, 6);
  return (
    <div className="App">
      <>
        <h1>Player 1's turn</h1>
        <button onClick={handleRoll1}>roll dice</button> {value}
      </>

      <>
        <h1>Player 2's turn</h1>
        <button onClick={handleRoll1}>roll dice</button> {value}
      </>

      <>
        <h1>Player 3's turn</h1>
        <button onClick={handleRoll1}>roll dice</button> {value}
      </>

      <>
        <h1>Player 4's turn</h1>
        <button onClick={handleRoll1}>roll dice</button> {value}
      </>
      <>
        <h1>Player 5's turn</h1>
        <button onClick={handleRoll2}>roll dice</button> {value}
      </>
      {/* <button onClick={handleRoll}>roll dice</button> {value} */}
      <h3>player 1's score : {datas1}</h3>
      <h3>position:{dataPos1}</h3>
      <h3>player 2's score : {datas2}</h3>
      <h3>position:{dataPos2}</h3>
      <h3>player 3's score : {datas2}</h3>
      <h3>position:{dataPos2}</h3>
      <h3>player 4's score : {datas2}</h3>
      <h3>position:{dataPos2}</h3>
      <h3>player 5's score : {datas2}</h3>
      <h3>position:{dataPos2}</h3>
    </div>
  );
}
