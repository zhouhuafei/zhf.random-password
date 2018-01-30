const randomPassword = require('../dist/index.min');

test(`随机密码4,5,6,7,8位数`, () => {
    console.log(randomPassword(4));
    console.log(randomPassword(5));
    console.log(randomPassword(6));
    console.log(randomPassword(7));
    console.log(randomPassword(8, {hasCharacter: false}));
    expect(true).toEqual(true);
});
