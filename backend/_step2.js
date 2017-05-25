$(document).ready(function() {

	var api_token = '<?php echo $todoist_api_token; ?>';
	var project = '<?php echo $todoist_project; ?>';

	$.get("/modules/todoist/assets/projects.php").done(function(data){
		console.log(data["projects"]);
		$.each(data["projects"], function(index, el) {
			$("#todoist_lists").append("<option value='" + el.id + "'>" + el.name + "</option>");
		});
		$("#todoist_lists").val(project);
	});

});
