import { useState } from "react";
import { questions } from "../data/question";

const QuizWindow = () => {
  let [queNo, setQueNo] = useState(0);
  let [qLable, setQLable] = useState("NEXT");

  const handleNextClick = () => {
    if(queNo < questions.length - 1){
    setQueNo(queNo + 1);
    
    if(queNo === questions.length);
    setQLable("FINISH");
    }
  }
let [score, updateScore] = useState(0);
  const handleScore = (qAns, uAns) => {

  }

  return (
    <div>
      <div>
        <strong>
          Q.No. [{questions[queNo].q_no}]
          {questions[queNo].q_title}
        </strong>
      </div>
      <div>
        <ul>
          <li> onClick{() => {handleScore(questions[queNo])}}{questions[queNo].q_optA}</li>
          <li>{questions[queNo].q_optB}</li>
          <li>{questions[queNo].q_optC}</li>
          <li>{questions[queNo].q_optD}</li>
        </ul>
      </div>
      <div>
        <button type="button" onClick={handleNextClick}>NEXT</button>
        {qLable}
      </div>
    </div>
  )
}

export default  QuizWindow;