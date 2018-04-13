const desc = `
  # Button
  按钮组件，展示型组件，不包含特定功能。
`;

const base = `
  \`\`\`jsx
    import { Button } from 'react-stone';

    ReactDOM.render(
      <div>
        <Button>Button</Button>
      </div>
      , mountNode
    );
  \`\`\`
`;

const size = `
  \`\`\`jsx
    import { Button } from 'react-stone';

    ReactDOM.render(
      <div>
        <Button size='small'>Button small</Button>
        <Button>Button base</Button>
        <Button size='large'>Button large</Button>
      </div>
      , mountNode
    );
  \`\`\`
`;

const disabled = `
  \`\`\`jsx
    import { Button } from 'react-stone';

    ReactDOM.render(
      <div>
        <Button disabled={true}>Button Disabled</Button>
      </div>
      , mountNode
    );
  \`\`\`
`;

const theme = `
  \`\`\`jsx
    import { Button } from 'react-stone';

    ReactDOM.render(
      <div>
        <Button theme='blue'>Button theme blue</Button>
        <Button theme='gray'>Button theme gray</Button>
      </div>
      , mountNode
    );
  \`\`\`
`;

const type = `
  \`\`\`jsx
    import { Button } from 'react-stone';

    ReactDOM.render(
      <div>
        <Button htmlType='submit'>Button Submit</Button>
      </div>
      , mountNode
    );
  \`\`\`
`;


const icon = `
  \`\`\`jsx
    import { Button } from 'react-stone';

    ReactDOM.render(
      <div>
        <Button icon="delete">delect</Button>
        <Button icon="upload">upload</Button>
        <Button icon="girl">girl</Button>
        <Button icon="open">open</Button>
        <Button icon="products">products</Button>
        <Button icon="data">data</Button>
        <Button icon="success">success</Button>
        <Button icon="wait">wait</Button>
      </div>
      , mountNode
    );
  \`\`\`
`;

const radius = `
  \`\`\`jsx
    import { Button } from 'react-stone';

    ReactDOM.render(
      <div>
        <Button radius='small'>Button radius small</Button>
        <Button radius='half'>Button radius half</Button>
        <Button radius='circle' icon="delete" />
      </div>
      , mountNode
    );
  \`\`\`
`;

const api = `
  ## Options

  属性名   |    类型   |     默认值     |     说明
  ----    | ----    | ----    | ----    |
  size  | String  | 'base' |  定义按钮大小，可选值 'small', 'base', 'large'。
  icon  | String  | 无  |  定义按钮图标。参考图标字体文档。
  radius | String | 'small' | 定义圆角大小， 可选 'small','half','circle'。
  disabled | Boolean | false | 是否禁用按钮。
  htmlType | String | 'button' | 设置 button 原生的 type 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button)
  theme | String | 'blue' | 按钮主题颜色，目前可选'blue','gray'。分别对应两类按钮‘确定’，‘取消’

  ## Events
  方法名称   |    说明    |    参数    |
  ----    | ----      | ----        |
  onClick | click 事件的 handler | event
`;

export {
  desc,
  base,
  size,
  disabled,
  theme,
  type,
  icon,
  radius,
  api,
};
