const desc = `
  # Transfer
  穿梭框组件，功能型组件，双栏穿梭选择框。
`;

const base = `
  \`\`\`jsx
  import React, { Component } from "react";
  import classNames from "classnames";
  import Transfer from "../../components/Transfer/Transfer.jsx";

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dataSource: [
          {
            skillId: "1",
            skillName: "京东购物",
            skillIcon:
              "http://img30.360buyimg.com/smart/jfs/t16234/93/1784364089/52704/88fca460/5a618b84Nc4024ba4.png"
          },
          {
            skillId: "2",
            skillName: "叮咚音响",
            skillIcon:
              "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
          },
          {
            skillId: "3",
            skillName: "京东到家",
            skillIcon:
              "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
          },
          {
            skillId: "4",
            skillName: "智能服务",
            skillIcon:
              "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
          },
          {
            skillId: "5",
            skillName: "智能家居",
            skillIcon:
              "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
          },
          {
            skillId: "6",
            skillName: "上门维修",
            skillIcon:
              "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
          },
          {
            skillId: "7",
            skillName: "家居控制",
            skillIcon:
              "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
          }
        ]
      };
      this.getTransferValue=this.getTransferValue.bind(this);
    }
    getTransferValue(data){
      let transferSelectedList=[];
      data.forEach(item => {
        transferSelectedList.push(item.id);
      });
      console.log('transferSelectedList——>',transferSelectedList);
      return transferSelectedList;
    }
    render() {
      return (
        <div>
        <br/>
          <Transfer
            name="skillIdList"
            dataKey="skillId"
            title="skillName"
            rightTitle="技能"
            footer
            placeholder="没有找到相关的技能"
            dataSource={this.state.dataSource}
            onChange={this.getTransferValue}
          />
        </div>
      );
    }
  }

  \`\`\`
`;

const onSearch = `
\`\`\`jsx
import React, { Component } from "react";
import classNames from "classnames";
import Transfer from "../../components/Transfer/Transfer.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          skillId: "1",
          skillName: "京东购物",
          skillIcon:
            "http://img30.360buyimg.com/smart/jfs/t16234/93/1784364089/52704/88fca460/5a618b84Nc4024ba4.png"
        },
        {
          skillId: "2",
          skillName: "叮咚音响",
          skillIcon:
            "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
        },
        {
          skillId: "3",
          skillName: "京东到家",
          skillIcon:
            "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
        },
        {
          skillId: "4",
          skillName: "智能服务",
          skillIcon:
            "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
        },
        {
          skillId: "5",
          skillName: "智能家居",
          skillIcon:
            "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
        },
        {
          skillId: "6",
          skillName: "上门维修",
          skillIcon:
            "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
        },
        {
          skillId: "7",
          skillName: "家居控制",
          skillIcon:
            "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
        }
      ]
    };
    this.getTransferValue=this.getTransferValue.bind(this);
    this.searchSkills=this.searchSkills.bind(this);
  }

  getTransferValue(data){
    let transferSelectedList=[];
    data.forEach(item => {
      transferSelectedList.push(item.id);
    });
    console.log('transferSelectedList——>',transferSelectedList);
    return transferSelectedList;
  }

  render() {
    return (
      <div>
      <br/>
        <Transfer
          name="skillIdList"
          dataKey="skillId"
          title="skillName"
          rightTitle="技能"
          onSearch
          searchEvent={this.searchSkills}
          footer
          placeholder="没有找到相关的技能"
          dataSource={this.state.dataSource}
          onChange={this.getTransferValue}
        />
      </div>
    );
  }
}


\`\`\`
`;

const itemRender = `
\`\`\`jsx
import React, { Component } from "react";
import classNames from "classnames";
import Transfer from "../../components/Transfer/Transfer.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          skillId: "1",
          skillName: "京东购物",
          skillIcon:
            "http://img30.360buyimg.com/smart/jfs/t16234/93/1784364089/52704/88fca460/5a618b84Nc4024ba4.png"
        },
        {
          skillId: "2",
          skillName: "叮咚音响",
          skillIcon:
            "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
        },
        {
          skillId: "3",
          skillName: "京东到家",
          skillIcon:
            "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
        },
        {
          skillId: "4",
          skillName: "智能服务",
          skillIcon:
            "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
        },
        {
          skillId: "5",
          skillName: "智能家居",
          skillIcon:
            "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
        },
        {
          skillId: "6",
          skillName: "上门维修",
          skillIcon:
            "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
        },
        {
          skillId: "7",
          skillName: "家居控制",
          skillIcon:
            "https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png"
        }
      ]
    };
    this.getTransferValue=this.getTransferValue.bind(this);
    this.searchSkills=this.searchSkills.bind(this);
    this.leftItemRender=this.leftItemRender.bind(this);
  }
  //搜索
  searchSkills(val){

  }
  getTransferValue(data){
    let transferSelectedList=[];
    data.forEach(item => {
      transferSelectedList.push(item.id);
    });
    console.log('transferSelectedList——>',transferSelectedList);
    return transferSelectedList;
  }
  //穿梭框列表项渲染
  leftItemRender(record){
    return(
      <div>
        <img className='item-img' src={record.skillIcon} alt=''/>
        <div className='item-title'>
          {record.skillName}
        </div>
        {record.checked?<span className='icon-check'></span>:null}
      </div>
    );
  }
  rightItemRender(record){
    return(
      <div className='right-item-content'>
        <img className='item-img' src={record.skillIcon} alt='' />
        <div className='right-item-title'>
          {record.skillName}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
      <br/>
        <Transfer
          name="skillIdList"
          dataKey="skillId"
          title="skillName"
          rightTitle="技能"
          onSearch
          searchEvent={this.searchSkills}
          footer
          placeholder="没有找到相关的技能"
          leftItemRender={this.leftItemRender}
          rightItemRender={this.rightItemRender}
          dataSource={this.state.dataSource}
          onChange={this.getTransferValue}
        />
      </div>
    );
  }
}

export default App;

\`\`\`
`;

const api = `
## Options

属性名   |    类型   |     默认值     |     说明
----    | ----    | ----    | ----    |
dataKey  | string  | 无 |  列表项的唯一标示，必填属性
title  | string  | 无 |  列表项的标题
onSearch | 无 | null | 是否在操作区显示搜索框
onSelect | 无 | null | 是否在操作区显示类目筛选
footer   | 无 | null | 是否显示  全选 反选 移除 全部清除按钮



## Events
方法名称   |    说明    |    参数    |
----    | ----      | ----        |
searchEvent | 搜索框值改变的回调 | 参数是搜索框的值
leftItemRender | 操作区列表项自定义渲染 | 参数是每一条列表项的数据
rightItemRender | 已选区列表项自定义渲染 | 参数是每一条列表项的数据
onChange       |  已选数据改变的回调 | 参数是选中的数组
`;

export {
  desc,
  base,
  onSearch,
  itemRender,
  api,
};
