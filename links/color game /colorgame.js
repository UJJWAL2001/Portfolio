var colors = randomColors(6);
var pickColor = colors[Math.floor(Math.random()*colors.length)];
var colordisplay=document.getElementById("colordisplay");
var squares = document.getElementsByClassName("square");
var messagedisplay = document.getElementsByTagName("span")[1];
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easybtn = document.getElementById("easybtn");
var hardbtn = document.getElementById("hardbtn");
var nums = 6;

colordisplay.textContent = pickColor;

easybtn.addEventListener("click",function(){
     nums= 3;
     h1.style.backgroundColor = "steelblue";
     messagedisplay.textContent = "";
     reset.textContent = "New Colors"
     easybtn.classList.add("selected");
     hardbtn.classList.remove("selected");
     colors = randomColors(3);
     pickColor = colors[Math.floor(Math.random()*colors.length)];
     colordisplay.textContent = pickColor;
     for(var i=0 ; i < colors.length ; ++i)
      {
            squares[i].style.backgroundColor = colors[i];   
      }
      for(var i=3 ; i < 6 ; ++i)
      {
            squares[i].style.display= "none";   // hides square
      }
});

hardbtn.addEventListener("click",function(){
      nums = 6;
      h1.style.backgroundColor = "steelblue";
      messagedisplay.textContent = "";
      reset.textContent = "New Colors"
      easybtn.classList.remove("selected");
      hardbtn.classList.add("selected");
      colors = randomColors(6);
      pickColor = colors[Math.floor(Math.random()*colors.length)];
      colordisplay.textContent = pickColor;
      for(var i=0 ; i < colors.length ; ++i)
      {
            squares[i].style.backgroundColor = colors[i];   
      }
      for(var i=3 ; i < 6 ; ++i)
      {
            squares[i].style.display= "block"; // shows square which was hidden
      }
})

reset.addEventListener("click", function(){
      // RESET colors
      colors = randomColors(nums);
      // New pickColor
      pickColor = colors[Math.floor(Math.random()*colors.length)];
      // reset h1
      colordisplay.textContent = pickColor;
      h1.style.backgroundColor = "steelblue";
      messagedisplay.textContent = "";
      // reset colors of squares
      for(var i=0 ; i < colors.length ; ++i)
      {
            squares[i].style.backgroundColor = colors[i];   
      }
      // text contant
      reset.textContent = "New Colors";
});


for(var i=0 ; i < colors.length ; ++i)
{     // SET Colors to squares
      
      squares[i].style.backgroundColor = colors[i];

      //ADD event Listner

      squares[i].addEventListener("click",function(){
             //GRAB color or clicked square
             var clickedcolor = this.style.backgroundColor;
             //COMPARE color to picked one
             if(clickedcolor === pickColor )
             {messagedisplay.textContent = "Correct!";
             ChangeColors(); // changes square color to pick one
             h1.style.backgroundColor = pickColor;
             reset.textContent = "Play Again";
             }
             else
             {this.style.backgroundColor = "#232323";
             messagedisplay.textContent = "Try Again!";}
      })

}

function ChangeColors(){

      for(var i=0 ; i < squares.length ; ++i)
      {   squares[i].style.backgroundColor = pickColor;  }
};

function randomColors(num){
     var arry = [];
     for (let index = 0; index < num; index++) {
           arry[index] = rndcolor();
      }
      return arry;
};

function rndcolor(){
      var r = Math.floor(Math.random()*255 +1);
      var g = Math.floor(Math.random()*255 +1);
      var b = Math.floor(Math.random()*255 +1);
      
      return "rgb(" + r + ", " + g +", "+ b + ")";
}