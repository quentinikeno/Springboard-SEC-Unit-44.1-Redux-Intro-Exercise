window.onload = () => {
	const buttonDiv = document.getElementById("buttonDiv");

	buttonDiv.addEventListener("click", (event) => {
		if (event.target.tagName === "BUTTON") {
			const { mood } = event.target.dataset;
			store.dispatch({ type: mood });
		}
	});
};
