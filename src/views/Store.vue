<template>
  <div class="store">
    <p>{{ data }}</p>
    <button @click="actClick">click</button>
  </div>
</template>
<script>
    import { getCurrentInstance, reactive, computed, onMounted } from 'vue'
    export default {
        name: 'About',
        setup() {
            const { ctx } = getCurrentInstance(),
                  store = ctx.$store;

            const state = reactive({
                data: '333'
            })
            onMounted( () => {
                console.log(state.data, store.state.Vuextest.data);
            })
            const actClick = () => {
                store.commit('Vuextest/updateData', '99999999')
            }
            return{
                data: computed(() => store.state.Vuextest.data),
                actClick
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
