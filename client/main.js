

// get a list of user defined company names (from their portfolio selection)
let listsofUserSelectedCompanies = ['TSLA', 'PLTR', 'AMZN', 'FB', 'GOOG'];

// get the stock ticker from the company list from 

$(document).ready(function(){
  $("p").hide();
});

// search for all variations of the company name in the JSON object 

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "a051609f16msh308e4bc586d8c7dp1560d1jsn3721171120df",
// 		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
// 	}
// };
console.log('Comment outside AJAX call')
$.ajax({
  type: 'GET',
  url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=TSLA&interval=5min&apikey=YZZMTHCW6NPA55RJ',
  success: function(resp) {
    console.log('SUCCESS WOOT')

  },
  error: function() {

  }
});

// insert our JSON piece 

// return JSON piece

