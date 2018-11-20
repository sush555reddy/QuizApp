import React from "react";
import Question from "./Question";

const TestComponent = props => {
  //console.log(props);
  if (props.question) {
    return (
      <div>
        <Question
          //radio={props.radio}
          question={props.question}
          changeAnswer={props.changeAnswer}
          answers={props.answers}
          questNo={props.questNo}
        />

        {/* <div className="card-header">
          <p>{props.question.question}</p>
        </div>

        <div hidden={true} className="card-body">
          <input
            type="radio"
            name="options"
            value=""
            checked={true}
            onChange={props.changeAnswer.bind(this, "", props.questNo)}
          />
        </div>

        {props.question.option.map((option, index) => (
          <div key={index} className="card-body">
            <input
              type="radio"
              name="options"
              value={option}
              //   onChange={e => {
              //     props.changeAnswer(option, props.questNo);
              //     e.checked = false;
              //   }}
              onChange={props.changeAnswer.bind(this, option, props.questNo)}
            />
            {option}
          </div>
        ))} */}

        <button
          disabled={!props.questNo}
          className="btn-sm btn-primary mr-5"
          onClick={props.prevQuestion}
        >
          Previous
        </button>

        <button
          disabled={props.questNo === props.questions.length - 1}
          className="btn-sm btn-primary mr-5"
          onClick={() => {
            props.nextQuestion(props.questNo);
          }}
        >
          Next
        </button>

        <button
          disabled={!(props.questNo === props.questions.length - 1)}
          className="btn-sm btn-success mr-5"
          onClick={props.submitAnswer}
        >
          Submit
        </button>
      </div>
    );
  }
  return null;
};

export default TestComponent;
