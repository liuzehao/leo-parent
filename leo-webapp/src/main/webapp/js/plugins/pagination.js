/**
 * Created by Shy on 2015/8/11.
 */
(function ($) {
    $.fn.paging = function (option) {
        function showMore(setting, wrap) {
            var count = 0;
            $(setting.itemSelector + ":hidden", wrap).each(function (index) {
                if (count == setting.showItem)
                    return false;
                count++;
                $(this).show();
            });
            if ($(setting.itemSelector + ":hidden", wrap).size() == 0) {
                $("a[name='showMoreBtn']", wrap).parent().empty().text("没有更多内容了");
            }
        }

        function init(setting, wrap) {
            if ($(setting.itemSelector, wrap).size() <= setting.showItem) {
                $("a[name='showMoreBtn']", wrap).parent().empty().text("没有更多内容了");
            }
            $(setting.itemSelector + ":gt(" + (setting.showItem - 1) + ")", wrap).hide();
        }

        var Default = {
            itemSelector: "",
            showItem: 5,
            pagingBtn: '<div class="col-md-12 text-center"><a href="javascript:;" class="btn default btn-block" name="showMoreBtn">加载更多</a></div>'
        };
        var wrap = $(this);
        var setting = $.extend({}, Default, option);
        $(setting.pagingBtn).appendTo(wrap).on("click", function () {
            showMore(setting, wrap)
        });
        init(setting, wrap);
    }
})(jQuery);
