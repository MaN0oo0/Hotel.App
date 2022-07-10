$(function(e){
  'use strict'

	/*----CryptoChart----*/
	
	var ctx = document.getElementById('total-project').getContext('2d');
	var gradientStroke1 = ctx.createLinearGradient(0, 10, 0, 90);
	gradientStroke1.addColorStop(0, '#533bdc');
	gradientStroke1.addColorStop(1, '#8e7bf7');
	
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			type: 'line',
			datasets: [{
				label: "total-project",
				data: [45,78,98,34,67,28,89,45,62,53,46,78,23,98],
				backgroundColor: gradientStroke1,
				borderColor: '#472ed4 ',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#533bdc',
			}]
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
				titleFontColor: '#7886a0',
				bodyFontColor: '#7886a0',
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
	} );
	/*----End CrptoChart----*/

	/*----new-sales----*/
	
	var ctx = document.getElementById('new-sales').getContext('2d');
	var gradientStroke1 = ctx.createLinearGradient(0, 10, 0, 50);
	gradientStroke1.addColorStop(0, '#f73f6c ');
	gradientStroke1.addColorStop(1, '#f17090 ');
	
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			type: 'line',
			datasets: [{
				label: "new-sales",
				data: [56,78,36,78,29,78,37,56,45,78,67,78,36,],
				backgroundColor: gradientStroke1,
				borderColor: '#fb1c52',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#f5446f',
			}]
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
				titleFontColor: '#7886a0',
				bodyFontColor: '#7886a0',
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
	} );
	/*----End new-sales----*/

	/*----total-employees----*/
	
	var ctx = document.getElementById('total-employees').getContext('2d');
	var gradientStroke1 = ctx.createLinearGradient(0, 10, 0, 50);
	gradientStroke1.addColorStop(0, '#04befe');
	gradientStroke1.addColorStop(1, '#59d0f9');
	
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			type: 'line',
			datasets: [{
				label: "total-employees",
				data: [45,78,67,78,36,78, 61, 35, 45,58, 52,44,62,86, 56],
				backgroundColor: gradientStroke1,
				borderColor: '#0fa8dc',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#04befe',
			}]
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
				titleFontColor: '#7886a0',
				bodyFontColor: '#7886a0',
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
	} );
	/*----End total-employees----*/

  /*----customer-visits----*/
	var ctx = document.getElementById('customer-visits').getContext('2d');
	var gradientStroke1 = ctx.createLinearGradient(0, 10, 0, 50);
	gradientStroke1.addColorStop(0, '#27af06');
	gradientStroke1.addColorStop(1, '#5bce4e');
	
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			type: 'line',
			datasets: [{
				label: "customer-visits",
				data: [54, 35, 44, 64, 43, 55, 39,60, 61, 54, 62, 63, 54, 55, 64, 34, 46,],
				backgroundColor: gradientStroke1,
				borderColor: '#30ab15',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#27af06',
			}]
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
				titleFontColor: '#7886a0',
				bodyFontColor: '#7886a0',
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
	} );
	/*----End customer-visits----*/

	
	/* echart (#echartArea3) open */
	var areaData3 = [
    {
      name: 'Profit',
      type: 'bar',
      smooth: true,
      data: [0,120, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4],
	  symbolSize:20,
	  barWidth: 20,
	    itemStyle: {
			normal: { barBorderRadius: [50 ,50, 0 ,0],
					color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2575fc'},
                            {offset: 1, color: '#4a32d4'}
                        ]
                    )
			}
		},
    },
	{
      name: 'Profit',
      type: 'line',
      smooth: true,
      data: [null, 120, 80, 100, 130, 140,130,150,120],
	  symbolSize:5,
	    itemStyle: {
			normal: { barBorderRadius: [50 ,50, 0 ,0],
					color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#fd6f82'},
                            {offset: 1, color: '#fb1c52'}
                        ]
                    )
			}
		},
    },
    
  ];

  var optionArea3 = {
    grid: {
      top: '6',
      right: '25',
      bottom: '17',
      left: '25',
    },
    xAxis: {
      data: ['0','2012', '2013', '2014', '2015', '2016','2017','2018','2019' ],
      boundaryGap: false,
      axisLine: {
        lineStyle: { color: 'rgba(142, 156, 173, 0.2)' }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad ',
		display:'false'
      }
    },
	tooltip: {
		show: true,
		showContent: true,
		alwaysShowContent: true,
		triggerOn: 'mousemove',
		trigger: 'axis',
		axisPointer:
			{
				label: {
					show: false,
				}
			}

	},
    yAxis: {
      splitLine: {
        lineStyle: { color: 'rgba(142, 156, 173, 0.2)' },
		display:false
      },
      axisLine: {
        lineStyle: { color: 'rgba(142, 156, 173, 0.2)' },
		display:false
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad '
      }
    },
    series: areaData3,
    color:[ '#32cafe']
  };
	
  var chartArea3 = document.getElementById('echartArea3');
  var areaChart3 = echarts.init(chartArea3);
  areaChart3.setOption(optionArea3);
  /* echart (#echartArea3) closed */
  
	
	/* Chartjs (#employee) */
	var myCanvas = document.getElementById("employee");
	myCanvas.height="300";

	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 500);
	gradientStroke1.addColorStop(0, '#04b3ef');
	
	var gradientStroke2 = myCanvasContext.createLinearGradient(0, 0, 0, 390);
	gradientStroke2.addColorStop(0, '#c6e2fc');

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
			responsive: false,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: '#000',
				bodyFontColor: '#fff',
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
						fontColor: "#fff ",

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
						fontColor: 'transparent'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "transparent",
					 },
					display: true,
					gridLines: {
						display: true,
						color: 'transparent',
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
	/* Chartjs (#employee) closed */
	
	/* sparkline_bar31 */
	$(".sparkline_bar31").sparkline([2, 4, 3, 4, 5, 4,5,3,4,5,2,4,5,4], {
		type: 'bar',
		height: 35,
		width:250,
		barWidth: 4,
		barSpacing: 7,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#27af06'
	});
	/* sparkline_bar31 end */
});