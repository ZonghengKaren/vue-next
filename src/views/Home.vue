<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { get } from '@/util/request'
import { onMounted } from 'vue'

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
    setup () {
        onMounted(() => {
            get('/api/v1/cmm/hot/products',{size: 20, idx: 1, count: 20})
                .then((res) => {
                    console.log(res);
                })
                .then(() => {
                    // console.log(4444);
                })
                .then(() => {
                    // console.log(55555);
                })
                .catch((e) => {
                    console.log(e);
                })
        })
    }
}
</script>
