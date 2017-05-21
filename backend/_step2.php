<select id="todoist_lists">
	<option value="" disabled><?php echo _('todoist_select_list');?></option>
</select>

<!-- <input id="todoist_project" type="number" placeholder="<?php echo _('todoist_project');?>" value="<?php echo $todoist_project; ?>"/> -->


<!-- <select id="todoist_include_completed">
	<option value="" disabled><?php echo _('todoist_include_completed');?></option>
	<option value="false" <?php if ($todoist_include_completed == "false"){ echo "selected"; } ?>><?php echo _('todoist_include_completed_no');?></option>
	<option value="true"  <?php if ($todoist_include_completed == "true") { echo "selected"; } ?>><?php echo _('todoist_include_completed_yes');?></option>
</select> -->

<select id="todoist_sort">
	<option value="" disabled><?php echo _('todoist_sort');?></option>
	<option value="alphabetical"         <?php if ($todoist_sort == "alphabetical")        { echo "selected"; } ?>><?php echo _('todoist_sort_alphabetical');?></option>
	<option value="alphabetical_reverse" <?php if ($todoist_sort == "alphabetical_reverse"){ echo "selected"; } ?>><?php echo _('todoist_sort_alphabetical_reverse');?></option>
	<option value="newest"               <?php if ($todoist_sort == "newest")              { echo "selected"; } ?>><?php echo _('todoist_sort_newest');?></option>
	<option value="oldest"               <?php if ($todoist_sort == "oldest")              { echo "selected"; } ?>><?php echo _('todoist_sort_oldest');?></option>
	<option value="priority"             <?php if ($todoist_sort == "priority")            { echo "selected"; } ?>><?php echo _('todoist_sort_priority');?></option>
</select>

<input id="todoist_max_tasks" type="number" step="1" min="1" max="8" placeholder="<?php echo _('todoist_max_tasks');?>" value="<?php echo $todoist_max_tasks; ?>"/>

<!-- <input id="todoist_max_tasks_completed" type="number" step="1" min="1" max="8" placeholder="<?php echo _('todoist_max_tasks_completed');?>" value="<?php echo $todoist_max_tasks_completed; ?>"/> -->

<a href="/modules/todoist/assets/resetConfig.php">Reset Config</a><br /><br />

<script>
	<?php include "_step2.js"; ?>
</script>
