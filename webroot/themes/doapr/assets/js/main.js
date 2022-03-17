$(document).ready(function () {
    $('.sortable-table').DataTable({
        searching: false,
        paging: false,
        info: false,
        ordering: true,
        "columnDefs": [ {
            "targets"  : 'no-sort',
            "orderable": false,
        }]
    });
});

