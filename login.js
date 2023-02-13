function ValEmail(){
    let eml= document.getElementById("eml");
    let erroremail = document.getElementById("erroremail");
    let regxeml= /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if(regxeml.test(eml.value)==true){
        erroremail.innerHTML="valid format";
        erroremail.style.color='green';
       eml.style.border="2px solid green"
        return true;
    }
    else{
        erroremail.innerHTML="Invalid format";
        erroremail.style.color='red';
        eml.style.border="2px solid red";
        return false;
    }


}

function ValPwd() {
    let pwd = document.getElementById("pwd");
    let errorpwd = document.getElementById("errorpwd");
    pwd.addEventListener("input", function() {
      let strength = getPasswordStrength(pwd.value);
    //   errorpwd.textContent = strength;
    //   errorpwd.className = strength.toLowerCase();
    });
    
    function getPasswordStrength(pwd) {
      let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
      let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    
      
    let errorpwd = document.getElementById("errorpwd");
      
      if (strongRegex.test(pwd)==true) {
        let pwd = document.getElementById("pwd");
        errorpwd.innerHTML="Strong";
                errorpwd.style.color='green';
               pwd.style.border="2px solid green"
                return true;
      }  if (mediumRegex.test(pwd)) {
        let pwd = document.getElementById("pwd");
        errorpwd.innerHTML="Medium";
            errorpwd.style.color='orange';
            pwd.style.border="2px solid orange"
            return false;
        
  
    }else {
      let pwd = document.getElementById("pwd");
      errorpwd.innerHTML="Poor";
          errorpwd.style.color='red';
          pwd.style.border="2px solid red"
          return false;
    }
    
}
}

function togglePassword(){
  var password = document.getElementById("pwd");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
  
}

 function ValCpwd(){
    
    let pwd= document.getElementById("pwd");
    let cpwd= document.getElementById("cpwd");
    let cpwderror=document.getElementById("errorcpwd");
    
    if(pwd.value!= cpwd.value){
        cpwderror.innerHTML="Password does not match";
        cpwderror.style.color='red';
        cpwd.style.border="2px solid red"
        return false;
    }
    else{
        cpwderror.innerHTML="Password Match!!!";
        cpwderror.style.color= 'green';
        cpwd.style.border="2px solid green"
        return true;
    }
    
  }
  

function ValForm(){
  if(ValCpwd()){
    if(getPasswordStrength()){
      if(ValEmail()){
        return true;
      }
      else{
        return false;
      }
    }else{
       return false;
    }
  
  }else{
    return false;
  }
}