## 如何参与 react-stone 的开发

#### 初始化项目:

```bash

git clone https://github.com/jd-smart-fe/react-stone.git

cd react-stone

npm install

npm start

```

#### 代码目录结构

- 目前组件相关的代码都在`src`目录下。
- 目前执行npm start启动的页面是组件调试页面，对应的文件是App.js。

```
packages/zent
├── __tests__       # 测试
├── assets          # 样式代码
├── docs            # 一些文档
├── scripts         # 一些脚本，用于测试、发布等
├── src             # 组件源码
├── typings         # typescript 的定义文件
```

#### 添加新组件

主要步骤：

- 在`src/components`目录下添加新的文件夹
- 添加 Javascript 代码
- 添加样式代码
- 添加文档
- 查看组件效果，可在App.js文件里引入该组件进行调试


#### 文件命名

* 组件js文件首字母大写，样式文件首字母小写
* 文件夹名字用驼峰，例如 `DragSort`


## 组件文档如何编写

每个组件根目录下都有一个 README 文件，`readme.md` 。组件文档采用 Markdown 格式，具体书写规范请参考 [组件文档书写规范](markdown)。

## 一些实用技巧

#### 组件互相引用

比如说 `Dialog` 里面引用了 `Portal` 组件，代码里支持 `import Portal from 'portal';` 这样去引用，不需要写相对路径。

#### 组件导出

为了统一管理，每个组件只能 `export default` 一个东西，如果需要导出多个变量，请把其余变量挂载在 `export default` 的变量上。

导出的组件不要写成 [Functional Component](https://facebook.github.io/react/docs/refs-and-the-dom.html#refs-and-functional-components)，这样子使用的时候没法加 `ref`，虽然不推荐用 `ref`，但是我们应该支持在组件上加 `ref`。

#### 样式

组件样式使用 `precss`，语法请参考 [precss 文档](https://github.com/jonathantneal/precss).

#### 关于 z-index

为了防止 `z-index` 滥用，我们规定了组件库内部的 `z-index` 使用规范。

`z-index` 优先级（从高到低）：

* 特殊组件：Notify 永远在最上面，[10000, +∞)
* 小范围的 ‘用完就关’ 的组件：Pop, Select, Datetimepicker, ColorPicker, Cascader 等 [2000, 3000)
* 全屏幕的组件：Dialog, image-preview 等 [1000, 2000)
* 其他：组件内部用来控制层次的 z-index 的区间 [-10, 10]，尽可能写小，一般1，2，3这种就够了。