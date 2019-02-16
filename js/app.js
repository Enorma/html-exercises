window.addEventListener("load", function() {
	const button = document.getElementById("calcula");
	button.addEventListener("click", function() {

		let valorA = document.getElementById("operadorA").value;
		let valorB = document.getElementById("operadorB").value;
		let resultado = 0;

		if(isNaN(parseFloat(valorA)) || isNaN(parseFloat(valorB))) {
			document.getElementById("operadorA").value = "";
			document.getElementById("operadorB").value = "";
			document.getElementById("resultado").innerHTML = "¡sólo puedes escribir números!";
			return;
		}else {
			valorA = parseFloat(valorA);
			valorB = parseFloat(valorB);
		}

		let oper = document.getElementById("operacion").value;
		switch(oper) {
			case "suma": {
				resultado = valorA+valorB;
				break;
			}
			case "resta": {
				resultado = valorA-valorB;
				break;
			}
			case "multiplica": {
				resultado = valorA*valorB;
				break;
			}
			case "divide": {
				resultado = valorA/valorB;
				break;
			}
		}

		document.getElementById("resultado").innerHTML = resultado.toString();
	});
});
