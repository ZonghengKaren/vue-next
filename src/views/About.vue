<template>
  <div class="about">
    <div class="title">
      <h1>This is an about page</h1>
    </div>
    <div class="button">
      <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <p>{{ state.count }}</p>
    <van-button type="primary" @click="plus">+</van-button><br/>
    <van-button type="warning" @click="miums">-</van-button>
    <img alt="Vue logo" src="../assets/001.png"/>
  </div>
</template>
<script>
    import { reactive } from 'vue'
    import { Button } from 'vant'
    export default {
        name: 'About',
        components: {
            Button
        },
        setup() {
            const state = reactive({
                count: 5
            });
            const plus = () => {
                state.count++
            }
            const miums = () => {
                state.count--
            }
            return{
                state,
                plus,
                miums
            }
        }
    }
</script>
<style lang="less" scoped>
  @import '~@/assets/style/fn.less';
  .about {
    font-size: 0.4rem;
    .title {
      display: flex;
      position: relative;

      &:after {
        .setTopLine()
      }

      h1 {
        color: @colorPrimary;
        font-size: 0.48rem;
      }
    }
  }
</style>
