lmsApp.factory('leaveFactory', function($http){
	var urlBase = '/api/leave/';
	var _leaveService = {};

	_leaveService.getLeaves = function(empId){
		if(empId){			
			return $http.get(urlBase+empId);
		}
		return $http.get(urlBase);
	}

	_leaveService.createLeave = function(Leave){
		return $http.post(urlBase, Leave);
	}

	_leaveService.deleteLeave = function(Leave){
		return $http.delete(urlBase+Leave.id);
	}
	

	return _leaveService;
});

lmsApp.factory('leaveBalanceFactory', function($http){
	var urlBase = '/api/leavebalance';
	var _leaveBalanceService = {};

	_leaveBalanceService.getLeaveBalanceList = function(empId){
		return $http.get(urlBase+"/"+empId);
	}

	_leaveBalanceService.createLeaveBalance = function(message){
		return $http.post(urlBase, message);
	}

	return _leaveBalanceService;
});

lmsApp.factory('categoryFactory', function($http){
	var urlBase = '/api/category';
	var _categoryService = {};

	_categoryService.getCategories = function(){
		return $http.get(urlBase);
	}
	return _categoryService;
});

lmsApp.factory('employeeFactory', function($http){
	var urlBase = '/api/employee';
	var _employeeService = {};

	_employeeService.getEmployee = function(empId){
		if(empId){
			return $http.get(urlBase+"/"+empId);
		}
		return $http.get(urlBase);
	}
	return _employeeService;
});