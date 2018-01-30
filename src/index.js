const extend = require('zhf.extend');
const randomNum = require('zhf.random-num');

function randomPassword(length = 6, opts) {
    opts = extend({
        hasLowerCase: true, // 是否有小写字母
        hasUpperCase: true, // 是否有大写字母
        hasNumber: true, // 是否有数字
        hasCharacter: true, // 是否有特殊字符
    }, opts);
    let result = '500-ParamsError';
    if (length >= 4 && length <= 16) {
        const rule = {
            hasLowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
            hasUpperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            hasNumber: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            hasCharacter: ['.', '+', '-', '*', '/', '%', '!', '@', '#', '$', '^', '&'],
        };
        Object.keys(rule).forEach((key) => {
            if (!opts[key]) {
                delete rule[key];
            }
        });
        let ruleNew = [];
        Object.keys(rule).forEach((key) => ruleNew.push(rule[key]));
        let ruleNewLen = ruleNew.length;
        if (ruleNewLen !== 0) {
            let resultNew = [];
            const ruleNewLen = ruleNew.length;
            for (let i = 0; i < length; i++) {
                const nowIndex = i % ruleNewLen;
                const ruleItem = ruleNew[nowIndex];
                const ruleItemLen = ruleItem.length - 1;
                resultNew.push(ruleItem[randomNum(ruleItemLen)]);
            }
            result = resultNew.sort(() => Math.random() - 0.5).join('');
        }
    }
    return result;
}

module.exports = randomPassword;
