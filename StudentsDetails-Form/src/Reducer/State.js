const state = (state='', action) => {

    switch (action.type) {

        case "Update":
            return { state: action.payload };

        default:
            return state;

    }
}

export default state;