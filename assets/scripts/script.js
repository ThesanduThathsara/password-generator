const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

document.getElementById("password1").disabled = true;
document.getElementById("password2").disabled = true;

function generatePassword() {

    document.getElementById("password1").disabled = false;
    document.getElementById("password2").disabled = false;

    let passwordOption1 = characters[Math.floor(Math.random() * characters.length)];
    let passwordOption2 = characters[Math.floor(Math.random() * characters.length)];

    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");

    for (let i = 0; i < 14; i++) {
        passwordOption1 += characters[Math.floor(Math.random() * characters.length)];
        passwordOption2 += characters[Math.floor(Math.random() * characters.length)];

    }
    password1.value = passwordOption1;
    password2.value = passwordOption2;

}

function copyPassword1() {
    let copyText1=document.getElementById("password1");
    copyText1.select();
    copyText1.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText1.value);
    alert("Passwords Copied!");
}

function copyPassword2() {
    let copyText2=document.getElementById("password2");
    copyText2.select();
    copyText2.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText2.value);
    alert("Passwords Copied!");
}
