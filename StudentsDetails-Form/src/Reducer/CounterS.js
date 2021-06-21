const counterS = (count=1, action) => {

    switch (action.type) {

        case "IncrementS":
            return ++count;

        default:
            return count;

    }
}

export default counterS;