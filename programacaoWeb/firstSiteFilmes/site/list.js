var body = document.body
var form = document.createElement("form")

var arrayList = []

//Body Css
body.style.margin = "0"
body.style.fontFamily = "'Oswald', 'sans-serif'"
body.style.backgroundColor = "lightgrey"

//Create form
form.id = "form-list"
form.style.marginTop = "16px"
form.style.marginRight = "600px"
form.style.marginBottom = "600px"
form.style.marginLeft = "600px"

//Create inputs Elements
var input = document.createElement('input')
input.type = "text"
input.className = "input"
input.name = "name"
input.id = "name"
input.placeholder = "Product Name"

var quant = document.createElement('input')

quant.className = "input"
quant.type = "number"
quant.name = "quantity"
quant.id = "quantity"
quant.placeholder = "Quantity"

//Create Button
var button = document.createElement("input")
button.type = "submit"
button.class = "btn btn-submit"
button.value = "Enviar"

//Create list
var ul = document.createElement("ul")
ul.id = "myList"

//Add all elements to the form
form.appendChild(ul)
form.appendChild(input)
form.appendChild(quant)
form.appendChild(button)


//Add form inside the body
body.appendChild(form)


//Change Css
var inputs = document.querySelectorAll(".input")

for(var i = 0; i < inputs.length; i++){
	inputs[i].style.width = "100%"
	inputs[i].style.padding = "12px 20px"
	inputs[i].style.display = "inline"
	inputs[i].style.border = "1px solid #cccccc"
	inputs[i].style.boxSizing = "border-box"
	inputs[i].style.marginBottom = "10px"

}

button.style.backgroundColor = "#961857"
button.style.color = "white"
button.style.borderRadius = "30px"
button.style.padding = "14px 20px"
button.style.border = "none"
button.style.cursor = "pointer"
button.style.width = "100%"

document.getElementById("form-list").addEventListener("submit", function(event){

	//Cancelar atualização da pagina
	event.preventDefault()

	var exists = false

	arrayList = Array.from(ul.children)

	arrayList.forEach(element => {
		if(input.value == element.innerHTML.slice(4))
		{
			alert("Item já foi inserido")
			exists = true
		}
	})

	if(quant.value <= 0)
	{
		alert("Insira um número maior que 0")
	}
	else if (!exists)
	{
		addLine(input.value, quant.value)
	}
})

function addLine(input, quant){

	li = document.createElement("li")

	li.innerHTML = quant + " - " + input

	ul.appendChild(li)
}























