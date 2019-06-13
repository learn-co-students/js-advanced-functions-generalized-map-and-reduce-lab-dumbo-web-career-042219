// Add your functions here
const map = (testArray, callBack) => {
	let mappedArray = [];
		let i;
			for(i = 0; i < testArray.length; i++) {
				mappedArray.push(callBack(testArray[i]))
					}
						return mappedArray
}

const reduce = (testArray, callBack, startingPoint = 0) => {
	let reducedTotal = (!!startingPoint) ? startingPoint : testArray[0]
		let i = (!!startingPoint) ? 0 : 1
			for(; i < testArray.length; i++) {
				reducedTotal = callBack(testArray[i], reducedTotal);
					}
						return reducedTotal
}