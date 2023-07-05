document.addEventListener("DOMContentLoaded", ()=>{

    let quotes = [
        {
            "quote": "Triumph ERP was able to provide an integrated solution to all aspects of our diverse business and producing management reports is now a breeze.",
            "quote_name": "Sou Lin Tan",
            "quote_position": "Divisional Manager Corporate Services"
        },
        {
            "quote": "With over 800 accounts of varying trades, we needed to be able to look at sales per category, per location, per stock group. Triumph provided an integrated solution saving us time and money.",
            "quote_name": "Daniel Phillips",
            "quote_position": "Newtons Business Manager"
        },
        {
            "quote": "Prior to using Triumph, we had a software system which was suitable for our initial operations but when we expanded to multiple locations we needed a software package that would enable our growth not limit what we could do with it.",
            "quote_name": "Kraige Cooper", 
            "quote_position": "Managing Director"
        }
    ];

    let last_quote = 0;
    let change_quote = (quote_no, delay)=>{

        console.log("Switching to " + quote_no);

        let quote = quotes[quote_no];
        document.getElementById("quote").innerHTML = quote.quote;
        document.getElementById("quote_name").innerHTML = quote.quote_name;
        document.getElementById("quote_position").innerHTML = quote.quote_position;

        let nextQuote = Math.floor(Math.random() * quotes.length);
        let nextDelay = 5000 + Math.floor(Math.random() * 2000);

        while (last_quote == nextQuote){
            nextQuote = Math.floor(Math.random() * quotes.length);
        }

        setTimeout(()=>{
            change_quote(nextQuote, nextDelay);
        }, delay);

    }

    change_quote(1, 5500);

});