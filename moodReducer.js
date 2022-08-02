const initialMood = { mood: "=^.^=" };

function moodReducer(state = initialMood, action) {
	switch (action.type) {
		case "HAPPY":
			return { ...state, mood: "^ω^" };
		case "SAD":
			return { ...state, mood: "⊙︿⊙" };
		case "ANGRY":
			return { ...state, mood: "눈_눈" };
		case "CONFUSED":
			return { ...state, mood: "(@_@)" };
		default:
			return state;
	}
}

const store = Redux.createStore(moodReducer);
