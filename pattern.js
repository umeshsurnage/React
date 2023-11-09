// exp 3 
//     *
//    **
//   ***
//  ****
// *****

let star = "";
for (let i = 5; i >= 1; i--) { // 5 4 3 2 1
    for (let j = 1; j <= i; j++) {
        star = star + " "
    }
    for (let k = 5; k >= i; k--) {
        star = star + "*"
    }
    console.log(star);
    star = ""


}