import MessageVue from '../../components/Message/Message'

const MessageBox = {}

MessageBox.install = (Vue, options) => {
  const MessageBoxInstance = Vue.extend(MessageVue)
  let currentMsg
  let msgBoxElList = []
  const initInstance = () => {
    if (document.querySelector('#message-container')) {
    } else {
      let template = '<div id="message-container" style="position: fixed;top: 15px;z-index:100;pointer-events:none;width: 100%;height: 100%;">' +
        '<div id="message-wrapper" style="position: relative;width: 100%;height: 100%;"></div>' +
        '</div>'
      let T = Vue.extend({template: template})
      let container = new T().$mount().$el
      document.body.appendChild(container)
    }
    currentMsg = new MessageBoxInstance()
  }
  const mount = () => {
    let msgBoxEl = currentMsg.$mount().$el
    let list = document.querySelectorAll('.ys-message-wrapper')
    if (list.length) {
      msgBoxEl.style.top = parseInt(list[list.length - 1].style.top) + list[list.length - 1].clientHeight + 15 + 'px'
    } else {
      msgBoxEl.style.top = 15 + 'px'
    }
    document.querySelector('#message-wrapper').appendChild(msgBoxEl)
    msgBoxElList.unshift(msgBoxEl)
  }

  Vue.prototype.$message = opt => {
    initInstance()
    if (typeof opt === 'string') {
      currentMsg.text = opt
    } else if (typeof opt === 'object') {
      Object.assign(currentMsg, opt)
    }
    mount()

    setTimeout(() => {
      let el = msgBoxElList.pop()
      el.style.top = 0
      setTimeout(() => {
        document.querySelector('#message-wrapper').removeChild(el)
      }, 500) // transition时间是0.5s
      // 当message都自动销毁以后，不需要销毁container了...缓存在这里
    }, 1500)
  }
}
export default MessageBox
