export const name = (name) => {

    return { type: "Name", payload: name };

}

export const standard = (clas) => {

    return { type: "Class", payload: clas };

}

export const dob = (dob) => {

    return { type: "Dob", payload: dob };

}

export const age = (age) => {

    return { type: "Age", payload: age };

}

export const phone = (phone) => {

    return { type: "Phone", payload: phone };

}

export const states = (state) => {

    return { type: "Update", payload: state };

}

export const counter = () => {

    return { type: "Increment"};

}

