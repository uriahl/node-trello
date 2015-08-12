var Trello = require("node-trello");
var t = new Trello("aaa421e4e6212743c6ccd697e32e1778", "09bcf61d1e364f6783f289e0590ec70ed8d76ca2598a6bccb8d5fc681717ba4b");
 
t.get("/1/members/me", function(err, data) {
  if (err) throw err;
  console.log(data);
});
 
// URL arguments are passed in as an object. 
t.get("/1/members/me", { cards: "open" }, function(err, data) {
  if (err) throw err;
  console.log(data);
});
t.post("/1/lists", { name: "testCreation", idBoard: "55cb848c088569594173200b" }, function(err, data) {
  if (err) throw err;
  console.log(data);
});
