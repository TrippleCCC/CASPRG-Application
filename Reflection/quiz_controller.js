function Reflection(questions) {
  this.fullText = "";
  this.questions = questions;
  this.questionIndex = 0;
}

Reflection.prototype.getQuestion = function() {
  return this.questions[this.questionIndex];
}

Reflection.prototype.isEnded = function() {
  return this.questions.length - 1 === this.questionIndex;
}

Reflection.prototype.addAnswer = function(answer) {
  this.fullText += this.getQuestion() + "\n" + answer;
  return;
}

Reflection.prototype.buildAnswer = function() {
  var endString = "";
  for (var i = 0; i < this.questions.length; i++) {
    endString += this.questions[i].text + "\n";
    endString += this.questions[i].answer + "\n";
  }

  return endString;
}
