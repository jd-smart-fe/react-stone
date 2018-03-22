import React from 'react';

let curDragIndex = null;

const arrMove = (arr, fromIndex, toIndex) => {
  arr = [].concat(arr);
  let item = arr.splice(fromIndex, 1)[0];
  arr.splice(toIndex, 0, item);
  return arr;
};

const EasyDragSort = (props) => {
  let container = props.children;
  function onChange(from, to) {
    if (from === to) return;
    let curValue = props.data;
    let newValue = arrMove(curValue, from, to);
    if (typeof props.onChange === 'function') {
      props.onChange(newValue, from, to);
    }
  }
  return <div>
    {container.map((item, index) => {
      if (React.isValidElement(item)) {
        return React.cloneElement(item, {
          draggable: 'true',
          onDragStart() {
            curDragIndex = index;
          },
          onDragEnter() {
            onChange(curDragIndex, index);
            curDragIndex = index;
          },
          onDragEnd() {
            curDragIndex = null;
            if (typeof props.onDragEnd === 'function') {
              props.onDragEnd();
            }
          },
        });
      }
      return item;
    })}
  </div>;
};

export default EasyDragSort;
