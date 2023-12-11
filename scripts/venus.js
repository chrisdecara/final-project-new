Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Alien Ships Destroyed by Venus Each Year',
        align: 'center'
    },
    subtitle: {
        text: 'Source: ' +
            'Crash Survivors (disembodied or otherwise)',
        align: 'center'
    },
    xAxis: {
        categories: ['Martians', 'Jupitish', 'Daleks', 'Earthlings'],
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Crashes (thousands)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' thousands'
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 2021',
        data: [50, 67, 349, 0]
    }, {
        name: 'Year 2022',
        data: [53, 63, 407, 0]
    }, {
        name: 'Year 2023',
        data: [49, 74, 578, 0]
    }]
});
//The above JS was edited, but originally came from https://jsfiddle.net/api/post/library/pure/. That link itself is gained via Highcharts, which created the JS.

document.getElementById("btnhome").onclick = function () {
    location.href = "mainpage.html";
};