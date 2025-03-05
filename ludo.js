var score1=0,score2=0,win=0,chance=1;

const p1=document.getElementById("player1name");
const p2=document.getElementById("player2name");
const stbtn=document.getElementById("start");

function checkinput()
{
    if(p1.value!==''&&p2.value!='')
    {
        stbtn.disabled=false;
    }
    else{
        stbtn.disabled=true;
    }
}

p1.addEventListener('input',checkinput);
p2.addEventListener('input',checkinput);

function StartGame()
{
    document.getElementById("player1").innerHTML=p1.value;
    document.getElementById("player_1").innerHTML=p1.value;

    document.getElementById("player2").innerHTML=p2.value;
    document.getElementById("player_2").innerHTML=p2.value;


    p1.disabled=true;
    p2.disabled=true;
    stbtn.disabled=true;
    document.getElementById("reset").disabled=false;
    document.getElementById("roll_Dice").disabled=false;
   
}

function switchPlayer()
{
    if(chance==1)
    {
        document.getElementById("roll_Dice").disabled=false;
        document.getElementById("roll_Dice2").disabled=true;
    }
    else
    {
        document.getElementById("roll_Dice2").disabled=false;
        document.getElementById("roll_Dice").disabled=true;
    }
}

function Playing1()
{
    score1=Number(document.getElementById("p1Score").innerHTML);
    let r1= Math.floor((Math.random()*6)+1);

    switch(r1)
    {
        case 1:{
            document.getElementById("dice1").src="RollOnepic.jpg"
            break;
        }
        case 2:{
            document.getElementById("dice1").src="RollTwopic.jpg"
            break;
        }
        case 3:{
            document.getElementById("dice1").src="Roll3pic.jpg"
            break;
        }
        case 4:{
            document.getElementById("dice1").src="Roll4pic.jpg"
            break;
        }
        case 5:{
            document.getElementById("dice1").src="Roll5pic.jpg"
            break;
        }
        case 6:{
            document.getElementById("dice1").src="RollSixpic.jpg"
            break;
        }
        default:{
            break;
        }
    }

    if(r1==6)
    {
        chance=2;
        switchPlayer();
    }
    else{
        score1=score1+r1;
    document.getElementById("p1Score").innerHTML=score1;
    if(score1>=100)
        {
            alert(p1.value+" is the winner");
        }
    }

    
    
}


function Playing2()
{
    score2=Number(document.getElementById("p2score").innerHTML);
    let r2= Math.floor((Math.random()*6)+1);

    switch(r2)
    {
        case 1:{
            document.getElementById("dice6").src="RollOnepic.jpg"
            break;
        }
        case 2:{
            document.getElementById("dice6").src="RollTwopic.jpg"
            break;
        }
        case 3:{
            document.getElementById("dice6").src="Roll3pic.jpg"
            break;
        }
        case 4:{
            document.getElementById("dice6").src="Roll4pic.jpg"
            break;
        }
        case 5:{
            document.getElementById("dice6").src="Roll5pic.jpg"
            break;
        }
        case 6:{
            document.getElementById("dice6").src="RollSixpic.jpg"
            break;
        }
        default:{
            break;
        }
    }

    if(r2==6)
    {
        chance=1;
        switchPlayer();
    }
    else{
    score2=score2+r2;
    document.getElementById("p2score").innerHTML=score2;
    if(score2>=100)
        {
            alert(p2.value +" is the winner");
      }
    }
}