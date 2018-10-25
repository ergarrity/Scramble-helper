let colorList = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"]

let candy = new Map();

candy.set('purple', 'grape')
candy.set('green', 'sour green apple')
candy.set('yellow', 'lemon')
candy.set('orange', 'orange')
candy.set('pale yellow', 'banana')


function flavorListFinder3(colors, map){
	let flavorArray = [];
	for (let i = 0; i < colorList.length; i++){
		if (map.get(colors[i])){
			flavorArray[i] = (colors[i]);
		} else{
			flavorArray[i] = null;
		}
	}
	return flavorArray;
}

function flavorListFinder4(colors, map){
	let flavorArray = [];
	for (let i = 0; i < colorList.length; i++){
		if (map.get(colors[i])){
			flavorArray.push(colors[i]);
		} else{
			flavorArray.push(null);
		}
	}
	return flavorArray;
}