# Transfer 穿梭组件

 -  分为‘操作区’和‘已选区’；‘操作区’选择后，显示为已选状态，同时右侧‘已选区’展示选中的项

## 何时使用


## How to use?

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Transfer,CascaderSelection} from 'react-stone';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource:[
        {
          skillId: '1',
          skillName: '京东购物',
          skillIcon:
            'http://img30.360buyimg.com/smart/jfs/t16234/93/1784364089/52704/88fca460/5a618b84Nc4024ba4.png'
        },
        {
          skillId: '2',
          skillName: '叮咚音响',
          skillIcon:
            'https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png'
        },
        {
          skillId: '3',
          skillName: '京东到家',
          skillIcon:
            'https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png'
        },
        {
          skillId: '4',
          skillName: '智能服务',
          skillIcon:
            'https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png'
        },
        {
          skillId: '5',
          skillName: '智能家居',
          skillIcon:
            'https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png'
        },
        {
          skillId: '6',
          skillName: '上门维修',
          skillIcon:
            'https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png'
        },
        {
          skillId: '7',
          skillName: '家居控制',
          skillIcon:
            'https://img30.360buyimg.com/smart/jfs/t14995/315/2061932288/95015/41340b31/5a66f5f4N648bc962.png'
        }
      ],
      optionData:[{
                value: 'tiyu',
                label: '体育',
                children: [{
                  value: 'hangzhou',
                  label: '杭州',
                  children: [{
                    value: 'xihu',
                    label: '西湖',
                  },{
                    value: 'xiaoshan',
                    label: '萧山',
                    children:[{
                        value: 'renminguanchang',
                        label: '人民广场',
                    }]
                  },{
                    value: 'jianggan',
                    label: '江干',
                    children:[{
                        value: 'xiasha',
                        label: '下沙',
                    }]
                  }],
                },{
                    value: 'beijing',
                    label: '北京',
                    children: [{
                      value: 'xichengqu',
                      label: '西城区',
                    }],
                  }],
              }, {
                value: 'yinyue',
                label: '音乐',
                children: [{
                  value: 'nanjing',
                  label: '南宁',
                  children: [{
                    value: 'zhonghuamen',
                    label: '中华门',
                  }],
                }],
              }, {
                value: 'caijing',
                label: '财经'
              }, {
                value: 'shenghuo',
                label: '生活',
                children: [{
                  value: 'chongzhi',
                  label: '充值',
                  children: [{
                    value: 'ranqi',
                    label: '燃气',
                  }],
                }],
              },
            ]
    }
    this.getTransferValue=this.getTransferValue.bind(this);
    this.searchSkills=this.searchSkills.bind(this);
    this.leftItemRender=this.leftItemRender.bind(this);
    this.rightItemRender=this.rightItemRender.bind(this);
  }
  //搜索 刷新左侧操作区列表
  searchSkills(val){
    rest.querySkillList({skillName:val}).then(res=>{
      if(res.code===200){
        this.setState({
          dataSource:res.data.result
        });
      }
    });
  }
  //穿梭框操作区列表项渲染
  leftItemRender(record){
    return(
      <div>
        <img className='item-img' src={record.skillIcon}/>
        <div className='item-title'>
          {record.skillName}
        </div>
        {record.checked?<span className='choosen'></span>:null}
      </div>
    );
  }
  //穿梭框已选区列表项渲染
  rightItemRender(record){
    return(
      <span>
        <img className='item-img' src={record.skillIcon}/>
        <div className='item-title'>
          {record.skillName}
        </div>
      </span>
    );
  }
  //获取选中的值
   getTransferValue(data){
    let transferSelectedList=[];
    data.forEach(item => {
      transferSelectedList.push({
        alphaSkillId:item.skillId
      });
    });
    return transferSelectedList;
  }
  render(){
    return (
      <div>
        <Transfer  key='skillId'
        onSelect  optionData={this.state.optionData}
        onSearch  searchEvent={this.searchSkills}
        footer
        leftItemRender={this.leftItemRender}
        rightItemRender={this.rightItemRender}
        dataSource={this.state.dataSource}
        onChange={this.getTransferValue}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

```


## Options

属性名   |    类型   |     默认值     |     说明
----    | ----    | ----    | ----    |
key  | string  | 无 |  列表项的唯一标示，必填属性
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
