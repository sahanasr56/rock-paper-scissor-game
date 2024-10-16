let choices= document.querySelectorAll(".choice");
let detail=document.querySelector(".details");
let userId=document.querySelector("#user-id");
let compId=document.querySelector("#comp-id");
let newGame=document.querySelector("#new");

let userCount=0;
let compCount=0;

const compSelection=()=>{
    let options=["rock", "paper", "scissor"];
    let randomNum=Math.floor(Math.random()*3);
    return options[randomNum];
}

const checkResult=(user,comp)=>{
    let result=true;
    if(user===comp){
        detail.innerText="Game is Draw"
    }else{
        if(user==="rock"){
            // Comp has paper or scissor
            result=comp==="paper"? false:true;
        }else if(user==="paper"){
            // Comp has rock or scissor
            result=comp==="rock"?true:false;
        }else{
            // Comp has rock or paper
            result=comp==="paper"?true:false;
        }

        if(result){
            userCount++;
            detail.innerHTML=`<p>Computer choose ${comp}</p><p class='win'> You win!</p>`;
            userId.innerText=userCount;
        }else{
            compCount++;
            detail.innerHTML=`<p>Computer choose ${comp}</p><p class='lose'>You lose:)</p>`;
            compId.innerText=compCount;
        }
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        let userChoice=choice.getAttribute("id");
        let compChoice=compSelection();
        checkResult(userChoice,compChoice);
        newGame.classList.remove("hide");
    })
})

newGame.addEventListener("click",()=>{
    userCount=0;
    compCount=0;
    detail.innerText="Who will win?";
    userId.innerText=0;
    compId.innerText=0;
    newGame.classList.add("hide");

})