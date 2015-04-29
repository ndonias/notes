var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
	var myCategory = [];
	
	myCategory = appdata.category;
  	
  	res.render('index', {
  	title: 'Home',
  	category: myCategory,
  	page: 'home'
	});
});

/* GET backpack page. */
router.get('/backpack', function(req, res) {
	var myCategory = [];
	myCategory = appdata.category;

  res.render('backpack', { 
  	title: 'Backpack',
  	category:  myCategory,
  	page: 'backpackList'
	});
});

/* GET backpack cards page. */
router.get('/backpack/:backpackid', function(req, res) {
	var myCategory = [];
	var myFront = [];
	var myBack = [];
	appdata.backpack.forEach(function(item){
		if (item.category == req.params.backpackid){
			myCategory.push(item);
			myFront = myCategory.concat(item.front);
			myFront = myCategory.concat(item.back);
		}
	});
  res.render('backpack', { 
  	title: 'Backpack',
  	category: myCategory,
  	front: myFront,
  	back: myBack,
  	page: 'backpackDetail'
	});
});

module.exports = router;
