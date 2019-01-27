import {generateMultiItemsRegExp} from '../generator/reg'

const excludes = ['index', 'test']
function isInExcludes (path) {
  let reg = generateMultiItemsRegExp(excludes)
  return reg.test(path)
}
/**
 * 判断要跳转的页面是否拥有权限
 * @param to 目标路由
 */
export function checkAuth (to) {
  if (isInExcludes(to.path)) {
    return true
  } else {
    // 这里判断权限
  }
}
