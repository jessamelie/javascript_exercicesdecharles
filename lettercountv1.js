const str = "le code c'est super !";
let counter = 0;

function eachLetter(message){
    return message.split("");
}
eachLetter(str)
console.log(eachLetter(str))

function seekLetter(){
 for (i=0; i<eachLetter(str).length; i++){
    if (eachLetter(str)[i]==="e"){
        counter++
    }
 }
}
seekLetter()
console.log(counter)