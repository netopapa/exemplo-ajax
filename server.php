<?php
	if (function_exists($_POST['f'])) {
		$pesquisa = ucwords(strtolower($_POST['pesquisa']));
		$_POST['f']($pesquisa);
	}else{
		echo "funcao nao existe.";
	}
	function people($pesquisa){
		$json = '[{
					"nome":"Joao",
					"idade":34,
					"naturalidade":"Mineiro",
					"estadoCivil":"solteiro"
				},
				{
					"nome":"Miguel",
					"idade":21,
					"naturalidade":"Paulista",
					"estadoCivil":"solteiro"
				},
				{
					"nome":"Maria",
					"idade":15,
					"naturalidade":"Bare",
					"estadoCivil":"divorciada"
				}]';

		$obj = json_decode($json);
		if (!empty($pesquisa)) {
			for($i=0; $i<count($obj); $i++){
				if ($obj[$i]->{'nome'} == $pesquisa) {
					echo json_encode($obj[$i]);
					return;
				}else if ($i==count($obj)-1) {
					echo '[{"erro":" '.$pesquisa.' nao encontrado"}]';
				}
			}
		}else{
			echo 'Campo de pesquisa vazio.';
		}
	}