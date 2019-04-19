Highcharts.chart('barchart', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Accounts Outstanding'
    },
    xAxis: {
        categories: ['XYZ', '123', 'ABC', '456', 'LOL']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Amount Outstanding'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: '',
        data: [7000, 4000, 2500, 2345, 1547]
    }]
});
