<template>
    <div class="message-wrapper animated fadeInDown">
      <div class="message-toast">
        <img :src="currentType" alt="">
        <p>{{text}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    text: {
      type: String,
      default: '提示信息'
    },
    type: {
      type: String,
      default: 'info'
    }
  },
  data () {
    return {
      src: [require('../../assets/icon/info.svg'), require('../../assets/icon/warn.svg'), require('../../assets/icon/error.svg'), require('../../assets/icon/success.svg')]
    }
  },
  computed: {
    currentType () {
      let i
      switch (this.type) {
        case 'info':
          i = 0
          break
        case 'warn':
          i = 1
          break
        case 'error':
          i = 2
          break
        case 'success':
          i = 3
          break
        default:
          i = 0
      }
      return this.src[i]
    }
  }
}
</script>

<style lang="less" scoped>
  .message-wrapper{
    width: 80%;
    min-height: 30px;

    position: absolute;
    left: 50%;

    animation-duration: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;

    .message-toast{
      max-width: 100%;
      pointer-events: none;
      padding: 8px 12px;
      border-radius: 4px;
      box-shadow: 0 1px 6px rgba(0,0,0,.2);
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      img{
        width: 15px;
        height: 15px;
        object-fit: contain;
        margin: 0 8px 0 0;
      }
      p{
        max-width: 100%;
        font-size: 14px;
        word-break: keep-all;
        word-wrap: break-word;
      }
    }
  }

  .fadeInDown{
    animation-name: fadeInDown
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(-50%, -100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(-50%, 0, 0);
    }
  }

</style>
