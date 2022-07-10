$(function(e){
  'use strict'
  
	/* chartjs (#avg-revenue) */
	var myCanvas = document.getElementById("avg-revenue");

	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 500);
	gradientStroke1.addColorStop(0, '#04b3ef');
	
	var gradientStroke2 = myCanvasContext.createLinearGradient(0, 0, 0, 390);
	gradientStroke2.addColorStop(0, '#c6e2fc');

    var myChart = new Chart( myCanvas, {
		type: 'bar',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",],
			datasets: [{
				label: 'Avg Revenue',
				data: [15, 18, 12, 14, 10, 15, 7, 14],
				backgroundColor: gradientStroke1,
				hoverBackgroundColor: gradientStroke1,
				hoverBorderWidth: 2,
				hoverBorderColor: 'gradientStroke1'
			}, {

			    label: 'Total Revenue',
				data: [10, 14, 10, 15, 9, 14, 15, 20],
				backgroundColor: gradientStroke2,
				hoverBackgroundColor: gradientStroke2,
				hoverBorderWidth: 2,
				hoverBorderColor: 'gradientStroke2'
				
			}
		  ]
		},
		options: {
			responsive: false,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: '#fff',
				bodyFontColor: '#fff',
				backgroundColor: 'rgba(0,0,0,0.7)',
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
						fontColor: "#8e9cad",

					 },
					display: true,
					gridLines: {
						display: true,
						color: 'rgb(142, 156, 173,0.2)',
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
						fontColor: "#8e9cad",
					 },
					display: true,
					gridLines: {
						display: true,
						color: 'rgb(142, 156, 173,0.2)',
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
	/* chartjs (#avg-revenue) closed */
	
	
	/*----- appex (#doughnut) closed -----*/
	 var options = {
            chart: {
                type: 'donut',
            },
			legend: {
				show: false,
			},
            dataLabels: {
                enabled: false
            },
            series: [68, 55, 45],
			colors:['#4a32d4','#fb1c52','#2dcbf7'],
			labels: [
					"MRR Revenue",
					"ARR Revenue",
					"Non Recurring Revenue",
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
		document.querySelector("#doughnut"),
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
		
	/*----- appex (#doughnut) closed -----*/
	
	
	
   /* chartjs (#retention) */
	var myCanvas = document.getElementById("retention");
	myCanvas.height="92";
	
	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke = myCanvasContext.createLinearGradient(0, 80, 0, 280);
	gradientStroke.addColorStop(0, 'rgba(74, 50, 212, 0.8)');
	gradientStroke.addColorStop(1, 'rgba(74, 50, 212, 0.09)');
    var myChart = new Chart( myCanvas, {
		type: 'line',
		data: {
            labels: ["1981","1982","1983", "1984","1985", "1986","1987","1988","1989","1990", "1991", "1992","1993","1994","1995","1996","1997","1998","1999", "2000",
                     "2001","2002", "2003", "2004","2005","2006","2007", "2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019", ],
            type: 'line',
            datasets: [ {
				label: 'Return-On-Assets',
				data: [54, 35, 24, 64, 43, 55, 39,60, 61, 54, 62, 63, 54, 55, 64, 34, 46, 34,  64, 50,  34, 23, 19,  43, 45, 60, 54, 41, 45, 26, 45, 21, 45, 64, 35, 65, 34, 34, 43, 46, 24, 23],
				backgroundColor: gradientStroke,
				borderColor: '#4a32d4',
				pointBackgroundColor:'#fff',
				pointHoverBackgroundColor:gradientStroke,
				pointBorderColor :'#007adf',
				pointHoverBorderColor :gradientStroke,
				pointBorderWidth :0,
				pointRadius :0,
				pointHoverRadius :0,
				lineTension: 0.2,
				 borderWidth: 2,
                    fill: 'origin'
            }, ]
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
			 stepsize: 200,
                min: 0,
                max: 400,
			legend: {
				display: false,
				labels: {
					usePointStyle: false,
				},
			},
			scales: {
				xAxes: [{
					
					display: true,
					gridLines: {
						display: false,
						drawBorder: false
					},
					ticks: {
                            fontColor: '#8e9cad',
                            autoSkip: true,
                            maxTicksLimit: 9,
                            maxRotation: 0,
                            labelOffset: 10
                        },
					scaleLabel: {
						display: false,
						labelString: 'Month',
						fontColor: 'transparent'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#8e9cad",
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
	/* chartjs (#retention) closed */
	
	
	
	/* Chartjs (#areaChart2) */
	var ctx = document.getElementById('total-revenue').getContext('2d');
	var gradientStroke = myCanvasContext.createLinearGradient(0, 40, 0, 280);
	gradientStroke.addColorStop(0, 'rgba(74, 50, 212, 0.6)');
	gradientStroke.addColorStop(1, 'rgba(74, 50, 212, 0.02)');
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'line',
            datasets: [ {
				label: 'total-revenue',
				data: [24, 18, 28, 21, 32, 28,30],
				backgroundColor: gradientStroke,
				borderColor: '#4a32d4',
				pointBackgroundColor:'#fff',
				pointHoverBackgroundColor:gradientStroke,
				pointBorderColor :'rgba(74, 50, 212, 0.8)',
				pointHoverBorderColor :gradientStroke,
				pointBorderWidth :2,
				pointRadius :2,
				pointHoverRadius :0,
				borderWidth: 3,
                fill: 'origin'
            }, ]
        },
        options: {

            maintainAspectRatio: false,
            legend: {
                display: false
            },
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#6b6f80',
                bodyFontColor: '#6b6f80',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
                    }
                } ]
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    });
	
});