import { useState } from "react";

export default function Board() {
  const [turn, setTurn] = useState(true);
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
  const handleRoll1 = () => {
    setTurn(!turn);
    setValue(rndInt);
    // setValue2(rndInt2);
    setDatas1([[...datas1, rndInt]]);
    setDataPos1([[...dataPos1, rndPos]]);
    // setDatas2([...datas2, rndInt2]);
    console.log("datas1", datas1);
    console.log("dataPos1", dataPos1);
  };

  const handleRoll2 = () => {
    setTurn(!turn);
    setValue(rndInt);
    // setValue2(rndInt2);
    setDatas2([[...datas2, rndInt]]);
    setDataPos2([[...dataPos2, rndPos]]);
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
      {turn ? (
        <>
          <h1>Player 1's turn</h1>
          <button onClick={handleRoll1}>roll dice</button> {value}
        </>
      ) : (
        <>
          <h1>Player 2's turn</h1>
          <button onClick={handleRoll2}>roll dice</button> {value}
        </>
      )}
      {/* <button onClick={handleRoll}>roll dice</button> {value} */}
      <h3>player 1's score : {datas1}</h3>
      <h3>position:{dataPos1}</h3>
      <h3>player 2's score : {datas2}</h3>
      <h3>position:{dataPos2}</h3>
    </div>
  );
}
