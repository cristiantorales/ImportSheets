function import_sheets() {  
  
 /* Planilla 1  */  fallas_responsabilidad_Atech();
 /* Planilla 2  */  
 /* Planilla 3  */  
 /* Planilla 4  */  
 /* Planilla 5  */  
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



/************************************************************************************************************/
 /* Planilla 3 */ 
/************************************************************************************************************/




/************************************************************************************************************/
 /* Planilla 4 */ 
/************************************************************************************************************/


/************************************************************************************************************/
 /* Planilla 5 */ 
/************************************************************************************************************/



/************************************************************************************************************/
 /* Planilla 6 */ 
/************************************************************************************************************/


