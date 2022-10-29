export async function filterMetasByNameOfInstitution(filter, metaName){
	const arr_filters = filter.split(" ");
	const arr_metaName = metaName.split(" ");
	let booleans = [];
	for (let i = 0; i < arr_filters.length; i++) {
		for (let j = 0; j < arr_metaName.length; j++) {
			if (arr_filters.toLowerCase() === arr_metaName.toLowerCase()) {
				booleans.push(true);
			}
			booleans.push(false);
		}
	}
	return booleans;
}