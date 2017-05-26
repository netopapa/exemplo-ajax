var cont = 0;
var pesquisar = function(){
	cont++;
	if (cont>2) {
		$("#dica").html('procure por miguel, JOAO ou mariA');
	}
	var nome = $("#pesquisa").val();
	var dados = "f=people&pesquisa="+nome;

	$.ajax({
		type: "POST",
		url: "http://localhost/AJAX/server.php",
		data: dados,
		success: function(result){
	        $("#json").html(result);
    	},
    	error: function(textStatus, errorThrown){
    		console.log(textStatus);
    		console.log(errorThrown);
    		$("#json").html('deu ruim');	
    	}
	});

};

$('#sbmt').click(pesquisar);