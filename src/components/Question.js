import React from "react";

const Question = props => {
  return (
    <div>
      <p>{props.question.question}</p>
      {props.question.option.map((option, index) => (
        <div key={index} className="card-body">
          <input
            type="radio"
            name="options"
            value={option}
            checked={option === props.answers[props.questNo]}
            onChange={props.changeAnswer.bind(this, option, props.questNo)}
          />
          {option}
        </div>
      ))}
    </div>
  );
};

export default Question;
