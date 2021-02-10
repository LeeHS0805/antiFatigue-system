<template>
    <div class="signIn_container">
        <div class="top_container">
            <span>欢迎使用疲劳驾驶检测APP</span>
        </div>
        <div class="main_container">
            <el-form class="login_form" :model="loginForm" :rules="checkData" ref="loginFormRef">
                <!--                    手机-->
                <el-form-item class="efi" prop="phone">
                    <el-input placeHolder="请输入手机号" prefix-icon="el-icon-mobile-phone"
                              v-model="loginForm.phone"></el-input>
                </el-form-item>
                <el-form-item class="efi " prop="code">
                    <el-input placeHolder="请输入验证码" class='efi-code' prefix-icon="el-icon-chat-dot-round"
                              v-model="loginForm.code" type="text"></el-input>
                    <el-button class='ebt-code' type="warning" @click="getCode">{{codeText}}</el-button>
                </el-form-item>
                <!--                    按钮-->
                <el-form-item class="ebt">
                    <el-button class="ebt-signIn" type="primary" @click="login">登 录</el-button>
                </el-form-item>
            </el-form>
            <div class="span" @click="go('login')">我已经拥有账户</div>
        </div>
    </div>

</template>

<script>
    import api from "../../api/api";
    import {checkData} from "../../tool/tool";
    export default {
        name: "SignIn",
        data() {
            return {
                loginForm: {
                    phone: '',
                    code: '',
                },
                //字符检验
                checkData:checkData,
                codeText: '验证码',
                time: 60
            }
        },
        methods: {
            go(path) {
                this.$router.push('/' + path)
            },
            checkFormVal() {
                //校验登录参数
                let isReady = false;
                this.$refs.loginFormRef.validate(async isRight => {
                    isReady = isRight;
                })
                return isReady;
            },
            async getCode() {
                //获取手机验证码
                if (this.time != 60) {
                    Notify({
                        message: '请 勿 频 繁 点 击',
                        color: '#ffffff',
                        background: '#ffbb55',
                        duration: 1000
                    });
                    return
                }
                let codeInterval = setInterval(() => {
                    this.codeText = --this.time + 's';
                    if (this.time <= -1) {
                        clearInterval(codeInterval)
                        this.codeText = '验证码';
                        this.time = 60
                    }
                }, 1000)
                const {msg, code} = await api.getPhone(this.loginForm.phone);

            },
            async login() {
                if (this.checkFormVal()) {
                    const code={code:this.loginForm.code}
                    const result =  await api.postCode(code)
                    console.log(result)
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .signIn_container {
        width: 100vw;
        height: 100vh;
        background-image: url("../../assets/img/signIn.png");
        background-repeat: no-repeat;
        background-size: cover;

        .top_container {
            width: 100%;
            height: 40vh;

            span {
                position: relative;
                top: 80px;
                left: 12%;
                font-size: 23px;
                font-weight: 600;
                letter-spacing: 4px;
                color: white;
            }
        }

        .main_container {
            width: 100%;
            height: 60vh;

            .login_form {
                width: 70vw;
                margin: auto;

                /deep/ .el-input {
                    margin-bottom: 12px;

                    input {
                        border-radius: 0;
                        border-right: none;
                        border-top: none;
                        border-left: none;
                    }

                    span {
                        margin-left: -8px;
                    }
                }

                .efi-code {
                    width: 47vw;
                    display: inline-block;
                }

                .ebt-code {
                    float: right;
                    margin-right: -8px;
                    transform: scale(0.9);
                    color: #81CBD6;
                    border: 1px solid #81CBD6;
                    border-radius: 20px;
                    letter-spacing: 1px;
                    background-color: transparent;
                }

                .ebt {
                    width: 50vw;
                    margin: 80px auto;

                    .ebt-signIn {
                        width: 100%;
                        height: 45px;
                        font-size: 18px;
                        letter-spacing: 8px;
                        border-radius: 22px;
                        border: none;
                        background-color: #81CBD6;
                    }
                }
            }

            .span {
                text-align: center;
                margin: auto;
                font-size: 14px;
                letter-spacing: 2px;
                color: #5f5f5f;
            }
        }
    }
</style>
