const themes = {
	light: {
		background: "white",
		color: "darkgrey"
	},
	dark: {
		background: "darkgrey",
		color: "#ffffff"
	}
};

function changeCssTheme(themeName){
	// themes[themeName].variable
	for (const variable in themes[themeName]){
		document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
		console.log("Updated CSS variable --" + variable);

	}
}


function setThemeToDark(){
	changeCssTheme("dark");
}

function setThemeToLight(){
	changeCssTheme("light");
}

function toggleCssTheme(){
	let currentBackgroundColour = getComputedStyle(document.documentElement).getPropertyValue("--background");


	// changeCssTheme(currentBackgroundColour == "white" ? "dark" : "light");
	// changeCssTheme("dark");
	// changeCssTheme("light");

	console.log("Current background colour is: " + currentBackgroundColour);

	if (currentBackgroundColour == "white"){
		// we are already in light theme, set it to dark 
		changeCssTheme("dark");
		// setThemeToDark();
	} else {
		// we are in dark theme, set it to light
		changeCssTheme("light");
	}
}


changeCssTheme("dark");




console.log('Hello from Alex\'s code');
console.log("Hello from Alex's code");

