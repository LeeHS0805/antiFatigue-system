<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: '11'
            }
        }
    }
</script>

<style lang="less">
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
      padding: 0;
      margin: 0;
    }
</style>
