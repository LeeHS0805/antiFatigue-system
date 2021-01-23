<template>
    <div class="banner_container" ref="banner" @click="$router.go(-1)">
        <svg t="1611379700739" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3066" width="30" height="30"><path d="M384 512L731.733333 202.666667c17.066667-14.933333 19.2-42.666667 4.266667-59.733334-14.933333-17.066667-42.666667-19.2-59.733333-4.266666l-384 341.333333c-10.666667 8.533333-14.933333 19.2-14.933334 32s4.266667 23.466667 14.933334 32l384 341.333333c8.533333 6.4 19.2 10.666667 27.733333 10.666667 12.8 0 23.466667-4.266667 32-14.933333 14.933333-17.066667 14.933333-44.8-4.266667-59.733334L384 512z" p-id="3067" fill="#cdcdcd"></path></svg>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        props:{
            color:String
        },
        mounted() {
            this.$refs.banner.style.backgroundColor=this.color
        }
    }
</script>

<style scoped lang="less">
    .banner_container{
        width: 100vw;
        height: 60px;
        line-height: 60px;
        background-color: #fff;
    }
    svg{
        position: relative;
        margin-right: 15px;
        left: 2%;
        top: 16%;
    }
    span{
        letter-spacing: 8px;
        font-weight: 500;
        color: #8f8f8f;
    }
</style>
