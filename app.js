import c3 from "c3";

const evtSource = new EventSource("http://localhost:5000");

const data = [30, 20, 10, 40, 15, 25];

const chart = c3.generate({
  bindto: "#chart",
  data: {
    type: "area",
    columns: [["Random", ...data]]
  },
  bar: {},
  axis: {
    y: {
      max: 200,
      min: 0
    }
  }
});

evtSource.onmessage = function(e) {
  if (data.length === 10) data.shift();

  data.push(JSON.parse(e.data).time);

  chart.load({
    columns: [["Random", ...data]]
  });
};

evtSource.onerror = function(e) {
  console.error("lance le serveur");
};
