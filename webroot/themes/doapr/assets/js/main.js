$(document).ready(function () {
    $('.sortable-table').DataTable({
        searching: false,
        paging: false,
        info: false,
        ordering: true,
        // fixedHeader: {
        //     header: true,
        //     // headerOffset: 45,
        // },
        "columnDefs": [{
            "targets": 'no-sort',
            "orderable": false,
        },
        {
            "targets": 'yes-no',
            render: function (data, type, row) {
                if (type === 'display' || type === 'filter') {
                    if (data == 1) {
                        return '<span><img src="/images/icons/yes.png" width="20"/></span>'
                    } else return '<span><img src="/images/icons/no_grey.png" width="20"/></span>';
                }
                return data;
            }
        }]
    });
    // // var tabEl = document.querySelector('button[data-bs-toggle="tab"]')
    // var tabEl = $('button[data-bs-toggle="tab"]')
    // tabEl.on('shown.bs.tab', function (event) {
    //     console.log('hello');
    //     // event.target // newly activated tab
    //     // event.relatedTarget // previous active tab
    //     // var table = $('.sortable-table').DataTable();
    //     // table.fixedHeader.adjust();
    //     var dataTable = $('.sortable-table').DataTable
    //     dataTable.fixedHeader.adjust();
    // })
});

