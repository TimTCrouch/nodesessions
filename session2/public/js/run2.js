$(function() {
    $('#btn').click((e) => {
        $.post('http://localhost:3000/', { name: 'Clortho', job: 'Keymaster'}, (data) => {
            alert(data);
        });
    });

    $('#btn2').click((e) => {
        $.post('http://localhost:3000/', { name: 'Zuul', job: 'Gatekeeper'}, (data) => {
            alert(data);
        });
    });
});