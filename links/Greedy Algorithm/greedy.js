
var money  ;
var cost   ;
var ret    ;
var tens   ;
var fives  ;
var ones   ;

function SetValues(){
    money  = Math.floor(Math.random()*20 +1)*100;
    cost   = Math.floor(Math.random()*80 +21);
    ret    = money - cost ;
    tens   = Math.floor(ret/10);
    fives  = Math.floor((ret%10)/5);
    ones   = Math.floor((ret%10)%5);
    $(".tens").val("0");
    $(".fives").val("0");
    $(".ones").val("0");
    $("#GreedyAlgo p .money").text("Rs "+money);
    $("#GreedyAlgo p .cost").text("Rs "+cost);
}

SetValues();

$("#GreedyAlgo").on("click", ".submit", function(event){
    var t = parseInt($(".tens").val());
    var f = parseInt($(".fives").val());
    var o = parseInt($(".ones").val());

    if( t === tens && f === fives && o === ones )
    {
        $(".result").text("You Won !!");
        $(".result").css("color","green");
        $(".submit").css("display","none");
        $(".play-again").css("display","inline-block");
    } 
    else
    {
        $(".result").text("Try Again !!");
        $(".result").css("color","red");
        $(".tens").val("0");
        $(".fives").val("0");
        $(".ones").val("0");
    }
});

$("#GreedyAlgo").on("click", ".play-again", function(){
    SetValues();
    $(".result").text("  ");
    $(".submit").css("display","inline-block");
    $(".play-again").css("display","none");
});