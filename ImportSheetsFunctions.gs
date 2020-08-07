function getData( variables ) {
    
//Esto limpia el rango de destino ↓
  var destinySource
    if(variables[0].idSpreadsheetDestino == "") {
      var destinySource = SpreadsheetApp.getActiveSpreadsheet();
    }
    else {
      var destinySource = SpreadsheetApp.openById(variables[0].idSpreadsheetDestino);
    }
  var sheet = destinySource.getSheetByName(variables[0].nombreHojaDestino);
  if (sheet != null )
  {
    sheet.getRange(variables[0].rangoALimpiarEnDestino).clearContent();
  }
    
//Esto Obtiene la query sin filtro ↓
  var originSource
    if(variables[0].idSpreadsheetOrigen == "") {
      var originSource = SpreadsheetApp.getActiveSpreadsheet();
    }
    else {
      var originSource = SpreadsheetApp.openById(variables[0].idSpreadsheetOrigen);
    }
  var sourceSheet = originSource.getSheetByName(variables[0].nombreHojaOrigen);
  var sourceValues = sourceSheet.getRange(variables[0].rangoABuscarEnOrigen).getValues();
  var destinySource
    if(variables[0].idSpreadsheetDestino == "") {
      var destinySource = SpreadsheetApp.getActiveSpreadsheet();
    }
    else {
      var destinySource = SpreadsheetApp.openById(variables[0].idSpreadsheetDestino);
    }
  
  var destinySheet = destinySource.getSheetByName(variables[0].nombreHojaDestino);
  var row, len, refValues = [];
    
//Esto filtra la query, si es que la tiene que filtrar, y la guarda en un nuevo array ↓
  var tempArray = new Array();
  tempArray[0] = new Array(sourceValues[0].length);
  for (x = 0, len = sourceValues[0].length; x < len; x++) {
    tempArray[0][x] = sourceValues[0][x];
  }
  
  var valor;
  var rowTemp = 0;
  var columnaABuscar = variables[0].columnaAFiltrarEnOrigen;
  var final = sourceValues.length;
  for (row = 1, final; row < final; row++) {
    valor = sourceValues[row][columnaABuscar];
    if (variables[0].filtrar == "SI") {
      if (valor == variables[0].valorAFiltrarEnOrigen) {
      tempArray[row - rowTemp] = new Array(final);
        //var posicion = 0;
        //while (posicion < final) {
            //tempArray[row - rowTemp][posicion] = sourceValues[row][posicion];          
            //posicion++;
        //}
        tempArray[row - rowTemp] = sourceValues[row];
      } else {
        rowTemp++;
      }
    } else {
      tempArray[row - rowTemp] = new Array(final);
      //var posicion = 0;
        //while (posicion < final) {
            //tempArray[row - rowTemp][posicion] = sourceValues[row][posicion];          
            //posicion++;
        //}
        tempArray[row - rowTemp] = sourceValues[row];
    }
  }
//Esto pega el resultado en la hoja de destino
  for (x = 0, largo = tempArray.length; x < largo; x++) {
    refValues.push(tempArray[x]);
  }
  var colI = variables[0].numeroDeColumnaInicialParaPegarDatos;
  var d = tempArray.length;
  var f = tempArray[0].length;
  
  if (destinySheet == null) {
    throw new Error("Hoja de destino inválida")
  }
  
  //destinySheet.getRange(1, variables[0].numeroDeColumnaInicialParaPegarDatos, tempArray.length, tempArray[0].length).setValues(refValues);
  destinySheet.getRange(1, colI, d, f).setValues(refValues);  
}

function convertirNombresColumnas(variables) {
  //Esta función convierte los nombres de las columnas por su respectivo número de columna
  
  var originSource
    if(variables[0].idSpreadsheetOrigen == "") {
      var originSource = SpreadsheetApp.getActiveSpreadsheet();
    }
    else {
      var originSource = SpreadsheetApp.openById(variables[0].idSpreadsheetOrigen);
    }
  var sourceSheet = originSource.getSheetByName(variables[0].nombreHojaOrigen);
  var sourceValues = sourceSheet.getRange(variables[0].rangoABuscarEnOrigen).getValues();

    for (y = 0, final = sourceValues.length; y < final; y++) {
     //Si el nombre de la columna actual es igual al del filtro entonces tomamos ese numero de columna
     if (variables[0].columnaAFiltrarEnOrigen == sourceValues[0][y]) {
       variables[0].columnaAFiltrarEnOrigen = y;
       break;
     }
   }
    
  
}