## 级联选择
##  支持属性
1. optionData:obj  CascaderSelection参数为组件内部回调函数，以传出选中的值的数据源 嵌套数组 如：
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
##  支持事件
1. cascaderSelect:选中其中的某一项