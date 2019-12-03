const evtSource = new EventSource('http://localhost:5000');

const seriesData = []

const options = {
    chart: {
        type: 'area'
    },
    series: [{
        name: 'area',
        data: []
    }],
    xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
}

const chart = new ApexCharts(document.getElementById('chart'), options);

chart.render();

evtSource.onopen = function () {
    console.log("OPENED")
}

evtSource.onmessage = function(e) {
    console.log("new message")
    seriesData.push(JSON.parse(e.data).time)
    setTimeout(() => {
        chart.updateSeries([{
            data: seriesData
        }])
    }, 2000)
}

evtSource.onerror = function(e) {
    console.log('merde', e)
}