$(function(e){
  'use strict'
	
	/* Chartjs (#profit-overview) */
	var myCanvas = document.getElementById("profit-overview");
	myCanvas.height="300";

	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 300);
	gradientStroke1.addColorStop(0, '#4a32d4');
	
	var gradientStroke2 = myCanvasContext.createLinearGradient(0, 0, 0, 390);
	gradientStroke2.addColorStop(0, 'rgba(0, 179, 255,0.9)');

    var myChart = new Chart( myCanvas, {
		type: 'bar',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
			datasets: [{
				label: 'Total clicks',
				data: [15, 18, 12, 14, 10, 15, 7, 14],
				backgroundColor: gradientStroke1,
				hoverBackgroundColor: gradientStroke1,
				hoverBorderWidth: 2,
				hoverBorderColor: 'gradientStroke1'
			}, {

			    label: 'Total Impressions',
				data: [10, 14, 10, 15, 9, 14, 15, 20],
				backgroundColor: gradientStroke2,
				hoverBackgroundColor: gradientStroke2,
				hoverBorderWidth: 2,
				hoverBorderColor: 'gradientStroke2'
			}
		  ]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: 'rgba(255, 255, 255, 0.5)',
				bodyFontColor: 'rgba(255, 255, 255, 0.5)',
				backgroundColor: 'rgba(0, 0, 0, 0.8)',
				cornerRadius: 3,
				intersect: false,

			},
			legend: {
				display: false,
				labels: {
					usePointStyle: true,
					fontFamily: 'Montserrat',
				},
			},
			scales: {
				xAxes: [{
					barPercentage: 0.28,
					ticks: {
						fontColor: '#8e9cad',
					 },
					display: true,
					gridLines: {
						display: true,
						color: 'transparent',
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'Month',
						fontColor: '#8e9cad '
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#8e9cad ",
					 },
					display: false,
					gridLines: {
						display: true,
						color: 'rgba(0,0,0,0.03)',
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'sales',
						fontColor: '#8e9cad '
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* Chartjs (profit-overview) closed */
	
	
	/*----Morris (#donutchart)----*/
	var donut = new Morris.Donut({
		element: 'donutchart',
		resize: true,
		colors: ['#45aaf2', '#4a32d4','#3abc1d', '#fb1c52'],
		data: [{
			label: "Google+",
			value: 30
		}, {
			label: "Face Book",
			value: 40
		}, {
			label: "Twitter",
			value: 10
		},  {
			label: "You Tube",
			value: 20
		}],
		labelColor:"#8e9cad",
		hideHover: 'auto',
		fontSize:11,
	});
	/*----Morris (#donutchart) closed----*/
 
    $(".bar").peity("bar",{
        width: '100%',
        height: '50',
		
    })
	
});