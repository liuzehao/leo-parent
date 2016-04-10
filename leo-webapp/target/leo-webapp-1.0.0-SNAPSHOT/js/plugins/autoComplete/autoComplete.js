(function($) {
    $.fn.extend({
        jcAutoComplete: function (options) {
            var opt = $.extend(true, {}, $.fn.jcAutoComplete.defaults, options);
            var index = 0;           //当前选中项的行号，从1开始
            var maxId = 0;           //最大数据项的行号
            var $showText;           //当前google框的text域
            var $showTextId;         //当前google框的hidden域
            var closeFlag = true;    //关闭的标志位。当鼠标在提示框的div上经过时，blur事件不关闭提示框
            var $oriObj;             //上一个高亮的div
            var $desObj;             //即将高亮的div
            var setTimeOutEvent;
            var $autoTipDiv = _initAutoTipDiv();
            var $itemDiv;

            var $showTipImg = $("#autoTipImg");
            //参数重载，若没有参数则默认将整个页面符合条件的input都变成google框，若有参数，则将传入的input变为google框
            $(this).bind("keydown.autoComplete keyup.autoComplete blur.autoComplete", function (e) {
                $showText = $(this);
                //如果该input为readonly则不处理
                if ($showText.attr("readonly"))return;
                //若第一次使用google框或者使用不同的input则重新初始化选择的dom结点
                $showTextId = $showText.siblings("input[autoHidden=autoHidden]");
                _initShowTipDivStyle();
                var thisValue = $showText.val().trim();    //记录当前google框的keyword
                var _key = e.which;                       //按键的keycode
                var eType = e.type;                       //触发的事件类型
                var flag = $showText.attr("flag");          //当前google框的类型标志位
                var sql = $showText.attr("sql");            //当前google框的sql
                sql = sql == undefined ? "" : sql;
                //keyDown事件且提示div显示的时候
                if (eType == "keydown" && $autoTipDiv[0].style.display != "none") {
                    _keyDownEventHandler(_key);
                }
                if (eType == "keyup") {
                    //若按下了ctrl或shift则返回
                    if (e.ctrlKey || e.shiftKey || _key == $.jcAutoComplete.keyCode.SHIFT)return;
                    _keyUpEventHandler(_key);
                }
                //blur事件时，若鼠标在提示div外时关闭。
                if (eType == "blur" && closeFlag) {
                    $showText.val() == "" && _setHiddenValue("");
                    $autoTipDiv.hide();
                }
                //ajax请求主函数，参数isShowAll为是否显示所有提示的标志位
                window.autoCompleteAjax = function (isShowAll, ajaxUrl) {
                    $.ajax({
                        type: requestMethod.POST,
                        url: ajaxUrl,
                        dataType: "json",
                        data: {
                            keyword: thisValue,
                            sql: sql,
                            flag: flag,
                            isShowAll: isShowAll
                        },
                        error: function () {
                            $showTipImg.html("<span class='auo_text_warn'>数据返回错误！</span>");
                        },
                        success: function (resultArray) {
                            if (resultArray != "") {
                                // 返回结果的个数
                                maxId = resultArray.length;
                                if (maxId > 10) {
                                    $autoTipDiv.css({height: $autoTipDiv.height(), overflowY: "scroll"})
                                }
                                // 返回显示的内容
                                $showTipImg[0].innerHTML=_getResultStr(resultArray,thisValue,isShowAll);
                                $itemDiv = $autoTipDiv.find("div.itemDiv");
                                $autoTipDiv.show();
                                $showText.focus();
                                _initResultEvent();
                                //默认选中第一个
                                index = 0;
                                $oriObj = $itemDiv.eq(0);
                                _focusOP(undefined, $oriObj)
                            } else {
                                $showTipImg.html("<span class='auo_text_warn'>未找到匹配数据！</span>");
                                maxId = 0;
                            }
                        }
                    })
                };
            });
            /**
             * 初始化tipDiv的样式及位置
             */
            function _initShowTipDivStyle(){
                $autoTipDiv.removeClass().addClass($showText.attr("divClass") == undefined ? "divauto" : $showText.attr("divClass"))
                    .css({left: $showText.offset().left, top: $showText.offset().top + $showText.outerHeight(), height: "240px", overflowY: "auto", paddingLeft: 0});
                var $thisRealWidth = parseFloat($showText.width()) + parseFloat($showText.css("paddingLeft").replace("px", ""))
                    + parseFloat($showText.css("paddingRight").replace("px", ""));
                $autoTipDiv.width() < $thisRealWidth && $autoTipDiv.width($thisRealWidth);
            }
            /**
             * keyUp事件的处理函数
             * @param _key 按键的keyCode
             */
            function _keyUpEventHandler(_key) {
                //如果当前input不为空
                if ($showText.val() != "") {
                    //如果不是按下的上下左右、回车、ctrl则显示提示
                    if (_key != $.jcAutoComplete.keyCode.RIGHT && _key != $.jcAutoComplete.keyCode.DOWN
                        && _key != $.jcAutoComplete.keyCode.LEFT && _key != $.jcAutoComplete.keyCode.UP
                        && _key != $.jcAutoComplete.keyCode.ENTER && _key != $.jcAutoComplete.keyCode.CONTROL) {
                        _setHiddenValue("");
                        $autoTipDiv[0].style.display == "none" && $autoTipDiv.show();
                        $showTipImg.html("<span class='auo_text_loading'>正在获取数据……</span>");
                        setTimeOutEvent != undefined && setTimeOutEvent != null && clearTimeout(setTimeOutEvent);
                        var reqUrl = $showText.attr("reqUrl");//当前google框的请求地址，若有则为自定义google框
                        reqUrl = reqUrl == undefined ? "" : reqUrl;
                        if (reqUrl == "") {
                            window.autoCompleteURL = opt.url;
                        } else {
                            window.autoCompleteURL = reqUrl;
                        }
                        setTimeOutEvent = setTimeout('autoCompleteAjax(false,window.autoCompleteURL)', opt.delayTime);
                    }
                }
                else {
                    $autoTipDiv.hide();
                    _setHiddenValue("")
                }
            }

            /**
             * keyDown事件的处理函数
             * @param _key 按键的keyCode
             */
            function _keyDownEventHandler(_key) {
                //若按下→，↓则调整选中的项目使其高亮
                if (_key == $.jcAutoComplete.keyCode.RIGHT || _key == $.jcAutoComplete.keyCode.DOWN) {//39:right,40:down
                    //若index+1超过了maxId则将index置为1
                    index = index + 1 >= maxId ? 0 : index + 1;
                    $desObj = $itemDiv.eq(index);
                    _focusOP($oriObj, $desObj);
                    //若显示全部带有滚动条时处理滚动条
                    $autoTipDiv.scrollTop((index - 11) * 20)
                }
                //若按下←，↑则调整选中的项目使其高亮
                if (_key == $.jcAutoComplete.keyCode.LEFT || _key == $.jcAutoComplete.keyCode.UP) {// 37left,38up
                    //若index-1小于1，则将index置为maxId
                    index = index < 1 ? maxId - 1 : index - 1;
                    $desObj = $itemDiv.eq(index);
                    _focusOP($oriObj, $desObj);
                    //若显示全部带有滚动条时处理滚动条
                    $autoTipDiv.scrollTop((index - 11) * 20)
                }
                // 回车或tab的处理
                if (_key == $.jcAutoComplete.keyCode.ENTER || _key == $.jcAutoComplete.keyCode.TAB) {
                    $desObj = $oriObj;
                    maxId != 0 && _focusOP(undefined, $oriObj, true);
                    $autoTipDiv.hide();
                }
                $oriObj = $desObj;
            }

            /**
             * 对显示全部绑定事件，对结果集绑定高亮事件
             */
            function _initResultEvent(){
                //显示全部按钮点击事件
                $("#isShowAll").unbind(".autoComplete")
                    .bind("mousedown.autoComplete", function () {
                        $showTipImg.html("<span class='auo_text_loading'>正在获取数据……</span>");
                        autoCompleteAjax(true, opt.url);
                    });
                //提示结果集的事件
                $itemDiv.hover(
                    function () {
                        $oriObj = $(this);
                        _focusOP($itemDiv.eq(index), $oriObj);
                        index = $itemDiv.index(this);
                    },
                    function () {
                        _focusOP($(this));
                    })
                .unbind(".autoComplete")
                .bind("mousedown.autoComplete", function () {
                    _focusOP(undefined, $(this), true);
                    $autoTipDiv.hide();
                });
            }

            /**
             * 将ajax返回值拼接成所需的串
             * @param resultArray ajax返回的数组
             * @param keyword 查询关键字
             * @param isShowAll 是否显示全部
             * @returns {string} 拼接完的串
             */
            function _getResultStr(resultArray,keyword,isShowAll){
                var divStr = "";
                for (var i = 0; i < resultArray.length; i++) {
                    // 截取出显示的名称
                    var showResult = resultArray[i].name;
                    // 将名称中与关键字匹配的部分，变成红色
                    var formatStr = showResult.replace(new RegExp(keyword, "i"), "<b><span style='color:red'>$&</span></b>");
                    // 截取出显示的id
                    var formatStrId = resultArray[i].id;
                    divStr = divStr+"<div class='itemDiv' strId='" + formatStrId + "'>" + formatStr + "</div>";
                }
                //若当前google第一次打开只显示10条时加入显示全部按钮
                if (!isShowAll) {
                    divStr = divStr+"<div class='showAllDiv'><a id='isShowAll' class='auto_text_btn'>显示全部</a></div>";
                }
                return divStr;
            }
            /**
             * 使选中的结果高亮
             * @param $oriDiv 需要去掉高亮的obj
             * @param $focusObj 需要高亮的obj
             * @param addFlag 是否回填
             */
            function _focusOP($oriDiv, $focusObj, addFlag) {
                $oriDiv && $oriDiv.css({"background": "#FFFFFF"});
                if ($focusObj !== undefined) {
                    $focusObj.css({background: "#FBEC88"});
                    if (addFlag) {
                        $showText.val($focusObj.text());
                        _setHiddenValue($focusObj.attr("strId"));
                    }
                }
            }
            /**
             * 为hidden的input赋值
             * @param hiddenValue 隐藏域的值
             */
            function _setHiddenValue(hiddenValue) {
                $showText.setJcAutoCompleteHiddenValue(hiddenValue);
                $showTextId.val(hiddenValue);
                if (opt.selectedCallback) {
                    opt.selectedCallback($showText, $showTextId)
                }
            }
            /**
             * 初始化自动提示的div
             * @param $input 自动提示input的jquery对象
             * @returns $autoTipDiv
             * @private
             */
            function _initAutoTipDiv() {
                //向当页中的body添加提示的div
                $("#autoTipDiv").size() == 0 && $("body").append("<div id='autoTipDiv' class='autoTipDiv'>" +
                    "<iframe style=\"position:absolute; z-index:-1;width:110px;\" frameborder=\"0\" src=\"about:blank\"></iframe>" +
                    "<div id='autoTipImg'></div>" +
                    "</div>");
                return $("#autoTipDiv")
                    .hover(
                        function () {
                            closeFlag = false
                        },
                        function () {
                            closeFlag = true;
                        })
                    .unbind(".autoComplete")
                    .bind("scroll.autoComplete", function () {
                        $showText && $showText.focus()
                    });
            }
            return this;
        },
        getJcAutoCompleteHiddenValue:function(){
            return this.data("hiddenValue");
        },
        setJcAutoCompleteHiddenValue:function(hiddenValue){
            return this.data("hiddenValue",hiddenValue);
        }
    });

    var basePath = (function () {
        var url = window.location + "";
        var h = url.split("//");
        var x = h[1].split("/");
        return h[0] + "//" + window.location.host + "/" + x[1] + "/";
    })();

    $.fn.jcAutoComplete.defaults = {
        delayTime: 0,
        selectedCallback: null,
        url: basePath + "autoComplete"
    }

    $.jcAutoComplete = function () {
        $("input[autocomplete],textarea[autocomplete]").unbind(".autoComplete").jcAutoComplete();
    };

    $.jcAutoComplete.keyCode = {
        ALT: 18,
        BACKSPACE: 8,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91, // COMMAND
        COMMAND_RIGHT: 93,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93, // COMMAND_RIGHT
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        F7: 118,
        F12: 123,
        S: 83,
        WINDOWS: 91 // COMMAND
    }

})(jQuery);

$(function() {
    $.jcAutoComplete();
});