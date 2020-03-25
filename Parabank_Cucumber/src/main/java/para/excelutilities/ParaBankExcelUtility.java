package para.excelutilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.util.NumberToTextConverter;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ParaBankExcelUtility 
{
	String s;
	public String readXL(int i, int j){
		File f=new File("src\\test\\resources\\TestData\\parabank_excelsheet.xlsx");
		try {
			FileInputStream fis =new FileInputStream(f);
			XSSFWorkbook  wb= new XSSFWorkbook(fis);
			XSSFSheet sheet=wb.getSheet("Sheet1");
			XSSFRow row= sheet.getRow(i);
			XSSFCell cell=row.getCell(j);
			if(cell.getCellType() == CellType.NUMERIC) {
				s = NumberToTextConverter.toText(cell.getNumericCellValue());
			}
			else 
				s=cell.getStringCellValue();
			wb.close();

		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return s;
	}
	}
