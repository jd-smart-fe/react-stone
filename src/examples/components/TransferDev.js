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
      ],
      optionData: [
        {
          value: "tiyu",
          label: "体育",
          children: [
            {
              value: "hangzhou",
              label: "杭州",
              children: [
                {
                  value: "xihu",
                  label: "西湖"
                },
                {
                  value: "xiaoshan",
                  label: "萧山",
                  children: [
                    {
                      value: "renminguanchang",
                      label: "人民广场"
                    }
                  ]
                },
                {
                  value: "jianggan",
                  label: "江干",
                  children: [
                    {
                      value: "xiasha",
                      label: "下沙"
                    }
                  ]
                }
              ]
            },
            {
              value: "beijing",
              label: "北京",
              children: [
                {
                  value: "xichengqu",
                  label: "西城区"
                }
              ]
            }
          ]
        },
        {
          value: "yinyue",
          label: "音乐",
          children: [
            {
              value: "nanjing",
              label: "南宁",
              children: [
                {
                  value: "zhonghuamen",
                  label: "中华门"
                }
              ]
            }
          ]
        },
        {
          value: "caijing",
          label: "财经"
        },
        {
          value: "shenghuo",
          label: "生活",
          children: [
            {
              value: "chongzhi",
              label: "充值",
              children: [
                {
                  value: "ranqi",
                  label: "燃气"
                }
              ]
            }
          ]
        }
      ]
    };
    this.getTransferValue=this.getTransferValue.bind(this);
    this.searchSkills=this.searchSkills.bind(this);
    this.leftItemRender=this.leftItemRender.bind(this);
    this.rightItemRender=this.rightItemRender.bind(this);
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
        {record.checked?<span className='choosen'></span>:null}
      </div>
    );
  }
  rightItemRender(record){
    return(
      <div className='right-item-content'>
        <img className='item-img' src={record.skillIcon} alt='' />
        <div className='item-title'>
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
          name="skills"
          dataKey="skillId"
          title="skillName"
          rightTitle="已添加的技能"
          /*onSelect optionData={this.state.optionData}*/
          onSearch
          searchEvent={this.searchSkills}
          footer
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
