$(function(e){
  'use strict'

  
/* sparkline_bar1 */
	$(".sparkline_bar1").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:250,
		barWidth: 2,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: 'rgb(74, 50, 212,0.9)'
	});
	/* sparkline_bar1 end */
	
	
	/* sparkline_bar2 */
	$(".sparkline_bar2").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:250,
		barWidth: 2,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: 'rgb(35, 147, 255,0.9)'
	});
	/* sparkline_bar2 end */
	
	
	/* sparkline_bar3 */
	$(".sparkline_bar3").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:250,
		barWidth: 2,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: 'rgb(236, 180, 3,0.9)'
	});
	/* sparkline_bar3 end */
	
	
	/* sparkline_bar4 */
	$(".sparkline_bar4").sparkline([2, 4, 3, 4, 5, 4], {
		type: 'bar',
		height: 50,
		width:250,
		barWidth: 2,
		barSpacing: 9,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: 'rgb(58, 188, 29,0.9)'
	});
	/* sparkline_bar4 end */

//flot options
var data = [],
			totalPoints = 300;

		function getRandomData() {

			if (data.length > 0)
				data = data.slice(1);

			// Do a random walk

			while (data.length < totalPoints) {

				var prev = data.length > 0 ? data[data.length - 1] : 50,
					y = prev + Math.random() * 10 - 5;

				if (y < 0) {
					y = 0;
				} else if (y > 100) {
					y = 100;
				}

				data.push(y);
			}

			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([i, data[i]])
			}

			return res;
		}

		var updateInterval = 200;
		$("#updateInterval").val(updateInterval).change(function () {
			var v = $(this).val();
			if (v && !isNaN(+v)) {
				updateInterval = +v;
				if (updateInterval < 1) {
					updateInterval = 1;
				} else if (updateInterval > 2000) {
					updateInterval = 2000;
				}
				$(this).val("" + updateInterval);
			}
		});

		var plot = $.plot("#flotContainer2", [ getRandomData() ], {
			series: {
				shadowSize: 0,	
				lines: {
				  show: true,
				  lineWidth: 2,
				  fill: true,
				  fillColor: { colors: [ { opacity: 0.2 }, { opacity: 0.9} ] }
				}
			},
			colors: ["#4a32d4"],
			grid: {
				borderColor: "rgba(67, 87, 133, .1)",
			},
			
			yaxis: {
				min: 0,
				max: 100,
				tickLength: 0
			},
			xaxis: {
				tickLength: 0,
				show: false
			}
		});

		function update() {
			plot.setData([getRandomData()]);
			plot.draw();
			setTimeout(update, updateInterval);
		}

		update();
	
	
	

	/*-----canvasDoughnut-----*/
	
	  var options = {
            chart: {
                width: 380,
				height:230,
                type: 'donut',
            },
            dataLabels: {
                enabled: false
            },
            series: [68, 55, 45, 34, 27, 15],
			colors:['#4a32d4','#f7592d','#f7be2d','#3abc1d','#f72d66', '#2dcbf7'],
			labels: [
					"Chicago",
					"New York",
					"Los Angele",
					"Austria",
					"France",
					"Ireland"
				],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        show: false,
                    }
                }
            }],
           
        }

        var chart = new ApexCharts(
            document.querySelector("#chart"),
            options
        );

        chart.render()

        function appendData() {
            var arr = chart.w.globals.series.slice()
            arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
            return arr;
        }

        function removeData() {
            var arr = chart.w.globals.series.slice()
            arr.pop()
            return arr;
        }

        function randomize() {
            return chart.w.globals.series.map(() => {
                return Math.floor(Math.random() * (100 - 1 + 1)) + 1
            })
        }

        function reset() {
            return options.series
        }

       
	
	/*-----canvasDoughnut-----*/
	
	/* chartjs (#purchase) */
	var myCanvas = document.getElementById("purchase");

	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 180, 0, 210);
	gradientStroke1.addColorStop(0, '#4a32d4');
	gradientStroke1.addColorStop(1, '#cbc5f1');
	
	var gradientStroke2 = myCanvasContext.createLinearGradient(0, 160, 0, 170);
	gradientStroke2.addColorStop(0, '#04befe');
	gradientStroke2.addColorStop(1, '#d5e8ef');
	
    var myChart = new Chart( myCanvas, {
		type: 'line',
		data: {
           labels: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000", "1100", "1200", "1300", "1400", "1500", "1600", "1700", "1800", "1900", "2000", "2100", "2200", "2300", "2400", "2500", "2600", "2700", "2800", "2900", "3000", "3100", "3200", "3300"],
            type: 'line',
            datasets: [ {
				label: 'Rating',
                data: [  25,29,27,26,27, 24,26,28, 27,29,28, 29,27, 25, 26,24, 20,18, 21,19,17,14,13,16,15,17,18,19,22,23,21, 25, 24,22,25, 27],
				backgroundColor: gradientStroke1,
				borderColor: '#4a32d4',
				pointBackgroundColor:'#4a32d4',
				pointHoverBackgroundColor:gradientStroke1,
				pointBorderColor :'#4a32d4',
				pointHoverBorderColor :gradientStroke1,
				pointBorderWidth :0,
				pointRadius :0,
				pointHoverRadius :0,
				borderWidth: 2,
				lineTension:0.2
            }, {
				label: "Reviews",
				data: [ 57, 55, 56,54,52,49, 48,50, 50, 46,45, 49,50, 52,53,52, 55,56, 55, 59,59, 59,57,56,57,54, 56,  58, 57,59,58,57, 55, 56,54,52,49],
				backgroundColor: gradientStroke2,
				borderColor: '#2393ff ',
				pointBackgroundColor:'#2393ff',
				pointHoverBackgroundColor:gradientStroke2,
				pointBorderColor :'#2393ff ',
				pointHoverBorderColor :gradientStroke2,
				pointBorderWidth :0,
				pointRadius :0,
				pointHoverRadius :0,
				borderWidth: 2,
				lineTension:0.2
			}
			]
        },
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: '#000',
				bodyFontColor: '#000',
				backgroundColor: '#fff',
				cornerRadius: 3,
				intersect: false,
			},
			legend: {
				display: true,
				labels: {
					usePointStyle: false,
				},
			},
			 stepsize: 200,
                min: 0,
                max: 400,
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: 'rgb(142, 156, 173,0.2)',
                            display: true
                        },
                        ticks: {
                            fontColor: '#b0bac9',
                            autoSkip: true,
                            maxTicksLimit: 7,
                            maxRotation: 0,
                            labelOffset: 30
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            color: 'rgb(142, 156, 173,0.2)',
                            display: true
                        },
                        ticks: {
                            fontColor: '#b0bac9',
                            stepsize: 30,
                            max: 80
                        }
                    }]
                },
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* chartjs (#purchase) closed */

	
	
	/* Chartjs (#customer) */
	var ctx = document.getElementById('customer').getContext('2d');
	var gradientStroke1 = ctx.createLinearGradient(0, 120, 0, 210);
	gradientStroke1.addColorStop(0, '#04befe');
	gradientStroke1.addColorStop(1, '#d5e8ef');
	
	
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			type: 'line',
			datasets: [{
				label: "Resolved Complaints",
				data: [5, 105, 26, 145, 65, 172, 182, 98, 215, 245, 62, 255],
				backgroundColor: gradientStroke1,
				borderColor: '#04befe',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#04befe',
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: true,
			
			legend: {
				display: false,
				labels: {
					usePointStyle: true,
					fontFamily: 'Montserrat',
				},
			},
			scales: {
				xAxes: [{
					display: false,
					gridLines: {
						color: 'rgba(0,0,0,0.061)'
					},
					scaleLabel: {
						display: false,
						labelString: '',
						fontColor: 'rgba(0,0,0,0.61)'
					}
				}],
				yAxes: [{
					display: false,
					gridLines: {
						display: false,
						drawBorder: true
					},
					scaleLabel: {
						display: false,
						labelString: 'Customer retention in %',
						fontColor: 'rgba(0,0,0,0.61)'
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* Chartjs (#customer) closed*/

	
});