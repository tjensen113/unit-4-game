//global variable section//
//------------------------------------------------------------------------------//
var crystal={
   cry1:
   {
       name: "cry1",
       value: 0,
   },
    cry2:
    {
        name:"cry2",
        value: 0,
    },
    cry3:
    {
        name:"cry3",
        value:0,
    
    },
    cry4:
    {
        name:"cry4",
        value:0,
    },


}
var currentScore = 0
var targetScore = 0

var winsCount = 0 
var lossCount = 0


// functions
//-------------------------------------------------------------------------------//
var getRandom = function(min, max){
    return (Math.floor((Math.random()*max -min  + 1)+min))
}




var startGame = function(){
var currentScore = 0


targetScore =getRandom(19,120)

}
crystal.cry1.value = getRandom(1,12);
crystal.cry2.value = getRandom(1,12);
crystal.cry3.value = getRandom(1,12);
crystal.cry4.value = getRandom(1,12);

$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);






//ogic//
//-------------------------------------------------------------------------------//

startGame();

$(cry1).click(function(){
   

})
$(cry2).click(function(){
    

})
$(cry3).click(function(){

})
$(cry4).click(function(){
   

})

//-- i still need to finsh creating the values for the the crystals.



