var w = 300;
var h = 140;
var padding = 2;
var dataset = [5, 10, 15, 20, 25, 13, 11, 29, 12];
var svg = d3.select("body").append("svg")
          .attr("width", w)
          .attr("height", h);
function colorPicker(v) {
  if (v<=20) { return "#666666";}
  else if (v>20) {return "#FF0033";}
}

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
.attr({
  x: function(d, i){ return i * (w / dataset.length);},
  y: function(d){ return h - (d*4);},
  width: w / dataset.length - padding,
  height: function(d) { return d*4;},
  fill: function(d) { return colorPicker(d);}
});

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d) {return d;})
.attr({
  "text-anchor": "middle",
  x: function(d, i){ return i * (w / dataset.length) +
    (w /dataset.length - padding) / 2;},
  y: function(d){ return h - (d*4) + 14;},
  "font-family": "sans-serif",
  "font-size": 12,
  "fill" : "#ffffff"
});

monthlySales = [
  {"month": 10, "sales":20},
  {"month": 20, "sales":14},
  {"month": 30, "sales":20},
  {"month": 40, "sales":21},
  {"month": 50, "sales":15},
  {"month": 60, "sales":22},
  {"month": 70, "sales":9},
  {"month": 80, "sales":6},
  {"month": 90, "sales":23},
  {"month": 100, "sales":7}
];

var lineFun = d3.svg.line()
.x(function(d) { return d.month*3;})
.y(function(d) { return d.sales*2; })
.interpolate("linear");

var svg = d3.select("body").append("svg")
.attr({width: w, height: h});

var viz = svg.append("path")
.attr({
  d : lineFun(monthlySales),
  "stroke": "purple",
  "stroke-width": 2,
  "fill": "none"
});

var labels = svg.selectAll("text")
  .data(monthlySales)
  .enter()
  .append("text")
  .text(function(d) {return d.sales;})
.attr({
  x: function(d){ return d.month*3 - 20; },
  y: function(d){ return d.sales*2;},
  "font-family": "sans-serif",
  "font-size": 12,
  "fill" : "#666666",
  "text-anchor": "start",
  "dy": ".35em",
  "font-weight": function(d, i){
    if (i===0 || i == (monthlySales.length-1)) {
      return "bold"
    }
    else {
      return "normal"
    }
  }
});