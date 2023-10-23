let str = "This is a sunny day";
let strArray = str.split(" ");
let temp = [];
for(let i = 0; i < strArray.length; i++){
    let word = strArray[i];
    let reversedWord = "";
    for(let j = word.length-1; j >= 0; j--){
        reversedWord += word[j];
    }
    temp.push(reversedWord);
}
console.log(temp.join(" "));