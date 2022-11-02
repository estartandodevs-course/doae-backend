export async function filterTargetsByNameOfInstitution(filter, targetName){
	const arr_filters = filter.split(" ");
	const arr_targetName = targetName.split(" ");
	let booleans = [];
	for (let i = 0; i < arr_filters.length; i++) {
		for (let j = 0; j < arr_targetName.length; j++) {
			if (arr_filters.toLowerCase() === arr_targetName.toLowerCase()) {
				booleans.push(true);
			}
			booleans.push(false);
		}
	}
	return booleans;
}