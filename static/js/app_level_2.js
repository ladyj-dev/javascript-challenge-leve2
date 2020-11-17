// create a variable that references the data
var ufoData = data;

// view data
console.log(ufoData);

// get a reference to table body tag
var tbody = d3.select("tbody");

// build table(row,data,)
function buildTable(tableData) {
    // clear current table data
    tbody.html("");

    // append a tr
    tableData.forEach((tableRow) => {
        var row = tbody.append("tr");
        // 
        Object.values(tableRow).forEach((value) => {
            // add td
            var cell = row.append("td");
            //   add values
            cell.text(value);

        });
    });
}
// grab filters
var filters = {};
// function needed for updated filters
function updatedfilters() {
    // event listeners:element, value, id
    var changedElement = d3.select(this).select("input");
    var elementValue = changedElement.property("value");
    var filterId = changedElement.attr("id");

    // event listener - add id and value when filter value is entered otherwise delete filter
    if (elementValue {
        filters[filterID] = elementValue;
    }
    else {
        delete filters[filtersId];
    }
    // apply filter and build table again
    filterTable();
}
// create filterTable function
function filterTable() {
    // make filteredData ufoData (like python)
    var filteredData = ufoData;
    // interate through filters, keeping ufodata that matches filter values
    Object.entries(filters).forEach(([key, value]) => {
        filteredData.filter(row => row[key] === value);
    });
    // rebuild table using buildTable function using filtered data
    buildTable(filteredData);
}
// 
// #########################################################################
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

// build table with ufoData
buildTable(ufoData);