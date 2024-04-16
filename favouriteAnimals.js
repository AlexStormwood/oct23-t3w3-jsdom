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
		let rootOlNode = document.querySelector("ol");
		rootOlNode.appendChild(newList);

	});
}


function removeAnimalFromList(targetAnimalId){
	// 1. Find element in list with matching ID 
	let targetListItem = document.getElementById(targetAnimalId);
	targetListItem = document.getElementsByClassName
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




// createAnimalList();


console.log("Hello from the imported code file!");