$(function(e){
  'use strict'

	/* chartjs (#revenue-1) open*/
	var ctx = document.getElementById('revenue-1').getContext('2d');
	var gradientStroke1 = ctx.createLinearGradient(0, 10, 0, 180);
	gradientStroke1.addColorStop(0, 'rgb(37, 117, 252,0.8)');
	gradientStroke1.addColorStop(1, 'rgb(74, 50, 212,0.8)');
	
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct'],
			type: 'line',
			datasets: [{
				label: "Resolved Complaints",
				data: [1, 7, 3, 9, 4, 5, 2, 4,1,0],
				backgroundColor: gradientStroke1,
				borderColor: '#4a32d4',
				borderWidth:1.9,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#533bdc',
			}]
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
                    borderWidth: 3
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    });
	/* chartjs (#revenue-1) closed*/

	/* chartjs (#delivery-time) */
	var ctx = document.getElementById("delivery-time");
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug'],
            type: 'line',
            datasets: [ {
                data: [0, 50, 0, 100, 50, 130, 100, 140],
                label: '',
                backgroundColor: 'transparent',
                borderColor: '#3abc1d',
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
                    borderWidth: 3
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    });
	/* chartjs (#delivery-time) closed */
	
	
	/* Chartjs (#cost) */
	var myCanvas = document.getElementById("cost");
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
						fontColor: "transparent ",

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
	/* Chartjs (#cost) closed */
	
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
	
	/*--details-chart open--*/
	var options = {
		chart: {
			height: 320,
			type: 'area',
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'straight',
			width:2
		},
		series: [{
			name: 'Orders',
			type: 'line',
			data: [ 25,29,27,26,27, 24,26,28, 27,29,28, 29,27, 25, 26,24, 20,]
		}, 
		{
			name: 'profit',
			type: 'line',
			data: [ 35,39,37,36,37, 34,36,38, 37,39,38, 39,37, 35, 36,34, 30,]
		}, 
		{
			name: 'Sales',
			type: 'line',
			data: [37, 35, 36,34,32,39, 38,40, 43, 46,45, 49,50, 52,53,52, 55]
		}],
		 fill: {
        type:'solid',
		 opacity: [1, 1,1],
      },
		grid: {
				show: true,
				borderColor: 'rgba(142, 156, 173,0.2)',
			},
		colors: ['#4a32d4', '#04befe','#fb1c52'],
		xaxis: {
			type: 'datetime',
			categories: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11','Dec 12','Dec 13','Dec 14','Dec 15 ','Dec 16','Dec 17'],
			color: '#fff',
			 style: {
                colors: ['#000'],
			 },
			
		},
		tooltip: {
			x: {
				format: 'dd/MM/yy HH:mm'
			},
		}
	}
	var chart = new ApexCharts(document.querySelector("#details-chart"), options);
	chart.render();
	
	/*--details-chart closed--*/
	
	
	/* Chartjs (#delivery) open */
	
	var ctx = document.getElementById('delivery').getContext('2d');
	var gradientStroke1 = ctx.createLinearGradient(0, 120, 0, 350);
	gradientStroke1.addColorStop(0, 'rgb(74, 50, 212,0.8)');
	gradientStroke1.addColorStop(1, 'rgb(37, 117, 252,0.8) ');
	
	var gradientStroke2 = ctx.createLinearGradient(0, 70, 0, 180);
	gradientStroke2.addColorStop(0, 'rgb(39, 175, 6,0.8)');
	gradientStroke2.addColorStop(1, 'rgb(129, 236, 117,0.8)');
	
	
	var myChart = new Chart( ctx, {
        type: 'radar',
        data: {
            labels: [  "Germany" , "France", "Switzerland", "Austria", "Russia", "Canada", "India" ],
            datasets: [
                {
                    label: "My First dataset",
                    data: [ 65, 59, 66, 45, 56, 55, 40 ],
                    borderColor: "rgb(74, 50, 212,0.9)",
                    borderWidth: "1",
                    backgroundColor: gradientStroke1
                            },
                {
                    label: "My Second dataset",
                    data: [ 28, 12, 40, 19, 63, 27, 87 ],
                    borderColor: "rgba(58, 188, 29, 0.9)",
                    borderWidth: "1",
                    backgroundColor: gradientStroke2
                            }
                        ]
        },
        options: {
			responsive: true,
			maintainAspectRatio: false,
            legend: {
                display: false,
            },
            scale: {
				 gridLines: {
                            color: 'rgb(142, 156, 173,0.2)',
                            display: true
                        },
                ticks: {
                    beginAtZero: true,
					color:'#8e9cad',
					fontColor: '#b0bac9',
                }
            }
        }
    } );
	
	/* Chartjs (#closed) open */
     
	
	
	/* Chartjs (#bar-chart) */
	var myCanvas = document.getElementById("bar-chart");
	myCanvas.height="202";
	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 120, 0, 180);
	gradientStroke1.addColorStop(0, '#2575fc');
	gradientStroke1.addColorStop(1, '#4a32d4');

	var myChart = new Chart(myCanvas, {
		type: 'bar',
		data: {
			labels: ["2015", "2016", "2017", "2018", "2019"],
			datasets: [{
				label: 'Carrying Costs Of Inventory',
				data: [16, 14, 12, 14, 16, 15, 12, 14,18,10],
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
						fontColor: "#9493a9" ,

					 },
					display: true,
					gridLines: {
						color: 'rgb(227, 226, 236,0.2)',
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'Month',
						fontColor: '#000'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#9493a9" ,
					 },
					display: true,
					gridLines: {
						color: 'rgb(227, 226, 236,0.2)',
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
	/* Chartjs (#bar-chart) closed */
	
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
        height: 30,
		width:100,
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
        height: 30,
		width:100,
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
        height: 30,
		width:100,
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
        height: 30,
		width:100,
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
	
	//Spark5
	var spark5 = {
      chart: {
        type: 'area',
        height: 30,
		width:100,
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
      colors: ['#3abc1d'],
      
    }
	var spark5 = new ApexCharts(document.querySelector("#spark5"), spark5);
    spark5.render();
	
	
	//Spark6
	var spark6 = {
      chart: {
        type: 'area',
        height: 30,
		width:100,
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
      colors: ['#ec82ef'],
      
    }
	var spark6 = new ApexCharts(document.querySelector("#spark6"), spark6);
    spark6.render();
	
});