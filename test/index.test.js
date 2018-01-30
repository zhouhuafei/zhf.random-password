const randomPassword = require('../dist/index.min');

test(`随机密码1,2,3,4,5,6,7,8,31位数`, () => {
    console.log(randomPassword(1));
    console.log(randomPassword(2));
    console.log(randomPassword(3));
    console.log(randomPassword(4));
    console.log(randomPassword(5));
    console.log(randomPassword(6));
    console.log(randomPassword(7));
    console.log(randomPassword(8, {hasCharacter: false}));
    console.log(randomPassword(31, {hasCharacter: false}));
    expect(true).toEqual(true);
});
