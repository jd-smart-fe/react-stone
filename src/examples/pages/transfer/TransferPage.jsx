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
          skillIcon:"https://img11.360buyimg.com/mobilecms/s100x100_jfs/t19042/89/1851156357/101817/543744f8/5ada7544N4f5d29c4.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "2",
          skillName: "叮咚音响",
          skillIcon:"https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "3",
          skillName: "京东到家",
          skillIcon:"https://img11.360buyimg.com/mobilecms/s110x110_jfs/t2845/298/913943688/163967/67d97501/572afe6eNee22d7af.jpg!q90!cc_110x110.webp"
        },
        {
          skillId: "4",
          skillName: "智能服务",
          skillIcon:"https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "5",
          skillName: "智能家居",
          skillIcon:"https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "6",
          skillName: "上门维修",
          skillIcon: "https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "7",
          skillName: "家居控制",
          skillIcon: "https://img11.360buyimg.com/mobilecms/s110x110_jfs/t7201/279/464293159/18613/50a6642e/5980a9c3Nda96a26a.jpg!q90!cc_110x110.webp"
        }
      ],
      dataSource2: [
        {
          skillId: "1",
          skillName: "京东购物",
          skillIcon:"https://img11.360buyimg.com/mobilecms/s100x100_jfs/t19042/89/1851156357/101817/543744f8/5ada7544N4f5d29c4.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "2",
          skillName: "叮咚音响",
          skillIcon:"https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "3",
          skillName: "京东到家",
          skillIcon:"https://img11.360buyimg.com/mobilecms/s110x110_jfs/t2845/298/913943688/163967/67d97501/572afe6eNee22d7af.jpg!q90!cc_110x110.webp"
        },
        {
          skillId: "4",
          skillName: "智能服务",
          skillIcon:"https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "5",
          skillName: "智能家居",
          skillIcon:"https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "6",
          skillName: "上门维修",
          skillIcon: "https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "7",
          skillName: "家居控制",
          skillIcon: "https://img11.360buyimg.com/mobilecms/s110x110_jfs/t7201/279/464293159/18613/50a6642e/5980a9c3Nda96a26a.jpg!q90!cc_110x110.webp"
        }
      ],
      dataSource3: [
        {
          skillId: "1",
          skillName: "京东购物",
          skillIcon:"https://img11.360buyimg.com/mobilecms/s100x100_jfs/t19042/89/1851156357/101817/543744f8/5ada7544N4f5d29c4.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "2",
          skillName: "叮咚音响",
          skillIcon:"https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "3",
          skillName: "京东到家",
          skillIcon:"https://img11.360buyimg.com/mobilecms/s110x110_jfs/t2845/298/913943688/163967/67d97501/572afe6eNee22d7af.jpg!q90!cc_110x110.webp"
        },
        {
          skillId: "4",
          skillName: "智能服务",
          skillIcon:"https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "5",
          skillName: "智能家居",
          skillIcon:"https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "6",
          skillName: "上门维修",
          skillIcon: "https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "7",
          skillName: "家居控制",
          skillIcon: "https://img11.360buyimg.com/mobilecms/s110x110_jfs/t7201/279/464293159/18613/50a6642e/5980a9c3Nda96a26a.jpg!q90!cc_110x110.webp"
        }
      ],
      dataSource4: [
        {
          skillId: "1",
          skillName: "京东购物",
          skillIcon:"https://img11.360buyimg.com/mobilecms/s100x100_jfs/t19042/89/1851156357/101817/543744f8/5ada7544N4f5d29c4.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "2",
          skillName: "叮咚音响",
          skillIcon:"https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "3",
          skillName: "京东到家",
          skillIcon:"https://img11.360buyimg.com/mobilecms/s110x110_jfs/t2845/298/913943688/163967/67d97501/572afe6eNee22d7af.jpg!q90!cc_110x110.webp"
        },
        {
          skillId: "4",
          skillName: "智能服务",
          skillIcon:"https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "5",
          skillName: "智能家居",
          skillIcon:"https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "6",
          skillName: "上门维修",
          skillIcon: "https://img10.360buyimg.com/mobilecms/s100x100_jfs/t15562/8/2555492666/108362/5017e718/5ab3ad15N754775ee.jpg!q90!cc_100x100.webp"
        },
        {
          skillId: "7",
          skillName: "家居控制",
          skillIcon: "https://img11.360buyimg.com/mobilecms/s110x110_jfs/t7201/279/464293159/18613/50a6642e/5980a9c3Nda96a26a.jpg!q90!cc_110x110.webp"
        }
      ],
      initialKeys:["1","2","3","4"]
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
          footer
          placeholder="没有找到相关的技能"
          leftItemRender={this.leftItemRender.bind(this)}
          rightItemRender={this.rightItemRender.bind(this)}
          dataSource={this.state.dataSource3}
          onChange={this.getTransferValue}
          />

        </DemoWrap>
        <DemoWrap desc="有默认值的穿梭框" code={code.initialKeys}>

          <Transfer
          name="skillIdList"
          dataKey="skillId"
          title="skillName"
          rightTitle="技能"
          onSearch
          footer
          placeholder="没有找到相关的技能"
          leftItemRender={this.leftItemRender.bind(this)}
          rightItemRender={this.rightItemRender.bind(this)}
          dataSource={this.state.dataSource4}
          initialKeys={this.state.initialKeys}
          onChange={this.getTransferValue}
          />

        </DemoWrap>

        <ReactMarkdown source={code.api} />
      </div>
    );
  }
}

export default TransferPage;
