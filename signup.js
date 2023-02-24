function ValName(){
 let nam= document.getElementById("nam");
 let nameerror= document.getElementById("nameerror");
  let regexname =  /^[a-zA-z\s]{2,20}$/i ;
  if(regexname.test(nam.value)==true){
    nameerror.innerHTML= "Valid Format"
    nameerror.style.color='green';
    nam.style.border="2px solid green";
    return true;
  }
  else{
    nameerror.innerHTML="Invalid Format";
    nameerror.style.color='red';
    nam.style.border="2px solid red";
    return false;
  }
 
}


function ValPhone(){
    let tel= document.getElementById("tel");
 let telerror= document.getElementById("telerror");
 let Regextel = /^\d{10}|\d{3}[-.]\d{3}[-.]\d{4}$|^\d{3}\s\d{3}\s\d{4}$/;
 if(Regextel.test(tel.value)==true){
    telerror.innerHTML="Valid Format";
    telerror.style.color='green';
    tel.style.border="2px solid green";
    return true
  }
  else{
    telerror.innerHTML="Invalid Format";
    telerror.style.color='red';
    tel.style.border="2px solid red"
    return false

  }
}
 
 function ValForm(){
      if(!ValName() || !ValPhone()){
        return false
      }
      else{
        return true
      }
 }
      
