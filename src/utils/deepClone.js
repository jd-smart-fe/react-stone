function deepClone(source) {
  if (!source || typeof source !== 'object') {
    return false;
  }
  const targetObj = source.constructor === Array ? [] : {};
  const keys = Object.keys(source);
  for (let i = 0; i < keys.length; i += 1) {
    if (typeof source[keys[i]] === 'object') {
      targetObj[keys[i]] = source[keys[i]].constructor === Array ? [] : {};
      targetObj[keys[i]] = deepClone(source[keys[i]]);
    } else {
      targetObj[keys[i]] = source[keys[i]];
    }
  }
  return targetObj;
}
export default deepClone;
