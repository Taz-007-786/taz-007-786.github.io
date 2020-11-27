function calc(){
	var qty
	var cost
	var displaycost
	qty=document.getElementById('quantity').value
	cost=qty*30
	
	displaycost= "£" + cost.toFixed(2) //Add a £ to teh beginning and format cost as 2 decimal places
	document.getElementById('cost').value = displaycost //Write the calculated value to the HTML field "cost" 
	localStorage.setItem("quantity",qty)
	localStorage.setItem("cost",displaycost)
	
	document.getElementById("soldquantity").innerHTML = localStorage.getItem("quantity");
	document.getElementById("soldcost").innerHTML = localStorage.getItem("cost");
}

{
	document.getElementById('vid').play();
}