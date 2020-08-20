function import_sheets() {  
  
 /* Planilla 1  */  fallas_responsabilidad_Atech();
 /* Planilla 2  */  fallas_responsabilidad_cliente_de_Bidcom(); 
 /* Planilla 3  */  fallas_responsabilidad_Bidcom();
 /* Planilla 4  */  fallas_responsabilidad_no_analizada();
 /* Planilla 5  */  productos();
}


/************************************************************************************************************/
 /* Planilla 1 */
/************************************************************************************************************/

function fallas_responsabilidad_Atech() {

  var variables = [
    {
      // Planilla de origen: Estado y Analisis Calidad Productos
      idSpreadsheetOrigen : "1asMZnmFgseFHWQaZ4lNE580kHgiCR8W5gLscu4RpTjw",
      nombreHojaOrigen : "GF",
      rangoABuscarEnOrigen : "A:N",
      filtrar : "SI", // [SI/NO]
      columnaAFiltrarEnOrigen : "responsableGF",
      valorAFiltrarEnOrigen : "PROVEEDOR",
      
      // Planilla de destino: Procesamiento de GF's
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Responsabilidad Atech",
      rangoALimpiarEnDestino : "A:N",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}

/************************************************************************************************************/
 /* Planilla 2 */ 
/************************************************************************************************************/

function fallas_responsabilidad_cliente_de_Bidcom() {

  var variables = [
    {
      // Planilla de origen: Estado y Analisis Calidad Productos
      idSpreadsheetOrigen : "1asMZnmFgseFHWQaZ4lNE580kHgiCR8W5gLscu4RpTjw",
      nombreHojaOrigen : "GF",
      rangoABuscarEnOrigen : "A:N",
      filtrar : "SI", // [SI/NO]
      columnaAFiltrarEnOrigen : "responsableGF",
      valorAFiltrarEnOrigen : "CLIENTE",
      
      // Planilla de destino: Procesamiento de GF's
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Responsabilidad cliente de Bidcom",
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


function fallas_responsabilidad_Bidcom() {

  var variables = [
    {
      // Planilla de origen: Estado y Analisis Calidad Productos
      idSpreadsheetOrigen : "1asMZnmFgseFHWQaZ4lNE580kHgiCR8W5gLscu4RpTjw",
      nombreHojaOrigen : "GF",
      rangoABuscarEnOrigen : "A:N",
      filtrar : "SI", // [SI/NO]
      columnaAFiltrarEnOrigen : "responsableGF",
      valorAFiltrarEnOrigen : "BIDCOM",
      
      // Planilla de destino: Procesamiento de GF's
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Responsabilidad Bidcom",
      rangoALimpiarEnDestino : "A:N",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}


/************************************************************************************************************/
 /* Planilla 4 */ 
/************************************************************************************************************/


function fallas_responsabilidad_no_analizada() {

  var variables = [
    {
      // Planilla de origen: Estado y Analisis Calidad Productos
      idSpreadsheetOrigen : "1asMZnmFgseFHWQaZ4lNE580kHgiCR8W5gLscu4RpTjw",
      nombreHojaOrigen : "GF",
      rangoABuscarEnOrigen : "A:N",
      filtrar : "SI", // [SI/NO]
      columnaAFiltrarEnOrigen : "responsableGF",
      valorAFiltrarEnOrigen : "",
      
      // Planilla de destino: Procesamiento de GF's
      idSpreadsheetDestino : "",
      nombreHojaDestino : "Sin asignar",
      rangoALimpiarEnDestino : "A:N",
      numeroDeColumnaInicialParaPegarDatos : 1, //arranca en la A a pegar el resultado de la consulta
    }
  ]
  
  convertirNombresColumnas(variables)
  getData(variables)
}
/************************************************************************************************************/
 /* Planilla 5 */ 
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
      
      // Planilla de destino: Procesamiento de GF's
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
 /* Planilla 6 */ 
/************************************************************************************************************/


