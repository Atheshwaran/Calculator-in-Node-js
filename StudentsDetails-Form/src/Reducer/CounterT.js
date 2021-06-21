const counterT = (count=1, action) => {

    switch (action.type) {

        case "IncrementT":
            return ++count;

        default:
            return count;

    }
}

export default counterT;