import { useEffect, useState } from "react";
import "./App.css";
import deadly from "./questions/reactjs-questions.json";
function App() {
  const [curr, setCurr] = useState(0);
  const [ans, setans] = useState([false, false, false, false]);
  const [next, setnext] = useState(false);
  const [click, setclick] = useState(false);
  const [disableButtons, setDisableButtons] = useState(false);
  const [recheck, setrecheck] = useState(false);
  let userans = "";
  let ansarr = "";
  let final = 0;
  const [result, setresult] = useState(0);
  const total = 150;
  const handleNext = () => {
    if (deadly.length - 1 !== curr) {
      setCurr(curr + 1);
    } else {
      setclick(true);
    }
    setans((i) => {
      console.log(i);
      let temp = [...i];
      for (let j = 0; j < temp.length; j++) {
        temp[j] = false;
      }
      return temp;
    });
    console.log(ans);
    setnext(!next);
    console.log(next);
    setDisableButtons(false);
  };
  const handleAns = (e) => {
    userans = e.target.value;
    if (userans === deadly[curr].options[deadly[curr].correctOption]) {
      setresult(result + 10);
      ansarr = [deadly[curr].correctOption];
      setans((prevAns) => {
        const updatedans = [...prevAns];
        console.log(updatedans[ansarr]);
        updatedans[ansarr] = true;
        return updatedans;
      });
    }
    setDisableButtons(true);

    e.target.style.backgroundColor = "green";
  };
  console.log(result);
  const handleRestart = () => {
    setclick(false);
    setCurr(0);
  };
  const handleReset = () => {
    setDisableButtons(!disableButtons);
    setnext(!next);
    setrecheck(true);
    if (recheck && ans[deadly[curr].correctOption]) {
      setresult(result - 10);
      let num = 0;
      if (result === num) {
        setresult(0);
      }
      console.log("num=" + num);
    }
  };

  return (
    <>
      {click ? (
        <div className="parent">
          <div className="parent1 ">
            <h1>Your Score</h1>
            <div className="ans1">
              <h2>
                {result} out of {total}
              </h2>
            </div>
            <div className="next">
              <button disabled={disableButtons} onClick={handleRestart}>
                Restart
              </button>
              {/* <button onClick={handleprev}>Previous</button> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="parent">
          <div className="parent1 ">
            <h1>Quiz</h1>
            <div className="question">
              <p>{deadly[curr].question}</p>
            </div>
            <div className="ans1">
              <button
                disabled={disableButtons}
                style={{
                  backgroundColor: next ? "rgb(223, 247, 255)" : null,
                }}
                // style={{ backgroundColor:  }}
                // style={{ backgroundColor: "" }}
                onClick={handleAns}
                className="p1"
                value={deadly[curr].options[0]}
              >
                {deadly[curr].options[0]}
              </button>
              <button
                disabled={disableButtons}
                style={{ backgroundColor: next ? "rgb(223, 247, 255)" : null }}
                // style={{ backgroundColor: ans[1] ? "green" : null }}
                onClick={handleAns}
                className="p2"
                value={deadly[curr].options[1]}
              >
                {deadly[curr].options[1]}
              </button>
            </div>
            <div className="ans2">
              <button
                disabled={disableButtons}
                // style={{ backgroundColor: "rgb(223, 247, 255)" }}
                style={{ backgroundColor: next ? "rgb(223, 247, 255)" : null }}
                // style={{ backgroundColor: ans[2] ? "green" : null }}
                onClick={handleAns}
                className="p3"
                value={deadly[curr].options[2]}
              >
                {deadly[curr].options[2]}
              </button>
              <button
                disabled={disableButtons}
                // style={{ backgroundColor: "rgb(223, 247, 255)" }}
                style={{ backgroundColor: next ? "rgb(223, 247, 255)" : null }}
                onClick={handleAns}
                className="p4"
                value={deadly[curr].options[3]}
              >
                {deadly[curr].options[3]}
              </button>
            </div>
            <div className="next">
              <button disabled={!disableButtons} onClick={handleNext}>
                Next
              </button>
              <button disabled={!disableButtons} onClick={handleReset}>
                Reset
              </button>
              {/* <button onClick={handleprev}>Previous</button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
