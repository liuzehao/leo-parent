var ChangePasswordPage = function (){
    return {
        init:function (){
            $("#passwordForm").validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-block', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                onsubmit:true,
                rules: {
                    password: {
                        required: true
                    },
                    repassword: {
                        required: true,
                        equalTo: "#password"
                    }
                },

                messages: {
                    password: {
                        required: "密码不能为空！"
                    },
                    repassword:{
                        required: "确认密码不能为空!",
                        equalTo:"密码不一致!"
                    }
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
                    error.insertAfter(element);
                },

                submitHandler: function (form) {
                    $.ajax({
                        url:basePath + "userCenter/updatePassword",
                        type:"post",
                        data:{
                            userId:$("#userId").val(),
                            password:$("#password").val()
                        },
                        dataType:"json",
                        success:function(data){
                            setTimeout(function (){toast.success("修改成功!");},500);
                            setTimeout(function (){toast.info("请重新登录!");},1000);
                            setTimeout(function (){logout()},3000);
                        }
                    })
                }
            });
        }
    }
}();
