const Name = (name = 'athi', action) => {

    switch (action.type) {

        case "Name":
            return name = (action.payload);

        default:
            return name;

    }
}

export default Name;