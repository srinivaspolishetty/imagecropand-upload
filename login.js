;(function(angular){
	"use strict";
	
	angular.module("app",[])
    .controller("loginController",function($scope){
		
		$scope.candidates = [];
		
		var mydata = {};

		$scope.onload = function(){
			
			$scope.jobOrders = "My First Angular JS Page";
			
mydata = {
	"name": "Polishetty",
	"subCategoryId": 2,
	"mrp": 2000,
	"description": "Polishetty First image",
	"discount": 20,
	"imageSrc": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwoAAANUCAYAAAATvNqmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzIzRUExMjExOUZCMTFFN0IzRjY5QzdGQkQ1OUI5OTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaW...fZxmx7/p+P21EusPNcpJXv42v4uRwXqzGxiKzHYlHf6e8gOo+onoi5xM+f7yT1869fnfPq89zwr6FhcxPtXR/rY32sj/WxPtbH+vjLx/8QYAASQ8j/AYg9PwAAAABJRU5ErkJggg==",
	"isNameFieldExists": false,
	"adminItemInfo": "Image by Polishetty",
	"subCategoryIds": [2],
	"minQuantityToPurchase": 2,
	"itemCroppedDimensionJsonList": [{
		"left": 296,
		"top": 151,
		"width": 234,
		"height": 163,
		"name": "Image 1",
		"itemId": 31,
		"id": 48,
		"createdOn": "05-04-2017"
	}, {
		"left": 81,
		"top": 302,
		"width": 109,
		"height": 154,
		"name": "Image 2",
		"itemId": 31,
		"id": 49,
		"createdOn": "05-04-2017"
	}, {
		"left": 302,
		"top": 386,
		"width": 152,
		"height": 106,
		"name": "Image 3",
		"itemId": 31,
		"id": 50,
		"createdOn": "05-04-2017"
	}, {
		"left": 541,
		"top": 367,
		"width": 178,
		"height": 268,
		"name": "Image 4",
		"itemId": 31,
		"id": 51,
		"createdOn": "05-04-2017"
	}, {
		"left": 141,
		"top": 546,
		"width": 330,
		"height": 231,
		"name": "Image 5",
		"itemId": 31,
		"id": 52,
		"createdOn": "05-04-2017"
	}],
	"itemFieldValueJsonList": [{
		"itemFieldNameId": 1,
		"itemFieldValue": "Tony",
		"itemId": 31,
		"id": 14,
		"createdOn": "05-04-2017"
	}],
	"id": 31,
	"createdBy": 1,
	"createdOn": "05-04-2017"
}


$scope.selectedPositions = mydata.itemCroppedDimensionJsonList;

	for(var i=0;i<$scope.selectedPositions.length;i++)
	{
		$scope.obj = $scope.selectedPositions[i];
		$scope.obj.left = parseInt($scope.obj.left) - 15;
		/*var newEle = angular.element("<div style='position:absolute;background-color:#ffff00;border:1px solid #000000;opacity:0.5;top:"+$scope.obj.top+"px;left:"+$scope.obj.left+"px;width:"+$scope.obj.width+"px;height:"+$scope.obj.height+"px;'></div>");*/
		var newEle = angular.element("<div class='usrimg' style='top:"+$scope.obj.top+"px;left:"+$scope.obj.left+"px;width:"+$scope.obj.width+"px;height:"+$scope.obj.height+"px;'><img id='uploadimg"+i+"' style='width:"+$scope.obj.width+"px;height:"+$scope.obj.height+"px;' class='uploadedImgId' src='#' /></div><div class='browsmask' style='top:"+$scope.obj.top+"px;left:"+$scope.obj.left+"px;width:"+$scope.obj.width+"px;height:"+$scope.obj.height+"px;'><input id='tonyupload"+i+"' class='userupimg' type='file'></div>");
		var target = document.getElementById('imageprew');
		angular.element(target).append(newEle);
		/*$("#delselect").click();*/
	}
	  			
}



$(".useruploadimage").change(function () {
	alert();
});

	
	

/*	$scope.uploadFile = function(){
        var filename = event.target.files[0].name;
        alert('file was selected: ' + filename);
    };
*/


		
		
		
	});



/*.directive('customOnChange', function() {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var onChangeFunc = scope.$eval(attrs.customOnChange);
      element.bind('change', onChangeFunc);
    }
  };
});*/


	
})(angular);














