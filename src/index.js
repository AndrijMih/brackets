module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 === 1) {
        return false;
    }
    let newArray = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        newArray = newArray.concat(bracketsConfig[i]);
    }
    let newStr = newArray.join('');
    let tempStr = '';
    let i = 0;
    let temp = 0;
    while (i < str.length) {
        if (tempStr === '') {
            tempStr = tempStr + str[i];
            for (let j = 0; j < newStr.length; j++) {
                if (j % 2 === 0) {
                    if (tempStr[tempStr.length - 1] === newStr[j]) {
                        temp = j;
                    }
                }
            }
        } else {
            for (let j = 0; j < newStr.length; j++) {
                if (j % 2 === 0) {
                    if (tempStr[tempStr.length - 1] === newStr[j]) {
                        temp = j;
                    }
                }
            }
            if (str[i] === newStr[temp + 1]) {
                tempStr = tempStr.slice(0, -1);
            } else {
                for (let j = 0; j < newStr.length; j++) {
                    if (j % 2 === 0) {
                        if (str[i] === newStr[j]) {
                            tempStr = tempStr + str[i];
                            break;
                        }
                    } else {
                        if (j !== temp + 1) {
                            if (str[i] === newStr[j]) {
                                return false;
                            }
                        }
                    }
                }
            }
        }
        i++;
    }

    if (tempStr === '') {
        return true;
    } else {
        return false;
    }

}
