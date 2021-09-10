
var contador = 0;
var cambio = 0;

var array_codigo_producto = new Array();
var array_precio_producto = new Array();
var array_cantidad_producto = new Array();
var array_descripcion_producto = new Array();
var array_iva_producto = new Array();

var array_subtotal = new Array();
var array_valorIVA = new Array();
var array_total = new Array();

var totalSubtotal = 0;
var totalIVA = 0;
var totalFactura = 0;


function SeguirFacturando(){

if (cambio==0) {	
//Guardar los valores en los array

	array_codigo_producto[contador]= document.getElementById('CodProducto').value;
	array_descripcion_producto[contador]= document.getElementById('DesProducto').value;
	array_precio_producto[contador]= document.getElementById('PreProducto').value;
	array_cantidad_producto[contador]= document.getElementById('CanProducto').value;
	array_iva_producto[contador]= document.getElementById('IVAProducto').value;

//Operacion

	array_total[contador]=(array_precio_producto[contador]*array_cantidad_producto[contador]);
	array_subtotal[contador]=(array_total[contador]/(1+(array_iva_producto[contador]/100)));
	array_valorIVA[contador]=(array_total[contador]-array_subtotal[contador]);

	totalSubtotal = (totalSubtotal+array_subtotal[contador]);
	totalIVA= (totalIVA+array_valorIVA[contador]);
	totalFactura= (totalFactura+array_total[contador]);

	contador++;

// focus
	document.getElementById("CodProducto").focus();	
// ciclo para la tabla

var tablaProducto = document.getElementById('tabla');
var cuerpoTabla = document.createElement('tbody');

for (var i = (contador-1); i < contador; i++) {
	var fila = document.createElement('tr');

	var td = document.createElement('td');
	td.innerHTML = array_codigo_producto[i];
	fila.appendChild(td);

	var td = document.createElement('td');
	td.innerHTML = array_descripcion_producto[i];
	fila.appendChild(td);

	var td = document.createElement('td');
	td.innerHTML = array_precio_producto[i];
	fila.appendChild(td);

	var td = document.createElement('td');
	td.innerHTML = array_cantidad_producto[i];
	fila.appendChild(td);

	var td = document.createElement('td');
	td.innerHTML = array_iva_producto[i];
	fila.appendChild(td);
//-------------------------------------------------------------
	var td = document.createElement('td');
	td.innerHTML = array_subtotal[i].toFixed(2);
	fila.appendChild(td);
	
	var td = document.createElement('td');
	td.innerHTML = array_valorIVA[i].toFixed(2);
	fila.appendChild(td);
	
	var td = document.createElement('td');
	td.innerHTML = array_total[i].toFixed(2);
	fila.appendChild(td);

	cuerpoTabla.appendChild(fila);
}
	tablaProducto.appendChild(cuerpoTabla);
}
else if (cambio==1) {
	var tablaProducto = document.getElementById('tabla');
	var cuerpoTabla = document.createElement('tbody');

	var fila = document.createElement('tr');

	var td = document.createElement('td');
	td.innerHTML = "";
	fila.appendChild(td);

	var td = document.createElement('td');
	td.innerHTML = "";
	fila.appendChild(td);

	var td = document.createElement('td');
	td.innerHTML = "";
	fila.appendChild(td);

	var td = document.createElement('td');
	td.innerHTML = "";
	fila.appendChild(td);

	var td = document.createElement('td');
	td.innerHTML = "Totales";
	fila.appendChild(td);
//----------------------------------------------------------
	var td = document.createElement('td');
	td.innerHTML = totalSubtotal.toFixed(2);
	fila.appendChild(td);
	
	var td = document.createElement('td');
	td.innerHTML = totalIVA.toFixed(2);
	fila.appendChild(td);
	
	var td = document.createElement('td');
	td.innerHTML = totalFactura.toFixed(2);
	fila.appendChild(td);

	cuerpoTabla.appendChild(fila);

	tablaProducto.appendChild(cuerpoTabla);


	document.getElementById('formulario').innerHTML='';

	}

}
	