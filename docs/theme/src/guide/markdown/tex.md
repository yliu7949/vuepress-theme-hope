---
icon: tex
category: markdown
---

# Tex 语法支持

让你的 VuePress 站点中的 Markdown 文件支持 $\TeX$ 语法。

## 配置

```js {3,5,6}
module.exports = {
  themeConfig: {
    markdown: {
      // 启用 TEX 支持
      tex: true
    }
  }
};
```

## 语法

### 行内语法

使用 `$codes$` 来表示。

::: details 例子

```md
Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.
```

Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.
:::

### 块语法

使用 `$$codes$$` 来表示。

::: details 例子

```md
$$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}$$
```

$$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}$$
:::

### 更多

关于具体的 Tex 语法，请看 [Katex 教程](https://vuepress-md-enhance.mrhope.site/guide/tex.html#%E8%BF%90%E7%AE%97%E7%AC%A6)
