import React from 'react'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

function useExportExcel() {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToExcel = (csvData, csvDataName, fileName) => {
        let dataSheets = []
        let objSheets = {}
        for (let i = 0; i < csvData.length; i++) {
            dataSheets.push(csvDataName[i])
            objSheets = {
                ...objSheets,
                [csvDataName[i]] : XLSX.utils.json_to_sheet(csvData[i])
            }
        }
        const wb = {
            Sheets: objSheets, 
            SheetNames: dataSheets
        };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }
        
  return {
    exportToExcel
  }
}

export default useExportExcel