var todoist_api_token;
var todoist_project;
var todoist_project_name;
var todoist_max_tasks;
var todoist_max_tasks_completed;

$(document).ready(function () {
	todoist_api_token = "<?php echo getConfigValue('todoist_api_token'); ?>";
	todoist_project = "<?php echo getConfigValue('todoist_project'); ?>";
	todoist_inlcude_completed = "<?php echo getConfigValue('todoist_include_completed'); ?>"
	todoist_sort = "<?php echo getConfigValue('todoist_sort'); ?>"
	todoist_max_tasks = parseInt("<?php echo getConfigValue('todoist_max_tasks'); ?>")
	todoist_max_tasks_completed = parseInt("<?php echo getConfigValue('todoist_max_tasks_completed'); ?>")
	reloadTodoist();
});

function reloadTodoist() {


$.getJSON("/modules/todoist/assets/tasks.php").done(function(data){

		$("#todoist_table").empty();
		$("#todoist_list").text(data.project.name);

console.log(data.items)
		if (todoist_sort == "alphabetical"){
			// A-Z Titel
			data.items.sort(sort_by('content', false, function(a){return a.toUpperCase()}));
		} else if (todoist_sort == "alphabetical_reverse") {
			// Z-A Titel
			data.items.sort(sort_by('content', true, function(a){return a.toUpperCase()}));
		} else if (todoist_sort == "newest") {
			// newest first
			data.items.sort(sort_by('date_added', true));
		} else if (todoist_sort == "oldest") {
			// oldest first
			data.items.sort(sort_by('date_added', false));
		} else if (todoist_sort == "priority") {
			// starred first
			data.items.sort(sort_by('priority', true));
		}

    i = 0;
		$.each(data.items, function(index, el) {

			if (i < todoist_max_tasks) {
				$("#todoist_table").append("<tr></tr>");
				if (el.is_archived == 1){ icon = "fa fa-check-square-o"; } else { icon = "fa fa-square-o";	}

				if (el.starred == true) {
					star = '<i class="fa fa-star" aria-hidden="true"></i>';
				} else { star = ""; }

				$("#todoist_table tr:last").append("<td><i class='" + icon + "' aria-hidden='true'></i></td><td>" + star + el.content + "</td>");

			} else if (i > todoist_max_tasks) {
				more_tasks_todoist = "<td><i class='fa fa-info-circle' aria-hidden='true'></i></td><td>" + (data.items.length-todoist_max_tasks)+ " <?php echo _('todoist_more_tasks'); ?></td>";
			}
			i++;
		});

		// $.ajax({ url: 'https://a.todoist.com/api/v1/tasks?list_id=' + todoist_list + '&completed=' + true, headers: { 'X-Client-ID': todoist_client_id, 'X-Access-Token': todoist_access_token }, success: function(data){
		//
		// 	data.sort(sort_by('completed_at', true));
		//
		// 	i = 0;
		// 	$.each(data, function(index, el) {
		// 		$("#todoist_table").append("<tr></tr>");
		//
		// 		if (i < todoist_max_tasks_completed) {
		//
		// 			if (el.starred == true) {
		// 				star = '<i class="fa fa-star" aria-hidden="true"></i>';
		// 			} else { star = ""; }
		//
		// 			$("#todoist_table tr:last").append("<td><i class='" + "fa fa-check-square-o" + "' aria-hidden='true'></i></td><td>" + star + el.title + "</td>");
		// 		}
		// 		i++;
		// 	});
		//
			// 	Ausgabe: X weitere Aufgaben
			if (more_tasks_todoist != ""){
				$("#todoist_table").append("<tr></tr>");
				$("#todoist_table tr:last").append(more_tasks_todoist);
			}
		//  }});
	 });


  // alle 10 Minuten aktualiseren
  window.setTimeout(function() {
  	reloadTodoist();
  }, 600000);
}

// copied from http://stackoverflow.com/a/979325
var sort_by = function(field, reverse, primer){
   var key = primer ? function(x) {return primer(x[field])} : function(x) {return x[field]};
   reverse = !reverse ? 1 : -1;
   return function (a, b) { return a = key(a), b = key(b), reverse * ((a > b) - (b > a)); }
}
