$(function(e){
  'use strict'
	
	
	
/*-----canvasDoughnut-----*/
	if ($('.canvasDoughnut-1').length){

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
					data: [68, 55, 45,25,20],
					backgroundColor: [
						"rgb(74, 50, 212)",
						"rgb(251, 28, 82)",
						"rgb(4, 190, 254)",
						"rgb(234, 180, 7)",
						"rgb(39, 175, 6)"

					],
					hoverBackgroundColor: [
						"#4a32d4",
						"#fb1c52 ",
						"#2393ff",
						"#eab407",
						"#27af06"

					]
				}]
			},
			options: {
				legend: false,
				responsive: false
			}
		}

		$('.canvasDoughnut-1').each(function(){

			var chart_element = $(this);
			var chart_doughnut = new Chart( chart_element, chart_doughnut_settings);

		});
	}
	/*-----canvasDoughnut-----*/
    
	
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
        height: 60,
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
	
	//Spark1
    var spark2 = {
      chart: {
        type: 'area',
        height: 60,
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
      colors: ['#2393ff'],
      
    }
	var spark2 = new ApexCharts(document.querySelector("#spark2"), spark2);
    spark2.render();
	
});