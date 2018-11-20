var express = require("express"),
  app = express();
(cors = require("cors")),
  app.use(cors({ origin: "http://localhost:3000" }));

app.get("/questions", function(req, res) {
  res.send([
    {
      question: "favourite color?",
      option: ["red", "blue", "green", "yellow"],
      answer: "blue"
    },
    {
      question: "favourite programming language?",
      option: ["c", "java", "javascript", "swift"],
      answer: "javascript"
    },
    {
      question: "favourite Framework?",
      option: ["angular", "vueJS", "angularJS", "react"],
      answer: "react"
    },
    {
      question: "favourite OS?",
      option: ["Macos", "windows", "linux", "unix"],
      answer: "windows"
    }
  ]);
});

app.listen(5000, function() {
  console.log("server runnnig @localhost:5000");
});
