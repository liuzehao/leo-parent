/***
 Wrapper/Helper Class for datagrid based on jQuery Datatable Plugin
 ***/

var DataTable = function () {

    var tableOptions;  // main options
    var dataTable; // datatable object
    var table;    // actual table jquery object
    var tableContainer;    // actual table container object
    var tableWrapper; // actual table wrapper jquery object
    var tableInitialized = false;
    var ajaxParams = []; // set filter mode

    var countSelectedRecords = function () {
        var selected = $('tbody > tr > td:nth-child(1) input[type="checkbox"]:checked', table).size();
        var text = tableOptions.dataTable.oLanguage.groupActions;
        if (selected > 0) {
            $('.table-group-actions > span', tableWrapper).text(text.replace("_TOTAL_", selected));
        } else {
            $('.table-group-actions > span', tableWrapper).text("");
        }
    }

    return {

        //main function to initiate the module
        init: function (options) {

            if (!$().dataTable) {
                return;
            }

            var the = this;

            // default settings
            options = $.extend(true, {
                src: "",  // actual table 
                resetGroupActionInputOnSuccess: true,
                onSortColumn : function(sortColumn, sortDirection) {
                    return onSortColumnDefault(sortColumn, sortDirection);
                },
                onQuery : function(data){},
                dataFormat : function(data){},
                dataTable: {
                    "dom": "<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'<'table-group-actions pull-right'>>r><'table-scrollable't><'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'>r>", // datatable layout
                    "lengthMenu": [ 5,10, 25, 50, 75, 100 ],
                    "displayLength": 5, // default records per page
                    "language": {  // language settings
                        "processing": '<img src="' + basePath + 'assets/global/img/loading-spinner-grey.gif"/><span>&nbsp;&nbsp;载入中...</span>',
                        "lengthMenu": "<span class='seperator'>|</span>每页 _MENU_ 条",
                        "info": "<span class='seperator'>|</span>共 _TOTAL_ 条",
                        "infoEmpty": "未查询到记录",
                        "groupActions": "共 _TOTAL_ 条记录被选中",
                        "infoFiltered": "(filtered from _MAX_ total entries)",
                        "ajaxRequestGeneralError": "请求失败，请检查您的网络连接",
                        "emptyTable": "表格中无可用数据",
                        "zeroRecords": "未找到匹配记录",
                        "oPaginate": {
                            "sPrevious": "上一页",
                            "sNext": "下一页",
                            "sPage": "第",
                            "sPageOf": "页，共"
                        }
                    },

//                    "columnDefs": [
//                        {  // define columns sorting options(by default all columns are sortable extept the first checkbox column)
//                            'sortable': false,
//                            'targets': [ 0 ]
//                        }
//                    ],

                    "autoWidth": false,   // disable fixed width and enable fluid table
                    "sortCellsTop": true, // make sortable only the first row in thead
                    "paginationType": "bootstrap_extended", // pagination type(bootstrap, bootstrap_full_number or bootstrap_extended)
                    "processing": true, // enable/disable display message box on record load
                    "serverSide": true, // enable/disable server side ajax loading
//                    "sAjaxSource": "", // define ajax source URL
                    "sServerMethod": "POST",

                    // handle ajax request
                    "ajax": function (data, fnCallback, oSettings) {
                        data["page.pageNo"]=parseInt(data.start/data.length,10)+1;
                        data["page.pageSize"]=data.length;
                        if(options.onSortColumn){
                            if (data.order[0]) {
                                var sortTemp = options.onSortColumn(oSettings.oAjaxData.columns[data.order[0].column].data, data.order[0].dir);
                                data.sortField = sortTemp.sortColumn;
                                data.sortOrder = sortTemp.sortDirection;
                            }else{
                                data.sortField = "";
                                data.sortOrder = "";
                            }
                        }
                        if(options.onQuery){
                            options.onQuery(data);
                        }
                        oSettings.jqXHR = $.ajax({
                            "dataType": 'json',
                            "type": "POST",
                            "url": options.url,
                            "data": data,
                            "success": function (res, textStatus, jqXHR) {
                                if (tableOptions.dataFormat) {
                                    tableOptions.dataFormat(res);
                                }
                                res.data = res.resultList;
                                res.recordsTotal = res.page.totalResult;
                                res.recordsFiltered = res.page.totalResult;
                                if (res.sMessage) {
                                    Metronic.alert({type: (res.sStatus == 'OK' ? 'success' : 'danger'), icon: (res.sStatus == 'OK' ? 'check' : 'warning'), message: res.sMessage, container: tableWrapper, place: 'prepend'});
                                }
                                if (res.sStatus) {
                                    if (tableOptions.resetGroupActionInputOnSuccess) {
                                        $('.table-group-action-input', tableWrapper).val("");
                                    }
                                }
                                if ($('.group-checkable', table).size() === 1) {
                                    $('.group-checkable', table).attr("checked", false);
                                    $.uniform.update($('.group-checkable', table));
                                }
                                if (tableOptions.onSuccess) {
                                    tableOptions.onSuccess(res);
                                }
                                fnCallback(res, textStatus, jqXHR);
                                $("div.dataTables_length select").select2({
                                    showSearchInput : false
                                }); // initialize select2

                            },
                            "error": function () {
                                if (tableOptions.onError) {
                                    tableOptions.onError.call(the);
                                }
                                Metronic.alert({type: 'danger', icon: 'warning', message: tableOptions.dataTable.language.ajaxRequestGeneralError, container: tableWrapper, place: 'prepend'});
                                $('.dataTables_processing', tableWrapper).remove();
                            }
                        });
                    },

                    // pass additional parameter
                    "fnServerParams": function (aoData) {
                        //here can be added an external ajax request parameters.
                        for (var i in ajaxParams) {
                            var param = ajaxParams[i];
                            aoData[param.name]=param.value;
                        }
                    },

                    "fnDrawCallback": function (oSettings) { // run some code on table redraw
                        if (tableInitialized === false) { // check if table has been initialized
                            tableInitialized = true; // set table initialized
                            table.show(); // display table
                        }
                        Metronic.initUniform($('input[type="checkbox"]', table));  // reinitialize uniform checkboxes on each table reload
                        countSelectedRecords(); // reset selected records indicator
                    }
                }
            }, options);

            tableOptions = options;

            // create table's jquery object
            table = $(options.src);
            tableContainer = table.parents(".table-container");

            // apply the special class that used to restyle the default datatable
            $.fn.dataTableExt.oStdClasses.sWrapper = $.fn.dataTableExt.oStdClasses.sWrapper + " dataTables_extended_wrapper";

            // initialize a datatable
            dataTable = table.dataTable(options.dataTable);

            tableWrapper = table.parents('.dataTables_wrapper');

            // modify table per page dropdown input by appliying some classes
            $('.dataTables_length select', tableWrapper).addClass("form-control input-xsmall input-sm");

            // build table group actions panel
            if ($('.table-actions-wrapper', tableContainer).size() === 1) {
                $('.table-group-actions', tableWrapper).html($('.table-actions-wrapper', tableContainer).html()); // place the panel inside the wrapper
                $('.table-actions-wrapper', tableContainer).remove(); // remove the template container
            }
            // handle group checkboxes check/uncheck
            $('.group-checkable', table).change(function () {
                var set = $('tbody > tr > td:nth-child(1) input[type="checkbox"]', table);
                var checked = $(this).is(":checked");
                $(set).each(function () {
                    $(this).attr("checked", checked);
                });
                $.uniform.update(set);
                countSelectedRecords();
            });

            // handle row's checkbox click
            table.on('change', 'tbody > tr > td:nth-child(1) input[type="checkbox"]', function () {
                countSelectedRecords();
            });

            // handle filter submit button click
            table.on('click', '.filter-submit', function (e) {
                e.preventDefault();

                dataTable.fnDraw();
                the.clearAjaxParams();
            });

            // handle filter cancel button click
            table.on('click', '.filter-cancel', function (e) {
                e.preventDefault();
                $('textarea.form-filter, select.form-filter, input.form-filter', table).each(function () {
                    $(this).val("");
                });
                $('input.form-filter[type="checkbox"]', table).each(function () {
                    $(this).attr("checked", false);
                });
//                the.addAjaxParam("sAction", tableOptions.filterCancelAction);
                dataTable.fnDraw();
                the.clearAjaxParams();
            });
        },

        getSelectedRowsCount: function () {
            return $('tbody > tr > td:nth-child(1) input[type="checkbox"]:checked', table).size();
        },

        getSelectedRows: function () {
            var rows = [];
            $('tbody > tr > td:nth-child(1) input[type="checkbox"]:checked', table).each(function () {
                rows.push({name: $(this).attr("name"), value: $(this).val()});
            });

            return rows;
        },

        addAjaxParam: function (name, value) {
            ajaxParams.push({"name": name, "value": value});
        },

        clearAjaxParams: function () {
            ajaxParams = [];
        },

        getDataTable: function () {
            return dataTable;
        },

        getTableWrapper: function () {
            return tableWrapper;
        },

        gettableContainer: function () {
            return tableContainer;
        },

        getTable: function () {
            return table;
        }

    };

};