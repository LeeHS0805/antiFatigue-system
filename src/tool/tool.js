export default {
    checkData: {
        mobile: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 11, max: 11, message: '长度为11位数字', trigger: 'blur'}
        ],
        userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3-10 个字符', trigger: 'blur'}
        ],
        password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'}
        ],
        phone: [
            {required: true, message: '请输入手机号码', trigger: 'blur'},
            {min: 11, max: 11, message: '长度为11位', trigger: 'blur'}
        ],
        code: [
            {required: true, message: '请输入验证码', trigger: 'blur'},
            {min: 6, max: 6, message: '长度在 4 个字符', trigger: 'blur'}
        ],
    },
}
