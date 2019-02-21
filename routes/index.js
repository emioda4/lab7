var projects = require('../projects.json');

/*
 * GET home page.
 */

//it's calling to projects.json and creating a new property
//that gets added to the json file called viewAlt. which would
//be equal to false
exports.view = function(request, response){
  	projects["viewAlt"] = false;
  	response.render('index', projects);
};


exports.viewAlt = function(req, res){
	projects["viewAlt"] = true;
  	res.render('index', projects);
};
