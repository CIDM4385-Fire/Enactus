var args = arguments[0] || {};


$.doLoginBtn.addEventListener('click', doLoginBtnClicked);
$.cancelLoginBtn.addEventListener('click', cancelLoginBtn);

function cancelLoginBtn() {
	$.login.close();
	var index = Alloy.createController("index").getView();
	index.close();
}

function doLoginBtnClicked() {

	// create instance of the user model
	var user = Alloy.createModel('User');

	// call the extended model’s function
	user.login($.email.value, $.password.value, userActionResponseHandler);
};//end doLoginBtnClicked ch7

function userActionResponseHandler(_resp) {
	if (_resp.success === true) {

		// Do stuff after successful login.
		Alloy.Globals.loggedIn = true;
		Alloy.Globals.CURRENT_USER = _resp.model;
		
		// save the values as a string.

		
		
		//$.parentController.loginSuccessAction(_resp);
		$.login.close();
		var index1 = Alloy.createController("index").getView();
		index1.open();
		
		
	} else {
		// Show the error message and let the user try again.
		alert("loginFailed", _resp.error.message);

		Alloy.Globals.CURRENT_USER = null;
		Alloy.Globals.loggedIn = false;
	}
  };



$.login.open();
$.loginView.show();
