var input = document.getElementById("inp")
var lower = document.getElementById("lower")
console.log(input.value)

// for (let i = 0; i < input.value.length; i++) {
//     if (input.value[i] == 'o') {
//         alert('ok')
//     }    
// }

setInterval(() => {
    for (let i = 0; i < input.value.length; i++) {
        if (input.value[i] == 'o') {
            // lower.style.'color: #ffaf00;'

        }    
    }
}, 1000);