const email = "dorothy@mail.com";
let valid = false

let decomposed = email.split("")
for (i=0; i<decomposed.length; i++){
    if (decomposed[i]==="@") {
        valid = true
    }
}
console.log(valid)
