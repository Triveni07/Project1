$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/Testcase.feature");
formatter.feature({
  "line": 2,
  "name": "ParaBank Website",
  "description": "",
  "id": "parabank-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Registration\u0026Login_Feature"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Validate the Registration functionality",
  "description": "",
  "id": "parabank-website;validate-the-registration-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@tc_01"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user open the Parabank Registration page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user gives the details and submits the registration",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFirefox.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 7396216900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFirefox.the_user_open_the_Parabank_Registration_page()"
});
formatter.result({
  "duration": 12165235400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFirefox.user_gives_the_details_and_submits_the_registration()"
});
formatter.result({
  "duration": 40829444900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate the login functionality",
  "description": "",
  "id": "parabank-website;validate-the-login-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@tc_02"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "the user launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the user open the Parabankpage",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "enter username and password then login",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFirefox.the_user_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 5017287100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFirefox.the_user_open_the_Parabankpage()"
});
formatter.result({
  "duration": 4876371100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFirefox.enter_username_and_password_then_login()"
});
formatter.result({
  "duration": 32648933100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Validate the bill pay  functionality",
  "description": "",
  "id": "parabank-website;validate-the-bill-pay--functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@tc_03"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the user launch the chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "the user open the Parabank Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the user login to the account",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "the user fills the details of the bill pay",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "submit the bill pay",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFirefox.the_user_launch_the_chrome()"
});
formatter.result({
  "duration": 5093391800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFirefox.the_user_open_the_Parabank_Login_Page()"
});
formatter.result({
  "duration": 7635438800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFirefox.the_user_login_to_the_account()"
});
formatter.result({
  "duration": 1917467300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFirefox.the_user_fills_the_details_of_the_bill_pay()"
});
formatter.result({
  "duration": 1371882100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFirefox.submit_the_bill_pay()"
});
formatter.result({
  "duration": 4623825600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Validate the CustomerCare Message",
  "description": "",
  "id": "parabank-website;validate-the-customercare-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@tc_04"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "the user launchs the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user open the Parabank HomePage",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the user opens the msg and fill the details",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "send the message to customer care",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFirefox.the_user_launchs_the_chrome_browser()"
});
formatter.result({
  "duration": 4465720100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFirefox.the_user_open_the_Parabank_HomePage()"
});
formatter.result({
  "duration": 5970413500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFirefox.the_user_opens_the_msg_and_fill_the_details()"
});
formatter.result({
  "duration": 1604138400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFirefox.send_the_message_to_customer_care()"
});
formatter.result({
  "duration": 4928927800,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Validate the submission details of AdminPage",
  "description": "",
  "id": "parabank-website;validate-the-submission-details-of-adminpage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@tc_05"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "the user launch the chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the user open the Parabank Homepage",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "the user select the Admin Page",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "the user submits the Administration Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFirefox.the_user_launch_the_chromebrowser()"
});
formatter.result({
  "duration": 4566867800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFirefox.the_user_open_the_Parabank_Homepage()"
});
formatter.result({
  "duration": 4953748400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFirefox.the_user_select_the_Admin_Page()"
});
formatter.result({
  "duration": 1506474100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFirefox.the_user_submits_the_Administration_Page()"
});
formatter.result({
  "duration": 5028376700,
  "status": "passed"
});
});