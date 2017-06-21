Autor: Vivaldo Sidanez Papa Neto
Data: 24/01/2017
Email: papaneto@hotmail.com

<h1>Exemplo AJAX</h1>

<p>Confira a <a href="https://netopapa.github.io/exemplo-ajax/" target="_blanc">DEMO</a>.<br>
O exemplo do link é alimentado pela <a href="https://pokeapi.co/" target="_blanc">api pública do pokemon</a>.</p>

<h2>sintaxe básica ajax com jquey</h2>

<h4>→após importar jquey:</h4>
<code>$.ajax({</code>
<code>type: "POST", //define o tipo da requisição</code>
<code>url: url, //url para requsição</code>
<code>data: dados, //dados a serem enviados</code>
<code>success: function(result){
		//comandos caso ocorra tudo bem com a requisição
    },</code>
<code>error: function(textStatus, errorThrown){
    	//comandos caso ocorra um erro durante a requisição
    }</code>
<code>});</code>

<p>Confira os demais parâmetros <a href="https://www.w3schools.com/jquery/ajax_ajax.asp">aqui</a>.</p>



