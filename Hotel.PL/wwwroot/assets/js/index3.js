( function ( $ ) {
	"use strict";
	
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
	
	
	
	
   //barchart
 
	var ctx = $('#bar-chart');
	ctx.height(500);

	var bar_chart = new Chart(ctx, {
	  type: 'bar',
	  data: {
		labels: ["1", "2", "3", "4", "5", "6","7","8" ,"9"],
		datasets: [{
			label: 'test0',
			data: [3, 4, 7, 3, 6, 2,5,3,4],
			backgroundColor: '#4a32d4',
		  }, {
			label: 'test1',
			data: [2, 5, 3, 3, 4, 3,3,7,2],
			backgroundColor: '#8270e9'
		  },
		  {
			label: 'test2',
			data: [2, 5, 3, 3, 4, 3,7,3,6],
			backgroundColor: '#d2cbf9'
		  }
		]
	  },
	  options: {
		legend: {
		  display: false
		},
		scales: {
		  yAxes: [{
			stacked: true,
			gridLines: {
				color: 'rgb(142, 156, 173,0.2)',
				display: true
			},
			ticks: {
			  beginAtZero: true
			}
		  }],
		  xAxes: [{
			barPercentage: 0.2,
			gridLines: {
				color: 'rgb(142, 156, 173,0.2)',
				display: true
			},
			stacked: true,
		  }]
		}
	  }
	});

   /* Chart-js (#site-executive) */
	var myCanvas = document.getElementById("payable");
	myCanvas.height="180";
	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 40, 0, 150);
	gradientStroke1.addColorStop(0, 'rgba(74, 50, 212, 0.8)');
	gradientStroke1.addColorStop(1, 'rgba(74, 50, 212, 0.05) ');
	
	var myChart = new Chart( myCanvas, {
		type: 'line',
		data : {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','aug','sept','oct','nov','dec','jan','feb'],
			type: 'line',
			 datasets: [
			{
				label: "Users",
				data: [2,7,3,9,2,5,2,8,4,6,5,2,8,4,7,2,4,6,4,8,4,],
				backgroundColor: gradientStroke1,
				borderColor: '#4a32d4' ,
				pointBackgroundColor:'#fff',
				pointHoverBackgroundColor:gradientStroke1,
				pointBorderColor :'#4a32d4',
				pointHoverBorderColor :gradientStroke1,
				pointBorderWidth :0,
				pointRadius :0,
				pointHoverRadius :0,
				labelColor:gradientStroke1,
				borderWidth: 2,
				
			}
		  ]
		},
		options: {
			responsive: false,
			maintainAspectRatio: false,
			legend: {
				display: false 	
			},
			tooltips: {
				show: true,
				showContent: true,
				alwaysShowContent: true,
				triggerOn: 'mousemove',
				trigger: 'axis',
				axisPointer:
				{
					label: {
						show: false,
					},
				}
			},
			
			scales: {
				xAxes: [ {
					gridLines: {
						color: 'transparent',
						zeroLineColor: 'transparent'
					},
					ticks: {
						fontSize: 12,
						fontColor: 'transparent',
						 beginAtZero: true,
						padding: 25
					}
				} ],
				yAxes: [ {
					gridLines: {
						color: 'transparent',
						zeroLineColor: 'transparent'
					},
					ticks: {
						fontSize: 12,
						fontColor: 'transparent',
						beginAtZero: false,
						padding: 25
					}
				} ]
			},
			title: {
				display: false,
			},
			elements: {
				line: {
					borderWidth: 2
				},
				point: {
					radius: 0,
					hitRadius: 10,
					hoverRadius: 4
				}
			}
		}
	})
	/* Chart-js (#site-executive) closed */
	


	


})( jQuery );

