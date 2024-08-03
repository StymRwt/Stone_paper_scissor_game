const choices=document.querySelectorAll('.choice');
const result=document.querySelector('#res');

let userScore=0;
let botScore=0;
 
const you= document.querySelector('#your');
const bot= document.querySelector('#bot');



const genCompChoice =() =>{
    let option=['stone','paper','scissor']
    let rIdx=Math.floor(Math.random() *3);
    return option[rIdx];
}

let showWinner =(userWin) =>{
    if(userWin){
        console.log(' user win');
        userScore++;
        you.innerText=(userScore)
        result.innerText=('YOU WIN')
        result.style.backgroundColor="green"
    }else{
        console.log(' user loose');
        botScore++;
        bot.innerText=(botScore);
        result.innerText=('YOU LOOSE');
        result.style.backgroundColor="red"
    }
};


const play=(userChoice) =>{
    console.log("user choice",userChoice)
    const comChoice=genCompChoice ();
    console.log('bot choice is',comChoice);


    if (userChoice===comChoice){
        console.log(" game was draw");
        result.innerText=("GAME WAS DRAW");
        result.style.backgroundColor="blue"
    }

    else{
        let userWin =true;
        if(userChoice=="stone"){
            userWin =comChoice==="paper" ? false :true;
            
        }
        else if(userChoice=="paper"){
            userWin =comChoice==="scissor" ? false:true;
        }
        else{
            userWin=comChoice==="stone" ? false :true;
        }
        showWinner(userWin);
    }

   
    
};


choices.forEach((choice) =>{
    choice.addEventListener('click',() =>{
        const userChoice=choice.getAttribute("id");
        play(userChoice);
       
        
       
    });
});
