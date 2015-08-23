lmsApp.controller("leaveDetailsCtrl", function($scope, empId, leaveBalanceFactory, categoryFactory){

	categoryFactory.getCategories().then(function(response){
		$scope.leaveTypes = response.data;
	})

	leaveBalanceFactory.getLeaveBalanceList(empId).then(function(response){
			
		leaveDetails = [];		
		for(leave in response.data){
			tmpLeave = response.data[leave];
			leaveDetails[tmpLeave.category] = tmpLeave;			
		}
		$scope.leaveDetails = leaveDetails;
	})	

	$scope.title = "Leave Balance";
});

lmsApp.controller("newLeaveCtrl", function($scope, empId, leaveFactory, categoryFactory, employeeFactory){

	$scope.data = "new leave";
	$scope.title = "New Leave";
	$scope.now = moment().format('DD-MM-YYYY');
	$scope.date = {startDate: moment(), endDate: moment()};
	$scope.opts  = {
		"autoApply": true,
		"showDropdowns": true,
		"eventHandlers":{
			"apply.daterangepicker": function(ev,picker){
				$scope.leave.from_date = picker.startDate;
				$scope.leave.to_date = picker.endDate;
				$scope.leave.no_of_days = picker.endDate.diff(picker.startDate, "days")+1;
			}
		} 
	}

	categoryFactory.getCategories().then(function(response){
		$scope.leaveTypes = response.data;
	});

	employeeFactory.getEmployee(empId).then(function(response){
		$scope.employee = response.data;		
	});


	$scope.saveLeave = function(){		
		$scope.leave.status = 0; 
		$scope.leave.from_date = moment($scope.leave.from_date).format('YYYY-MM-DD');
		$scope.leave.to_date = moment($scope.leave.to_date).format('YYYY-MM-DD');
		$scope.leave.employee = $scope.employee.emp_id;
		leaveFactory.createLeave($scope.leave).then(function(response){
			console.log(response.data);
			$scope.leave = "";
		})
	}
})

lmsApp.controller("memoirsCtrl", function($scope, empId, leaveFactory, categoryFactory, employeeFactory){
	$scope.data = "Memoirs";
	$scope.title = "Memoirs";

	leaveFactory.getLeaves(empId).then(function(response){
		$scope.appliedLeaves = response.data;
		console.log($scope.appliedLeaves);
	});

	categoryFactory.getCategories().then(function(response){
		$scope.leaveTypes = response.data;
	});

	employeeFactory.getEmployee(empId).then(function(response){
		$scope.employee = response.data;		
	});

	$scope.cancelLeave = function(leave){
		
		leaveFactory.deleteLeave(leave).then(function(response){
			console.log(response.data);
		})
	}


})