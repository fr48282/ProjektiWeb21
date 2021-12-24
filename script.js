document.addEventListener("DOMContentLoaded",

function(ngjarja){
    const ButtonSubmit = document.getElementById('BtnSubmit');
const validoFormen = (ngjarje) => {

    const perdoruesi = document.getElementById('userid');
    const fjalekalimi = document.getElementById('password');
    const emri = document.getElementById('name');
    const email = document.getElementById('email');


    if(perdoruesi.value===""){
    alert('ju lutem shtoni perdoruesin')
    perdoruesi.focus();
    return false;
    }
 
    if(fjalekalimi.value===""){
        alert('ju lutem shtoni fjalekalimi')
        fjalekalimi.focus();
        return false;
    } 

    if(emri.value=== ""){
        alert('ju lutem shtoni emri')
        emri.focus();
        return false;
       }

    if(!emailValid(email.value)){
    alert('ju lutem shtoni email valid')
    email.focus();
    return false; 
    }

    return true;
  }

    const emailValid = (email) => {
        const emailRegex = /ˆ([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        return emailRegex.test(email.toLowerCase());
   
    }
    // console.log(email)
    ButtonSubmit.addEventListener('click',validoFormen);
 });