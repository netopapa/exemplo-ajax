var pesquisar = function(){
	var num = $("#pesquisa").val();
	var url = "https://pokeapi.co/api/v2/pokemon/"+num+"/";

	$.ajax({
		type: "GET",
		url: url,
		beforeSend: function(){
			$("#json").html("");
			$("#load").removeClass("dOff");
		},
		success: function(result){
			$("#load").addClass("dOff");
	        $("#json").html("nome: "+result.forms[0].name+"<br>Habilidade: "+result.abilities[0].ability.name);
    	},
    	error: function(textStatus, errorThrown){
    		$("#load").addClass("dOff");
    		$("#json").html('Não existe pokemon com esse id');	
    	}
	});

};

$('#sbmt').click(pesquisar);