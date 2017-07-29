
var Proposalquestions = [
  new Question("1.	Give your CAS activity a descriptive title and date."),
  new Question("2.	Describe your idea in detail, including your roles and responsibilities."),
  new Question("3.	Are you collaborating with anyone?  Please list their names."),
  new Question("4.	Is this experience Creativity, Activity, Service, or multiple?  Explain."),
  new Question("5.	Predict which of the 7 learning outcomes you will meet. (see CAS guide)"),
  new Question("6.	What, specifically, do you hope to accomplish?  "),
  new Question("7.	Determine the steps necessary to accomplish your goals and give yourself an approximate deadline.  "),
  new Question("8.	Determine where you can go for assistance, advice, and information.  (people or resources)"),
  new Question("9.	Who will supervise this CAS experience?  (review guidelines if necessary) "),
  new Question("10.	Are there any risks involved with this experience?  Explain "),
  new Question("11.	How will you document your project?  (journals, spreadsheets, photos, videos, feedback from others, etc.)")
]


function initalize() {
  var proposal = new Proposal(Proposalquestions);

  var element = document.getElementById("Question");
  element.innerHTML = "getmoney";

  var nbut = document.getElementById("btn1");
  var bbut = document.getElementById("btn0");

  var area = document.getElementById("answerArea");

  nbut.onclick = function() {
    proposal.addAnswer(area.value);
    element.innerHTML = proposal.getQuestion().text;
    area.innerHTML = "Type your answer here...";
  }
}


initalize();
