module.exports = function check(str, bracketsConfig) {
	bracketsConfig = bracketsConfig.map(item => item.join(''));
	let found = true;
	let replStr = '';
	while (found) {
		found = false;
		bracketsConfig.forEach(item => {
			replStr = str.replace(item,'');
			if (replStr != str && !found) found = true;
			str = replStr;
		});
	}
	return (str == '') ? true : false;
}
