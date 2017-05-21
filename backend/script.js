$('.todoist__edit--button').click(function() {
	$.post('/config/setConfigValueAjax.php', {'key' : 'todoist_api_token', 'value': $("#todoist_api_token").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'todoist_project', 'value': $("#todoist_lists").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'todoist_include_completed', 'value': $("#todoist_include_completed").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'todoist_max_tasks', 'value': $("#todoist_max_tasks").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'todoist_max_tasks_completed', 'value': $("#todoist_max_tasks_completed").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'todoist_icons', 'value': $("input[name=todoist_icons]:checked").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'todoist_sort', 'value': $("#todoist_sort").val()}).done(function() {
		$('#ok').show(30, function() {
			$(this).hide('slow');
		})

		if ($("#todoist_step").val() == "1") {
			location.reload();
		}
	});
});

var old_value = "";

$( "#todoist_max_tasks").keydown(function() {
	old_value = $(this).val();
});

$( "#todoist_max_tasks").keyup(function() {
	if(!isNaturalNumber ($(this).val())){ //Only numbers !
		$(this).val(old_value);
	}
});

function isNaturalNumber(n) {
    n = n.toString(); // force the value incase it is not
    var n1 = Math.abs(n),
        n2 = parseInt(n, 10);
    return !isNaN(n1) && n2 === n1 && n1.toString() === n;
}
