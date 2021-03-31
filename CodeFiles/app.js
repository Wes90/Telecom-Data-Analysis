// var viz
// function initViz() {
//   var Dashboard = document.getElementById("vizContainer"),
//   url = "https://public.tableau.com/views/Book1_16166499785510/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

//   viz = new tableau.Viz(Dashboard, url);

// var viz2

//   var PieCharts = document.getElementById("vizContainer"),
//   url2 = "https://public.tableau.com/views/Book1_16166499785510/Sheet5?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

//   viz2 = new tableau.Viz(PieCharts, url2);
// }
function initViz() {
  url = "https://public.tableau.com/views/Book1_16166499785510/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
  options = {
      hideToolbar: true,
      width: "1300px",
      height: "1050px",
  };
  viz = new tableau.Viz(Dashboard, url, options);

  url2= "https://public.tableau.com/views/Book1_16166499785510/Dashboard2?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
  options = {
      hideToolbar: true,
      width: "1300px",
      height: "1050px",
  };
  viz2 = new tableau.Viz(PieCharts, url2, options);
}
  
