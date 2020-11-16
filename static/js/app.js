// from data.js
var tableData = data;

// view data
console.log(tableData);

// get a reference to table body tag
var tbody = d3.select("tbody");

// build table(row,data,)
// add tr
tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    // only using value not key
    Object.entries(ufo).forEach(([key, value]) => {
        // add td
        var cell = row.append("td");
        //   add values
        cell.text(value);
    });
});

// select the button
var button = d3.select("#filter-btn");

// select the form
var form = d3.select("form");

// create event handler
button.on("click", runEnter);
form.on("submit", runEnter);

// create run/enter function
function runEnter() {
    // prevent page from refreshing automatically
    d3.event.preventDefault();

    // select input element and get html node for the users input(id)
    var inputElement = d3.select("#datetime");

    // get value of users input
    var inputValue = inputElement.property("value");

    // console.log(inputValue);

    // create a variable to filter data (pulling out dt)
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    // console.log(filteredData);

    // reset table and rebuild
    tbody.html("");

    // build table(row,data,)
    // add tr
    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        // only using value not key
        Object.entries(ufo).forEach(([key, value]) => {
            // add td
            var cell = row.append("td");
            //   add values
            cell.text(value);
        });
    });
}