const desc = `
  # Radio
  - 用于在多个备选项中选中单个状态。
`;

const base = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Modal } from 'react-stone';

  class App extends Component {
    render(){
      return (
        <div>
          <Radio value={'5'} id="voiceTypezn" textname="硬件设备" />
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const checked = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Modal } from 'react-stone';

  class App extends Component {
    render(){
      return (
        <div>
          <Radio value={'5'} checked={true} id="voiceTypezn" textname="硬件设备" />
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const disabled = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Modal } from 'react-stone';

  class App extends Component {
    render(){
      return (
        <div>
          <Radio value={'5'} disabled id="voiceTypezn" textname="硬件设备" />
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const group = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Modal } from 'react-stone';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        productType: 2,
      };
    }
    productTypeChange = (val) => {
      this.setState({
        productType: val.value
      })
    }
    render(){
      return (
        <div>
          <RadioGroup
            value={this.state.productType}
            onChange={this.productTypeChange}
            name="device-type">
            <Radio value={1} id="productType1" textname="硬件设备1"></Radio>
            <Radio value={2} id="productType2" textname="软件应用2"></Radio>
          </RadioGroup>
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const api = `
  ### Radio

  属性名   |    类型   |     默认值     |     说明
  ----    | ----    | ----    | ----    |
  id  | String  | 无 |  必填，定义按钮的id。
  checked | Boolean | false | 指定当前是否选中
  value | String | '' | 定义按钮的值。
  textname  | String  | ''  |  必填，定义按钮的文字。
  disabled | Bool | false | 是否禁用按钮

  ### RadioGroup

  属性名   |    类型   |     默认值     |     说明
  ----    | ----    | ----    | ----    |
  name | String | 无 | RadioGroup 下所有 input[type="radio"] 的 name 属性
  value | String | 无 | 必填，用于设置当前选中的值


  ## Events
  方法名称   |    说明    |    参数    |
  ----    | ----      | ----        |
  onChange | 用于RadioGroup上，在选项发生变化时触发 | 当前组件的props，比如{value: 2, id: "productType2", textname: "软件应用"}
`;

export {
  desc,
  base,
  checked,
  disabled,
  group,
  api,
};
