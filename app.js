let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgame = document.querySelector("#new_game");
let msgcontainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");

let turnX= true;//playerX,playerO
const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
    if(turnX){
    box.innerText="X";
    turnX=false;
   }
   else{
    box.innerText="O";
    turnX=true;
   }
   checkWinner();
});
});
const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner = (winner) =>{
   msg.innerText=`Congratulations!! Winner is ${winner}`;
   msgcontainer.classList.remove("hide");
   disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
    
     let pos1=boxes[pattern[0]].innerText;
     let pos2=boxes[pattern[1]].innerText;
     let pos3=boxes[pattern[2]].innerText;

     if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1==pos2 && pos2==pos3){
          showWinner(pos1);

        }
     }
    }
};
 
const resetgame=()=>{
    turnX=true;
    enableBoxes();
    msgcontainer.classList.add("hide");

}
resetBtn.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);

