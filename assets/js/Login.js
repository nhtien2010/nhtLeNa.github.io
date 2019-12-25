var text = this.document.URL.split('=')[1];
if(text)
    text = text.split('%40')[0];
if(text)
    if(text === "admin")
        document.location.href = "admin.html";
    else if(text === "bidder")
        document.location.href = "Bidder_1 - Profile.html";
    else if(text === "seller")
        document.location.href = "Seller_1 - Profile.html"

window.history.replaceState({}, "Auction", "index.html");
