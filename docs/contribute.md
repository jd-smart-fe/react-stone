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
src
├── components       # 包含所有组件的文件夹
├── example          # 目前存放的是构建官网的代码，后期会调整为示例代码目录
├── lib              # 一些公用的js文件
├── style            # 一些公用的样式
├── App.js           # 开发环境的调试区域
├── index.js         # 打包的入口文件，用于导出组件
```

#### 添加新组件

主要步骤：

- 在`src/components`目录下添加新的文件夹
- 添加 Javascript 代码
- 添加样式代码
- 添加文档
- 查看组件效果，可在App.js文件里引入该组件进行调试
- 如果想发布该组件，在index.js中引入该组件并导出。
- 更新package.json里的版本号
- 执行npm run build
- 执行npm run publish


#### 文件命名

* 组件js文件首字母大写，样式文件首字母小写
* 文件夹名字用驼峰，例如 `DragSort`


## 组件文档如何编写

每个组件根目录下都有一个 README 文件，`readme.md` 。组件文档采用 Markdown 格式，具体书写规范请参考 [组件文档书写规范](markdown)。


#### 样式

class命名建议参考BEM命名规范，参考文档：[编写模块化CSS：BEM](https://www.w3cplus.com/css/css-architecture-1.html)
