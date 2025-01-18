---
title: Python实验4：序列
slug: Python4
date: 2024-11-17
authors: mlishu
tags: [代码, Python]
keywords: [代码, Python]
---

在进行Python学习时，进行了实验，于是将其整理出来，供大家参考。

<!-- truncate -->

## 1.输入一个非空字符串，去除重复的字符后，从小到大排序，输出为一个新字符串。

```Python
def process_string(s):
    unique_sorted_chars = sorted(set(s))
    return ''.join(unique_sorted_chars)

s = input("请输入一个非空字符串：")

result = process_string(s)
print("去除重复字符后并排序的新字符串是:", result)
```

### 例子

APP 例子：隐约

具体如何拉取证书，就是安卓逆向相关的部分了，这里我也只提供证书文件，不提供 app。

贴上下载地址及密码

证书: https://img.mlishu.cn/cert.p12

密码: `xinghekeji888.x`

### 证书转化

[证书格式转换 (myssl.com)](https://myssl.com/cert_convert.html)

[SSL 在线工具-在线证书格式转换-证书在线合并-p12、pfx、jks 证书在线合成解析-SSLeye 官网](https://www.ssleye.com/ssltool/jks_pkcs12.html)

也可使用 OpenSSL 工具来进行转化证书

## HTTP 发送请求

### node 的 axios

```javascript
const axios = require('axios').default
const fs = require('fs')
const https = require('https')

axios
  .post(
    `https://app.yyueapp.com/api/passLogin`,
    {
      mobile: '15212345678',
      password: 'a123456',
    },
    {
      httpsAgent: new https.Agent({
        cert: fs.readFileSync('./cert.cer'),
        key: fs.readFileSync('./cert.key'),
        // pfx: fs.readFileSync('./cert.p12'),
        // passphrase: 'xinghekeji888.x,
      }),
    },
  )
  .then((res) => {
    console.log(res.data)
  })
  .catch((error) => {
    console.log(error.response.data)
  })
```

如果没有配置 httpsAgent，也就是没有配置证书，那么返回 400 错误 `400 No required SSL certificate was sent`。

配置成功将会得到正确的响应结果

```javascript
{ code: 998, msg: '系统维护中...', data: null }
```

### python 的 requests

requests 不支持 p12 格式的证书，所以需要使用其他的证书格式，如下

```python
import requests

r = requests.post('https://app.yyueapp.com/api/passLogin', data={
                  'mobile': '15212345678', 'password': 'a123456'}, cert=('./cert.cer', './cert.key'))
print(r.status_code)
print(r.text)
```
