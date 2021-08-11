module.exports.login = function(req, res) {
	res.status(200).json({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
		token:
			"fwefrwfre67483tcr83cgtde3t7df8234gdf926g239tf927hegy299347tf87eyfiuwbt78o",
	})
}

module.exports.register = function(req, res) {
	res.status(200).json({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
	})
}

module.exports.users = function(req, res) {
	res.status(200).json({
		users: [
			{ firstName: "firstName", lastName: "lastName", age: "25" },
			{ firstName: "firstName2", lastName: "lastName2", age: "26" },
			{ firstName: "firstName3", lastName: "lastName3", age: "27" },
			{ firstName: "firstName4", lastName: "lastName4", age: "28" },
		],
	})
}
