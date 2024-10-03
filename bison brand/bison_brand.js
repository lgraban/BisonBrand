var cart = [];
var prices = [];
var test = 2;
function addCartShirt() {
		selectElement = document.querySelector('#shirt');     
		output = selectElement.value;
		console.log("cart:");
		cart.push(output);
		prices.push(30);
		console.log(cart);
		localStorage.setItem("cart", JSON.stringify(cart));
}

function addCartHoodie() {
		selectElement = document.querySelector('#hoodie');     
		output = selectElement.value;
		console.log("cart:");
		cart.push(output);
		prices.push(60);
		console.log(cart);
		localStorage.setItem("cart", JSON.stringify(cart));
}

function addCartJogger() {
		selectElement = document.querySelector('#joggers');     
		output = selectElement.value;
		console.log("cart:");
		cart.push(output);
		prices.push(50);
		console.log(cart);
		localStorage.setItem("cart", JSON.stringify(cart));
}

function addCartAccessory() {
		selectElement = document.querySelector('#hat');     
		output = selectElement.value;
		console.log("cart:");
		cart.push(output);
		prices.push(15);
		console.log(cart);
		localStorage.setItem("cart", JSON.stringify(cart));
}

function addCartOther() {
		selectElement = document.querySelector('#skateboard_deck');     
		output = selectElement.value;
		console.log("cart:");
		cart.push(output);
		prices.push(80);		
		console.log(cart);
		localStorage.setItem("cart", JSON.stringify(cart));
}

function getCart() {
		var length = prices.length;
		var one = cart[0];
		var two = cart[1];
		var three = cart[2]; 
		var four = cart[3];
		var five = cart[4];
		
		var priceone = prices[0];
		var pricetwo = prices[1];
		var pricethree = prices[2]; 
		var pricefour = prices[3];
		var pricefive = prices[4];
		var price;
		// PRICE //
		if(length > 4){
			price = priceone + pricetwo + pricethree + pricefour + pricefive;
		}
		else if (length > 3){
			price = priceone + pricetwo + pricethree + pricefour;
		}
		else if (length > 2){
			price = priceone + pricetwo + pricethree;
		}
		else if (length > 1){
			price = priceone + pricetwo;
		}
		else if (length > 0){
			price = priceone;
		}
		
		// FINAL OUTPUT//
		
		if(length > 5){
			document.getElementById('results').innerHTML = "too many items in cart";
		}
		else if (length > 4){
			document.getElementById('results').innerHTML =   one + "<br>" + two + "<br>" + three + "<br>" + four + "</br>" + five + "</br>" + "Price: " +"$" + price;
		}
		else if (length > 3){
			document.getElementById('results').innerHTML =   one + "<br>" + two + "<br>" + three + "<br>" + four + "</br>" + "Price: " + "$" + price;
		}
		else if (length > 2){
			document.getElementById('results').innerHTML =   one + "<br>" + two + "<br>" + three + "<br>" + "Price: " + "$" + price;
		}
		else if (length > 1){
			document.getElementById('results').innerHTML =   one + "<br>" + two + "<br>" + "Price: " + "$" + price;
		}
		else if (length > 0){
			document.getElementById('results').innerHTML =   one + "<br>" + "Price: " + "$" + price;
		}
		else{
			document.getElementById('results').innerHTML =  "your cart is empty";
		}
}

function openProduct(evt, productName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(productName).style.display = "block";
  evt.currentTarget.className += " active";
}

function signUp() {
	var first = document.getElementById("first_name").value; 
	var last = document.getElementById("last_name").value; 
	var email = document.getElementById("email").value; 
	alert("Hello, " + first + " " + last + ", thank you for signing up to the mailing list! We will send emails to " + email);
}

