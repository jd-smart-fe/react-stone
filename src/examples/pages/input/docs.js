const desc = `
  # Input 输入框
  输入框组件，通过鼠标或键盘输入内容，是最基础的表单域的包装。

`;

const base = `
  \`\`\`jsx
    import { Input } from 'react-stone';

    ReactDOM.render(
      <div>
        <Input />
        <Input placeholder="placeholder" />
      </div>
      , mountNode
    );
  \`\`\`
`;

const size = `
  \`\`\`jsx
    import { Input } from 'react-stone';

    ReactDOM.render(
      <div>
        <Input size="small" />
        <Input size="base" />
        <Input size="large" />
      </div>
      , mountNode
    );
  \`\`\`
`;

const disabled = `
  \`\`\`jsx
    import { Input } from 'react-stone';

    ReactDOM.render(
      <div>
        <Input disabled={true} placeholder="不可输入" />
      </div>
      , mountNode
    );
  \`\`\`
`;

const value = `
  \`\`\`jsx
    import { Input } from 'react-stone';

    ReactDOM.render(
      <div>
        <Input value={ 123 }/>
      </div>
      , mountNode
    );
  \`\`\`
`;

const type = `
  \`\`\`jsx
    import { Input } from 'react-stone';

    ReactDOM.render(
      <div>
        <Input type="password" />
      </div>
      , mountNode
    );
  \`\`\`
`;


const addon = `
  \`\`\`jsx
    import { Input } from 'react-stone';

    ReactDOM.render(
      <div>
        <Input addonBefore="http://" addonAfter=".com" />
        <Input addonBefore="搜索框" addonAfter={<Icon type='search' />} />
      </div>
      , mountNode
    );
  \`\`\`
`;

const radius = `
  \`\`\`jsx
    import { Input } from 'react-stone';

    ReactDOM.render(
      <div>
        <Input radius="radius"/>
      </div>
      , mountNode
    );
  \`\`\`
`;

const maxlength = `
  \`\`\`jsx
    import { Input } from 'react-stone';

    ReactDOM.render(
      <div>
        <Input maxLength={5} />
      </div>
      , mountNode
    );
  \`\`\`
`;

const api = `
  ## Options

  属性名   |    类型   |     默认值     |     说明
  ----    | ----    | ----    | ----    |
  value  | String  | 无 |  input的值
  type  | String  | text |  声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%E5%B1%9E%E6%80%A7)(文本输入域请使用Textarea组件)。
  addonBefore | String or ReactNode | 无 | 带标签的 input，设置前置标签
  addonAfter | String or ReactNode | 无 | 带标签的 input，设置后置标签
  disabled | Boolean | false | 是否禁用状态，默认为 false
  placeholder  | String  | 无 |  未输入时的提示
  size | String | 'base' | 输入框的宽度，可选值 'small', 'base', 'large'
  name | String | 无 | 表单字段名称
  maxLength | String | 无 | 输入框可输入的最大长度
  radius | String | 无 | 输入框为圆角，选值为：radius

  ## Events
  方法名称   |    说明    |    参数    |
  ----    | ----      | ----        |
  onChange  | 在input的值改变时触发 | 待确认
`;

export {
  desc,
  base,
  size,
  disabled,
  value,
  type,
  addon,
  radius,
  maxlength,
  api,
};
