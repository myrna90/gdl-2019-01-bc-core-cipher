window.cipher = {
    encode: (string, offset) => {
        let solved = "";
        for (let i = 0; i < string.length; i++) {
            let asciiNum = string[i].charCodeAt();
            if (asciiNum == 32) {
                solved += String.fromCharCode(asciiNum + 3);
            } else if (asciiNum >= 65 && asciiNum <= 122) {
                solved += String.fromCharCode(asciiNum + offset);
            } else {
                solved += string[i];
            }
        }
        return solved;
    },


    decode: (string, offset) => {
        let solved = "";
        for (let i = 0; i < string.length; i++) {
            let asciiNum = string[i].charCodeAt();
            if (asciiNum == 35) {
                solved += String.fromCharCode(asciiNum - 3);
            } else if (asciiNum >= 65 && asciiNum <= 122) {
                solved += String.fromCharCode(asciiNum - offset);
            } else {
                solved += string[i];
            }
        }
        return solved;
    }
};