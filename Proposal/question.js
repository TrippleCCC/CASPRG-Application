function Question(text) {
  this.text=text;
  //this.choices=choices;
  this.answer="";
}

Question.prototype.Answer = function(choice) {
  return this.answer;
}
Question.prototype.storeAnswer = function(x) {
  this.answer = x;
  return;
}
