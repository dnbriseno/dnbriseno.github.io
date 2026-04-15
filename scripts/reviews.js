

let reviewers = ["John Smith", "Jane Doe", "Mary Hopps", "James Johnson"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 4, 3, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
   "This place was a wonderful place to stay with their wonderfull room service.",
   "I liked the sweet view from the lookout suite. It's really nice.",
   "This place is fine.",
   "The breakfast items from the place are reaaly good. And the rooms are nice and tidy.",
];


//function
function starImages(rating) {
    let imageText = "";
 //for loop
 for(let i = 1; i <= rating; i++) {
        imageText += "<img src = 'images/star.png' alt=''>";
    }
    return imageText;
}
//for loop
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
    reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr>";
    reviewCode += "</table>";

document.getElementsByTagName("article")[0].insertAdjacentHTML("beforeEnd", reviewCode);
}