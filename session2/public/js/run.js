$(function() {
    $('#btn').click((e) => {
        $.post('http://localhost:3000/', { name: 'Clothor', job: 'Keymaster'}, (data) => {
            alert(data);
        });
    });
});