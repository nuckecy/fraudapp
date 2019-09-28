
$(function(){
  'use strict'

  var ctxLabel = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var ctxData1 = [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30];
  var ctxData2 = [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20];
  var ctxColor1 = '#001737';
  var ctxColor2 = '#1ce1ac';


  // With gradient
  var ctx7 = document.getElementById('chartBar5').getContext('2d');

  var gradient1 = ctx7.createLinearGradient(0, 350, 0, 0);
  gradient1.addColorStop(0, '#001737');
  gradient1.addColorStop(1, '#0168fa');

  var gradient2 = ctx7.createLinearGradient(0, 400, 0, 0);
  gradient2.addColorStop(0, '#0168fa');
  gradient2.addColorStop(1, '#1ce1ac');


  new Chart(ctx7, {
    type: 'bar',
    data: {
      labels: ctxLabel,
      datasets: [{
        data: ctxData1,
        backgroundColor: gradient1
      }, {
        data: ctxData2,
        backgroundColor: gradient2
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false,
        labels: {
          display: false
        }
      },
      scales: {
        yAxes: [{
          gridLines: {
            color: '#e5e9f2'
          },
          ticks: {
            beginAtZero:true,
            fontSize: 10,
            fontColor: '#182b49',
            max: 80
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          },
          barPercentage: 0.6,
          ticks: {
            beginAtZero:true,
            fontSize: 11,
            fontColor: '#182b49'
          }
        }]
      }
    }
  });

})
