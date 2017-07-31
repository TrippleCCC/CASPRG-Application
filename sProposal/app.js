var SProposalquestions = [
  new Question("1.	Give your CAS experience a descriptive title and date."),
  new Question("2.	Describe your experience in detail, including roles and responsibilities."),
  new Question("3.	Did you work with anyone?  Please list their names."),
  new Question("4.	Was this experience Creativity, Activity, Service, or multiple?  Explain."),
  new Question("5.	Which of the 7 learning outcomes did you meet, and how?"),
  new Question("6.	Who can act as the supervisor for this experience?  "),
  new Question("7.	Were there any risks involved with this experience?  Explain."),
  new Question("8.	How did you document this experience?")
]

//Create variables for the "next" and "back" Buttonshjh
var nbut = document.getElementById("btn1");
var bbut = document.getElementById("btn0");


//The initialize function runs when the user choses proposal
function initalize() {

  //create a new proposal
  var proposal = new sProposal(SProposalquestions);

  //variable for the question area and setting that to the first question
  var element = document.getElementById("Question");
  element.innerHTML = proposal.getQuestion().text;

  var area = document.getElementById("answerArea");
  area.innerHTML = "Type your answer here...";

  //functions for the buttons
  nbut.onclick = function() {
    if(proposal.isEnded())
    {
      proposal.getQuestion().answered = true;
      proposal.getQuestion().storeAnswer(area.value);
      endProposal(proposal);
    }
    else{
      proposal.getQuestion().answered = true;
      proposal.getQuestion().storeAnswer(area.value);
      proposal.questionIndex++;
      element.innerHTML = proposal.getQuestion().text;
      document.getElementById("area").innerHTML = "<textarea id=\"answerArea\">Type your answer here...</textarea>";
      area = document.getElementById("answerArea");
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
  document.getElementById("area").innerHTML = "<textarea id=\"answerArea\">Type your answer here...</textarea>";
  area = document.getElementById("answerArea");
  var buttonArea = document.getElementById("navigation");
  //this creates new buttons ManageBack and coping
  buttonArea.innerHTML = "<button id=\"btn2\"><span id=\"MB\">Go to ManageBack</span></button>\n"+
  "<button id=\"btn3\"><span id\"CB\">Main Menu</span></button>" +
  "<button id=\"btn4\"><span id\"startover\">Begin another S-Proposal</span></button>";

  //sets the question area to the final message
  var element = document.getElementById("Question");
  element.innerHTML = "This is your final propsoal.\n Use the buttons below to go to ManageBack or the Main Menu.\n"
  + "Refresh the page to start another proposal. Remember to copy your reflection before leaving the page.";

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
    window.location.href = "../sProposal/sproposalPage.html";

  }

}



initalize();
