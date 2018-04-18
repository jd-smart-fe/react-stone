import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Transfer from '../../../components/Transfer/Transfer.jsx';

import Button from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import * as code from './doc.js';
import DemoWrap from '../../components/DemoWrap/DemoWrap';

class TransferPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      dataSource1: [
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
      dataSource2: [
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
      dataSource3: [
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
      dataSource4: [
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
    }
    this.getTransferValue=this.getTransferValue.bind(this);
  }
  // 获取穿梭框选中的值
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
        {record.checked?<span className='icon-check-mark'></span>:null}
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
      <div className="markdown">
        <ReactMarkdown source={code.desc} />
        <h2>代码示例</h2>
        <DemoWrap desc="基础用法，最基础的穿梭框" code={code.base}>

          <Transfer
          name="skillIdList"
          dataKey="skillId"
          title="skillName"
          rightTitle="技能"
          footer
          placeholder="没有找到相关的技能"
          dataSource={this.state.dataSource1}
          onChange={this.getTransferValue}
          />

        </DemoWrap>

        <DemoWrap desc="带有搜索框的穿梭框" code={code.onSearch}>

          <Transfer
          name="skillIdList"
          dataKey="skillId"
          title="skillName"
          rightTitle="技能"
          onSearch
          footer
          placeholder="没有找到相关的技能"
          dataSource={this.state.dataSource2}
          onChange={this.getTransferValue}
          />

        </DemoWrap>

        <DemoWrap desc="自定义列表样式，可以单独定制一侧的样式" code={code.itemRender}>

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
          dataSource={this.state.dataSource3}
          onChange={this.getTransferValue}
          />

        </DemoWrap>

        <ReactMarkdown source={code.api} />
      </div>
    );
  }
}

export default TransferPage;
