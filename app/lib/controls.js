//<!--Alonso-->

var Alloy=require('alloy');


//uses the mainview.xml to create a controller.
exports.getMainView=function(){
	return Alloy.createController('mainview');
};
//uses the menuview.xml to create a controller.
exports.getMenuView=function(){
	return Alloy.createController('menuview');	
};

//moves the button for the menuView.
exports.getMenuButton=function(args){
	//This is the background color of the sliding menu button.
	//passes in the size of the button through the "args" parameter.
	var v=Ti.UI.createView({
		height: args.h,
		width: args.w,
		backgroundColor: '#0096d6'
	});
	//This is the slider picture that is moving.
	var b=Ti.UI.createView({
		height: "20dp",
		width: "20dp",
		backgroundImage: "/logo.png"
	});
	
	//add the picture of the slider.png to the view.
	v.add(b);
	
	//returns the button
	return v;
};

//This is the code that adds the event listeners to the items in the menu view.
//Get the Configuration Controller

exports.getProjectsView=function(){
	return Alloy.createController('projects');
};

exports.getCalendarView=function(){
	return Alloy.createController('calendar');
};

exports.getIndustryView=function(){
	return Alloy.createController('industry');
};

exports.getContactsView=function(){
	return Alloy.createController('contacts');
};

exports.getConfigView=function(){
    return Alloy.createController('config');//changed from config to projects.
    
};

//<!--Alonso-->
