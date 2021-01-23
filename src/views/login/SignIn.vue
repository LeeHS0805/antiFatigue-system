<template>
    <div class="signIn_container">
        <div class="top_container">
            <span>欢迎使用疲劳驾驶检测APP</span>
        </div>
        <div class="main_container">
            <el-form class="login_form" :model="loginForm" :rules="checkData" ref="loginFormRef">
                <!--                    手机-->
                <el-form-item class="efi" prop="phone">
                    <el-input placeHolder="请输入手机号" prefix-icon="el-icon-mobile-phone" v-model="loginForm.username"></el-input>
                </el-form-item>
                <!--                    密码-->
                <el-form-item class="efi" prop="password">
                    <el-input placeHolder="设置一个至少6位的密码" prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
                </el-form-item>
                <!--                    验证码-->
                <el-form-item class="efi " prop="code">
                    <el-input placeHolder="请输入验证码" class='efi-code' prefix-icon="el-icon-chat-dot-round" v-model="loginForm.password" type="password"></el-input>
                    <el-button class='ebt-code' type="warning" >验证码</el-button>
                </el-form-item>
                <!--                    按钮-->
                <el-form-item class="ebt">
                    <el-button class="ebt-signIn" type="primary" @click="Login">注 册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>

</template>

<script>
    export default {
        name: "SignIn",
        data(){
            return{
                loginForm: {
                    username: '',
                    password: '',
                },
                //字符检验
                checkData: {
                    phone: [
                        {required: true, message: '请输入手机号码', trigger: 'blur'},
                        {min: 11, max: 11, message: '长度为11位', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'}
                    ],
                    code: [
                        {required: true, message: '请输入验证码', trigger: 'blur'},
                        {min: 4, max: 4, message: '长度在 4 个字符', trigger: 'blur'}
                    ],
                },
            }
        }
    }
</script>

<style scoped lang="less">
    .signIn_container{
        width: 100vw;
        height: 100vh;
        background-image: url("../../assets/img/signIn.png");
        background-repeat: no-repeat;
        background-size: cover;
        .top_container{
            width: 100%;
            height: 40vh;
           span{
               position: relative;
               top:80px;
               left: 12%;
               font-size: 23px;
               font-weight: 600;
               letter-spacing: 4px;
               color:white;
           }
        }
        .main_container{
            width: 100%;
            height: 60vh;
            .login_form{
                width: 70vw;
                margin: auto;
                /deep/.el-input {
                    margin-bottom: 12px;
                    input{
                        border-radius: 0;
                        border-right: none;
                        border-top: none;
                        border-left: none;
                    }
                    span{
                        margin-left: -8px;
                    }
                }
                .efi-code{
                    width: 47vw;
                    display: inline-block;
                }
                .ebt-code{
                    float:right;
                    margin-right: -8px;
                    transform: scale(0.9);
                    color:#81CBD6;
                    border: 1px solid #81CBD6;
                    border-radius: 20px;
                    letter-spacing: 1px;
                    background-color: transparent;
                }
                .ebt{
                    width: 50vw;
                    margin: 50px auto;
                    .ebt-signIn{
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
        }
    }
</style>
