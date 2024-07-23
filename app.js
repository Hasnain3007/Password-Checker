// var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '1', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//     var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'N', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
//     var symble = ['@', '#', '$', '%', '&', '*',]
// var numarr= ['1','2','3','4','5','6','7','8','9','0']
// var lower = document.getElementById("lower")
// var number = document.getElementById("number")
// setInterval(()=>{
//     // console.log(inputValue)
//     var input = document.getElementById("inp")
//     var inputValue =input.value 
//     for (let i = 0; i < inputValue.length; i++) {
//             if (inputValue[i] == lowerCase[i]) {
//                     lower.style.color = "#268600"
//                     lower.style.textDecoration= 'none';
//                 }else if (inputValue[i] != lowerCase[i]) {
    //                                     lower.style.color='#9e9e9e'
    //                                     lower.style.textDecoration= 'line-through';
    
//                     }  
//                 }
//             },100)

            
let inp = document.getElementById('inp');
let letter = document.getElementById('limit');
let upper = document.getElementById('upper');
let special = document.getElementById('spacial');
let lower = document.getElementById('lower');
let number = document.getElementById('number');

let lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz'.split('');
let upperCaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let numberArr = '0123456789'.split('');
let specialCharacters = '@!#$%^&*<>?/'.split('');     

function showPassword() {
    let inpValue = inp.value;
    console.log(inpValue);

    let hasLower = false;
    let hasUpper = false;
    let hasNumber = false;
    let hasSpecial = false;

    for (let i = 0; i < inpValue.length; i++) {
        let characters = inpValue[i]
        for (let j = 0; j < lowerCaseLetter.length; j++) {
            if (characters == lowerCaseLetter[j]) {
                hasLower = true
                break
            }
        }
        for (let j = 0; j < upperCaseLetter.length; j++) {
            if (characters == upperCaseLetter[j]) {
                hasUpper = true
                break
            }
        }
        for (let j = 0; j < upperCaseLetter.length; j++) {
            if (characters == specialCharacters[j]) {
                hasSpecial = true
                break
            }
        }
        for (let j = 0; j < numberArr.length; j++) {
            if (characters == numberArr[j]) {
                hasNumber = true
                break
            }
        }
    }
    
    if (hasLower) {
        lower.style.color = "#268600"
        lower.style.textDecoration= 'none'; }
        else{
            lower.style.color='#9e9e9e'
            lower.style.textDecoration= 'line-through'
        }
        if (hasUpper) {
            upper.style.color = "#268600"
            upper.style.textDecoration= 'none'; 
        }
        else{
            upper.style.color='#9e9e9e'
            upper.style.textDecoration= 'line-through'
        }
        if (hasSpecial) {
            special.style.color = "#268600"
            special.style.textDecoration= 'none'; 
        }
        else{
            special.style.color='#9e9e9e'
            special.style.textDecoration= 'line-through'
        }
        if (hasNumber) {
            number.style.color = "#268600"
            number.style.textDecoration= 'none'; 
        }
        else{
            number.style.color='#9e9e9e'
            number.style.textDecoration= 'line-through'
        }
        if (inpValue.length >= 8) {
            letter.style.color = "#268600"
            letter.style.textDecoration= 'none'; 
        }
        else{
            letter.style.color='#9e9e9e'
            letter.style.textDecoration= 'line-through'
    }
    
}