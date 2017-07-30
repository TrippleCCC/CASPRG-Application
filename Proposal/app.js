//All the proposal questions
var Proposalquestions = [
  new Question("1. Give your CAS activity a descriptive title and date."),
  new Question("2. Describe your idea in detail, including your roles and responsibilities."),
  new Question("3. Are you collaborating with anyone?  Please list their names."),
  new Question("4. Is this experience Creativity, Activity, Service, or multiple?  Explain."),
  new Question("5. Predict which of the 7 learning outcomes you will meet. (see CAS guide)"),
  new Question("6. What, specifically, do you hope to accomplish?  "),
  new Question("7. Determine the steps necessary to accomplish your goals and give yourself an approximate deadline.  "),
  new Question("8. Determine where you can go for assistance, advice, and information.  (people or resources)"),
  new Question("9. Who will supervise this CAS experience?  (review guidelines if necessary) "),
  new Question("10. Are there any risks involved with this experience?  Explain "),
  new Question("11. How will you document your project?  (journals, spreadsheets, photos, videos, feedback from others, etc.)")
]

//Create variables for the "next" and "back" Buttons
var nbut = document.getElementById("btn1");
var bbut = document.getElementById("btn0");


//The initialize function runs when the user choses proposal
function initalize() {

  //create a new proposal
  var proposal = new Proposal(Proposalquestions);

  //variable for the question area and setting that to the first question
  var element = document.getElementById("Question");
  element.innerHTML = proposal.getQuestion().text;

  var area = document.getElementById("answerArea");
  area.innerHTML = "Type your answer here...";

  //functions for the buttons
  nbut.onclick = function() {
    if(proposal.isEnded())
    {
      endProposal(proposal);
    }
    else{
      proposal.getQuestion().answered = true;
      proposal.getQuestion().storeAnswer(area.value);
      proposal.questionIndex++;
      element.innerHTML = proposal.getQuestion().text;
      if(proposal.getQuestion().answered === false)
      {
        area.innerHTML = "Type your answer here...";
      }
      else {
        area.innerHTML = proposal.getQuestion().answer;
      }
    }
  }

  bbut.onclick = function() {
    if(proposal.questionIndex > 0)
    {
      proposal.questionIndex--;
      element.innerHTML = proposal.getQuestion().text;
      area.innerHTML = proposal.getQuestion().Answer();
    }
    else {
      window.location.href = "../index.html";
    }
  }
}

function endProposal(x)
{
  var buttonArea = document.getElementById("navigation");
  //this creates new buttons ManageBack and coping
  buttonArea.innerHTML = "<button id=\"btn2\"><span id=\"MB\">Go to ManageBack</span></button>\n"+
  "<button id=\"btn3\"><span id\"CB\">Main Menu</span></button>" +
  "<button id=\"btn4\"><span id\"startover\">Begin another Proposal</span></button>";

  //sets the question area to the final message
  var element = document.getElementById("Question");
  element.innerHTML = "This is your final propsoal.\n Use the buttons below to go to ManageBack or the Main Menu.\n"
  + "Refresh the page to start another proposal.";

  var area = document.getElementById("answerArea");
  area.innerHTML = x.buildAnswer();

  var MBut = document.getElementById("btn2");
  var mainBut = document.getElementById("btn3");
  var startoverBut = document.getElementById("btn4");

  MBut.onclick = function(){
    //window.location.href = "https://stonypoint.managebac.com/student/ib/activity/cas/new";
    window.open("https://stonypoint.managebac.com/student/ib/activity/cas/new","_blank");
    window.focus();
  }

  mainBut.onclick = function() {
    window.location.href = "../index.html";
  }

  startoverBut.onclick = function() {
    window.location.href = "../Proposal/proposalPage.html";

  }

}



initalize();
