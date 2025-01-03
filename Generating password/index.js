const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}


function clicked(){
 
    let passSize = document.getElementById("passwordsize").value
    let passWord1 = document.getElementById("password1")
    let passWord2 = document.getElementById("password2")
    let message = document.getElementById("message")
    let randomPassword1 ="";
    let randomPassword2 ="";


    if(passSize >= 7){
     
        for( let i=0 ; i<passSize ; i++){
            randomPassword1 +=  getRandomCharacter()
            randomPassword2 +=  getRandomCharacter() 
        }
        
        setTimeout(function(){
            message.className ="show"
            
        }, 1000);
        
        passWord1.value = randomPassword1
        passWord2.value = randomPassword2
    }
        
    else{
        alert("password size must be at least 7")
    }

}




    ///////////////////////////////////////////////////////////////////




function copyClip(str){
    let btn;
    if(str == 'pass1')
    btn = document.getElementById("password1")
    else
    btn = document.getElementById("password2")

    btn.disabled = false;
    btn.select()
    document.execCommand("copy");

    if(btn.value == "")
    alert("please enter a password size")
    
    
    messageCopied()

    btn.disabled = true;
    window.getSelection().removeAllRanges();

}

function messageCopied(){
    let mess = document.getElementById("messagecopied")
    mess.className ="show"
    setTimeout (function(){
        mess.className = mess.className.replace("show","");},1000);        
}
