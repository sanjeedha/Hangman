window.onload=function(){
    function JSalert(){
	swal("Congrats!", ", You won the game", "success");
}
        function JSalert1(){
	swal ( "Oops" ,  "You lost the game" ,  "error" )
}
var words = ["APPLE","BANANA","CHERRY","MANGO","ORANGE"];

  var rand = Math.floor(Math.random() * 5);
   console.log(words[rand]); 
    for(var i=0; i<words[rand].length;i++){
        var letters = document.createElement("ul");
        var x = document.createElement("li");       
        x.id=i;
        document.getElementById("guess").appendChild(x);
    
    }
       
    

   var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   for(var i=0; i<str.length; i++)
   {
    var nextChar = str.charAt(i);
 var btn = document.createElement("BUTTON");
    btn.id = 'btn'+ nextChar;
    btn.className = "button"; 
    btn.innerHTML = nextChar;
    btn.setAttribute("value", nextChar);
    btn.setAttribute("text",nextChar);
    btn.style.backgroundColor = '#4CAF50';
    document.getElementById("right").appendChild(btn);       
  }
 


//    createKeyboard();
  var finalPush=[];
   var lives = 5;
    
// on clicking button, should reflect on the textbox  
    
    var buttony = document.getElementsByTagName("button");   
    for(var i=0;i<buttony.length;i++){       
buttony[i].addEventListener("click", function(e){
//    console.log(e.target.value); 
   
   document.getElementById("btn"+e.target.value).setAttribute("class","active" );
//    document.getElementById("btn"+e.target.value).setAttribute("class",e.target.value);
     
    var splity = words[rand].split('');
    var ID = document.getElementById("btn"+e.target.value).value;
//    var ID = document.getElementsByClassName("active").value;
    console.log(ID);
    var finding = splity.indexOf(ID);
    console.log(finding);
     console.log(document.getElementById(finding));
    
          var str = words[rand];
var indices = [];
for(var i=0; i<str.length;i++) {
    if (str[i] == ID) indices.push(i+1);
}
    console.log(indices);
    
    if((finding > -1) && (indices.length<2)){
 document.getElementById(finding).innerHTML = splity[finding];
        finalPush.push(splity[finding]);
  }
      if((finding > -1) && (indices.length>=2)){
          console.log(indices.length);
          for(var i=0; i<indices.length;i++) {
 document.getElementById(indices[i]-1).innerHTML = splity[indices[i]-1];
              finalPush.push(indices[i]-1);
      }     
          
      }
  if(finding==-1){     
      lives = lives-1;  
      document.getElementById("num").innerHTML = lives;
      if(lives<=0){
          JSalert1();
         document.getElementById("numy").style.display = "none";
          return 0;
      }
  }
   
  if (finalPush.length == str.length){
//              alert("you won");
            JSalert();
      return 0;
          }        
});
      
    }
    
};
    
    


//Tasks remaining
 
//print winner when the word is guessed
