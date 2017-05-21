<?php

	include('../../../config/glancrConfig.php');

	setConfigValue("todoist_api_token", "");
	setConfigValue("todoist_include_completed", "");
	setConfigValue("todoist_project", "");
	setConfigValue("todoist_max_tasks", "8");
	setConfigValue("todoist_max_tasks_completed", "");
	setConfigValue("todoist_sort", "");

	header("location: /config/");

?>
