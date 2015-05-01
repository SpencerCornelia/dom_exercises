var random = document.getElementById("clicker");

random.addEventListener("click", function() {
	alert("Spencer clicked here");
})

var former = document.querySelector("#former")
var random2 = document.querySelector("#former");

random2.addEventListener("submit", function(evt) {
	evt.preventDefault();
	alert(former.value);
});

var veggies = document.querySelector("#vegetables");
veggies.addEventListener("click", function(){
	alert(vegetables.target);
})


/*var veggiesEvent = function() {
	for (var i=0; i < veggies.length; i++) {

	}
}
*/