/*
 * ccjcJS.js
 * Created on  2011-3-30 下午9:24
 * 版本       修改时间          作者      修改内容
 * V1.0.1    2011-3-30      gaoxy     初始版本
 *
 * Copyright (c) 2010 长春吉成科技有限公司 版权所有
 * CHANGCHUN GENGHIS TECHNOLOGY CO.,LTD. All Rights Reserved.
 */

/**
 * @description String方法扩展，去除字符串的左空格
 * @return {String}去除左空格的字符串
 * @example  "  aa  ".leftTrim()  返回："aa  "
 */
/**
 * @class 本类为正则表达式类，存放常用正则表达式
 * @example JCRegExp.email.code 即可获得相应的正则表达式，JCRegExp.email.msg 为其校验时所显示的错误信息
 */
var JCRegExp = {
    /**
     * @static email
     */
    email:{
        code:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
        msg:"请填写正确E-mail！"
    },
    /**
     * @static url
     */
    url:{
        code:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
        msg:"请输入正确的网址！"
    },
    /**
     * @static qq
     */
    qq:{
        code:/^[1-9][0-9]{4,11}$/,
        msg:"请填写正确QQ！"
    },
    /**
     * @static 电话(允许输入“(”“)”“-”,注：括号为英文括号)
     */
    telephone:{
        code:/^[0-9()\-]+$/,
        msg:"请输入正确的电话号码！"
    },
    /**
     * @static 移动电话，首位为1，共11位数字
     */
    mobilePhone:{
        code:/^1[0-9]{10}$/,
        msg:"请输入正确的手机号码！"
    },
    /**
     * @static 0-9任意数字，可以以0开头，非负
     */
    positiveInt:{
        code:/^[0-9]*$/,
        msg:"请输入0-9的数字！"
    },
    /**
     * @static 数字、字母、下划线
     */
    letterNum:{
        code:/^\w+$/,
        msg:"请输入数字、字母或下划线！"
    },
    /**
     * @static 中文
     */
    chinese:{
        code:/^[\u4e00-\u9fa5]+$/,
        msg:"请输入中文！"
    },
    /**
     * @static 中文或字母
     */
    chineseAndLetter:{
        code:/^[\u4e00-\u9fa5a-zA-Z]+$/,
        msg:"请输入中文或字母！"
    },
    /**
     * @static 0-9中文、字母或数字
     */
    chineseLetterNum:{
        code:/^[\u4e00-\u9fa5a-zA-Z0-9]+$/,
        msg:"请输入中文、字母或数字！"
    },
    /**
     * @static 中文、数字、字母或下划线
     */
    chineseLetterNumLine:{
        code:/^[\u4e00-\u9fa5\w]+$/,
        msg:"请输入中文、数字、字母或下划线！"
    }
};
/**
 * @class 本类为常用工具函数类
 */
var JCTools = {
    /**
     * @description 将输入的数字进行处理，若小于10则返回在前面加“0”的字符串，用于时间函数处理时补足位数。
     * @param {int} i  输入的数字
     * @return {String} 处理后的字符串
     * @example JCTools.getStr(3) 返回：03
     */
    getStr:function (i) {
        return i < 10 ? "0" + i : i + "";
    },
    /**
     * @description 此函数已扩展为string和number的方法，用于校验当前字符串是否符合所需的数字格式
     * @param {int} intLength 整数部分位数
     * @param {int} floatLength 小数部分位数(可选参数，若不传入则为0)
     * @return {Object} returnObj returnObj中只包含bool字段,即：returnObject.bool
     * @example "2.3".checkNum(1,2).bool 返回true
     */
    checkNum:function (intLength, floatLength) {
        floatLength = floatLength == undefined || floatLength == "" ? 0 : floatLength;
        var value = this.toString().trim();
        var returnObj = {};
        returnObj.bool = false;
        var check = /^.*\..*\..*$/g;
        if (check.test(value) || value.charAt(0) === '.' || value.charAt(value.length - 1) === '.') {
            return returnObj;
        }
        value = value.replace(/^(0*)/g, "");
        check = /^.*\..*/g;
        if (check.test(value)) {
            value = value.replace(/(0*)$/g, "");
        }
        if (value.charAt(0) === '.') {
            value = '0' + value;
        }
        if (value.charAt(value.length - 1) === '.') {
            value = value.replace(/\./g, "");
            //return false;
        }
        if (value == ""||value=="0") {
            //value = 0
            returnObj.bool = true;
            return returnObj;
        }

        var isInt = new RegExp("^((-{0,1})([1-9]\\d{0," + (intLength - 1) + "}))$");
        var isFloat = new RegExp("^((-{0,1})(0\\.\\d{0," + floatLength + "})|([1-9]\\d{0," + (intLength - 1) + "}\\.\\d{0," + floatLength + "}))$");
        if (isInt.test(value) || isFloat.test(value)) {
            returnObj.bool = true;
        }
        return returnObj;
    },
    /**
     * @description 将undefined，null，"null" 转换为""
     * @param {Object} str
     * @return {String} 返回原字符串或经过处理的""
     * @example JCTools.setNullString(aaa) 返回""，因为aaa为未定义变量
     */
    setNullString:function (str) {
        if (str === undefined || str === null || str.toString().toLowerCase() === "null") {
            return ""
        }
        else return str;
    },
    /**
     * @description 此函数已扩展为string方法，用于将人民币小写改完大写，最大值：99999999999.99
     * @return {string} 人民币大写
     * @example  "102".chnMoney() 返回：壹佰零贰元整
     */
    chnMoney:function () {
        var MAXIMUM_NUMBER = 99999999999.99;
        // Predefine the radix characters and currency symbols for output:
        var CN_ZERO = "零";
        var CN_ONE = "壹";
        var CN_TWO = "贰";
        var CN_THREE = "叁";
        var CN_FOUR = "肆";
        var CN_FIVE = "伍";
        var CN_SIX = "陆";
        var CN_SEVEN = "柒";
        var CN_EIGHT = "捌";
        var CN_NINE = "玖";
        var CN_TEN = "拾";
        var CN_HUNDRED = "佰";
        var CN_THOUSAND = "仟";
        var CN_TEN_THOUSAND = "万";
        var CN_HUNDRED_MILLION = "亿";
//        var CN_SYMBOL = "人民币";
        var CN_SYMBOL = "";
        var CN_DOLLAR = "元";
        var CN_TEN_CENT = "角";
        var CN_CENT = "分";
        var CN_INTEGER = "整";

// Variables:
        var integral; // Represent integral part of digit number.
        var decimal; // Represent decimal part of digit number.
        var outputCharacters; // The output result.
        var parts;
        var digits, radices, bigRadices, decimals;
        var zeroCount;
        var i, p, d;
        var quotient, modulus;

// Validate input string:
        var currencyDigits = this.toString();
        if (currencyDigits == "") {
//            alert("输入为空！");
            return "";
        }
        if (currencyDigits.match(/[^,.\d]/) != null) {
//            alert("输入了不合法字符！");
            return "";
        }
        if ((currencyDigits).match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/) == null) {
//            alert("不合法数字！");
            return "";
        }

// Normalize the format of input digits:
        currencyDigits = currencyDigits.replace(/,/g, ""); // Remove comma delimiters.
        currencyDigits = currencyDigits.replace(/^0+/, ""); // Trim zeros at the beginning.
        // Assert the number is not greater than the maximum number.
        if (Number(currencyDigits) > MAXIMUM_NUMBER) {
//            alert("超过最大合法数值！");
            return "";
        }

// Process the coversion from currency digits to characters:
        // Separate integral and decimal parts before processing coversion:
        parts = currencyDigits.split(".");
        if (parts.length > 1) {
            integral = parts[0];
            decimal = parts[1];
            // Cut down redundant decimal digits that are after the second.
            decimal = decimal.substr(0, 2);
        }
        else {
            integral = parts[0];
            decimal = "";
        }
        // Prepare the characters corresponding to the digits:
        digits = new Array(CN_ZERO, CN_ONE, CN_TWO, CN_THREE, CN_FOUR, CN_FIVE, CN_SIX, CN_SEVEN, CN_EIGHT, CN_NINE);
        radices = new Array("", CN_TEN, CN_HUNDRED, CN_THOUSAND);
        bigRadices = new Array("", CN_TEN_THOUSAND, CN_HUNDRED_MILLION);
        decimals = new Array(CN_TEN_CENT, CN_CENT);
        // Start processing:
        outputCharacters = "";
        // Process integral part if it is larger than 0:
        if (Number(integral) > 0) {
            zeroCount = 0;
            for (i = 0; i < integral.length; i++) {
                p = integral.length - i - 1;
                d = integral.substr(i, 1);
                quotient = p / 4;
                modulus = p % 4;
                if (d == "0") {
                    zeroCount++;
                }
                else {
                    if (zeroCount > 0) {
                        outputCharacters += digits[0];
                    }
                    zeroCount = 0;
                    outputCharacters += digits[Number(d)] + radices[modulus];
                }
                if (modulus == 0 && zeroCount < 4) {
                    outputCharacters += bigRadices[quotient];
                }
            }
            outputCharacters += CN_DOLLAR;
        }
        // Process decimal part if there is:
        if (decimal != "") {
            for (i = 0; i < decimal.length; i++) {
                d = decimal.substr(i, 1);
                if (d != "0") {
                    outputCharacters += digits[Number(d)] + decimals[i];
                }
            }
        }
        // Confirm and return the final output string:
        if (outputCharacters == "") {
            outputCharacters = CN_ZERO + CN_DOLLAR;
        }
        if (decimal == "") {
            outputCharacters += CN_INTEGER;
        }
        outputCharacters = CN_SYMBOL + outputCharacters;
        return outputCharacters;
    },
    /**
     * @description 将input处理为int型
     * @param {Object} e 事件对象
     * @example  $("input[itype=int]").unbind(".intDeal").bind("keydown.intDeal keyup.intDeal blur.intDeal mousemove.intDeal", JCTools.intDeal);
     * &lt;input type="text" itype="int" max="100" min="10" positive="positive"/&gt;
     *     max(可选参数)限制最大值
     *     min(可选参数)限制最小值
     *     positive(可选参数)限制为正
     */
    intDeal:function (e) {
        if($(this).attr("readonly"))return;
        var eType = e.type;
        var max = $(this).attr("max");
        var min = $(this).attr("min");
        var range = $(this).attr("range");
        var defaultVal = $(this).attr("defaultVal");
        //当为keydown事件时
        if (eType == "keydown") {
            range = range==undefined?1:parseInt(range,10);
            var key = e.which;
            //若shift键按下则使所有按键失效
            if (e.shiftKey)return false;
            if (e.ctrlKey)return true;
            //若按下向上键，且非空，小于最大值则加一
            if (key == 38 && this.value.isNotEmpty().bool&&(max==undefined||(max != undefined&&parseInt(this.value,10)+range <= parseInt(max,10)))) {
                this.value = parseInt(this.value,10) + range;
                return true;
            }
            //若按下向下键，且非空，大于最小值则减一
            if (key == 40 && this.value.isNotEmpty().bool&&(min==undefined||(min!=undefined&&parseInt(this.value,10)-range >= parseInt(min,10)))) {
                if($(this).attr("positive") == "positive"&&parseInt(this.value,10)-range<"0"){return true}
                this.value = parseInt(this.value,10) - range;
                return true;
            }

            //added by liubing 20121224 处理小数点问题 对于123.04的输入是有问题的，还需要进一步处理。
            var currentValue = this.value;
            var valueLength = currentValue.length;
            var currentSite = JCTools.getPositionForInput(this);
            //处理小数点后第一位
            if((key == 110 || key == 190) && valueLength >= 2 && currentValue.substring(valueLength-2) == "00"){
                JCTools.setPositionForInput(this,currentSite);
            }
            else if(currentSite == (valueLength-1) && currentValue.substring(valueLength-2) != "00"){
                JCTools.setPositionForInput(this,currentSite);
            }
            else if(currentSite == (valueLength-1) && currentValue.substring(valueLength-2) == "00"){
               //
            }

            //若按下向左，向右，退格，删除，tab则正常执行按键
            if (key == 37 || key == 39 || key == 8 || key == 46 || key == 9)return true;
            //若按下数字键则正常执行按键
            if ((key <= 57 && key >= 48) || (key >= 96 && key <= 105)) {
                //若设定了最大值且当前值等于最大值则阻止输入
                return max == undefined || this.value != max||JCTools.getSelectText(this).length>0;
            }
            if(key==229){
                return true;
            }
            else {
                //处理负号
                if ((key == 109 ||key == 189 )&& $(this).attr("positive") != "positive") {
                    this.value = "-" + this.value.replace("-", "")
                }
                return false;
            }
        }
        //当为keyup事件时
        if (eType == "keyup") {
            key = e.which;
            if (key == 37 || key == 39 || key == 8 || key == 46 || key == 9)return true;
            //去除特殊字符
            if (this.value.search(/[^\d\-]/)!=-1) {
                this.value = this.value.replace(/[^\d\-]/g, '');
            }
            //超过最大值时用最大值填充
            if (max != undefined && parseInt(this.value,10) > parseFloat(max)) {
                this.value = max;
            }
        }
        if (eType == "blur" || eType == "mouseout") {
            //去除特殊字符
            if (this.value.search(/[^\d\-]/)!=-1) {
                this.value = this.value.replace(/[^\d\-]/g, '');
            }
            var value = this.value;
            //处理负号
            if(value.indexOf("-") != -1){
                this.value =  "-" + value.replace(/\-/g, '')
            }
            if (this.value == "-")this.value = "";
            //若为正数则去掉负号
            $(this).attr("positive") == "positive" && $(this).val(this.value.replace(/\-/g, ''));
            //若小于最小值则用最小值填充
            if (min != undefined && parseInt(this.value,10) < parseFloat(min)) {
                this.value = min;
            }
            this.value = this.value == "" ? "" : parseInt(this.value,10);
            if((this.value=="0"||this.value=="")&&defaultVal!=undefined){this.value=defaultVal}
        }
        if(eType =="focus"){
            this.select();
        }
    },
    intInit:function(inputs){
        inputs = inputs == undefined ? $("input[itype=int]").unbind(".intDeal") : inputs;
        inputs.bind("keydown.intDeal keyup.intDeal blur.intDeal focus.intDeal", JCTools.intDeal);
        return this
    },
    /**
     * @description 将input处理为float型
     * @param {Object} e 事件对象
     * @example  $("input[itype=float]").unbind(".floatDeal").bind("keydown.floatDeal keyup.floatDeal blur.floatDeal mousemove.floatDeal", JCTools.floatDeal);
     * &lt;input type="text" itype="float" max="100" min="10" positive="positive" precision="2"/&gt;
     *     max(可选参数)限制最大值
     *     min(可选参数)限制最小值
     *     positive(可选参数)限制为正
     *     precision(可选参数)限制小数点后面精度
     */
    floatDeal:function (e) {
        if($(this).attr("readonly"))return;
        var eType = e.type;
        var max = $(this).attr("max");
        var min = $(this).attr("min");
        var positive = $(this).attr("positive");
        var precision = $(this).attr("precision");
        var toFix = $(this).attr("toFix");
        var noZero = $(this).attr("noZero");
        var defaultVal = $(this).attr("defaultVal");
        //当为keydown事件时
        if (eType == "keydown") {
            var key = e.which;
            //若shift键按下则使所有按键失效
            if (e.shiftKey)return false;
            //若按下向上键，且非空，小于最大值则加一
            if (key == 38 && this.value.isNotEmpty().bool&&(max == undefined || (max != undefined && parseFloat(this.value) < parseFloat(max)))) {
                    var minusValue = this.value.split(".");
                    minusValue[0] = parseInt(minusValue[0],10) + 1;
                    this.value = minusValue.length == 1 ? minusValue[0] : minusValue[0] + "." + minusValue[1];
                return true;
            }
            //若按下向下键，且非空，大于最小值则减一
            if (key == 40 && this.value.isNotEmpty().bool&&(min == undefined || (min != undefined &&parseFloat(this.value) > parseFloat(min)))) {
                var resultValue= parseFloat(this.value) - 1;
                if($(this).attr("positive") == "positive"&&resultValue<0){return true}
                var plusValue = this.value.split(".");
                plusValue[0] = parseInt(plusValue[0],10) - 1;
                this.value = plusValue.length == 1 ? plusValue[0] : plusValue[0] + "." + plusValue[1];
                return true;
            }
            //若按下向左，向右，home，end，退格，删除，tab则正常执行按键
            if (key == 37 || key == 39 || key == 8 || key == 46 || key == 9 || key == 35 || key == 36)return true;
            //若按下数字键则正常执行按键
            if ((key <= 57 && key >= 48) || (key >= 96 && key <= 105)) {
                //若设定了最大值且当前值等于最大值，或者超过设定的精度则阻止输入
                return (max == undefined || this.value != max) && (precision == undefined || this.value.split(".").length<2||(this.value.split(".")[1]).length != parseInt(precision,10)||JCTools.getPositionForInput(this)<this.value.indexOf(".")+1||JCTools.getSelectText(this).length>0)
            }
            if (key == 110 || key == 190) {
                return this.value.indexOf(".") == -1;
            }
            if(key==229){
                return true;
            }
            else {
                //处理负号
                if ((key == 109 ||key == 189 ) && positive != "positive") {
                    this.value = "-" + this.value.replace("-", "")
                }
                return false;
            }
        }
        //当为keyup事件时
        if (eType == "keyup") {
            key = e.which;
            if (key == 37 || key == 39 || key == 8 || key == 46 || key == 9)return true;
            //去除特殊字符
            if(this.value.search(/[^\d\-\.]/)!=-1){
                this.value = this.value.replace(/[^\d\-\.]/g, '')
            }
             //超过最大值时用最大值填充
            if (max != undefined && parseFloat(this.value) > parseFloat(max)) {
                this.value = max;
            }
        }
        if (eType == "blur") {
            //去除特殊字符
            var value = this.value;
            if (value.search(/[^\d\-\.]/) != -1) {
                this.value = value.replace(/[^\d\-\.]/g, '')
            }
            //处理负号
            value = this.value;
            if (value.indexOf("-") != -1) this.value = "-" + value.replace(/\-/g, '');
            //处理小数点，只保留多个小数点中最后一个
            value = this.value;
            var pos = value.lastIndexOf('.');
            if (pos != value.indexOf('.'))this.value = value.substring(0, pos).replace(/\./g, "") + value.substring(pos);
            //如果小数点在首位或者末尾则去掉
            value = this.value;
            if (value.indexOf(".") == 0 || value.indexOf(".") + 1 == value.length) this.value = value.replace(/\./g, "");
            //若只剩下一个负号则去掉
            this.value = this.value == "-" ? "" : this.value;
            //若非负则去掉负号
            value = this.value;
            if (positive == "positive" && value.indexOf("_") != -1)this.value = value.replace(/\-/g, '');
            //若小于最小值则用最小值填充
            value = this.value;
            if (min != undefined && parseFloat(value) < parseFloat(min)) {
                this.value = min;
            }
            value = this.value;
            if (noZero != undefined && parseFloat(this.value) == 0) {
                this.value = "";
            }
            //处理精度
            value = this.value;
            if (precision != undefined && value.indexOf('.') != -1) {
                value = parseFloat(value.substring(0, value.indexOf('.') + parseInt(precision,10) + 1));
                this.value = value;
            }
            if (this.value != "" && precision != undefined && toFix != undefined) {
                this.value = parseFloat(this.value).toFixed(precision)
            }
            else if (this.value != "") {
                this.value = parseFloat(value)
            }
            if((this.value=="0"||this.value=="")&&defaultVal!=undefined){this.value=defaultVal}
        }
        if(eType =="focus"){
            this.select();
        }
    },
    floatInit:function(inputs){
        inputs = inputs == undefined ? $("input[itype=float]").unbind(".floatDeal") : inputs;
        inputs.bind("keydown.floatDeal keyup.floatDeal blur.floatDeal focus.floatDeal", JCTools.floatDeal);
        return this;
    },
    getPositionForInput:function (ctrl) {
        var CaretPos = 0;
        if (document.selection) { // IE Support
            ctrl.focus();
            var Sel = document.selection.createRange();
            Sel.moveStart('character', -ctrl.value.length);
            CaretPos = Sel.text.length;
        } else if (ctrl.selectionStart || ctrl.selectionStart == '0') {// Firefox support
            CaretPos = ctrl.selectionStart;
        }
        return (CaretPos);
    },
    setPositionForInput:function (ctrl,pos) {
        //设置光标位置函数
        if (ctrl.setSelectionRange) {
            ctrl.setSelectionRange(pos, pos);
        }
        else if (ctrl.createTextRange) {
            var range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    },
    getSelectText:function (obj) {
        var selection;
        if (obj.selectionStart != undefined) {
            selection = obj.value.substr(obj.selectionStart, obj.selectionEnd - obj.selectionStart);
        } else {
            if (window.getSelection) {
                selection = window.getSelection();
            } else if (document.getSelection) {
                selection = document.getSelection();
            } else if (document.selection) {
                selection = document.selection.createRange().text;
            }
        }
        return selection;
    },
//    numDeal:function (e) {
//        if ($(this).attr("readonly"))return;
//        var value = this.value;
//        e.which == 38 && (value.isNotEmpty().bool) && $(this).val(parseFloat(value) + 1);
//        e.which == 40 && (value.isNotEmpty().bool) && $(this).val(parseFloat(value) - 1);
//        if ($(this).attr("itype") == "money") {
//            value = parseFloat($(this).val()).toFixed(2);
//            if (value < 0)value = "0.00"
//            $(this).val(value)
//        }
//    },
    /**
     * @description 将input处理为时间控件，格式根据itype决定，itype可选值：date(yyyy-MM-dd),datetime(yyyy-MM-dd HH:mm:ss),dateYear(yyyy)，dateMonth(yyyy-MM)
     * @example  $("input[itype^=date]").bind("focus.inputNameSpace click.inputNameSpace", JCTools.dateDeal);
     */
    dateDeal:function () {
        var iType = $(this).attr("iType");
        if (iType == "date")iType = "yyyy-MM-dd";
        if (iType == "datetime")iType = "yyyy-MM-dd HH:mm:ss";
        if (iType == "dateYear")iType = "yyyy";
        if (iType == "dateMonth")iType = "yyyy-MM";
        $(this).attr("readonly", "readonly");
        WdatePicker && WdatePicker({dateFmt:iType});
    },
//    moneyBlurDeal:function (e) {
//        $(this).val($(this).val().replace(/[^\d\-\.]/g, ''));
//    } ,
    /**
     * @description 将回车改为tab键
     * @param {Object} inputs 若不传参数则默认将回车改为tab键的dom结点集合为： $("input:visible,select");
       @return {Object} inputs 将回车改为tab键的dom结点集合(jquery对象)
     * @example  JCTools.enterToTab() , JCTools.enterToTab($("input:visible,select,a.search_button"))
     */
    enterToTab:function(inputs) {
        if (inputs == undefined) {
            inputs = $("input:visible,select").not("select:disabled").not("input:disabled").not("input[readonly]");
        }
        var total = inputs.size();
        inputs.unbind(".entertotab").bind("keydown.entertotab", function (e) {
            if (e.which == 13) { //判断所按是否回车键
                if (e.target.tagName.toLocaleLowerCase() == "a")return true;
                var idx = inputs.index(this); //获取当前焦点输入框所处的位置
                if (idx + 1 < total) {
                    $(this).blur();
                    inputs[idx + 1].focus(); //设置焦点
                }else{
                    inputs[0].focus(); //设置焦点
                }
                return false;
            }
        });
        return inputs
    },
    /**
     * @description 阻止浏览器的后退功能(阻止退格事件)。如果e.target不是input或者textarea退格将失效，如果e.target是input或者textarea且e.target对象是readonly的，那么退格将失效
     * @example  JCTools.forbidBack()
     */
    forbidBack:function() {
        $("body").keydown(function(e) {
            var tagName = e.target.tagName.toLocaleLowerCase();
            //当退格键按下时，如果e.target不是input或者textarea退格将失效,即阻止浏览器默认事件：后退
            if (e.which == 8 && tagName != "input" && tagName != "textarea") {
                return false;
            }
            //当退格键按下时，如果e.target是input或者textarea且e.target对象是readonly的，那么退格将失效,即阻止浏览器默认事件：后退
            if (e.which == 8 && (tagName == "input" || tagName == "textarea") && $(e.target).attr("readonly")) {
                return false;
            }
            return true;
        });
    },
    /**
     * @description 第一个input或textarea获得焦点，若这个input有focus事件或者为readonly则聚焦下个input或textarea
     * @example  JCTools.firstFocus()
     */
    firstFocus:function(focusFlag) {
        focusFlag = focusFlag == undefined ? true : focusFlag;
        var inputObjs = $("input:text:visible,textarea");
        for (var i = 0,j = inputObjs.size(); i < j; i++) {
            if (((focusFlag && inputObjs[i].onfocus == null) || !focusFlag) && (!$(inputObjs[i]).attr("readonly"))) {
                $(inputObjs[i]).focus();
                break;
            }
        }
    }
};
String.prototype.leftTrim = function () {
    return this.replace(/^\s\s*/, '');
};
/**
 * @description String方法扩展，去除字符串的右空格
 * @return {String}去除右空格的字符串
 * @example  "  aa  ".rightTrim()  返回："  aa"
 */
String.prototype.rightTrim = function () {
    return this.replace(/\s\s*$/, '');
};
/**
 * @description String方法扩展，去除字符串的两端空格
 * @return {String}去除两端空格的字符串
 * @example  "  aa  ".trim()  返回："aa"
 */
String.prototype.trim = function () {
    return this.leftTrim().rightTrim();
};
/**
 * @description String方法扩展，判断经过trim的字符串是否为非空，若不为空则returnObj.bool为true
 * @return {Object} returnObj returnObj中只包含bool字段,即：returnObj.bool
 * @example  "  ".isNotEmpty()  返回："false"  "null".isNotEmpty()  返回："false"
 */
String.prototype.isNotEmpty = function () {
    var returnObj = {};
    returnObj.bool = false;
    var tmpStr = this.trim();
    if (tmpStr === undefined || tmpStr === null || tmpStr.length === 0 || tmpStr === "" || tmpStr === "null") {
        return returnObj;
    }
    returnObj.bool = true;
    return returnObj;
};
/**
 * @description String方法扩展，判断经过trim的字符串是否包含传入的正则表达式或字符串(内部实现为string的方法：search())，若符合returnObj.bool为true
 * @param {RegExp}regExp 要判断的正则表达式
 * @return {Object} returnObj returnObj中只包含bool字段,即：returnObj.bool
 * @example “helloworld".test("he") 则returnObj.bool为true
 */
String.prototype.test = function (regExp) {
    var returnObj = {};
    returnObj.bool = false;
    if (this.trim().search(regExp) === -1) {
        return returnObj;
    }
    returnObj.bool = true;
    return returnObj;
};
/**
 * @description String方法扩展，用于校验当前字符串是否符合所需的数字格式
 * @param {int} intLength 整数部分位数
 * @param {int} floatLength 小数部分位数(可选参数，若不传入则为0)
 * @return {Object} returnObj returnObj中只包含bool字段,即：returnObject.bool
 * @example "2.3".checkNum(1,2).bool 返回true
 */
String.prototype.checkNum = JCTools.checkNum;
/**
 * @description String方法扩展，用于将人民币小写改完大写，最大值：99999999999.99
 * @return {String} 人民币大写
 * @example  "102".chnMoney() 返回：壹佰零贰元整
 */
String.prototype.chnMoney = JCTools.chnMoney;
/**
 * @description String方法扩展，用于将字符串进行md5加密
 * @return {String} 进行md5加密后的字符串
 * @example  "102".md5()
 */
String.prototype.md5 = function () {
    var str = this.trim();
    var hex_chr = '0123456789ABCDEF';

    function rhex(num) {
        str = "";
        for (var j = 0; j <= 3; j++)
            str += hex_chr.charAt((num >> (j * 8 + 4)) & 0x0F) +
                    hex_chr.charAt((num >> (j * 8)) & 0x0F);
        return str;
    }

    /*
     * Convert a string to a sequence of 16-word blocks, stored as an array.
     * Append padding bits and the length, as described in the MD5 standard.
     */
    function str2blks_MD5(str) {
        var nblk = ((str.length + 8) >> 6) + 1;
        var blks = new Array(nblk * 16);
        for (var i = 0; i < nblk * 16; i++) blks[i] = 0;
        for (i = 0; i < str.length; i++)
            blks[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8);
        blks[i >> 2] |= 0x80 << ((i % 4) * 8);
        blks[nblk * 16 - 2] = str.length * 8;
        return blks;
    }

    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */
    function add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    /*
     * Bitwise rotate a 32-bit number to the left
     */
    function rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }

    /*
     * These functions implement the basic operation for each round of the
     * algorithm.
     */
    function cmn(q, a, b, x, s, t) {
        return add(rol(add(add(a, q), add(x, t)), s), b);
    }

    function ff(a, b, c, d, x, s, t) {
        return cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }

    function gg(a, b, c, d, x, s, t) {
        return cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }

    function hh(a, b, c, d, x, s, t) {
        return cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function ii(a, b, c, d, x, s, t) {
        return cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    var x = str2blks_MD5(str);
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;

        a = ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = ff(c, d, a, b, x[i + 10], 17, -42063);
        b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = ff(b, c, d, a, x[i + 15], 22, 1236535329);

        a = gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = gg(b, c, d, a, x[i + 12], 20, -1926607734);

        a = hh(a, b, c, d, x[i + 5], 4, -378558);
        d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = hh(b, c, d, a, x[i + 2], 23, -995338651);

        a = ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = ii(b, c, d, a, x[i + 9], 21, -343485551);

        a = add(a, olda);
        b = add(b, oldb);
        c = add(c, oldc);
        d = add(d, oldd);
    }
    return rhex(a) + rhex(b) + rhex(c) + rhex(d);
};
/**
 * @description String方法扩展，用于将trim后的时间字符串转换为date对象可接受格式为：2010-15-21，2010-15-21 12:45, 2010-15-21 12:45:40
 * @return {Date} 转换后的date对象
 * @example  "2010-15-21".dateFormat()
 */
String.prototype.dateFormat = function() {
    if (!this.isNotEmpty().bool) {
        return "";
    }
    var trimValue = this.trim();
    var dateArr;
    var timeArr;
    if (trimValue.length === 7) { //month 2010-12
        dateArr = trimValue.split("-");
        return new Date(parseInt(dateArr[0], 10), parseInt(dateArr[1], 10) - 1)
    } else if (trimValue.length === 10) { //date 2010-15-21
        dateArr = trimValue.split("-");
        return new Date(parseInt(dateArr[0], 10), parseInt(dateArr[1], 10) - 1, parseInt(dateArr[2], 10))
    } else if (trimValue.length === 16) {//date minute 2010-15-21 12:45
        dateArr = trimValue.split(" ")[0].split("-");
        timeArr = trimValue.split(" ")[1].split(":");
        return new Date(parseInt(dateArr[0], 10), parseInt(dateArr[1], 10) - 1, parseInt(dateArr[2], 10), parseInt(timeArr[0], 10), parseInt(timeArr[1], 10));
    } else if (trimValue.length === 19) {//datetime  2010-15-21 12:45:40
        dateArr = trimValue.split(" ")[0].split("-");
        timeArr = trimValue.split(" ")[1].split(":");
        return new Date(parseInt(dateArr[0], 10), parseInt(dateArr[1], 10) - 1, parseInt(dateArr[2], 10), parseInt(timeArr[0], 10), parseInt(timeArr[1], 10), parseInt(timeArr[2], 10));
    }
    return "";
};
/**
 * @description String方法扩展，判断身份证号码格式函数(公民身份号码是特征组合码，排列顺序从左至右依次为：六位数字地址码，八位数字出生日期码，三位数字顺序码和一位数字校验码)
 * @return {Object} returnObj returnObj中只包含bool字段,即：returnObj.bool
 * @example  "123456789012345678".isChinaIDCard()  返回 returnObj.bool为false
 */
String.prototype.isChinaIDCard = function() {
    var StrNo = this.trim();

    function isNumber(oNum) {
        if (!oNum) return false;
        var strP = /^\d+(\.\d+)?$/;
        if (!strP.test(oNum)) return false;
        try {
            if (parseFloat(oNum) != oNum) return false;
        }
        catch(ex) {
            return false;
        }
        return true;
    }

    function isValidDate(iY, iM, iD) {
        return !(iY > 2200 || iY < 1900 || !isNumber(iY) || iM > 12 || iM <= 0 || !isNumber(iM) || iD > 31 || iD <= 0 || !isNumber(iD))
    }

    var returnObj = {};
    returnObj.bool = false;
    if (StrNo.length == 15) {
        if (!isValidDate("19" + StrNo.substr(6, 2), StrNo.substr(8, 2), StrNo.substr(10, 2))) {
            return returnObj;
        }
    } else if (StrNo.length == 18) {
        if (!isValidDate(StrNo.substr(6, 4), StrNo.substr(10, 2), StrNo.substr(12, 2))) {
            return returnObj;
        }
    } else {
        return returnObj;
    }
    if (StrNo.length == 18) {
        var a,b,c;
        if (!isNumber(StrNo.substr(0, 17))) {
            return returnObj;
        }
        a = parseInt(StrNo.substr(0, 1)) * 7 + parseInt(StrNo.substr(1, 1)) * 9 + parseInt(StrNo.substr(2, 1)) * 10;
        a = a + parseInt(StrNo.substr(3, 1)) * 5 + parseInt(StrNo.substr(4, 1)) * 8 + parseInt(StrNo.substr(5, 1)) * 4;
        a = a + parseInt(StrNo.substr(6, 1)) * 2 + parseInt(StrNo.substr(7, 1)) + parseInt(StrNo.substr(8, 1)) * 6;
        a = a + parseInt(StrNo.substr(9, 1)) * 3 + parseInt(StrNo.substr(10, 1)) * 7 + parseInt(StrNo.substr(11, 1)) * 9;
        a = a + parseInt(StrNo.substr(12, 1)) * 10 + parseInt(StrNo.substr(13, 1)) * 5 + parseInt(StrNo.substr(14, 1)) * 8;
        a = a + parseInt(StrNo.substr(15, 1)) * 4 + parseInt(StrNo.substr(16, 1)) * 2;
        b = a % 11;
        if (b == 2) {   //最后一位为校验位
            c = StrNo.substr(17, 1).toUpperCase();   //转为大写X
        } else {
            c = parseInt(StrNo.substr(17, 1));
        }
        switch (b) {
            case 0: if (c != 1) {
                return false;
            }break;
            case 1: if (c != 0) {
                return returnObj;
            }break;
            case 2: if (c != "X") {
                return returnObj;
            }break;
            case 3: if (c != 9) {
                return returnObj;
            }break;
            case 4: if (c != 8) {
                return returnObj;
            }break;
            case 5: if (c != 7) {
                return returnObj;
            }break;
            case 6: if (c != 6) {
                return returnObj;
            }break;
            case 7: if (c != 5) {
                return returnObj;
            }break;
            case 8: if (c != 4) {
                return returnObj;
            }break;
            case 9: if (c != 3) {
                return returnObj;
            }break;
            case 10: if (c != 2) {
                return returnObj;
            }
        }
    } else {//15位身份证号
        if (!isNumber(StrNo)) {
            return returnObj;
        }
    }
    returnObj.bool = true;
    return returnObj;
};
/**
 * @description String方法扩展，转换为带有%的16进制字符
 * @return {String} result 带有%的16进制字符
 * @example  "1".toHex()  返回 "%31"
 */
String.prototype.toHex=function(){
    var a, d;
    var hexStr = '';
    for (var i = 0; i < this.length; i++) {
        d = this.charCodeAt(i);
        a = d % 16;
        hexStr += '%' + "0123456789ABCDEF".charAt((d - a) / 16) + "0123456789ABCDEF".charAt(a);
    }
    return hexStr;
};
/**
 * @description String方法扩展，将带有%的16进制字符转换为十进制字符串
 * @return {String} result 十进制字符串
 * @example  "%31".hex2Str()  返回 "1"
 */
String.prototype.hex2Str=function(){
    var arr = this.split("%");
    for (var index = 0; index < arr.length; index++) {
        arr[index] = arr[index].substring(1);
    }
    return arr.join("");
};
/**
 * @description Number方法扩展，用于校验当前字符串是否符合所需的数字格式
 * @param {int} intLength 整数部分位数
 * @param {int} floatLength 小数部分位数(可选参数，若不传入则为0)
 * @return {Object} returnObj returnObj中只包含bool字段,即：returnObject.bool
 * @example var a=2.3; a.checkNum(1,2).bool 返回true
 */
Number.prototype.checkNum = JCTools.checkNum;
/**
 * @description Number方法扩展，用于将人民币小写改完大写，最大值：99999999999.99
 * @return {String} 人民币大写
 * @example  var a = 102; a.chnMoney() 返回：壹佰零贰元整
 */
Number.prototype.chnMoney = JCTools.chnMoney;
/**
 * @description Date方法扩展，date对象转化为字符串yyyy-mm-dd，
 * @return {String} 转换后的日期字符串
 * @example  new Date().dateFormat() 返回：2011-07-21
 */
Date.prototype.dateFormat = function () {
    return this.getFullYear() + "-" + JCTools.getStr(this.getMonth() + 1) + "-" + JCTools.getStr(this.getDate());
};
/**
 * @description Date方法扩展，date对象转化为字符串yyyy-mm-dd hh:mm，
 * @return {String} 转换后的日期字符串
 * @example  new Date().dateMinuteFormat() 返回：2011-07-21 21:15
 */
Date.prototype.dateMinuteFormat = function () {
    return this.getFullYear() + "-" + JCTools.getStr(this.getMonth() + 1) + "-" + JCTools.getStr(this.getDate()) + " " + JCTools.getStr(this.getHours()) + ":" + JCTools.getStr(this.getMinutes());
};
/**
 * @description Date方法扩展，date对象转化为字符串yyyy-mm-dd hh:mm:ss，
 * @return {String} 转换后的日期字符串
 * @example  new Date().datetimeFormat() 返回：2011-07-21 21:16:05
 */
Date.prototype.datetimeFormat = function () {
    return this.getFullYear() + "-" + JCTools.getStr(this.getMonth() + 1) + "-" + JCTools.getStr(this.getDate()) + " " + JCTools.getStr(this.getHours()) + ":" + JCTools.getStr(this.getMinutes()) + ":" + JCTools.getStr(this.getSeconds());
};
/**
 * @description Date方法扩展，date对象转化为字符串hh:mm，
 * @return {String} 转换后的日期字符串
 * @example  new Date().minuteFormat() 返回：21:16
 */
Date.prototype.minuteFormat = function () {
    return JCTools.getStr(this.getHours()) + ":" + JCTools.getStr(this.getMinutes());
};
/**
 * @description Date方法扩展，date对象转化为字符串yyyy-mm-dd hh:mm:ss，
 * @return {String} 转换后的日期字符串
 * @example  new Date().timeFormat() 返回：21:16:43
 */
Date.prototype.timeFormat = function () {
    return JCTools.getStr(this.getHours()) + ":" + JCTools.getStr(this.getMinutes()) + ":" + JCTools.getStr(this.getSeconds());
};
/**
 * @class 本类为校验方法类，存放常用校验方法
 */
var JCCheckFunc = {
    /**
     * @description 当某些dom结点动态被删除时可能会保存有错误信息，因此将其置为true，以消除错误信息
     * @param {String} objId 要设置为true的结点id
     * @return {Object} returnObj returnObj={bool：bool类型值，obj：jquery对象}
     * @example returnTrue:["objId"]
     */
    returnTrue:function () {
        arguments = arguments[0];
        var objId = arguments[0];
        var obj = $("#" + objId);
        var returnObj = {};
        returnObj.bool = true;
        returnObj.obj = obj;
        return returnObj;
    },
    /**
     * @description 检查input或textarea的值是否是符合要求的数字
     * @param {String} objId 要检查的结点id
     * @param {String} objText 错误信息，若想使用默认值需传入“”，默认值为“请输入正确数字！”，若传入自定义信息，信息结尾不需加叹号
     * @param {String} objIntLength 整数部分长度
     * @param {String} objFloatLength 小数部分长度(可选参数，若不传入则为0)
     * @return {Object} returnObj returnObj={bool：bool类型值，obj：jquery对象，errMsg：错误信息字符串}
     * @example checkNum:["objId"，"请输入3位整数2位小数","3","2"]
     */
    checkNum:function () {
        arguments = arguments[0];
        var objId = arguments[0];
        var objText = arguments[1];
        objText = objText == "" ? "请输入正确数字！" : objText + "！";
        var objIntLength = arguments[2];
        var objFloatLength = arguments[3];
        var obj = $("#" + objId);
        var returnObj = obj.val().checkNum(objIntLength, objFloatLength);
        returnObj.obj = obj;
        if (!returnObj.bool) {
            returnObj.errMsg = objText;
        }
        return returnObj;
    },
    /**
     * @description 检查input或textarea的值是否为空，"null"字符串也判断为空
     * @param {String} objId 要检查的结点id
     * @param {String} objText 要检查的结点名称，用于拼接错误信息(可选参数，错误信息默认为：该项不能为空！自定义信息为：XX不能为空！)
     * @return {Object} returnObj returnObj={bool：bool类型值，obj：jquery对象，errMsg：错误信息字符串}
     * @example checkEmpty:["input1","姓名"]
     */
    checkEmpty:function () {
        arguments = arguments[0];
        var objId = arguments[0];
        var objText = arguments[1];
        var obj = $("#" + objId);
        var returnObj = obj.val().isNotEmpty();
        returnObj.obj = obj;
        if (!returnObj.bool) {
            returnObj.errMsg = objText == undefined||objText == "" ? "该项不能为空！" : objText + "不能为空！";
        }
        return returnObj;
    },
    /**
     * @description 检查某个结点是否为空，将错误信息显示在另一个结点上，一般用于校验input type=hidden
     * @param {String} objId 要检查的结点id
     * @param {String} objText 要检查的结点名称，用于拼接错误信息(若使用默认值请输入""，错误信息默认为：该项不能为空！自定义信息为：XX！)
     * @param {String} targetObjId 要显示错误信息的结点id
     * @return {Object} returnObj returnObj={bool：bool类型值，obj：显示错误信息的jquery对象，errMsg：错误信息字符串}
     * @example checkHiddenEmpty:["clientId","该客户不存在","clientName"]
     */
    checkHiddenEmpty:function () {
        arguments = arguments[0];
        var objId = arguments[0];
        var objText = arguments[1];
        var targetObjId = arguments[2];
        var returnObj = $("#" + objId).val().isNotEmpty();
        returnObj.obj = $("#" + targetObjId);
        if (!returnObj.bool) {
            returnObj.errMsg = objText == undefined ||objText == ""? "该项不能为空！" : objText + "！";
        }
        return returnObj;
    },
    /**
     * @description 检查某几个结点是否同时为空,注意：三个数组的参数需要相互对应，且若使用默认信息请注意用空串“”占位
     * @param {String[]} objId 要检查的结点id数组
     * @param {String[]} objText 要检查的结点名称数组，用于拼接错误信息(若使用默认值请输入""，错误信息默认为：该项不能为空！自定义信息为：XX！)
     * @param {String[]} targetObjId 要显示错误信息的结点id数组(可选参数，若在所检查的结点上显示错误信息则此参数只许传入空数组[]即可，若参数列表后面的结点需要在另外的结点显示错误信息则本参数列表的前几位需用空串“”占位
     * @return {Object} returnObj returnObj={bool：bool类型值，obj：显示错误信息的jquery对象，errMsg：错误信息字符串}
     * @example checkAllEmpty:[["cargoName" ,"cargoId"，"quan" ], ["","该成品不存在"],["","cargoName" ]]
     */
    checkAllEmpty:function () {
        arguments = arguments[0];
        var returnObj;
        var flag;
        for (var i = 0,j = arguments[0].length; i < j; i++) {
            var obj = $("#" + arguments[0][i]);
            returnObj = obj.val().isNotEmpty();
            returnObj.obj = arguments[2][i] == undefined || arguments[2][i] == "" ? obj : $("#" + arguments[2][i]);
            if (i == 0) {
                flag = returnObj.bool
            } else {
                if (flag && (!returnObj.bool)) {
                    returnObj.errMsg = arguments[1][i] == undefined || arguments[1][i] == "" ? "该项不能为空！" : arguments[1][i] + "！";
                    return returnObj;
                }
                if ((!flag) && returnObj.bool) {
                    returnObj.bool = flag;
                    returnObj.obj = arguments[2][0] == undefined || arguments[2][0] == "" ? $("#" + arguments[0][0]) : $("#" + arguments[2][i]);
                    returnObj.errMsg = arguments[1][i] == undefined || arguments[1][i] == "" ? "该项不能为空！" : arguments[1][i] + "！";
                    return returnObj;
                }
            }
        }
        returnObj.bool = true;
        returnObj.showRight = false;
        return returnObj;
    },
    /**
     * @description 检查某个结点是否超过最大字数
     * @param {String} objId 要检查的结点id
     * @param {String} objLength 要检查的结点的最大字数
     * @param {String} objText 要检查的结点名称，用于拼接错误信息(可选参数，错误信息默认为：该项不能超过objLength个字！自定义信息为：XX不能超过objLength个字！！)
     * @return {Object} returnObj returnObj={bool：bool类型值，obj：显示错误信息的jquery对象，errMsg：错误信息字符串}
     * @example max:["memo",250,"备注"]
     */
    max:function () {
        arguments = arguments[0];
        var objId = arguments[0];
        var objLength = arguments[1];
        var objText = arguments[2];
        objText = objText == undefined || objText == "" ? "该项" : objText;
        var obj = $("#" + objId);
        var returnObj = {};
        returnObj.obj = obj;
        if (parseInt(obj.val().length,10) > parseInt(objLength,10)) {
            returnObj.errMsg = objText + "不能超过" + objLength + "个字！";
            returnObj.bool = false;
        } else {
            returnObj.bool = true;
        }
        return returnObj;
    },
    /**
     * @description 检查某个结点是否少于最少字数
     * @param {String} objId 要检查的结点id
     * @param {String} objLength 要检查的结点的最少字数
     * @param {String} objText 要检查的结点名称，用于拼接错误信息(可选参数，错误信息默认为：该项不能少于objLength个字！自定义信息为：XX不能少于objLength个字！！)
     * @return {Object} returnObj returnObj={bool：bool类型值，obj：显示错误信息的jquery对象，errMsg：错误信息字符串}
     * @example max:["memo",250,"备注"]
     */
    min:function () {
        arguments = arguments[0];
        var objId = arguments[0];
        var objLength = arguments[1];
        var objText = arguments[2];
        objText = objText == undefined || objText == "" ? "该项" : objText;
        var obj = $("#" + objId);
        var returnObj = {};
        returnObj.obj = obj;
        if (parseInt(obj.val().length,10) < parseInt(objLength,10)) {
            returnObj.errMsg = objText + "不能少于" + objLength + "个字！";
            returnObj.bool = false;
        } else {
            returnObj.bool = true;
        }
        return returnObj;
    },
    /**
     * @description 检查某个结点是否符合正则表达式
     * @param {String} objId 要检查的结点id
     * @param {String} objText 要检查的结点名称，用于拼接错误信息,错误信息信息为：XX+正则表达式的错误信息！)
     * @param {String} regExp JCRegExp中的正则表达式对象
     * @return {Object} returnObj returnObj={bool：bool类型值，obj：显示错误信息的jquery对象，errMsg：错误信息字符串}
     * @example checkRegExp:["input1","电子邮件",JCRegExp.email]
     */
    checkRegExp:function () {
        arguments = arguments[0];
        var objId = arguments[0];
        var objText = arguments[1];
        var regExp = arguments[2];
        var obj = $("#" + objId);
        var returnObj;
        if (!obj.val().isNotEmpty().bool) {
            returnObj = {};
            returnObj.obj = obj;
            returnObj.bool = true;
            return returnObj;
        }
        returnObj = obj.val().test(regExp.code);
        returnObj.obj = obj;
        returnObj.errMsg = objText + regExp.msg;
        return returnObj;
    },
    /**
     * @description 检查某个select是否选中的为第一项。
     * @param {String} objId 要检查的结点id
     * @param {String} objText 要检查的结点错误信息(可选参数，错误信息默认为：该项不能为空！自定义信息为：XX！)
     * @return {Object} returnObj returnObj={bool：bool类型值，obj：显示错误信息的jquery对象，errMsg：错误信息字符串}
     * @example checkSelect:["input1","该select不能为空"]
     */
    checkSelect:function () {
        arguments = arguments[0];
        var objId = arguments[0];
        var objText = arguments[1];
        var obj = $("#" + objId);
        var returnObj = {};
        returnObj.obj = obj;
        if (obj.get(0).selectedIndex === 0) {
            returnObj.errMsg = objText == undefined||objText == "" ? "该项不能为空！" : objText + "！";
            returnObj.bool = false;
        } else {
            returnObj.bool = true;
        }
        return returnObj
    },
    /**
     * @description 检查某组checkbox选中个数是否符合要求
     * @param {String} cbName 要检查的checkbox的name
     * @param {String} cbText 要检查的checkbox名字(若使用默认值请传入“”，错误信息默认为：该项……！自定义信息为：XX……！)
     * @param {String} cbMinLength 最少选择项数
     * @param {String} cbMaxLength 最多选择项数(可选参数)，若cbMinLength与cbMaxLength相等则判断选择的项数是否为cbMaxLength项
     * @return {Object} returnObj returnObj={bool：bool类型值，obj：显示错误信息的jquery对象，errMsg：错误信息字符串}
     * @example checkcb:["testcheckbox","爱好","1","2"]
     */
    checkcb:function () {
        arguments = arguments[0];
        var cbName = arguments[0];
        var cbText = arguments[1];
        cbText = cbText == undefined || cbText == "" ? "该项" : cbText;
        var cbMinLength = arguments[2];
        var cbMaxLength = arguments[3];
        var checkbox = $("input[name=" + cbName + "]");
        var returnObj = {};
        returnObj.obj = $(checkbox[0]);
        returnObj.bool = false;
        if (checkbox.length == 0) {
            returnObj.errMsg = "没有要处理的选项！";
            return returnObj;
        }
        var checkedLength = $("input[name=" + cbName + "]:checked").length;
        if (cbMaxLength === undefined || cbMaxLength === "") {
            if (checkedLength < cbMinLength) {
                returnObj.errMsg = cbText + "至少选择" + cbMinLength + "项！";
                return returnObj;
            }
        }
        else {
            if (cbMinLength == cbMaxLength) {
                if (checkedLength != cbMinLength) {
                    returnObj.errMsg = cbText + "请选择" + cbMinLength + "项！";
                    return returnObj;
                }
            }
            else {
                if (checkedLength < cbMinLength) {
                    returnObj.errMsg = cbText + "至少选择" + cbMinLength + "项！";
                    return returnObj;
                }
                if (checkedLength > cbMaxLength) {
                    returnObj.errMsg = cbText + "最多选择" + cbMaxLength + "项！";
                    return returnObj;
                }
            }
        }
        returnObj.bool = true;
        return returnObj;
    },
    /**
     * @description 检查某两个时间控件的开始时间是否小于结束时间
     * @param {String} startDateId 开始时间的inputID
     * @param {String} endDateId 结束时间的inputID
     * @param {String} startDateText 开始时间错误信息(若使用默认值请传入“”，错误信息默认为：开始时间不能大于结束时间！自定义信息为：startDateText不能大于endDateText！)
     * @param {String} endDateText 结束时间错误信息 (可选参数，错误信息默认为：开始时间不能大于结束时间！自定义信息为：startDateText不能大于endDateText！)
     * @return {Object} returnObj returnObj={bool：bool类型值，obj：显示错误信息的jquery对象，errMsg：错误信息字符串}
     * @example compareDate:["startDateId","endDateId"]
     */
    compareDate:function () {
        arguments = arguments[0];
        var startDateId = arguments[0];
        var endDateId = arguments[1];
        var startDateText = arguments[2] === undefined||arguments[2] === "" ? "开始时间" : arguments[2];
        var endDateText = arguments[3] === undefined || arguments[3] === "" ? "结束时间" : arguments[3];
        var middleText = arguments[4] === undefined || arguments[4] === "" ? "不能大于" : arguments[4];
        var startDateObj = $("#" + startDateId);
        var endDateObj = $("#" + endDateId);
        var returnObj = {};
        returnObj.obj = endDateObj;
        if (startDateObj.val().dateFormat() > endDateObj.val().dateFormat()) {
            returnObj.bool = false;
            returnObj.errMsg = startDateText + middleText + endDateText;
        } else {
            returnObj.bool = true;
        }
        return returnObj;
    },
    /**
     * @description 进行ajax校验
     * @param {String} url 请求的url地址
     * @param {Object} data 要传送的数据(此数据是常量值，如{id:"1",name:"Jim啊啊"})
     * @param {String} evalData 要传送的数据(此数据是变量值，需传入计算表达式的字符串形式，如{val:"$('#clientName').val()"})
     * @param {Function} success 回调函数名，参数列表为(data,returnObj)分别为ajax返回值和一个空对象returnObj，函数内部需将returnObj的bool、obj、errMsg字段赋值并返回returnObj
     * @param {String} dataType 返回值类型(可选参数，默认为text，参数范围：xml,html,script,json,jsonp,text。若指定后面参数，此参数需用“”占位)
     * @param {String} type 请求类型(可选参数，默认为POST。若指定后面参数，此参数需用“”占位)
     * @param {String} error 出错函数(可选参数，默认为空函数)
     * @return {Object} returnObj returnObj={bool：bool类型值，obj：显示错误信息的jquery对象，errMsg：错误信息字符串}
     * @example ajax:["sale/salebillF/saveAddSalebill.do",{id:"1",name:"Jim啊啊"},{val:"$('#clientName').val()"},backFunc,"text","POST",function error(){}]
     * function backFunc(data,returnObj){
     *     returnObj.obj=$("#clientName")
     *     returnObj.errMsg="aaa"
     *     returnObj.bool=false;
     *     return returnObj;
     * }
     */
    ajax:function() {
        arguments = arguments[0];
        var url = arguments[0];
        var data = arguments[1];
        var evalData = arguments[2];
        for (var i in evalData) {
            data[i] = eval(evalData[i]);
        }
        var success = arguments[3];
        var dataType = arguments[4];
        dataType = (dataType == undefined || dataType == "") ? "text" : dataType;
        var type = arguments[5];
        type = (type == undefined || type == "") ? "POST" : type;
        var error = arguments[6];
        error = (error == undefined || error == "") ? function() {
        } : error;
        var returnOjb = {};
        $.ajax({
            async:false,
            url:url,
            type: requestMethod.POST,
            data:data,
            dataType:dataType,
            success:function(data) {
                returnOjb = success(data, returnOjb);
            },
            error:error
        });
        return returnOjb;
    },
    dwr:function() {
        arguments = arguments[0];
        var dwrFunc = arguments[0];
        dwr.engine.setAsync(false);
        var returnObj = dwrFunc(arguments);
        dwr.engine.setAsync(true);
        return returnObj;
    }
}
/**
 * @class 本类为ccjc主类，进行初始化及设置
 */
$(function() {
    (function (window) {
        var ccjc = (function () {
            var ccjc = function () {
                return new ccjc.fn.init();
            };
            ccjc.fn = ccjc.prototype = {
                /**
                 * @description 校验效果选项，默认为1：tip提示，若为2则是将错误显示在页面最上方的div中,可通过JC.setEffect("2")更改
                 */
                effect:"1",
                /**
                 * @description tip提示默认配置
                 */
                tipConfig:{
                    offset: [10, 2],
                    effect: "fade",
                    tip:"#tipText",
                    position:"bottom center",
                    opacity: 0.9
                },
                /**
                 * @description 默认校验方法
                 */
                methods:{
                    returnTrue:JCCheckFunc.returnTrue,
                    checkNum:JCCheckFunc.checkNum,
                    checkEmpty:JCCheckFunc.checkEmpty,
                    checkHiddenEmpty:JCCheckFunc.checkHiddenEmpty,
                    checkAllEmpty:JCCheckFunc.checkAllEmpty,
                    max:JCCheckFunc.max,
                    min:JCCheckFunc.min,
                    checkcb:JCCheckFunc.checkcb,
                    checkRegExp:JCCheckFunc.checkRegExp,
                    compareDate:JCCheckFunc.compareDate,
                    checkSelect:JCCheckFunc.checkSelect,
                    ajax:JCCheckFunc.ajax,
                    dwr:JCCheckFunc.dwr
                },
                /**
                 * @description 是否显示输入正确的提示，默认为false不显示
                 */
                validateFlag:false,
                focusFlag:true,
                /**
                 * @description jc的初始化方法，默认执行，不需调用
                 */
                init:function () {
                    if (!window.XMLHttpRequest) {
                        document.onkeydown = function() {
                            var oEvent = window.event;
                            if (oEvent.keyCode == 13 && oEvent.srcElement.type != "button" && oEvent.srcElement.type != "submit"
                                    && oEvent.srcElement.type != "a" && oEvent.srcElement.type != "image") {
                                oEvent.keyCode = 9;
                                if (top.document.getElementsByTagName("iframe")[0].src.indexOf("My97DatePicker.htm") != -1) {
                                    top.document.getElementsByTagName("div")[0].style.display = "none";
                                }
                            }
                        }
                    }
                    else {
//                        JCTools.firstFocus();
                        this.enterToTabObj = JCTools.enterToTab($("input:visible,select:visible,a.search_button:visible").not("select:disabled").not("input:disabled").not("input[readonly]"));
                        JCTools.forbidBack();
                    }
                    return this;
                },
                /**
                 * @description input特殊效果初始化，包括itype=int，float，date……
                 * @example JC.imputInit();
                 */
                inputInit:function() {
                    //将itype=int的input设置为只能输入数字及“-”
                    JCTools.intInit();
                    //将itype=float的input设置为只能输入数字及“-”"."
                    JCTools.floatInit();
                    //设置时间控件
//                    $("input[itype^=date]").bind("focus.inputNameSpace click.inputNameSpace", JCTools.dateDeal);
//                    $.fn.maskMoney()&&$("input[itype=money]").maskMoney({thousands:''});
//                    $("input[itype=money]").bind("blur.inputNameSpace", JCTools.moneyBlurDeal);
                    //校验初始化，在body内新增显示信息的div
                    this.addDiv();
//                    //初始化tip
//                    var tipObj = $("[tip]");
//                    $.fn.tooltip&&tipObj.tooltip(this.tipConfig).dynamic();
//                    //鼠标经过时将当前节点中的tip属性值作为提示语显示
//                    $.fn.tooltip&&tipObj.hover(
//                            function() {
//                                var tip = $(this).attr("tip");
//                                if (tip !== undefined) {
//                                    $("#tipText").html($(this).attr("tip")).removeClass().addClass("warning");
//                                    $(this).tooltip(0).show().hide().show();
//                                }
//                            },
//                            function() {
//                                var tooltip = $(this).tooltip(0);
//                                if (tooltip != undefined && tooltip != null) {
//                                    tooltip.hide();
//                                }
//                            });
                    return this;
                },
                /**
                 * @description 主校验函数
                 * @param {Object}rules 校验规则
                 * @example JC.validate(rules1,rules2,rules3 ……)
                 */
                validate:function () {
                    this.validateFlag = false;
                    $(".inputerror").removeClass("inputerror");
                    var rules;
                    var flag = true;
                    arguments = arguments[0] instanceof Array?arguments=arguments[0]:arguments;
                    out:for (var i = 0,j = arguments.length; i < j; i++) {
                        rules = arguments[i];
                        if (rules !== undefined&&rules !== null) {
                            for (var objInfo in rules.objInfo) {
                                flag = (this.validateObj(rules, objInfo,this.focusFlag) && flag);
                                if (!flag) {
                                    break out;
                                }
                            }
                        }
                    }
//                    flag&&this.inputTrim();
                    return flag
                },
                /**
                 * @description 校验函数，不需调用
                 * @param {Object}rules 校验规则
                 * @param {Object}objInfo 当前校验的结点信息
                 * @return {Bool} flag 校验的结果
                 */
                validateObj:function (rules, objInfo,focusFlag) {
                    var flag = false;
                    for (var i in rules.objInfo[objInfo]) {
                        var args = rules.objInfo[objInfo][i];
                        var returnObj = this.methods[i](args);
                        flag = returnObj.bool;
                        var warnMsg = returnObj.warnMsg;
                        if (!flag) {
                            this.doError(rules, returnObj,focusFlag);
                            break;
                        }
                        else if (warnMsg !== undefined && warnMsg !== null) {
                            this.doWarn(rules, returnObj);
                        }
                    }
                    if (flag) {
                        this.doCorrect(rules, returnObj);
                    }
                    return flag;
                },
                /**
                 * @description 事件校验函数，默认为blur校验
                 * @param {Object}rules 校验规则
                 * @param {String} ruleeventStrs 事件字符串(可选参数，默认为“blur”)
                 * @example JC.validateByEvent(rules1)
                 */
                validateByEvent:function (rules, eventStr) {
                    if (eventStr === undefined) {
                        eventStr = "blur"
                    }
                    for (var objInfo in rules.objInfo) {
                        $("#" + objInfo).unbind(".validateByEvent").bind(eventStr+".validateByEvent", {that:this,objInfo:objInfo,rules:rules}, this.valicateByEventFunc)
                    }
                    return this;
                },
                /**
                 * @description 校验函数，不需调用
                 */
                valicateByEventFunc:function (event) {
                    var that = event.data.that;
                    var objInfo = event.data.objInfo;
                    var rules = event.data.rules;
                    that.validateFlag = false;
                    that.validateObj(rules, objInfo)
                },
                /**
                 * @description 显示错误信息，不需调用
                 */
                doError:function(rules, returnObj,focusFlag) {
                    this.addDiv();
                    returnObj.obj.addClass("inputerror");
                    if (this.effect == "1") {
                        $("#tipText").html(returnObj.errMsg).removeClass().addClass("error");
                        returnObj.obj.tooltip(this.tipConfig);
                        returnObj.obj.tooltip(0).show().hide().show().hide().show();
                        if(focusFlag){
                            !returnObj.obj[0].onfocus&&returnObj.obj.focus();
                        }
                    } else {
                        var errorDivId = rules.divInfo == undefined ? "msg-error" : rules.divInfo.id;
                        $("#" + errorDivId).show();
                        var appendHtml = "<li name='" + returnObj.obj.attr("id") + "ErrMsg'><a href='#'>" + returnObj.errMsg + "</a></li>";
                        if ($("#" + errorDivId + " li[name=" + returnObj.obj.attr("id") + "ErrMsg]").length == 0) {
                            $("#" + errorDivId + ">ul").append(appendHtml)
                        }
                        else {
                            $("li[name=" + returnObj.obj.attr("id") + "ErrMsg]").replaceWith(appendHtml);
                        }
                        returnObj.obj.parent("td").prev().addClass("alert");
                        $("#" + errorDivId + " li[name='" + returnObj.obj.attr("id") + "ErrMsg']>a").click(function () {
                            returnObj.obj.get(0).focus()
                        });
                        returnObj.obj.tooltip(this.tipConfig);
                    }
                },
                /**
                 * @description 显示正确信息，不需调用
                 */
                doCorrect:function(rules, returnObj) {
                    this.addDiv();
                    returnObj.obj.removeClass("inputerror");
                    if (this.effect == "1") {
                        if (!this.validateFlag) {
                            $("#tipText").fadeOut();
                            return
                        }
                        returnObj.obj.tooltip(this.tipConfig);
                        $("#tipText").attr("objId", returnObj.obj.attr("id")).html("输入正确").removeClass().addClass("success");
                        returnObj.obj.tooltip(0).show().hide().show();
                        setTimeout("$('#'+$('#tipText').attr('objId')).tooltip(0).hide()", 1000)
                    } else {
                        var errorDivId = rules.divInfo == undefined ? "msg-error" : rules.divInfo.id;
                        $("li[name=" + returnObj.obj.attr("id") + "ErrMsg]").fadeOut("normal", function () {
                            $(this).remove();
                            if ($("#" + errorDivId + " li").length == 0) {
                                $("#" + errorDivId).hide()
                            }
                        });
                        returnObj.obj.parent("td").prev().removeClass("alert")
                    }
                },
                /**
                 * @description 显示警告信息，不需调用
                 */
                doWarn:function(reles, returnObj) {

                },
                /**
                 * @description 为JC增加校验方法
                 * @param {String} name 方法名字符串
                 * @param {Function} method 方法，此函数须有返回值returnObj，并包括bool,obj,errMsg字段
                 * @example JC.addMethod("checkPassword",checkPassword)
                 */
                addMethod:function(name, method) {
                    this.methods[name] = method;
                    return this;
                },
                /**
                 * @description 去除所有input的值的两端空格
                 * @example JC.inputTrim();
                 */
                inputTrim:function () {
                    $("input:text").each(function() {
                        this.value=this.value.trim();
                    });
                },
                /**
                 * @description fireEvent通用版
                 * @param obj 要触发事件的javascript对象
                 * @param eventStr 事件名称 例如：blur,click,
                 * @example JC.inputTrim();
                 */
                fnFireEvent:function (obj, eventStr) {
                    if (document.all) {
                        obj.fireEvent("on" + eventStr);
                    }
                    else {
                        var evt = document.createEvent('HTMLEvents');
                        evt.initEvent(eventStr, true, true);
                        obj.dispatchEvent(evt);
                    }
                },
                /**
                 * @description 初始化显示错误的div，不需调用
                 */
                addDiv:function() {
                    if (this.effect == "1") {
                        if ($("#tipText").size() == 0) {
                            $("body").append("<div id='tipText' class='tooltip'></div>");
                            $("#tipText").click(function() {
                                $(this).fadeOut();
                            })
                        }
                    }
                    else {
                        if ($("#msg-error").size() == 0) {
                            $("body").prepend('<div class="error-block" id="msg-error" style="display:none;"><p class="icon alert">提交前需要更正如下错误：</p><ul></ul></div>')
                        }
                    }
                },
                /**
                 * @description 设置校验效果选项
                 * @example JC.setEffect("2")
                 */
                setEffect:function(effect) {
                    if (effect !== undefined) {
                        this.effect = effect;
                    }
                    return this;
                }
            };
            ccjc.fn.init.prototype = ccjc.fn;
            return new ccjc();
        })();
        window.ccjc = window.JC = ccjc;
    })(window);
});