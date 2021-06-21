const showT = (showFormT= false, action) => {

    switch (action.type) {

        case "DisplayFormT":
            return {showFormT: action.payload};

        default:
            return showFormT;

    }
}

export default showT;