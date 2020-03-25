package para.Testrunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\main\\resources\\feature\\Testcase.feature",	
		plugin = {"pretty", "html:reports\\cucumber_html_report","json:reports\\cucumber_html_report\\jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports\\Extentreports\\Extentreport.html"},
		glue = {"para.Stepdefinition"},
		monochrome=true
		)

public class Para_Test_Runner 
{
	@AfterClass
	public static void extendReport() {
    Reporter.loadXMLConfig("src\\test\\resources\\extent-config.xml");
	
}

}
