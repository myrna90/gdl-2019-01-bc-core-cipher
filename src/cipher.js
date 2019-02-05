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
        } else {
            solved += str[i];
        }
    }
    return solved;
};


function caesarDecipher(str, number) {
    let solved = "";
    for (let i = 0; i < str.length; i++) {
        let asciiNum = str[i].charCodeAt();
        if (asciiNum == 35) {
            solved += String.fromCharCode(asciiNum - 3);
        } else if (asciiNum >= 65 && asciiNum <= 90) {
            solved += String.fromCharCode(asciiNum - number);
        } else {
            solved += str[i];
        }
    }
    return solved;
};