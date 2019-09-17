<?php

	include('../../../config/glancrConfig.php');

	$todoist_project = getConfigValue("todoist_project");
	$todoist_api_token = getConfigValue("todoist_api_token");

	$url = "https://api.todoist.com/sync/v8/projects/get_data?project_id=" . $todoist_project . "&token=" . $todoist_api_token;

	$data = file_get_contents($url);

	header("Content-Type: application/json");
	echo $data;

?>
