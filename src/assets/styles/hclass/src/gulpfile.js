var fs        	= require('fs'),
	gulp	  			= require('gulp'),
	plugins     	= require('./build/plugins'),
	pathFiles   	= require('./build/path'),
	dirTasks    	= fs.readdirSync('./build/task');


dirTasks.map(function(fileTask){
	 require('./build/task/' + fileTask)(gulp, plugins, pathFiles).run();
});



