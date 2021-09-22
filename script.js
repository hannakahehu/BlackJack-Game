let firstCard= 10
let secondCard= 4
let myCard= firstCard+secondCard
let message= ""
let hasBlackJack=false
let isAlive= true


//console.log("messageEl");


function startNewGame(){
  let messageEl=document.getElementById("mama")
  let sumEl= document.getElementById("sum")
  let cardEl= document.getElementById("card")
  
  

  messageEl.textContent= message
  sumEl.textContent= "Sum:" +myCard 
  cardEl.textContent="My cards:"+firstCard +", " + secondCard
 // console.log(sumEl)
  //let sumEl =document.getElementById("sum").innerHTML
  //document.getElementById("sum").innerHTML=( "Sum:"+myCard)
  

if( myCard<=20){

message="Draw another Card"

}
else if (myCard===21){
  message=" you won the Game  !"
  hasBlackJack=true
}
else{
  message="Game over !"
  isAlive=false
}
//messageEl.textContent = message
//console.log(message)                                                                                 
// console.log(myCard)
// c onsole.log(hasBlackJack)
}
function newCard(){
  console.log("draw new card")
  let  mydcard = 2;
   myCard += mydcard
   startNewGame()

  
 
}
