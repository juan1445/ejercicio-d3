$(document).ready(function() {
  $('a').click(function() {
    $.getJSON('http://localhost:3000/modulos/'+$(this).attr("id"), 
    function(data) {
      console.log(data.info_general);
      document.getElementById('n_modulo').innerHTML = data.info_general.Nombre;
      document.getElementById('info_planta').innerHTML = ""
      document.getElementById('info_cuidado').innerHTML = ""
      document.getElementById('info_control').innerHTML = ""
      for (var key in data.info_general) {
      document.getElementById('info_planta').innerHTML +=
        '<div class="col-md-6"><p>'+key+'</p></div>'+
        '<div class="col-md-6"><p>'+data.info_general[key]+'</p></div>'
      };
      for (var key in data.variables_control) {
        document.getElementById('info_control').innerHTML +=
        '<div id='+key+' class="control col-12 col-md-4 col-sm-6 mx-auto">'+
        '<div'+' class="card text-white bg-warning mb-3"'+
          'style="max-width: 18rem;"'+
        '>'+ 
         '<div class="card-header"> <p class="variable">'+key+'</p></div>'+
          '<div class="card-body">'+
            '<div class="progress-circle progress-75"><h4>'+data.variables_control[key]+'</h4></div>'+
          '</div>'+
        '</div>'+
      '</div>';
      };
      for (var key in data.variables_cuidado) {
        document.getElementById('info_cuidado').innerHTML +=
          '<div class="col-md-6"><p>'+key+'</p></div>'+
          '<div class="col-md-6"><p>'+data.variables_cuidado[key]+'</p></div>'
      };
    });
  });
});
