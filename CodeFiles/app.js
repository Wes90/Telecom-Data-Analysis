var viz
function initViz() {
  var containerDiv = document.getElementById("vizContainer"),
  url = "https://us-east-1.online.tableau.com/t/zuar/views/Regional/GlobalTemperatures";

  viz = new tableau.Viz(containerDiv, url);
}
