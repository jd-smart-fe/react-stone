import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '../../../components/Button/Button';
import Select from '../../../components/Select/Select';
import Icon from '../../../components/Icon/Icon';
import * as code from './docs.js';
import DemoWrap from '../../components/DemoWrap/DemoWrap';

const saleVolumes1 = [
  {
    label: '<1000',
    value: 1
  },
  {
    label: '1001~10000',
    value: 2
  },
  {
    label: '10001~100000',
    value: 3
  },
  {
    label: '100001~1000000',
    value: 4
  },
  {
    label: '>1000000',
    value: 5
  }
];

const saleVolumes2 = [
  {
    label: '<1000',
    value: 1
  },
  {
    label: '1001~10000',
    value: 2
  },
  {
    label: '10001~100000',
    value: 3
  },
  {
    label: '100001~1000000',
    value: 4
  },
  {
    label: '>1000000',
    value: 5
  }
];

const saleVolumes3 = [
  {
    label: '<1000',
    value: 1
  },
  {
    label: '1001~10000',
    value: 2
  },
  {
    label: '10001~100000',
    value: 3
  },
  {
    label: '100001~1000000',
    value: 4
  },
  {
    label: '>1000000',
    value: 5
  }
];

const saleVolumes4 = [
  {
    label: '<1000',
    value: 1
  },
  {
    label: '1001~10000',
    value: 2
  },
  {
    label: '10001~100000',
    value: 3
  },
  {
    label: '100001~1000000',
    value: 4
  },
  {
    label: '>1000000',
    value: 5
  }
];

const saleVolumes5 = [
  {
    label: '<1000',
    value: 1
  },
  {
    label: '1001~10000',
    value: 2
  },
  {
    label: '10001~100000',
    value: 3
  },
  {
    label: '100001~1000000',
    value: 4
  },
  {
    label: '>1000000',
    value: 5
  }
];

const selectChange = (params) => {
  console.log(params);
}

class Docs extends Component {
  render() {
    return (
      <div className="markdown">
        <ReactMarkdown source={code.desc} />
        <h2>代码示例</h2>
        <DemoWrap desc="基础用法" code={code.base}>
          <div>
            <Select
            size="large"
            placeholder="请选择123"
            optionData={saleVolumes1}
            onChange={selectChange}/>
          </div>
        </DemoWrap>
        <DemoWrap desc="大小" code={code.size}>
          <div>
            <Select
            size="small"
            placeholder="小"
            optionData={saleVolumes2}
            onChange={selectChange}/>
            <br />
            <Select
            placeholder="默认"
            optionData={saleVolumes3}
            onChange={selectChange}/>
            <br />
            <Select
            size="large"
            placeholder="大"
            optionData={saleVolumes4}
            onChange={selectChange}/>
          </div>
        </DemoWrap>
        <DemoWrap desc="默认选中某项" code={code.defaultValue}>
          <div>
            <Select
              size="large"
              placeholder=""
              defaultValue={{
                label: '<1000',
                value: 1
              }}
              optionData={saleVolumes5}
              onChange={selectChange}/>
          </div>
        </DemoWrap>
        <ReactMarkdown source={code.api} />
      </div>
    );
  }
}

export default Docs;
