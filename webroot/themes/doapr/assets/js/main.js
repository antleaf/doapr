$(document).ready(function () {
    $('#countriesTable').DataTable({
        searching: false,
        paging: false,
        info: false,
        ordering: true,
        "columnDefs": [ {
            "targets"  : 'no-sort',
            "orderable": false,
        }]
    });
    $('#platformsTable').DataTable({
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

