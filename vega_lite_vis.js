// use JS to load Vega_Lite visualisation into HTML page

// contain location of Vega-Lite JSON file
// same with script in index.html
var vg_1 = "daily_cost_bar_chart.vg.json";

// embed Vega-Lite visualisation stored i vg_1 in the div container named "bar_chart"
// rmb the #
vegaEmbed("#bar_chart", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);