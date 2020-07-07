const userInput=document.getElementById('userNum');
const allCard=document.getElementById('all_card');
const gmId=document.getElementById('gram_display');
const mgramId=document.getElementById('mgm_display');
const ounceId=document.getElementById('ounce_display');
const poundId=document.getElementById('pound_display');
const tonId= document.getElementById('ton_display');

allCard.style.visibility='hidden';

function cal(ele){
    allCard.style.visibility='visible';
    const num=ele.value;
    const gm=num*1000;
    const mgram=num*1000000;
    const ounce=num/0.02834952;
    const pound=num/0.45359237;
    const ton=num/1000;

    //check number is positive or not 
    if(num < 0){
        alert('Enter Positive Number');
        userInput.value='';
        gmId.innerHTML='';
        mgramId.innerHTML='';
        ounceId.innerHTML='';
        poundId.innerHTML='';
        tonId.innerHTML='';
    }else{
        gmId.innerHTML=gm;
        mgramId.innerHTML=mgram;
        ounceId.innerHTML=ounce;
        poundId.innerHTML=pound;
        tonId.innerHTML=ton;
    }
    
}