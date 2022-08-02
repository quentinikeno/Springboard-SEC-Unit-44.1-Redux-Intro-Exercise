const buttonDiv = document.getElementById("buttonDiv");
const faceDiv = document.getElementById("faceDiv");

function updateFace() {
	faceDiv.innerText = store.getState().mood;
}

buttonDiv.addEventListener("click", (event) => {
	if (event.target.tagName === "BUTTON") {
		const { mood } = event.target.dataset;
		store.dispatch({ type: mood });
	}
});

updateFace();
store.subscribe(updateFace);
