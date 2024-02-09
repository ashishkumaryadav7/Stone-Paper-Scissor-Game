let rock=document.querySelector('.choice1');
let paper=document.querySelector('.choice2');
let scissor=document.querySelector('.choice3');
let messagesBox = document.querySelector('.messages');
let message=document.querySelector('#message');
let userScore=document.querySelector('#userscr');
let compScore=document.querySelector('#compscr');
let reset = document.querySelector('.reset');
let userScr=0;
let compScr=0;
let yc=null;
let cc=null;


const genCompChoice = () => {
    const options = ['Rock','Paper','Scissor'];
    return options[Math.floor(Math.random()*3)];
}
const showUserWin = (uWin) =>{
    if (uWin){
        userScr++;
        message.innerHTML=`You Win ! Your ${yc} beats ${cc}`;
        messagesBox.style.backgroundColor = 'Green';
        userScore.innerHTML=userScr;
    }
    else{
        compScr++;
        message.innerHTML=`Computer Win ! ${cc} beats your ${yc}`;
        messagesBox.style.backgroundColor = 'red';
        compScore.innerHTML=compScr;
    }
}

const playGame= (val) =>{
    yc=val;
    const compChoice=genCompChoice();
    cc=compChoice;
    if(val===compChoice)
    {
        message.innerHTML=`Draw ! You Choosed ${yc} & Computer Choosed ${cc}`;
        messagesBox.style.backgroundColor = 'rgb(84, 114, 115)';
    }
    else{
        let userWin = true;
        if(val === 'Rock')
        {
            // scissor , paper
            userWin = compChoice ==='Paper'? false:true;
        }else if(val === 'Paper'){
            // rock , scissor
            userWin = compChoice === 'Scissor'?false:true;
        }else{
            // rock , paper
            userWin = compChoice === 'Rock'?false:true;
        }
        showUserWin(userWin);
    }
}

rock.addEventListener('click',() =>{
    const userChoice=rock.getAttribute("id");
    playGame(userChoice);
});
paper.addEventListener('click',() =>{
    const userChoice=paper.getAttribute("id");
    playGame(userChoice);    
});
scissor.addEventListener('click',() =>{
    const userChoice=scissor.getAttribute("id");
    playGame(userChoice);
});

reset.addEventListener('click',() => {
    userScr=0;
    compScr=0;
    userScore.innerHTML=userScr;
    compScore.innerHTML=compScr;
    message.innerHTML="Your Turn";
    messagesBox.style.backgroundColor = 'rgb(84, 114, 115)';
});