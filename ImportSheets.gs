function import_sheets() {  
  
 /* Planilla 1  */   datosAcciones();
 /* Planilla 2  */   fallas();
 /* Planilla 3  */   porcentajes();
 /* Planilla 4  */   productos();
 /* Planilla 5  */   ventas();
 /* Planilla 6  */   producciones_a_mejorar();  
 /* Planilla 7  */   Lista_de_comentarios_para_Bidcom();
 /* Planilla 8  */   repuestosPedidos();
 /* Planilla 9  */   datos_Operaciones();
 /* Planilla 10 */   operacionesBidcomFiltrado();
 /* Planilla 11 */   sistemaDeEnvios();
 /* Planilla 12 */   base_de_productos_Atech();
 /* Planilla 13 */   buscarOrdenesMadreDeSpareParts();
 /* Planilla 14 */   productosYSpareParts();
 /* Planilla 15 */   estado_repuestos_compartido_con_Bidcom();
 /* Planilla 16 */
 /* Planilla 17 */
 /* Planilla 18 */
}


/************************************************************************************************************/
 /* Planilla 1 */
/************************************************************************************************************/

function datosAcciones() {

  var variables = [
    {
      // Planilla de origen: Estado y Analisis Calidad Productos
      idSpreadsheetOrigen : "1asMZnmFgseFHWQaZ4lNE580kHgiCR8W5gLscu4RpTjw",
      nombreHojaOrigen : "Acciones Fabrica",
      rangoABuscarEnOrigen : "A:I",
      filtrar : "SI", // [SI/NO]
      columnaAFiltrarEnOrigen : "Fabrica",
      valorAFiltrarEnOrigen : "Atech - J&G Group Co. LTD.",
      
      // Planilla de destino: Calculos calidad 1.1
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Acciones",
      rangoALimpiarEnDestino : "B:J",
      numeroDeColumnaInicialParaPegarDatos : 2, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}

/************************************************************************************************************/
 /* Planilla 2 */ 
/************************************************************************************************************/

function fallas() {

  var variables = [
    {
      // Planilla de origen: Estado y Analisis Calidad Productos
      idSpreadsheetOrigen : "1asMZnmFgseFHWQaZ4lNE580kHgiCR8W5gLscu4RpTjw",
      nombreHojaOrigen : "GF",
      rangoABuscarEnOrigen : "A:N",
      filtrar : "SI", // [SI/NO]
      columnaAFiltrarEnOrigen : "responsableGF",
      valorAFiltrarEnOrigen : "PROVEEDOR",
      
      // Planilla de destino: Calculos calidad 1.1
      idSpreadsheetDestino : "",
      nombreHojaDestino : "GF´s",
      rangoALimpiarEnDestino : "A:N",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}

/************************************************************************************************************/
 /* Planilla 3 */ 
/************************************************************************************************************/

function porcentajes() {

  var variables = [
    {
      // Planilla de origen: Estado y Analisis Calidad Productos
      idSpreadsheetOrigen : "1asMZnmFgseFHWQaZ4lNE580kHgiCR8W5gLscu4RpTjw",
      nombreHojaOrigen : "Resumen  % Calidad BIDCOM",
      rangoABuscarEnOrigen : "A:CQ",
      filtrar : "NO", // [SI/NO]
    //  columnaAFiltrarEnOrigen : "pasar",
    //  valorAFiltrarEnOrigen : "QWE",
      
      // Planilla de destino: Calculos calidad 1.1
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Porcentajes Bidcom",
      rangoALimpiarEnDestino : "A:CQ",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}

/************************************************************************************************************/
 /* Planilla 4 */ 
/************************************************************************************************************/

function productos() {

  var variables = [
    {
      // Planilla de origen: Estado y Analisis Calidad Productos
      idSpreadsheetOrigen : "1asMZnmFgseFHWQaZ4lNE580kHgiCR8W5gLscu4RpTjw",
      nombreHojaOrigen : "Datos Fabrica/Produccion",
      rangoABuscarEnOrigen : "A:J",
      filtrar : "SI", // [SI/NO]
      columnaAFiltrarEnOrigen : "Proveedor",
      valorAFiltrarEnOrigen : "Atech - J&G Group Co. LTD.",
      
      // Planilla de destino: Calculos calidad 1.1
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Productos",
      rangoALimpiarEnDestino : "A:J",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}

/************************************************************************************************************/
 /* Planilla 5 */ 
/************************************************************************************************************/
function ventas() {

  var variables = [
    {
      // Planilla de origen: Ventas
      idSpreadsheetOrigen : "1y12rdD9-5s5fFacrYYk5GI3YvVnjR28NEHcugH5iBzo",
      nombreHojaOrigen : "BD Sales",
      rangoABuscarEnOrigen : "A:T",
      filtrar : "SI", // [SI/NO]
      columnaAFiltrarEnOrigen : "Cliente",
      valorAFiltrarEnOrigen : "Bidcom SRL",
      
      // Planilla de destino: Calculos calidad 1.1
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Ventas",
      rangoALimpiarEnDestino : "A:T",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}

/************************************************************************************************************/
 /* Planilla 6 */ 
/************************************************************************************************************/
function producciones_a_mejorar() {

  var variables = [
    {
      // Planilla de origen: Calculos calidad 1.1
      idSpreadsheetOrigen : "1bhhL0R9IVaxy2GPnoItCY4HaAyhZf_iYR9g_eMQBLTU",
      nombreHojaOrigen : "Acciones",
      rangoABuscarEnOrigen : "B:J",
      filtrar : "SI", // [SI/NO]
      columnaAFiltrarEnOrigen : "Estado",
      valorAFiltrarEnOrigen : "Mejora a Producciones",
      
      // Planilla de destino: Calculos calidad 1.1
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Producciones a mejorar",
      rangoALimpiarEnDestino : "A:I",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}

/************************************************************************************************************/
 /* Planilla 7 */ 
/************************************************************************************************************/
function Lista_de_comentarios_para_Bidcom() {

  var variables = [
    {
      //Planilla de origen:  Calculos calidad 1.1
      idSpreadsheetOrigen : "1bhhL0R9IVaxy2GPnoItCY4HaAyhZf_iYR9g_eMQBLTU",
      nombreHojaOrigen : "Comentarios para Bidcom",
      rangoABuscarEnOrigen : "I:J",
      filtrar : "NO", // [SI/NO]
      columnaAFiltrarEnOrigen : "Estado",
      valorAFiltrarEnOrigen : "Espera",
      
      // Planilla de destino: Estado de pedidos: Bidcom
      idSpreadsheetDestino : "1LyRp33siHF5W2sXfpA-zLvNA-u-hn7Fsjr-P6LKUNdg",
      nombreHojaDestino : "Comentarios",
      rangoALimpiarEnDestino : "A:B",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}
/************************************************************************************************************/
 /* Planilla 8 */ 
/************************************************************************************************************/

function repuestosPedidos() {

  var variables = [
    {
      // Planilla de origen: Gestión Repuestos
      idSpreadsheetOrigen : "1X80Y1IGTYTTwbOXXN8QYv8_p_E8Bq2Kza5cSV-II858",
      nombreHojaOrigen : "Pedido Repuestos",
      rangoABuscarEnOrigen : "A:M",
      filtrar : "SI", // [SI/NO]
      columnaAFiltrarEnOrigen : "Fabrica",
      valorAFiltrarEnOrigen : "Atech - J&G Group Co. LTD.",
      
      // Planilla de destino: Calculos calidad 1.1
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Repuestos",
      rangoALimpiarEnDestino : "B:N",
      numeroDeColumnaInicialParaPegarDatos : 2, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}
/************************************************************************************************************/
 /* Planilla 9 */ 
/************************************************************************************************************/
function datos_Operaciones() {

  var variables = [
    {
      // Planilla de origen: Operaciones
      idSpreadsheetOrigen : "1e3MhYhWR2u0_inXS2e7Kie3hT_KrsHeV2OK2TdfBkfs",
      nombreHojaOrigen : "Base de pedidos",
      rangoABuscarEnOrigen : "A:AL",
      filtrar : "SI", // [SI/NO]
      columnaAFiltrarEnOrigen : "Cliente",
      valorAFiltrarEnOrigen : "Bidcom SRL",
      
      // Planilla de destino: Calculos calidad 1.1
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Operaciones",
      rangoALimpiarEnDestino : "A:AL",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}


/************************************************************************************************************/
 /* Planilla 10 */ 
/************************************************************************************************************/
function operacionesBidcomFiltrado() {

  var variables = [
    {
      // Planilla de origen: Operaciones Bidcom (filtrado)
      idSpreadsheetOrigen : "1AiN-rMdrk0JfkAGnz53bG8zG2KS2rlvZS7G42hL1GY4",
      nombreHojaOrigen : "Stock filtrado",
      rangoABuscarEnOrigen : "A:E",
      filtrar : "NO", // [SI/NO]
      columnaAFiltrarEnOrigen : "Cliente",
      valorAFiltrarEnOrigen : "Bidcom SRL",
      
      // Planilla de destino: Calculos calidad 1.1
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Operaciones Bidcom (filtrado)",
      rangoALimpiarEnDestino : "A:E",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}
/************************************************************************************************************/
 /* Planilla 11 */ 
/************************************************************************************************************/
function sistemaDeEnvios() {

  var variables = [
    {
      // Planilla de origen: Sistema de Envios
      idSpreadsheetOrigen : "1nS2IFjRf120BRI9HKQ4kWwrsYh0nJst55H7KlcXyOW8",
      nombreHojaOrigen : "BD Sales",
      rangoABuscarEnOrigen : "A:T",
      filtrar : "SI", // [SI/NO]
      columnaAFiltrarEnOrigen : "*ContactName",
      valorAFiltrarEnOrigen : "Bidcom SRL",
      
      // Planilla de destino: Calculos calidad 1.0
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Sistema de Envios",
      rangoALimpiarEnDestino : "A:T",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}
/************************************************************************************************************/
 /* Planilla 12 */ 
/************************************************************************************************************/
function base_de_productos_Atech() {

  var variables = [
    {
      // Planilla de origen: Base de Datos de Producto
      idSpreadsheetOrigen : "1swoBuV4JkgO6nrXCAX9USWsckat7aPibwGkgmra1y74",
      nombreHojaOrigen : "BD",
      rangoABuscarEnOrigen : "A:R",
      filtrar : "NO", // [SI/NO]
      columnaAFiltrarEnOrigen : "*Cliente",
      valorAFiltrarEnOrigen : "Bidcom SRL",
      
      // Planilla de destino: Calculos calidad 1.0
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Base de Productos (Atech)",
      rangoALimpiarEnDestino : "A:R",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}
/************************************************************************************************************/
 /* Planilla 13 */ 
/************************************************************************************************************/
function buscarOrdenesMadreDeSpareParts() {

  var variables = [
    {
      // Planilla de origen: Spare Parts - Orden Madre
      idSpreadsheetOrigen : "1OlpzsSdSAi0H8t3SMDWkeE2AU1Se98X2X6MFGSkWj4Q",
      nombreHojaOrigen : "Hoja 1",
      rangoABuscarEnOrigen : "A:D",
      filtrar : "NO", // [SI/NO]
      columnaAFiltrarEnOrigen : "*ContactName",
      valorAFiltrarEnOrigen : "Bidcom SRL",
      
      // Planilla de destino: Calculos calidad 1.0
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Ordenes Madre",
      rangoALimpiarEnDestino : "A:D",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}

/************************************************************************************************************/
 /* Planilla 14 */ 
/************************************************************************************************************/
function productosYSpareParts() {

  var variables = [
    {
      // Planilla de origen: Productos y Spare Parts
      idSpreadsheetOrigen : "115EWS3vDcfCnM_UTMWfUKDBZIu1ZTX99aTY4Jjybp8s",
      nombreHojaOrigen : "Analisis",
      rangoABuscarEnOrigen : "H:P",
      filtrar : "NO", // [SI/NO]
      columnaAFiltrarEnOrigen : "Estado",
      valorAFiltrarEnOrigen : "Mejora a Producciones",
      
      // Planilla de destino: Calculos calidad 1.0
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Ordenes y Spare Parts",
      rangoALimpiarEnDestino : "A:I",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}

/************************************************************************************************************/
 /* Planilla 15 */ 
/************************************************************************************************************/
function estado_repuestos_compartido_con_Bidcom() {

  var variables = [
    {
      //Planilla de origen:  Calculos calidad 1.0
      idSpreadsheetOrigen : "1DFe3qfFVGSQPNUZzQfzmPzUjXhVslVj9F6FTjpg27i0",
      nombreHojaOrigen : "Pedidos de repuestos",
      rangoABuscarEnOrigen : "A:Q",
      filtrar : "SI", // [SI/NO]
      columnaAFiltrarEnOrigen : "Tipo de Pedido",
      valorAFiltrarEnOrigen : "GF",
      
      // Planilla de destino: Estado de pedidos: Bidcom
      idSpreadsheetDestino : "1LyRp33siHF5W2sXfpA-zLvNA-u-hn7Fsjr-P6LKUNdg",
      nombreHojaDestino : "Repuestos",
      rangoALimpiarEnDestino : "A:Q",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}


/************************************************************************************************************/
 /* Planilla 16 */ 
/************************************************************************************************************/

/************************************************************************************************************/
 /* Planilla 17 */ 
/************************************************************************************************************/

/************************************************************************************************************/
 /* Planilla 18 */ 
/************************************************************************************************************/

/************************************************************************************************************/
 /* Planilla 19 */ 
/************************************************************************************************************/

/************************************************************************************************************/
 /* Planilla 20 */ 
/************************************************************************************************************/
