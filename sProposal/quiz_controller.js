function sProposal(questions) {
  this.fullText = "";
  this.questions = questions;
  this.questionIndex = 0;
}

sProposal.prototype.getQuestion = function() {
  return this.questions[this.questionIndex];
}

sProposal.prototype.isEnded = function() {
  return this.questions.length - 1 === this.questionIndex;
}

sProposal.prototype.addAnswer = function(answer) {
  this.fullText += this.getQuestion() + "\n" + answer;
  return;
}

sProposal.prototype.buildAnswer = function() {
  var endString = "";
  for (var i = 0; i < this.questions.length; i++) {
    endString += this.questions[i].text + "\n";
    endString += this.questions[i].answer + "\n";
  }

  return endString;
}
