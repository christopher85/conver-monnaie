var url = "http://data.fixer.io/api/latest?access_key=479804b12673acc118f393d015570d8b&base=EUR&symbols=GBP,JPY,EUR,USD"


function recupValeur(){
    $.ajax({
        url : url,
        type : "GET",
        success : function (res, status, req){   //callback
            var rates = res.rates;
            var fromAmount = document.querySelector('#fromAmount').value;
            var from = document.querySelector('#from').value;
            var to = document.querySelector('#to').value;
            console.log(to);
        }
    })
            
}