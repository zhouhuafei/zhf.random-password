# 随机密码
* 安装
```
npm i --save zhf.random-password
```
* 应用
```
const randomPassword = require('zhf.random-password');
```

# 第一参数密码长度
* 密码长度默认是6位
```
randomPassword(); // r6!QkV
randomPassword(8); // 6@2y#VsR
```

# 第二参数密码规则
* hasUpperCase 是否有大写字母(默认有)
* hasLowerCase 是否有小写字母(默认有)
* hasNumber 是否有数字(默认有)
* hasCharacter 是否有特殊字符(默认有)
```
randomPassword(8, {
    hasUpperCase: true, // 是否有大写字母
    hasLowerCase: true, // 是否有小写字母
    hasNumber: true, // 是否有数字
    hasCharacter: false, // 是否有特殊字符
}); // Skb64yGI
```


