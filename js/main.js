

var hobbies = ["hello", "shit", "reading", "programming"];
var btn = document.getElementById("go-button");


function buttonClicked(){
   console.log("button Clicked");
   var customText = document.getElementsByClassName("my-input");
   var results = document.getElementById("change-area");

   var textarea = document.getElementsByClassName("my-textarea");
   results.innerHTML = customText[0].value + "<br />";

   results.innerHTML += textarea[0].value;
}


btn.addEventListener("click", buttonClicked);