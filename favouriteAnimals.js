let animals = [
	"fennec fox",
	"lobster",
	"frog",
	"crocodile",
	"dog",
	"monkey",
	"manta ray",
	"horse",
	"red panda",
	"conure",
	"lizard",
	"koala bear",
	"drop bear",
	"whale shark",
	"lion",
	"turtle",
	"otter"
];

function createAnimalList(){

	animals = [...new Set(animals)];

	// 0. Find the existing list HTML and reset it
	let rootOlNode = document.querySelector("ol");
	rootOlNode.innerHTML = "";


	animals.forEach((animal) => {
		console.log("animal: " + animal);

		// 1. Create a li element with animal value as its text
		let newList = document.createElement("li");
		newList.textContent = animal;
		// newList.innerHTML = `<h6> ${animal} </h6>`
		newList.id = animal;

		// 1b. Add a button to remove the element from the list 
		let removeItemButton = document.createElement("button");

		removeItemButton.onclick = (() => removeAnimalFromList(animal));

		removeItemButton.textContent = "Remove animal";

		newList.appendChild(removeItemButton);


		// 2. Find the ol element that exists in the page and append the li into it
		rootOlNode.appendChild(newList);

	});
}


function removeAnimalFromList(targetAnimalId){
	// 1. Find element in list with matching ID 
	let targetListItem = document.getElementById(targetAnimalId);
	// targetListItem = document.getElementsByClassName
	targetListItem.remove();

	// 2. Check if ID is in array of animals 
	let isAnimalInList = animals.includes(targetAnimalId);
	// if (!isAnimalInList) return;
	if (isAnimalInList){
		 
	} else {
		return;
	}
	
	// 3. Remove the animal from the array
	animals = animals.filter(animal => {
		if (targetAnimalId == animal){
			// return false when you don't want the filter to include it
			return false;
		} else {
			return true;
		}
	});

	// 4. Update or wipe & rebuild the animal list HTML 

}


function addAnimalToList(event, targetInputId){
	// This prevents forms from reloading the page:
	event.preventDefault();

	// 1. Find the input field matching targetInputId
	let targetInputField = document.getElementById(targetInputId);

	// 2. Get the text value from the input field that we found 
	let foundInputFieldValue = targetInputField.value;
	console.log("Input field value to add to list is: " + foundInputFieldValue);


	// 2.5 Validate for empty and duplicate data in the input field
	// array.filter or Set to check for duplicate
	// checking for empty string 

	// 3. Push the text value into the animals array 
	animals.push(foundInputFieldValue);

	// 3.5 Reset the input field 
	targetInputField.value = "";

	// 4. Recreate the animal list
	createAnimalList();
	// Make sure this function deletes the existing list first!
}


let fakeFormButton = document.getElementById("fakeform-submit");
fakeFormButton.addEventListener("click", (event) => {addAnimalToList(event, "fakeform-addAnimal")});

let realFormButton = document.getElementById("realform-submit");
realFormButton.addEventListener("click", (event) => {addAnimalToList(event, "realform-addAnimal")});




function inputHelperReveal(targetElementId){
	let hintElement = document.getElementById(targetElementId);
	hintElement.style.display = "inherit";
}

function inputHelperHide(targetElementId){
	let hintElement = document.getElementById(targetElementId);
	hintElement.style.display = "none";
}

let realFormInput = document.getElementById("realform-addAnimal");
realFormInput.addEventListener("focusin", () => {inputHelperReveal("realform-hint")});
realFormInput.addEventListener("focusout", () => {inputHelperHide("realform-hint")});
inputHelperHide("realform-hint");


let fakeFormInput = document.getElementById("fakeform-addAnimal");
fakeFormInput.addEventListener("focusin", () => {inputHelperReveal("fakeform-hint")});
fakeFormInput.addEventListener("focusout", () => {inputHelperHide("fakeform-hint")});
inputHelperHide("fakeform-hint");
















// createAnimalList();


console.log("Hello from the imported code file!");