<template>
    <div class="settings_container">
        <banner :color="'#fff'">
            <span>返回</span>
        </banner>
        <div class="settings_head">紧急联系人</div>
        <div class="settings_list">
            <div class="list">
                <span class="label">联系人1</span>
                <span class="value">{{info.phone1}}</span>
                <van-icon class='icon' name="arrow" @click="showPopUp('phone1')"/>
            </div>
            <div class="list">
                <span class="label">联系人2</span>
                <span class="value">{{info.phone2}}</span>
                <van-icon class='icon' name="arrow" @click="showPopUp('phone2')"/>
            </div>
            <div class="list">
                <span class="label">联系人3</span>
                <span class="value">{{info.phone3}}</span>
                <van-icon class='icon' name="arrow" @click="showPopUp('phone3')"/>
            </div>
            <el-button class="confirm" palin @click="submit">确认</el-button>
        </div>
        <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
            <div class="mobile">
                <van-password-input
                        :length="11"
                        :value="info[showName]"
                        :focused="showKeyboard"
                        info="请输入联系人"
                        :mask=false
                        @focus="showKeyboard = true"

                />
                <!-- 数字键盘 -->
                <van-number-keyboard
                        v-model="info[showName]"
                        :show="showKeyboard"
                        @blur="showKeyboard = false"
                        :maxlength="11"
                />
            </div>
        </van-popup>
    </div>
</template>

<script>
    import Banner from "../../../../components/Banner";
    import api from "../../../../api/api";
    import {Notify} from 'vant'

    export default {
        name: "Contact",
        data() {
            return {
                show: false,
                showName: '',
                showKeyboard: false,
                info: {
                    phone1: '',
                    phone2: '',
                    phone3: '',
                },
            }
        },
        methods: {
            showPopUp(name) {
                this.show = true;
                this.showName = name
            },
            async submit() {
                let isCorrect = true;
                Object.values(this.info).forEach(item => {
                    if ((!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(item))) && (item !== undefined || item !== '' || item !== null)) {
                        isCorrect = false
                    }
                })
                if (isCorrect) {
                    const {data} = await api.postEmergencePhone(this.info)
                    if(data.code===0){
                        Notify({
                            type:'success',
                            message:'修改成功',
                            duration:500
                        })
                    }
                }
                else{
                    Notify({
                        type:'warning',
                        message:'手机号码格式错误',
                        duration:700
                    })
                }
            }

        },
        async created() {
            const {data} = await api.getEmergencePhone()
            this.info = data.phones
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

    .mobile {
        padding-top: 20px;
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

    .confirm {
        position: absolute;
        bottom: 30%;
        left: 50%;
        width: 25%;
        border-radius: 20px;
        transform: translateX(-50%);
    }

</style>
