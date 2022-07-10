$(function(e){
  'use strict'

	/* chartjs (#google-analytics) */
	var myCanvas = document.getElementById("google-analytics");
	
	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 20, 0, 860);
	gradientStroke1.addColorStop(0, '#4a32d4');
	gradientStroke1.addColorStop(1, '#cbc5f1');
	
	var gradientStroke2 = myCanvasContext.createLinearGradient(0, 20, 0, 890);
	gradientStroke2.addColorStop(0, '#04befe');
	gradientStroke2.addColorStop(1, '#d5e8ef');
    var myChart = new Chart( myCanvas, {
		type: 'line',
		data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            type: 'line',
            datasets: [ {
				label: "Users",
				data: [2,7,3,5,4,5,2,8,4,6,5,2,8,4,7,2,4,6,4,8,4],
				backgroundColor: gradientStroke1,
				borderColor: '#4240dc',
				pointBackgroundColor:'#fff',
				pointHoverBackgroundColor:gradientStroke1,
				pointBorderColor :'#4240dc',
				pointHoverBorderColor :gradientStroke1,
				pointBorderWidth :0,
				pointRadius :0,
				pointHoverRadius :0,
				lineTension: 0.2,
				borderWidth: 1,
                fill: 'origin'
            }, {
				label: "Sessions",
				data: [5,9,5,9,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2,7,10],
				backgroundColor: gradientStroke2,
				borderColor: '#2e75f1',
				pointBackgroundColor:'#fff',
				pointHoverBackgroundColor:gradientStroke2,
				pointBorderColor :'#4481eb',
				pointHoverBorderColor :gradientStroke2,
				pointBorderWidth :0,
				pointRadius :0,
				pointHoverRadius :0,
				lineTension: 0.2,
				borderWidth:1,
                fill: 'origin',
				
			}
			
			]
        },
		options: {
			responsive: true,
			maintainAspectRatio: true,
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
			scales: {
				xAxes: [{
					ticks: {
						fontColor: "#b0bac9",
					 },
					display: true,
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'Month',
						fontColor: 'transparent'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#b0bac9",
					 },
					display: true,
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'sales',
						fontColor: 'transparent'
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* chartjs (#google-analytics) closed */
	
	/*-----canvasDoughnut-----*/
	if ($('.canvasDoughnut').length){

		var chart_doughnut_settings = {
			type: 'doughnut',
			tooltipFillColor: "rgba(51, 51, 51, 0.55)",
			data: {
				labels: [
					"Chrome",
					"IE",
					"Firefox"
				],
				datasets: [{
					data: [68, 55, 45],
					backgroundColor: [
						"rgb(74, 50, 2120.6)",
						"rgb(251, 28, 82,0.8)",
						"rgb(4, 190, 254)"

					],
					hoverBackgroundColor: [
						"#4a32d4",
						"#fb1c52 ",
						"#2393ff"

					]
				}]
			},
			options: {
				legend: false,
				responsive: false
			}
		}

		$('.canvasDoughnut').each(function(){

			var chart_element = $(this);
			var chart_doughnut = new Chart( chart_element, chart_doughnut_settings);

		});
	}
	/*-----canvasDoughnut-----*/
	
	/* Chartjs (#page-load) */
	var myCanvas = document.getElementById("page-load");
	myCanvas.height="300";

	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 300);
	gradientStroke1.addColorStop(0, 'rgb(74, 50, 212,0.9)');
	
	var gradientStroke2 = myCanvasContext.createLinearGradient(0, 0, 0, 390);
	gradientStroke2.addColorStop(0, '#dce3f3');

    var myChart = new Chart( myCanvas, {
		type: 'bar',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
			datasets: [{
				label: 'Page Load time',
				data: [15, 18, 12, 14, 10, 15, 7, 14],
				backgroundColor: gradientStroke1,
				hoverBackgroundColor: gradientStroke1,
				hoverBorderWidth: 2,
				hoverBorderColor: 'gradientStroke1'
			}, {

			    label: 'Avg time on Page',
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
				titleFontColor: '#000',
				bodyFontColor: '#000',
				backgroundColor: '#fff',
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
					 barPercentage: 0.9,
					 barSpacing:3,
					ticks: {
						fontColor: "#8e9cad ",

					 },
					display: true,
					gridLines: {
						display: true,
						color: 'rgba(255,255,255,0.03)',
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'Month',
						fontColor: 'rgba(255,255,255,0.5)'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "rgba(255,255,255,0.5)",
					 },
					display: true,
					gridLines: {
						display: true,
						color: 'rgba(255,255,255,0.03)',
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'sales',
						fontColor: 'rgba(255,255,255,0.5)'
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* Chartjs (#page-load) closed */


	/* sparkline_bar21 */
	$(".sparkline_bar21").sparkline([2, 4, 3, 4, 5, 4,5,3,4,5,2,4,5,4], {
		type: 'bar',
		height: 40,
		width:250,
		barWidth: 3,
		barSpacing: 7,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#2393ff'
	});
	/* sparkline_bar21 end */

	/* sparkline_bar22 */
	$(".sparkline_bar22").sparkline([2, 4, 3, 4, 5, 4,5,3,4,5,2,4,5,4], {
		type: 'bar',
		height: 40,
		width:250,
		barWidth: 3,
		barSpacing: 7,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#f96158'
	});
	/* sparkline_bar22 end */

	/*sparkline*/
    var randomizeArray = function (arg) {
		var array = arg.slice();
		var currentIndex = array.length,
		temporaryValue, randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
    }
    var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];
	
	
	//Spark1
    var spark1 = {
      chart: {
        type: 'area',
        height: 50,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
       curve: 'smooth',
		width:2
      },
      fill: {
        opacity: 0.3,
        gradient: {
          enabled: false
        }
      },
      series: [{
		name: 'Total Sales',
        data: randomizeArray(sparklineData)
      }],
      yaxis: {
        min: 0
      },
      colors: ['#4a32d4'],
      
    }
	var spark1 = new ApexCharts(document.querySelector("#spark1"), spark1);
    spark1.render();
	
	
	
	//Spark2
	var spark2 = {
      chart: {
        type: 'area',
        height: 50,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
       curve: 'smooth',
		width:2
      },
      fill: {
        opacity: 0.3,
        gradient: {
          enabled: false
        }
      },
      series: [{
		name: 'Total Profits',
        data: randomizeArray(sparklineData)
      }],
      yaxis: {
        min: 0
      },
      colors: ['#2393ff'],
      
    }
	var spark2 = new ApexCharts(document.querySelector("#spark2"), spark2);
    spark2.render();
	
	
	
	//Spark3
	var spark3 = {
      chart: {
        type: 'area',
        height: 50,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'smooth',
		width:2
      },
      fill: {
        opacity: 0.3,
        gradient: {
          enabled: false
        }
      },
      series: [{
		name: 'Total Orders',
        data: randomizeArray(sparklineData)
      }],
      yaxis: {
        min: 0
      },
      colors: ['#fb1c52'],
      
    }
	var spark3 = new ApexCharts(document.querySelector("#spark3"), spark3);
    spark3.render();
	
	
	
	//Spark4
	var spark4 = {
      chart: {
        type: 'area',
        height: 50,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
       curve: 'smooth',
		width:2
      },
      fill: {
        opacity: 0.3,
        gradient: {
          enabled: false
        }
      },
      series: [{
		name: 'Total Sales Revenue',
        data: randomizeArray(sparklineData)
      }],
      yaxis: {
        min: 0
      },
      colors: ['#eab407'],
      
    }
	var spark4 = new ApexCharts(document.querySelector("#spark4"), spark4);
    spark4.render();

});


