const showS = (showFormS= false, action) => {

    switch (action.type) {

        case "DisplayFormS":
            return  action.payload;

        default:
            return showFormS;

    }
}

export default showS;