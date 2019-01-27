/**
 * 返回包含数组项的正则表达式
 * @param array
 */
export function generateMultiItemsRegExp (array) {
  if (array instanceof Array) {
    let temp = array.map(item => {
      return '(' + item + ')'
    })
    return new RegExp(temp.join('|'), 'g')
  } else throw new Error('Illegal parameters')
}
