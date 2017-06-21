var pesquisar = function(){
	var num = $("#pesquisa").val();
	var url = "http://pokeapi.co/api/v2/pokemon/"+num+"/";

	$.ajax({
		type: "GET",
		url: url,
		success: function(result){
	        $("#json").html("nome: "+result.forms[0].name+"<br>Habilidade: "+result.abilities[0].ability.name);
    	},
    	error: function(textStatus, errorThrown){
    		console.log(textStatus);
    		console.log(errorThrown);
    		$("#json").html('Não existe pokemon com esse id');	
    	}
	});

};

$('#sbmt').click(pesquisar);