$(document).ready(function(){
	$('#datePicker').datetimepicker({
		format:'MMM D (dddd)',
	});

	$('#fromTimePicker').datetimepicker({
		format:'LT'
	})

	$('#untilTimePicker').datetimepicker({
		format:'LT'
	})
});