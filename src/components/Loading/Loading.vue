<template>
  <div class='loading-wrapper' v-if="show">
    <div class='loading'>
            <span
              :style='{
                padding: "0 3px",
                animationDuration: duration.indexOf("s") === -1 ? duration + "s" : duration ,
                animationDelay: parseInt(duration)*index/(text.length*2) +"s"
              }'
              v-for="(char,index) in text" :key="index">
              {{char}}
            </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '加载中...'
    },
    duration: {
      type: String,
      default: '1s'
    }
  }
}
</script>

<style lang="less" scoped>
  .loading-wrapper{
    padding: 8px 20px;
    max-width: 80%;
    min-height: 80px;
    background: rgba(0,0,0,0.8);
    color: #ffffff;
    border-radius:10px;
    z-index: 20;

    position: fixed;
    left: 50%;
    top: 40%;
    transform: translate(-50%,-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    .loading {
      display: flex;
      justify-content: space-between;
      span {
        animation: ease infinite move;
        display: block;
        transform: translate3d(0,0,0);
      }
    }
  }
  @keyframes move {
    0% {
      transform: translate3d(0,-8px,0);
    }
    50% {
      transform: translate3d(0,8px,0);
    }
    100% {
      transform: translate3d(0,-8px,0);
    }
  }
</style>
