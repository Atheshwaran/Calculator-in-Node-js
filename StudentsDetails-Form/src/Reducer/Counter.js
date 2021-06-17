const counter = (count=1, action) => {

    switch (action.type) {

        case "Increment":
            return ++count;

        default:
            return count;

    }
}

export default counter;