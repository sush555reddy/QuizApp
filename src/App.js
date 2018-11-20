import React, { Component } from "react";
import "./App.css";
import TestComponent from "./components/TestComponent";
import axios from "axios";

class App extends Component {
  state = {
    questions: [],
    answers: [],
    questNo: 0
    // resetRadio: [false, false, false, false]
  };

  submitAnswer = () => {
    //   console.log("submit");
    let correctanswers = 0;
    // for (let i = 0; i < this.state.questions.length; i++) {
    //   if (this.state.questions[i].answer === this.state.answers[i]) {
    //     correctanswers += 1;
    //   }
    // }

    this.state.questions.forEach((question, index) => {
      if (question.answer === this.state.answers[index]) {
        correctanswers += 1;
      }
    });
    //   console.log(correctanswers);
    this.setState({ ...this.state, score: correctanswers });
  };

  nextQuestion = curQn => {
    if (curQn < this.state.questions.length - 1) {
      this.setState({
        questions: [...this.state.questions],
        answers: [...this.state.answers],
        questNo: this.state.questNo + 1
      });
    }
  };

  changeAnswer = (answer, qnno, e) => {
    let ans = this.state.answers;
    //let radio = [false, false, false, false];
    //radio[qnno] = true;
    if (ans[qnno]) {
      ans[qnno] = answer;
    } else {
      ans.push(answer);
    }
    this.setState({
      questions: [...this.state.questions],
      answers: [...ans],
      questNo: this.state.questNo
      //  resetRadio: [...radio]
    });
  };

  prevQuestion = () => {
    this.setState({
      questions: [...this.state.questions],
      answers: [...this.state.answers],
      questNo: this.state.questNo - 1
    });
    //}
  };

  componentDidMount = () => {
    axios.get("http://localhost:5000/questions").then(res => {
      this.setState({ questions: res.data, answers: [] });
      console.log(this.state);
    });
  };

  render() {
    if (this.state.score) {
      return (
        <div className="container">
          <div className="App card-deck mt-5">
            <h5>Your Score is {this.state.score}</h5>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="App card-deck mt-5">
          <TestComponent
            lastQn={this.state.questions.length - 1}
            questNo={this.state.questNo}
            questions={this.state.questions}
            question={this.state.questions[this.state.questNo]}
            //radio={this.state.resetRadio}
            nextQuestion={this.nextQuestion}
            prevQuestion={this.prevQuestion}
            submitAnswer={this.submitAnswer}
            changeAnswer={this.changeAnswer}
            answers={this.state.answers}
          />
        </div>
      </div>
    );
  }
}

export default App;
