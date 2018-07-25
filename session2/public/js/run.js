$(function() {
    $('#btn').click((e) => {
        $.post('http://localhost:3000/', { name: 'Clortho', job: 'Keymaster'}, (data) => {
            alert(data);
        });
    });
});