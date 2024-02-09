const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
"q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
"!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let btn=document.querySelector('.btn');
let para=document.querySelector('.para');
let para1=document.querySelector('.para1');
let input=document.querySelector('.input');

btn.addEventListener('click', function(e) {
   let password=''
    for (let i = 1; i <=input.value; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        let randomChar = characters[randomIndex];
        password+=randomChar
    } 
    para.innerHTML=password;
    });

    btn.addEventListener('click', function(e) {
        let password=''
         for (let i = 0; i <input.value; i++) {
             let randomIndex = Math.floor(Math.random() * characters.length);
             let randomChar = characters[randomIndex];
             password+=randomChar
         } 
         para1.innerHTML=password;
         });