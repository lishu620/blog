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

## 1.输入一个非空字符串，去除重复的字符后，从小到大排序，输出为一个新字符串

```Python
def process_string(s):
    unique_sorted_chars = sorted(set(s))
    return ''.join(unique_sorted_chars)

s = input("请输入一个非空字符串：")

result = process_string(s)
print("去除重复字符后并排序的新字符串是:", result)
```

## 2.输入一个字符串（包括大小写字母和空格），除去空格输出在字符串中出现过的字符

```Python
def unique_characters(s):
    unique_chars = set(s.replace(" ", ""))
    return ''.join(unique_chars)

s = input("请输入一个字符串（包括大小写字母和空格）：")

result = unique_characters(s)
print("去除空格后出现过的字符:", result)
```

## 3.使用给定的整数n，编写一个程序生成一个包含(i, i*i)的字典，该字典包含1到n之间的整数(两者都包含)。然后程序打印字典

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
