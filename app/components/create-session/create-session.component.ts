import { Component } from '@angular/core';

@Component({
	selector: 'create-session',
	template:`
	<form id="create-session">

	<div class="form-group">
	<label>Address</label>
	<input class="form-control" type="address" placeholder="where are you playing?">
	</div>

	<div class="form-group">
	<label>When</label>
	<div class="input-group date" id="datePicker">
	<input type='text' class="form-control" placeholder="what day?">
	<span class="input-group-addon">
	<span class="glyphicon glyphicon-calendar"></span>
	</span>
	</div>
	</div>

	<div>
	<div class="form-group">
	<div class="input-group date" id="fromTimePicker">
	<input type='text' class="form-control" placeholder="From?">
	<span class="input-group-addon">
	<span class="glyphicon glyphicon-time"></span>
	</span>
	</div>
	</div>

	<div class="form-group">
	<div class="input-group date" id="untilTimePicker">
	<input type='text' class="form-control" placeholder="Until?">
	<span class="input-group-addon">
	<span class="glyphicon glyphicon-time"></span>
	</span>
	</div>
	</div>            	
	</div>

	<div class="form-group">
	<label>Skill</label>
	<div>
	<input type="radio" name="skill" checked>
	<label><span>Beginner</span></label>
	<input type="radio" name="skill" value="advanced">
	<label><span>Advanced</span></label>
	</div>
	</div>

	<div class="form-group">
	<label># of Players</label>
	<div>
	<input type="number" class="form-control"></input>
	</div>
	</div>


	<div class="form-group">
	<label>Notes</label>
	<div>
	<textarea form="create-session" class="form-control" rows="3" placeholder="Genre? Contact Info? Apt #? Cost per person?"></textarea>
	</div>
	</div>

	<input class="form-control" type="submit" value="create session">
	</form>
	`,
	directives: []
})

export class CreateSessionComponent {
	
}