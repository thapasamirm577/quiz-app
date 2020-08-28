
function question(first,second,third){
   this.first = first;
   this.second = second;
   this.third = third;
 }

 var questions = [
   new question("What is the file name of javascript?",[".js",".py",".exe",".css"],".js"),
   new question("what is the of your brother?",["ram","shyam","hari","nikhil"],"nikhil"),
   new question("what is do you do?",["student","programmer","doctor","engineer"],"programmer")
 ]
 /*
 for( i=0; i<questions.length; i++){
   var Q1 = document.getElementById("question");
   Q1.innerHTML = questions[i].first;
      for( var j=0; j<questions[i].second.length; j++){
         var guess = getElementById("guess" + j);
         guess.innerHTML = questions[i].second[j];
      }
 }
 */

 var Q1 = document.getElementById("question");
 Q1.innerHTML = questions[0].first;

 var guess0 = document.getElementById("guess0");
 guess0.innerHTML = questions[0].second[0];

 var guess1 = document.getElementById("guess1");
 guess1.innerHTML = questions[0].second[1];

 var guess2 = document.getElementById("guess2");
 guess2.innerHTML = questions[0].second[2];

 var guess3 = document.getElementById("guess3");
 guess3.innerHTML = questions[0].second[3];
/*
 function hiddenItem(){
  document.getElementsByClassName("next-button").addEventListener("click", function() {
   document.getElementById("question").hidden = true;
   document.getElementById("guess0").hidden = true;
   document.getElementById("guess1").hidden = true;
   document.getElementById("guess2").hidden = true;
   document.getElementById("guess3").hidden = true;
}, true);
};
*/
function firstNext(){
  var Q1 = document.getElementById("question");
  Q1.innerHTML = questions[1].first;

  var guess0 = document.getElementById("guess0");
  guess0.innerHTML = questions[1].second[0];

  var guess1 = document.getElementById("guess1");
  guess1.innerHTML = questions[1].second[1];

  var guess2 = document.getElementById("guess2");
  guess2.innerHTML = questions[1].second[2];

  var guess3 = document.getElementById("guess3");
  guess3.innerHTML = questions[1].second[3];
}
function myFunction() {
  var x = document.getElementById("question-box");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = firstNext();
  }
}
function hiddenItem(){
  document.getElementsByClassName("done-button").addEventListener("click", function() {
   document.getElementById("question").hidden = true;
   document.getElementById("guess0").hidden = true;
   document.getElementById("guess1").hidden = true;
   document.getElementById("guess2").hidden = true;
   document.getElementById("guess3").hidden = true;
}, true);
}

