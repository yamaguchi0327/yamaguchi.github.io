// ===================================
// Chart1
// ===================================
var data = [
	{
		value: 79,
		color:"#fff"
	},
	{
		value : 21,
        // Draw with background color
		color : "#ff8200" 
	}
];
var ctx = document.getElementById("myChart").getContext("2d");
new Chart(ctx).Doughnut(data,{
	segmentShowStroke : false,
	segmentStrokeColor : "#ff8200",
	segmentStrokeWidth : 1,
	percentageInnerCutout : 80, // **** Border width
	animation : true,
	animationSteps : 100,
	animationEasing : "easeOutBounce",
	animateRotate : true,
	animateScale : false,
	onAnimationComplete : null
});
// ===================================
// Chart2
// ===================================
var data = [
	{
		value: 62,
		color:"#ff8200"
	},
	{
		value : 100-62,
		color : "#fff"
	}
];
var ctx = document.getElementById("myChart2").getContext("2d");
new Chart(ctx).Doughnut(data,{
	segmentShowStroke : false,
	segmentStrokeColor : "#ff8200",
	segmentStrokeWidth : 1,
	percentageInnerCutout : 80, // **** Border width
	animation : true,
	animationSteps : 100,
	animationEasing : "easeOutBounce",
	animateRotate : true,
	animateScale : false,
	onAnimationComplete : null
});