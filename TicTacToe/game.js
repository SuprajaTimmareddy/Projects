let boxes=document.querySelectorAll('.box');
let resetGameBtn=document.querySelector('#reset-btn');
let newGameBtn=document.querySelector('#new-btn');
let msgcont=document.querySelector('.msg-container');
let msgg=document.querySelector('#msg');

let turn0=true;

const winPat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [3,5,8],
    [0,4,8],
    [2,4,6]
];
//filling boxes
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
// reset game funtion
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgcont.classList.add("hide");
};
// disable buttons function
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
//Enable buttons funtion
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
// winner announcing message function
const showWinner=(winner)=>{
    msgg.innerText=`Congratulations, Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableBoxes();
};
// winner checker function
const checkWinner=()=>{
    for(let pat of winPat){
        let posVal1=boxes[pat[0]].innerText;
        let posVal2=boxes[pat[1]].innerText;
        let posVal3=boxes[pat[2]].innerText;
        if(posVal1 !="" && posVal2 != "" && posVal3 !=""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                console.log("Winner",posVal1);
                showWinner(posVal1);
            }
        }
    }
};

resetGameBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);