$(document).ready(function(){
$("#inputform").submit(function(event){
  event.preventDefault();

  var sentence = $("input#UserInput").val();

  var sentenceArray = sentence.split("");

for (var i = 0; i<=sentenceArray.length; i+=1) {
  if (sentenceArray[i]==="a") {
    $("p").append("-");
    console.log("test includes a")

  }
  else if (sentenceArray[i]==="e"){
    $("p").append("-");
  }

  else if (sentenceArray[i]==="i"){
    $("p").append("-");
  }

  else if (sentenceArray[i]==="o"){
    $("p").append("-");
  }
  else if (sentenceArray[i]==="u"){
    $("p").append("-");
  }
  else  {
    $("p").append(sentenceArray[i])
  }


  }
});
});
