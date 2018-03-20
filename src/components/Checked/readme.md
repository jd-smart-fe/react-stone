##  支持属性
1. type：string，类型为：'checkbox','radio'两种。
2. class：string，类名为：'checkbox','radio'两种。
3. name：string， 自定义，比如：'checkbox','radio'，每一组为一个同样的name。
4. id：string，每组必须要有，不能重每，比如 one1,one2...。
5. textName：string，文本名称，如果没有，请为空。
6. checked，默认选中状态为 checked。
7. trueValue,选中时的值
##  支持事件
1. checkChange，在input的值改变时触发。