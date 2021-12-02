// Function checkPage() objects
const text = '{  "Index"        : [0,1,2,3,4,5],'
              + ' "IndexName"   : ["JQFL","Budgeting and Saving","Interest Rates","Borrowing and Debts","Investment & Risk", "Real Estate"],'
              + ' "IndexLink"   : ["./index.html", "./chapter1.html", "./chapter2.html", "./chapter3.html", "./chapter4.html", "./chapter5.html"],'
              + ' "IndexLink2"   : ["./index.html", "./chapter1.html", "./chapter2.html", "./chapter3.html", "./chapter4.html", "./chapter5.html"],'     
              + ' "IndexLeftContent": ["You will learn about 5 topics on Personal Finance.","A budget is a spending plan, a tool to put you in control of your money. It shows how much money you have, where it needs to go to meet your needs and wants and when you will be able to reach your financial goals. <br><br> Understanding the cost of living in an area can help you determine the amount of money necessary to cover basic living expenses. It can also describe the amount of money you will require to maintain a specific lifestyle in a given location. Because the cost of goods and services differs from city to city, calculating the cost of living can identify the affordability to live in a specific town.","Interest rates are growth rates – it is a percentage that is used to calculate how much a loan or investment grows over time. <br><br> Interest rates are most commonly associated with borrowing money, like a homeowner taking out a mortgage or a government selling a bond. The interest rate is how much extra needs to be paid back in exchange for the loan. <br><br> Interest rates are also used in savings accounts, where you might earn interest on your savings.","The difference between loan and debt is that money borrowed from lender and bank is called loan, and money borrowed through debentures and bonds is called debt. Loans are easily available through some typical paperwork and there are various loan types according to your fit with their plans.","Some of the most common types of investments include the following: <br><br> All investments involve some degree of risk. In finance, risk refers to the degree of uncertainty and/or potential financial loss inherent in an investment decision.  In general, as investment risks rise, investors seek higher returns to compensate themselves for taking such risks. Every saving and investment product has different risks and returns.","Real estate is the land along with any permanent improvements attached to the land, whether natural or man-made—including water, trees, minerals, buildings, homes, fences, and bridges. Real estate is a form of real property. It differs from personal property, which are things not permanently attached to the land, such as vehicles, boats, jewelry, furniture, and farm equipment."], '
              + ' "IndexRightContent"   : ["In this section, you will find a variety of questions to test your knowledge. There is no final marks and there will be hints if needed. <br> <br> To begin, press the Go button:","Here are some questions about Budgeting and Saving to test your knowledge <br><br> ","Interest Rates","Borrowing and Debts","Investment & Risk", "Real Estate"], '
              + ' "IndexContentLinksName" : [ [], "Budgeting Rules", "Bank of Canada Interet Rates", [], [], "Mortgage Calculator"], '
              + ' "IndexContentLinks"     : [ [], "https://www.investopedia.com/ask/answers/022916/what-502030-budget-rule.asp","https://www.bankofcanada.ca/rates/interest-rates/" , [], "./investing.html", "./mortgage.html"] '
+ '}';
const obj = JSON.parse(text);

const text_mtg = '{ "Index" : [6],'
  + ' "IndexName"        : ["Mortgage Calculator"],'
  + ' "IndexLink"        : ["./mortgage.html"],'
  + ' "IndexLeftContent" : ["In this section, you will learn how to calculate your mortgage payment given: <br><br> 1. Monthly Mortgage Rate <br>2. Number of Years (Months) <br>3. Loan Value <br><br> The fixed monthly payment for a fixed rate mortgage is the amount paid by the borrower every month that ensures that the loan is paid off in full with interest at the end of its term. <br><br> Here is a problem to solve. Your current annual mortgage rate is 6% and you want to get a $200,000 loan from the bank for 30 year mortgage for a monthly mortgage. <br><br> Use the following calculator to determine what your monthly mortgage rate is:" ]'
+ '}';
const mortgage_obj = JSON.parse(text_mtg);

// Function QuestionCheck() objects
const Answer01 = document.querySelector('Submit01');
const Answer02 = document.querySelector('Submit02');
const Answer03 = document.querySelector('Submit03');
const Answer04 = document.querySelector('Submit04');
const Answer05 = document.querySelector('Submit05');
const AnswerQuery = '{  "Index"        : [0,1,2,3,4,5],'
              + ' "IndexName"   : ["Home","Budgeting and Saving","Interest Rates","Borrowing and Debts","Investment & Risk", "Real Estate"],'
              + ' "Index01Answer" : ["Savings","Plans","Mortgage"],'
              + ' "Index02Answer" : ["Borrowing",1360],'
              + ' "Index03Answer" : ["Credit Score"],'
              + ' "Index04Answer" : ["No","Yes"],'
              + ' "Index05Answer" : ["Yes"]'
+ '}';
const objAnswer = JSON.parse(AnswerQuery);

// Function Building
function checkPage (PageCurrent) {
  var PageNext = PageCurrent + 1;
  var PagePrevious = Math.min(0, PageNext - 1); 
  // Initialize Home Page Buttons
  // document.getElementById('HomePage').innerHTML =obj.IndexName[0]
  // document.getElementById('HomePage').href = obj.IndexLink[0]

  // Dynamic Value for Bottom Nav
  // if ( document.documentElement.clientWidth <= 450) {
  //   document.getElementById("PagePreviousLink").innerHTML = '<'
  //   document.getElementById("PageNextLink"    ).innerHTML = '>'
  // } else {
  //   document.getElementById("PagePreviousLink").innerHTML = 'Previous Chapter'
  //   document.getElementById("PageNextLink"    ).innerHTML = 'Next Chapter'
  // }; // End if statement  
  if (PageCurrent > 0 && PageCurrent < 6) {
    document.getElementById("ChapterID").innerHTML    = "This is Chapter is about " + obj.IndexName[PageCurrent];
  }; // End if statement
  // if (PageCurrent == 5) {
  //   document.getElementById("PageNextLink").href = '';
  //   document.getElementById("PageNextLink").innerHTML = '';
  // } else {
  //   document.getElementById('PageNextLink').href = obj.IndexLink[PageNext];
  // }; // End if statement
  if (PageCurrent == 0) {
    // document.getElementById("PagePreviousLink").href = '';
    // document.getElementById("PagePreviousLink").innerHTML = '';
    // document.getElementById("PageNextLink").href = '';
    // document.getElementById("PageNextLink").innerHTML = '';
    document.getElementById('StartButton').href       = obj.IndexLink[1]    
    document.getElementsByClassName("flex-bottom-nav")[0].style.display = 'none';
    for (let index = 1; index < obj.Index.length; index++) {
      document.getElementById('Page0' + index).href       = obj.IndexLink[index]
      document.getElementById('Page0' + index).innerHTML  = obj.IndexName[index]
      } // End for loop
  } else {
    // document.getElementById('PagePreviousLink').href  = obj.IndexLink[PagePrevious];
  }; // End if statement
  // for (let index = 0; index < obj.Index.length; index++) {
  //   document.getElementById('Page' + index).href        = obj.IndexLink[index]
  //   document.getElementById('Page' + index).innerHTML   = obj.IndexName[index]
  // }; // End for loop
  if (PageCurrent == 6) {
    document.getElementById('RightContent').innerHTML = mortgage_obj.IndexLeftContent[0];
  } else {
    if (obj.IndexContentLinks[PageCurrent] == 0) {
    document.getElementById('LeftContent').innerHTML = obj.IndexLeftContent[PageCurrent] 
    } else {
    document.getElementById('LeftContent').innerHTML = obj.IndexLeftContent[PageCurrent] 
      + "<br><br><hr><button class='tooltip' style = 'border: 0px dotted black;'> <a href = " 
      + obj.IndexContentLinks[PageCurrent]
      + "><span class='material-icons-outlined'>info</span></a><span class='tooltiptext'>" 
      + "Link:<i> " + obj.IndexContentLinksName[PageCurrent]
      + "</i></span></button>"
    };
    document.getElementById('RightContent').innerHTML = obj.IndexRightContent[PageCurrent];    
  }; // End if statement  
}; // End function

function QuestionCheck (PageCurrent) {
  var AnswerObj = objAnswer["Index0" + PageCurrent + "Answer"];
  for (let index = 1; index <= AnswerObj.length; index++){
    // Index will indicate Questionnaire question
    // GET Response :
    const Q_test = document.querySelector('input[name="Q0' + index + '"]:checked').value;
    // GET Answer : 
    const A_test = AnswerObj[index - 1];
    // Validation Check: 
    if (Q_test == A_test) {
      alert("Correct. Selected : ( " + Q_test + ") | Answer is (" + A_test + ")");
    } else {
      alert("Wrong. Selected : ( " + Q_test + ") | Answer is (" + A_test + ")");
    };    //End for if statement
  };    //End for loop
}; // End function

// Function for Submit Button on Home Page
function StartContent () {
  alert("hi")
  alert(document.documentElement.clientWidth /* 1200 */)
}

// Mortgage Calculation

function MortgagePayment_c(monthly_rate, Number_Payments, Loan_Value) {
  if (monthly_rate == 0){
    return Loan_Value/Number_Payments
  } else {
    const Numerator   = monthly_rate*Loan_Value*( (1 + monthly_rate)**Number_Payments )
    const Denominator = ( (1 + monthly_rate)**Number_Payments ) - 1
    value = Numerator/Denominator
    document.getElementById("MortgageOutput").innerHTML = 'Mortgage Amount is:';
    return '$' + Number(value.toFixed(2))
  }
}

// MortgagePayment_c(6.5/100/12, 30*12, 200000)

function HeroTransition () {
  document.getElementById("HeroImage" ).style.visibility = "hidden";
  document.getElementById("HeroImage" ).style.height = "0px";  

  // getElementsByClassName returns an Array Object: you need to reference the correct object [0] 
  // document.getElementsByClassName("HomeSection")[0].style.display = "block";
  document.getElementsByClassName("flex-container")[0].style.display = "flex";
  document.getElementsByClassName("flex-container")[0].style.visibility = "visible";

  document.getElementsByClassName("flex-bottom-nav")[0].style.display = 'flex';
};

function unlock () {
  var propert = document.getElementsByClassName("flex-nav-column")[0].style.visibility;
  if (propert == "hidden") {
    document.getElementsByClassName("flex-nav-column")[0].style.display = 'flex';
    return document.getElementsByClassName("flex-nav-column")[0].style.visibility = 'visible';
  } else {
    document.getElementsByClassName("flex-nav-column")[0].style.display = 'none';
    return document.getElementsByClassName("flex-nav-column")[0].style.visibility = 'hidden';
  };
};







