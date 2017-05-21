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




	// $.ajax({
	// 	url: 'https://a.todoist.com/api/v1/lists',
	// 	headers: {
	// 			'X-Client-ID': client_id,
	// 			'X-Access-Token': access_token
	// 		},
	// 	method: 'GET',
	// 	dataType: 'json',
	// 	success: function(data){
	// 		console.log(data);
	// 		$.each(data, function(index, el) {
	// 			$("#todoist_lists").append("<option value='" + el.id + "'>" + el.title + "</option>");
	// 			console.log(el.title);
	// 		});
	// 		$("#todoist_lists").val(list);
	// 	}
	// });

});
