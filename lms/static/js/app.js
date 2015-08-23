lmsApp = angular.module('lmsApp',['ui.router','daterangepicker']).
	config(function($stateProvider, $urlRouterProvider){

	  $urlRouterProvider.otherwise("");	  
	  $stateProvider
	    .state('main', {
	      url: "",
	      templateUrl: "/static/partials/leaveDetails.html",
	      controller:'leaveDetailsCtrl'
	    })
	    .state('newLeave', {
	      url: "2",
	      templateUrl: "/static/partials/newLeave.html",
	      controller:'newLeaveCtrl'
	    })
	    .state('memoirs', {
	      url: "3",
	      templateUrl: "/static/partials/memoirs.html",
	      controller:'memoirsCtrl'
	    })
	});

lmsApp.value('empId', '1023');