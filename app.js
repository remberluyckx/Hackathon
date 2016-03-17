var app = angular.module("myApp", []);

app.controller("mapController", function($scope, $http){

	var naam = ["rember", "arthuur"];
	var bedrag = ["10", "20000"];
	var tittel = ["test", "test2"];



	function add()
	{
		//alert("test");
		tittel.push($scope.title);
		bedrag.push($scope.money);
		naam.push($scope.name);		
	};




	$scope.add = function()
	{
		add();

		$(".stuff").empty();
		for (var i = 0; i < naam.length; i++)
		{
			$(".stuff").append("<div class='pin'>")
			.append("<h2>Persoon:" + naam[i] + "</h2>")
			.append("<p>" + tittel[i] + "</p>")
			.append("</br>")
			.append("<p> &euro; " + bedrag[i] + "</p>")
			.append("</div>");
		}
		
	};

	$http.get("http://172.16.136.229:3000/2")
    .success(function(posts){
    	$scope.
    })
    .error(function(err){
    	alert("Oops...");
    });

});
