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
  
