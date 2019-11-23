$(function(){
    pedido();
    refresh();
});



function pedido(){
    //PEDIDO DE AJAX
  $.ajax({
        url: "https://api.chucknorris.io/jokes/random",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            $("#piada").text(res['value']);
            $("#espera").hide();
        }
    });
}

function refresh(){
    $('#button').click(function() {
        location.reload();
    });
}
