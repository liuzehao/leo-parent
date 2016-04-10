var Login = function () {

    var handleLogin = function() {
        $('.login-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                loginName: {
                    required: true
                },
                password: {
                    required: true
                },
                remember: {
                    required: false
                }
            },

            messages: {
                loginName: {
                    required: "用户名不能为空！"
                },
                password: {
                    required: "密码不能为空！"
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit
                $('.alert-danger', $('.login-form')).show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function (form) {
                form.submit();
            }
        });

        $('#password').keydown(function (e) {
            if (e.which == 13) {
                if ($('.login-form').validate().form()) {
                    login();
                }
                return false;
            }
        });
        //输入密码回车默认登陆
        $("#loginName").bind("keydown", function (e) {
            if (e.which == 13) {
                e.preventDefault();
                $("#password").focus();
            }
        }).focus();

        $("#loginBtn").bind("click",login);

        function login(){
            $("#password").val($("#password").val().md5());
            $('.login-form').submit();
        }
    };

    return {
        //main function to initiate the module
        init: function () {

            handleLogin();

            $.backstretch([
                "assets/admin/pages/media/bg/1.jpg",
                "img/login/bg/10.jpg",
                "img/login/bg/5.jpg",
                "img/login/bg/6.jpg",
                "img/login/bg/7.jpg",
                "img/login/bg/9.jpg",
                "img/login/bg/11.jpg",
                "assets/admin/pages/media/bg/2.jpg",
                "assets/admin/pages/media/bg/3.jpg",
                "assets/admin/pages/media/bg/4.jpg"
            ], {
                fade: 1000,
                duration: 5000
            });
        }

    };

}();