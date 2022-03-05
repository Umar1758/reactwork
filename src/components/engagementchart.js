import * as React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
const data = [
  ["ID", "X", "Y", "Region"],
  ["", 80, 65, "ABC"],
  ["", 79, 70, "ABC1"],
  ["", 78, 22, "ABC2"],
  ["", 72, 41, "ABC2"],
  ["", 10, 15, "ABC2"],
  ["", 72, 10, "ABC1"],
  ["", 68, 88, "ABC"],
];

const options = {
  title: "",
  // colorAxis: { colors: ["#F14646", "#FFB900", "#67B938"] },
  colorAxis: {
    values: [1, 2, 3],
    colors: ["#F14646", "#FFB900", "#67B938"],
    legend: { position: "none" },
  },
  sizeAxis: {
    maxSize: 16,
    minSize: 16,
  },
  animation: { easing: "in" },
  hAxis: {
    title: "",
    viewWindowMode: "explicit",
    viewWindow: {
      max: 100,
      min: 0,
    },
    gridlines: { color: "#E0E0E0", type: "dashed" },
  },
  legend: {
    position: "none",
  },
  chartArea: {},
  tooltip: { isHtml: true },
  minorGridlines: { count: 0 },
  vAxis: {
    format: "#'%'",
    viewWindow: {
      max: 100,
      min: 0,
    },
    gridlines: {
      // interval: 0,
      color: "transparent",
    },
  },
  bubble: { textStyle: { fontSize: 8 } },
};
function Engagementchart() {
  return (
    <div className="App">
      <Chart
        chartType="BubbleChart"
        // width="100%"
        height="400px"
        data={data}
        options={options}
        legendToggle={false}
        legend_toggle={false}
      />
    </div>
  );
}

export default Engagementchart;
