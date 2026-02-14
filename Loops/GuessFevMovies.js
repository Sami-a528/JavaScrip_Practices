const FevMovie = "Avatar";
let Guess = prompt("Guess My fevorite movie");

while((Guess != FevMovie) && (Guess != "quit")){
    Guess = prompt("Wrong Guess. Please Try Again !");
}
if(Guess == FevMovie){
    console.log("Congrats!!");
}else{
    console.log("You Quit");
}