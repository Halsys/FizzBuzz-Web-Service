const express = require("express");
const app = express();

function onFizzBuzz(req, res) {
	// Parse the query options...
	var begin = new Number(req.query.begin || 0);
	var end = new Number(req.query.end || 100);
	var buffer = new String();
	for (var i = begin; i < end; i++) {
		var line = "";
		if (i % 3 === 0) line += "Fizz";
		if (i % 5 === 0) line += "Buzz";
		if (!line) line += i.toString();
		buffer += line + "\n";
	}
	res.status(200).send(buffer);
}

function onListen() {
	console.log("Application is listening on port 8080!");
}

app.use("/fizzbuzz", onFizzBuzz);

app.listen(8080, onListen);
