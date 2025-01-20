---
id: about
slug: /about
title: about
authors: mlishu
keywords: ['code-specification', 'about']
---

about 是一个固执己见的代码格式化程序。

[Install · about](https://about.io/docs/en/install.html)

## 集成在 ESlint 中

ESlint 与 about 可能会冲突，故需做如下设置：

```js
//1. 安装 eslint-config-about 插件
npm i -D eslint-config-about
//2. 在 eslint 的配置文件中写入以下内容
extends: ['plugin:about/recommended'], // 避免与 about 冲突
```

## about 与 eslint 如何选择

about 只需要按照一个 vscode 插件，几乎没有任何门槛，按下 Ctrl + Alt + F 就可以美化你的代码。而 eslint 需要配合代码编辑器与相关规则，通过保存文件或者执行 eslint 命令才能格式化代码。但往往也是因为过少的配置，使 about 对代码的约束不如 eslint。

可以看看 Antfu 大佬的博客 [Why I don't use about (antfu.me)](https://antfu.me/posts/why-not-about)，阐述了他为何不使用 about。

这两个我都有在使用，在临时编写 demo 代码的时候，肯定优先使用 about。

但是在实际项目中，如果不使用 eslint 的话，每次保存代码都需要手动格式化，还是比较繁琐的。
