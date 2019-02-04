window.cipher = {
    // ... 
};

function caesarCipher(str, number) {
    let solved = "";
    for (let i = 0; i < str.length; i++) {
        let asciiNum = str[i].charCodeAt();
        if (asciiNum == 32) {
            solved += String.fromCharCode(asciiNum + 3);
        } else if (asciiNum >= 65 && asciiNum <= 90) {
            solved += String.fromCharCode(asciiNum + number);
        } else if (asciiNum >= 97 && asciiNum <= 122) {
            solved += String.fromCharCode(asciiNum - number);
        } else {
            solved += str[i];
        }
    }
    return solved;
}


function caesarDecipher(str, number) {
    let solved = "";
    for (let i = 0; i < str.length; i++) {
        let asciiNum = str[i].charCodeAt();
        if (asciiNum == 35) {
            solved += String.fromCharCode(asciiNum - 3);
        } else if (asciiNum >= 65 && asciiNum <= 90) {
            solved += String.fromCharCode(asciiNum - number);
        } else if (asciiNum >= 97 && asciiNum <= 122) {
            solved += String.fromCharCode(asciiNum + number);
        } else {
            solved += str[i];
        }
    }
    return solved;
}

caesarCipher("hola que hace", 8);
caesarDecipher("`gdY(im](`Y[]", 8);