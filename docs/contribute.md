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
- 目前执行npm start启动的页面是组件调试页面，对应的文件是`src/examples/App.js`。

```
src
├── components       # 包含所有组件的文件夹
├── examples         # 组件demo调试区域, 所有的组件在开发的时候都在这个目录下进行调试
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
- 查看组件效果，可在examples目录下引入该组件进行调试
  - 首先在`examples/components-examples`目录下建一个js文件，里面可以引用你在components里面新添加的组件，这个js文件的就是你的组件的调试区域，想怎么调就怎么调。
  - 在`examples/views/sidebar/Sidebar.jsx`文件内往componentsArr数组添加新的变量，目的是添加新的路由导航，用来跳转到你的组件调试区域。
  - 在`examples/views/content/Content.jsx`文件内引入你的组件，并添加对应的<Route>标签用来匹配你的路由
  - 这个时候，执行npm start，你应该能看到你的组件调试区。
- 如果想发布该组件，在index.js中引入该组件并导出。
- 更新package.json里的版本号
- 执行npm run build
- 执行npm publish


#### 文件命名

* 组件js文件首字母大写，样式文件首字母小写
* 文件夹名字用驼峰，例如 `DragSort`

### JavaScript规范

本项目采用的是Airbnb的Eslint配置，参考文档：[Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

### 样式规范

class命名建议参考BEM命名规范，参考文档：[编写模块化CSS：BEM](https://www.w3cplus.com/css/css-architecture-1.html)

### 其他规范

git规范及其他的规范，参考：[京东智能前端团队代码规范](https://github.com/jd-smart-fe/shared/blob/master/guide.md)

### 组件文档如何编写

每个组件根目录下都有一个 README 文件，`readme.md` 。组件文档采用 Markdown 格式，具体书写规范请参考:
- [react-stone Button组件文档](https://github.com/jd-smart-fe/react-stone/tree/master/src/components/Button)
- [Markdown语法](https://www.zybuluo.com/mdeditor?url=https%3A%2F%2Fwww.zybuluo.com%2Fstatic%2Feditor%2Fmd-help.markdown)

### 注意

- `src/index.js`是整个项目的总入口文件。包含两个部分：开发环境用的代码和发包用的代码。
- 上半部分是本地开发环境是需要的。
- 下半部分是发包需要的。
- 开发时，把下半部分注释。需要发包时，把上半部分注释。
