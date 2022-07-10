$(function(e){
  'use strict'
	
	  /* chartjs (#content-overview) */
	var ctx = $('#content-overview');
	ctx.height(158);
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["P1-6", "p1-8", "p2-6", "p2-8", "p3-6", "p3-8", "p4-6", "p4-8", "p5-6", "p5-8", "p6-6", "p6-8"],
			type: 'line',
			datasets: [{
				label: "Time on site",
				data: [240, 200, 180, 140, 120, 170, 240, 220, 250, 300, 200, 140],
				backgroundColor: 'transparent',
				borderColor: '#4a32d4 ',
				borderWidth: 3,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#4a32d4',
			}, {
				label: "Bounce Rate",
				data: [140, 220, 250, 200, 240, 140, 160, 180, 260, 280, 160, 120],
				backgroundColor: 'transparent',
				borderColor: '#00b3ff',
				borderWidth: 3,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#00b3ff',
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: 'rgba(225,225,225,0.8)',
				bodyFontColor: 'rgba(225,225,225,0.8)',
				backgroundColor: 'rgba(0,0,0,0.8)',
				bodyFontFamily: 'Montserrat',
				cornerRadius: 3,
				intersect: false,
			},
			legend: {
				display: false,
				labels: {
					usePointStyle: true,
				},
			},
			scales: {
				xAxes: [{
					ticks: {
						fontColor: "#8e9cad ",
					 },
					display: true,
					gridLines: {
						color: 'rgb(142, 156, 173,0.2)'
					},
					scaleLabel: {
						display: false,
						labelString: ''
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#8e9cad ",
					 },
					display: true,
					gridLines: {
						display: false,
						drawBorder: true
					},
					scaleLabel: {
						display: false,
						labelString: 'Response time In secs'
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* chartjs (#content-overview) closed */

	/* Chartjs (#total-visits) */
	var ctx = document.getElementById("total-visits");
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct'],
            type: 'line',
            datasets: [ {
                data: [1, 7, 3, 9, 4, 5, 2, 4,1,0],
                label: 'total-visits',
                backgroundColor: 'rgba(0, 179, 255,0.6)',
                borderColor: 'rgba(0, 179, 255,0.9)',
				borderWidth:2.5,
            }, ]
        },
        options: {

            maintainAspectRatio: true,
            legend: {
                display: false
            },
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                cornerRadius: 0,
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
                    borderWidth: 4
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    });
	/* Chartjs (#total-visits) closed */
	
	
	/* Chartjs (#pageviews) */
	var myCanvas = document.getElementById("pageviews");
	myCanvas.height="233";
	
	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 90, 0, 180);
	gradientStroke1.addColorStop(0, '#2575fc');
	gradientStroke1.addColorStop(1, '#4a32d4');

	var myChart = new Chart(myCanvas, {
		type: 'bar',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
			datasets: [{
				label: 'pageviews',
				data: [17, 14, 12, 14, 10, 15, 7, 14,18],
				backgroundColor: gradientStroke1,
				hoverBackgroundColor: gradientStroke1,
				hoverBorderWidth: 2,
				hoverBorderColor: 'gradientStroke1'
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
				},
			},
			scales: {
				xAxes: [{
					 barPercentage: 0.3,
					ticks: {
						fontColor: "#8e9cad ",
						
					 },
					display: true,
					gridLines: {
						display: false,
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
						fontColor: "transparent",
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
	/* Chartjs (#pageviews) closed */
	
	
	/*-----WidgetChart2 CHARTJS-----*/
	var ctx = document.getElementById( "widgetChart2" );
    var myChart = new Chart( ctx, {
        type: 'line',
        data : {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            type: 'line',
             datasets: [
			{
				label: "Active Users",
				backgroundColor: "transparent",
				data: [0, 30, 10, 120, 50, 63, 102],
				borderColor: "#4a32d4",
				borderWidth: 3,
				pointRadius: 0,
				pointBorderColor: 'transparent',
			}, {
				label: "Contribution",
				backgroundColor: "transparent",
				data: [0, 50, 40, 80, 40, 79, 120],
				borderColor: "#17b9ff",
				borderWidth: 3,
				pointRadius: 0,
				pointBorderColor: 'transparent',
			}
		  ]
        },
        options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: 'rgba(225,225,225,0.8)',
				bodyFontColor: 'rgba(225,225,225,0.8)',
				backgroundColor: 'rgba(0,0,0,0.8)',
				bodyFontFamily: 'Montserrat',
				cornerRadius: 3,
				intersect: false,
			},
			legend: {
				display: false,
				labels: {
					usePointStyle: false,
				},
			},
			scales: {
				xAxes: [{
					ticks: {
						fontColor: "#8e9cad ",
					 },
					display: true,
					gridLines: {
						color: 'rgb(142, 156, 173,0.2)'
					},
					scaleLabel: {
						display: false,
						labelString: ''
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#8e9cad ",
					 },
					display: true,
					gridLines: {
						display: false,
						drawBorder: true
					},
					scaleLabel: {
						display: false,
						labelString: 'Response time In secs'
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
    } );
	/*-----WidgetChart2 CHARTJS closed -----*/
});