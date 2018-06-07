function createQSApp() {

	console.log("Application Name: ", "Arnie_Test.qvf");

	// create web socket
	var ws = new WebSocket("ws://localhost:4848/app/");

	// create app json command
	// var jsCmd = {
 //  					"jsonrpc": "2.0",
 //  					"id": 0,
 //  					"method": "CreateApp",
 //  					"handle": -1,
 //  					"params": [
 //    					"Arnie_Test.qvf",
 //    					"Version Control"
 //  					]
 //	};	

 	// GetEmptyScript - failed
	// var jsCmd02 = {
	// 				"jsonrpc": "2.0",
 //  					"id": 1,
 //  					"method": "GetEmptyScript",
 //  					"handle": -1,
 //  					"params": [
 //    					">> Finalize <<"
 //  					]
	// };

	var jsCmd03 = {
 					"jsonrpc": "2.0",
					"id": 0,
					"method": "OpenDoc",
					"handle": -1,
					"params": [
								"ctrl00_migration_0.95_Small.qvf",
								"UserDirectory=QTSEL; UserId=smu"
  							  ]
				  }

	ws.onopen = function (event) {
		console.log("About to create ...");
		ws.send(JSON.stringify(jsCmd));
		console.log("Created ...");	
		ws.send(JSON.stringify(jsCmd02));
		console.log("script bit added");
	}


	// var count = 0;

	// while(ws.readyState == 0 && count <= 10000) 
	// {
	// 	count++;
	// 	console.log("WebSocket readyState: ", ws.readyState);
	// }
	// console.log("About to create ...");
	// ws.send(JSON.stringify(jsCmd));
	// console.log("Created ...");	
}
