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
    if (elementValue) {
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
// add final event listener each time filter changes for better user experience
d3.selectAll(".filter").on("change", updatedfilters);
    buildTable(ufoData);