function Proposal(questions) {
  this.fullText = "";
  this.questions = questions;
  this.questionIndex = 0;
}

Proposal.prototype.getQuestion = function() {
  return this.questions[this.questionIndex];
}

Proposal.prototype.isEnded = function() {
  return this.questions.length === this.questionIndex;
}

Proposal.prototype.addAnswer = function(answer) {
  this.fullText += this.getQuestion() + "\n" + answer;
  this.questionIndex++;
  return;
}
