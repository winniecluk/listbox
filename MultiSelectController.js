({
	selectItem : function(component, event, helper){
		// console.log(event.target);
		if (event.target.getAttribute('data-state') === 'deselected'){
			event.target.style = 'background:rgb(0,105,217);color:white;';
			// add to other column
			helper.selectIt(component,event);
			event.target.setAttribute('data-state', 'selected');
			// change to blue
		} else if (event.target.getAttribute('data-state') === 'selected'){
			event.target.style = 'background:white;color:black;';
			helper.deselectIt(component,event);
			event.target.setAttribute('data-state', 'deselected');
		}
		// console.log(component.get('v.selectedLeftIdx'));
		// console.log(component.get('v.selectedRightIdx'));
	},


	moveItemsRight : function(component,event,helper){
		let configObj = {
			originStr: 'v.originalList',
			destinationStr: 'v.selectedList',
			selectedIdxStr: 'v.selectedLeftIdx'
		};
		helper.moveItems(component, configObj);
	},

	moveItemsLeft : function(component,event,helper){
		let configObj = {
			originStr: 'v.selectedList',
			destinationStr: 'v.originalList',
			selectedIdxStr: 'v.selectedRightIdx'
		};
		helper.moveItems(component,configObj);
	}

})
