<template>
    <div class="settings_container">
        <banner :color="'#fff'">
            <span>返回</span>
        </banner>
        <div v-show="isLoading">
            <div class="settings_head">个人信息</div>
            <div class="settings_list">
                <div class="list">
                    <span class="label">用户名</span>
                    <span class="value">{{info.username}}</span>
                    <van-icon class='icon' name="arrow" @click="showPopUp('username')"/>
                </div>
                <div class="list">
                    <span class="label">性别</span>
                    <span class="value">{{info.sex|fomatSex}}</span>
                    <van-icon class='icon' name="arrow" @click="showPopUp('sex')"/>
                </div>
                <div class="list">
                    <span class="label">个人介绍</span>
                    <span class="value">{{info.introduction}}</span>
                    <van-icon class='icon' name="arrow" @click="showPopUp('introduction')"/>
                </div>
            </div>
            <el-button v-if='isChange' class="confirm" palin @click="submitChange">确认修改</el-button>
            <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
                <div class="mobile" v-if="showName=='username'">
                    <van-cell-group>
                        <van-field
                                v-model="info.username"
                                label="用户名"
                                name="pattern1"
                                placeholder="请输入用户名"
                                :rules="[{ pattern1,message: '请输入正确内容' }]"/>
                    </van-cell-group>
                </div>

                <div class="mobile" v-if="showName=='sex'">
                    <van-field name="radio" label="单选框">
                        <template #input>
                            <van-radio-group v-model="info.sex" direction="horizontal">
                                <van-radio name="1">男</van-radio>
                                <van-radio name="0">女</van-radio>
                            </van-radio-group>
                        </template>
                    </van-field>
                </div>
                <div class="mobile" v-if="showName=='introduction'">
                    <van-field
                            v-model="info.introduction"
                            rows="3"
                            autosize
                            label="个人介绍"
                            type="textarea"
                            maxlength="45"
                            placeholder="请输入个人介绍"
                            show-word-limit
                    />
                </div>
            </van-popup>
        </div>
        <van-loading size="24px" vertical v-if="!isLoading">加载中...</van-loading>
    </div>
</template>

<script>
    import Banner from "../../../../components/Banner";
    import api from "../../../../api/api";
    import Vue from 'vue';
    import {Field, Form, Loading, Notify, Radio, RadioGroup} from 'vant';

    Vue.use(Loading);
    Vue.use(Radio);
    Vue.use(RadioGroup);
    Vue.use(Form);
    Vue.use(Field);

    export default {
        name: "Info",
        data() {
            return {
                pattern1: /^[a-zA-Z0-9_-]{4,16}$/,
                show: false,
                isChange: false,
                showName: '',
                isLoading: false,
                info: {
                    username: undefined,
                    sex: undefined,
                    introduction: undefined,
                }
            }
        },
        methods: {
            async submitChange() {
                const {data} = await api.postInfo(this.info)

                if (data.code == 0) Notify({type: 'success', message: '修改成功'});
                else Notify({type: 'warning', message: data.msg});
            },
            showPopUp(name) {
                this.show = true;
                this.showName = name
                setTimeout(() => {
                    this.isChange = true;
                }, 200)
            },
            async getInfo() {
                const {data} = await api.getInfo()
                console.log(data)
                this.info = data.info
            }
        },
        async created() {
            await this.getInfo()
            setTimeout(()=>{
                this.isLoading = true;
            },120)
        },
        filters: {
            fomatSex(val) {
                if (val == 1) return '男'
                else if (val == 0) return '女'
                return
            }
        },
        components: {
            Banner
        }
    }
</script>

<style scoped lang="less">
    .settings_container {
        width: 100vw;
        height: 100vh;

        .settings_head {
            font-size: 30px;
            font-weight: 600;
            margin: 40px 40px;
            letter-spacing: 6px;
        }

        .settings_list {
            margin-top: 10px;

            .list {
                width: 80%;
                height: 70px;
                line-height: 80px;
                border-bottom: solid 1px rgba(172, 172, 172, 0.45);
                margin: auto;

                span {
                    font-size: 17px;
                    position: absolute;
                    color: rgba(41, 41, 41, 0.93);
                    letter-spacing: 2px;
                    font-weight: 500;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    word-break: break-all;
                }

                span.label {
                    left: 12%;
                }

                span.value {
                    font-size: 16px;
                    left: 40%;
                    width: 45vw;
                    font-weight: 400;
                }

                .icon {
                    float: right;
                    margin-top: 33px;
                }
            }
        }
    }
    .van-loading{
        margin-top: 200px;
        transform: scale(1.2);
    }
    /deep/ .el-form {
        text-align: center;
        width: 100vw;
        margin-top: 100px;

        .ebt {
            width: 40%;
            border-radius: 22px;
            height: 45px;
            font-size: 17px;
            letter-spacing: 5px;
        }
    }

    .mobile {
        margin-top: 20px;
        padding: 20px;
    }

    .confirm {
        position: absolute;
        margin-top: 100px;
        left: 50%;
        transform: translateX(-50%);
    }

</style>
