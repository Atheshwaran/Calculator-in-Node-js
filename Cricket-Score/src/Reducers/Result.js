const result = (result="", action) => {

    switch (action.type) {

        case "DisplayResult":
            return action.Result;

        default:
            return result;

    }
}

export default result;