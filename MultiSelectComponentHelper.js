({
	selectIt : function(component, event) {
		if (event.target.getAttribute('data-side') === 'left'){
			let idxArr = component.get('v.selectedLeftIdx');
			idxArr.push(event.target.getAttribute('data-index'));
			component.set('v.selectedLeftIdx', idxArr);
		} else if (event.target.getAttribute('data-side') === 'right'){
			let idxArr = component.get('v.selectedRightIdx');
			idxArr.push(event.target.getAttribute('data-index'));
			component.set('v.selectedRightIdx', idxArr);
		}
	},
	deselectIt : function(component,event){
		if (event.target.getAttribute('data-side') === 'left'){
			let idxArr = component.get('v.selectedLeftIdx');
			idxArr.splice(idxArr.indexOf(event.target.getAttribute('data-index')), 1);
			component.set('v.selectedLeftIdx', idxArr);
		} else if (event.target.getAttribute('data-side') === 'right'){
			let idxArr = component.get('v.selectedRightIdx');
			idxArr.splice(idxArr.indexOf(event.target.getAttribute('data-index')), 1);
			component.set('v.selectedRightIdx', idxArr);
		}
	},

	moveItems : function(component, configObj){
		let origin = component.get(configObj.originStr);
		let originArr = [];
		let destinationArr = component.get(configObj.destinationStr);
		let selectedIdx = component.get(configObj.selectedIdxStr);

		// console.log(origin);
		origin.forEach(function(el,idx){
			// console.log('inside');
			// console.log(idx);
			if (selectedIdx.includes(idx.toString())){
				// console.log('inside here');
				destinationArr.push(el);
			} else {
				originArr.push(el);
			}

			if (idx == origin.length - 1){
				component.set(configObj.originStr, originArr);
				component.set(configObj.destinationStr, destinationArr);
				component.set(configObj.selectedIdxStr, []);
			}
		});
	}

})
