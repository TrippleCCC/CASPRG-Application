//All the proposal questions
var reflectionQuestions = [
  new Question("Describe the experience itself. (Location, your resonsibilities, etc.)"),
  new Question("Discuss what you learned about your self and about others. "),
  new Question("Discuss what abilities and what you developed. If no abilities were developed then type none"),
  new Question("Discuss how the experience affected you emotionally or changed your prespective"),
  new Question("If there was a moment of discovery then describe it. If not then type none."),
  new Question("Overall what would you rate this experience and why?")
]

//Create variables for the "next" and "back" Buttons
var nbut = document.getElementById("btn1");
var bbut = document.getElementById("btn0");


//The initialize function runs when the user choses proposal
function initalize() {

  //create a new proposal
  var proposal = new Reflection(reflectionQuestions);

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
  var buttonArea = document.getElementById("navigation");
  //this creates new buttons ManageBack and coping
  buttonArea.innerHTML = "<button id=\"btn2\"><span id=\"MB\">Go to ManageBack</span></button>\n"+
  "<button id=\"btn3\"><span id\"CB\">Main Menu</span></button>" +
  "<button id=\"btn4\"><span id\"startover\">Begin another Reflection</span></button>";

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
    window.location.href = "../Reflection/reflectionPage.html";

  }

}



initalize();
