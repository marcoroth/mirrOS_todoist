<?php

	$todoist_api_token = getConfigValue('todoist_api_token');
	$todoist_project = getConfigValue('todoist_project');
	$todoist_include_completed = getConfigValue('todoist_include_completed');
	$todoist_sort = getConfigValue('todoist_sort');
	$todoist_max_tasks = getConfigValue('todoist_max_tasks');
	$todoist_max_tasks_completed = getConfigValue('todoist_max_tasks_completed');
	$todoist_icons = getConfigValue('todoist_icons');

	if($todoist_api_token == 'GLANCR_DEFAULT') {$todoist_api_token = ''; }
	if($todoist_project == 'GLANCR_DEFAULT') {$todoist_project = ''; }
	if($todoist_include_completed == 'GLANCR_DEFAULT') {$todoist_include_completed = 'false'; }
	if($todoist_sort == 'GLANCR_DEFAULT') {$todoist_sort = 'alphabetical'; }
	if($todoist_max_tasks == 'GLANCR_DEFAULT') {$todoist_max_tasks = '8'; }
	if($todoist_max_tasks_completed == 'GLANCR_DEFAULT') {$todoist_max_tasks_completed = '0'; }
	if($todoist_icons == 'GLANCR_DEFAULT') {$todoist_icons = 'new'; }

	if ($todoist_api_token == ""){
		include "_step1.php";
	} else {
		include '_step2.php';
	}

 ?>

<div class="block__add" id="todoist__edit">
	<button class="todoist__edit--button" href="#">
		<span><?php echo _('todoist_save'); ?></span>
	</button>
</div>
