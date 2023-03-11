const email = "dorothy@mail.com";
let valid = false

let decomposedEmail = email.split("")
for (i=0; i<decomposedEmail.length; i++){
    if (decomposedEmail[i]==="@") {
        valid = true
    }
}
console.log(valid)
