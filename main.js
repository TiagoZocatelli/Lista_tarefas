$(document).ready(function() {
    $('header button').click(function () {
        const novoItem = $('#lista-tarefa').val();
        const novaTarefa = `<li>${novoItem}</li>`;
        $('ul').append(novaTarefa);
        
        $('#lista-tarefa').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
