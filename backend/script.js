$('.todoist__edit--button').click(function() {
	$.post('/config/setConfigValueAjax.php', {'key' : 'todoist_api_token', 'value' : $("#todoist_api_token").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'todoist_project', 'value' : $("#todoist_lists").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'todoist_include_completed', 'value' : $("#todoist_include_completed").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'todoist_max_tasks', 'value' : $("#todoist_max_tasks").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'todoist_max_tasks_completed', 'value' : $("#todoist_max_tasks_completed").val()});
	$.post('/config/setConfigValueAjax.php', {'key' : 'todoist_sort', 'value' : $("#todoist_sort").val()}).done(function() {
		$('#ok').show(30, function() {
			$(this).hide('slow');
		})
	});
});
