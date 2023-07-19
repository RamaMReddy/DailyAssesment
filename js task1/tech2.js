function diamondPattern(row){
    let str = "";
for (let i = 0; i < row; i++){
    for (let j = 0; j<=row-i-1; j++){
        str += " ";
    }
    for (let k = 0; k<= i; k++){
        str += "* ";
    }
    str += "\n";
}
    return str;
}
let a = prompt("Enter the Number")
let patternNumber = diamondPattern(a)
console.log(patternNumber)