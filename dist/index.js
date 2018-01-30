'use strict';

var extend = require('zhf.extend');
var randomNum = require('zhf.random-num');

function randomPassword() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
    var opts = arguments[1];

    opts = extend({
        hasLowerCase: true, // 是否有小写字母
        hasUpperCase: true, // 是否有大写字母
        hasNumber: true, // 是否有数字
        hasCharacter: true // 是否有特殊字符
    }, opts);
    var result = '500-ParamsError';
    if (length >= 4 && length <= 16) {
        var rule = {
            hasLowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
            hasUpperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            hasNumber: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            hasCharacter: ['.', '+', '-', '*', '/', '%', '!', '@', '#', '$', '^', '&']
        };
        Object.keys(rule).forEach(function (key) {
            if (!opts[key]) {
                delete rule[key];
            }
        });
        var ruleNew = [];
        Object.keys(rule).forEach(function (key) {
            return ruleNew.push(rule[key]);
        });
        var ruleNewLen = ruleNew.length;
        if (ruleNewLen !== 0) {
            var resultNew = [];
            var _ruleNewLen = ruleNew.length;
            for (var i = 0; i < length; i++) {
                var nowIndex = i % _ruleNewLen;
                var ruleItem = ruleNew[nowIndex];
                var ruleItemLen = ruleItem.length - 1;
                resultNew.push(ruleItem[randomNum(ruleItemLen)]);
            }
            result = resultNew.sort(function () {
                return Math.random() - 0.5;
            }).join('');
        }
    }
    return result;
}

module.exports = randomPassword;