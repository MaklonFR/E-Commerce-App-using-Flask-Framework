(function ($) {
  google.charts.load("current", { packages: ["corechart", "bar"] });
  google.charts.load("current", { packages: ["line"] });
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawBasic);
  function drawBasic() {
    const category = [];
        category[0]= "Elektronik";
        category[1]= "Fashion";
        category[2]= "Kecantikan";
        category[3]= "Makanan";
        category[4]= "Minuman";

    if ($("#pie-chart2").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ["Task", "Hours per Day"],
        [category[0], 9],
        [category[1], 10],
        [category[2], 15],
        [category[3], 20],
        [category[4], 25],
      ]);
      var options = {
        is3D: true,
        width: "100%",
        height: 300,
        colors: [
          "#e74b2b",
          "#ea9200",
          "#3eb95f",
          AdmiroAdminConfig.secondary,
          AdmiroAdminConfig.primary,
        ],
      };
      var chart = new google.visualization.PieChart(
        document.getElementById("pie-chart2")
      );
      chart.draw(data, options);
    }
    if ($("#bar-chart2").length > 0) {
      var a = google.visualization.arrayToDataTable([
          [
            "Element",
            "Density",
            {
              role: "style",
            },
          ],
          ["Copper", 10, "#ea9200"],
          ["Silver", 12, "#e74b2b"],
          ["Gold", 14, "#f73164"],
          ["Platinum", 16, "color: #308e87"],
        ]),
        d = new google.visualization.DataView(a);
      d.setColumns([
        0,
        1,
        {
          calc: "stringify",
          sourceColumn: 1,
          type: "string",
          role: "annotation",
        },
        2,
      ]);
      var b = {
          title: "Daftar Produk Paling Banyak Terjual",
          width: "100%",
          height: 250,
          bar: {
            groupWidth: "95%",
          },
          legend: {
            position: "none",
          },
        },
        c = new google.visualization.BarChart(
          document.getElementById("bar-chart2")
        );
      c.draw(d, b);
    }
  }

})(jQuery);
