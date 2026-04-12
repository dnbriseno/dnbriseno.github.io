

let reviewers = ["John Smith", "Jane Doe", "Mary James"];
let reviewType = ["P", "N", "", ""];
let stars = [5, 4, 3];
let reviewDates = ["11/18/2025", "11/17/2025", "11/15/2025", "11/10/2025"];
let reviews = ["This hotel has wonderful room service and is a lovely place to stay.",
"I had a wonderful time here.",
"This place is nice."];

function starImages(rating) {
    let imageText = "";
 //for loop
 for(let i = 1; i <= rating; i++) {
        imageText += "<img src = 'images/star.png' alt=''>";
    }
    return imageText;
}

for(let i = 0; i < reviewers.length; i++) {
    let reviewCode = "";
    
    if(reviewType[i] === "P") {
        reviewCode += "<table class = 'prime' > ";
    }
    else if(reviewType[i] === "N") {
            reviewCode += "<table class = 'new' > ";
        }
    else {
        reviewCode += "<table>";
    }

    reviewCode += "<tr><th>By</th><td>" + reviewers[i] + "</td></tr>";
    reviewCode += "<tr><th>Review Date</th><td>" + reviewDates[i] + "</td></tr>";
    reviewCode += "<tr><th>Rating</th><td>" + starImages(stars[i]) + "</td></tr>";
    reviewCode += "tr><td colspan='2'>" + reviews[i] + "</td></tr>";
    reviewCode += "</table>";

    document.getElementsByTagName("article").innerHTML(reviewCode);
}
