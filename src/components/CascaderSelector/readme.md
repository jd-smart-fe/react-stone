## 级联选择
##  支持属性
1. dataSource:obj 选择器的数据源
 CascaderSelector 嵌套数组 如：
  dataSource:[
        {
          value: ' television',
          label: '电视',
          children: [{
            value: 'curveScreen',
            label: '曲面电视',
            children: [{
              value: 'smart',
              label: '智能电视',
            },
            {
              value: 'normal',
              label: '普通电视',
            }],
          }],
        }, {
          value: 'fridge',
          label: ' 冰箱',
          children: [{
            value: 'doors',
            label: '多门',
            children: [{
              value: 'three',
              label: '三门',
            },
            {
              value: 'oppose',
              label: '对开门',
            },
            {
              value: 'two',
              label: ' 双门',
            },
            {
              value: 'single',
              label: ' 单门',
            }],
          },
          {
            value: 'samrtFridge',
            label: '智能冰箱',
            children: [{
              value: 'voice',
              label: ' 声控',
            },
            {
              value: 'screenble',
              label: '有屏',
            },
            {
              value: 'touchSrceen',
              label: '触屏',
            },
            {
              value: 'light',
              label: '小夜灯',
            }],
          }],
        }
      ]

##  支持事件
1. onChange:选中其中的某一项