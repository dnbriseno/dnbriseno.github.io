
// Constants

const LK_SUITE_COST = 60; //daily cost for the lookout suite
const ST_ROOM_COST = 30; //daily cost for the standard room


window.addEventListener("load", setupForm);

// form defaults
function setupForm() {

    document.getElementById("lksuite").checked = false;
    document.getElementById("stanroom").checked = false;
    document.getElementById("dayNum").value = 1;
    document.getElementById("prroomservice").checked = false;

    getEstimate();

    document.getElementById("lksuite").onchange = getEstimate;
    document.getElementById("stanroom").onchange = getEstimate; 
    document.getElementById("dayNum").onchange = getEstimate;
    document.getElementById("prroomservice").onchange = getEstimate;
 
}

function getEstimate() {

    //Variables
    let totalCost = 0;
    let lookoutselected = document.getElementById("lksuite").checked;
    let standardselected = document.getElementById("stanroom").checked;
    let days = document.getElementById("dayNum").value;
    let premiumrmservice = document.getElementById("prroomservice").checked;


    //operations

    totalCost += lookoutselected ? (LK_SUITE_COST * days) : 0;
    totalCost += standardselected ? (ST_ROOM_COST*days) : 0;
    totalCost += premiumrmservice ? (5*days) : 0;

    

    document.getElementById("totalcost").innerHTML = "$" + totalCost;


}