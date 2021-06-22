import React from 'react';

class CheckBox extends React.Component {


    state = {
        sub: { Physics: false, Chemistry: false, Maths: false }, clas: {
            six: false, seven: false, eight: false,
            nine: false, ten: false, eleven: false, tweleve: false
        }
    };

    checkSubject = (e) => {
        let { name, checked } = e.target;

        this.setState((e) => {
            let selected = e.sub;
            selected[name] = checked;
            return selected[name];
        })
    }

    checkClass = (e) => {
        let { name, checked } = e.target;

        this.setState((e) => {
            let selected = e.clas;
            selected[name] = checked;
            return selected[name];
        })
    }


    



    render() {

        let displaySubject = this.props.subject;
        displaySubject = Object.keys(this.state.sub).filter((x) => this.state.sub[x]);
        this.props.subValue(displaySubject + "");

        console.log(this.state.sub);
        if (this.props.status) {

            // if (this.state.sub.Physics === true)
            //     this.setState({ sub: { Physics: false } });

            // if (this.state.sub.Chemistry === true)
            //     this.setState({ sub: { Chemistry: false } });

            // if (this.state.sub.Maths === true)
            //     this.setState({ sub: { Maths: false } });


            // if (this.state.clas.six === true)
            //     this.setState({ clas: { six: false } });

            // if (this.state.clas.seven === true)
            //     this.setState({ clas: { seven: false } });

            // if (this.state.clas.eight === true)
            //     this.setState({ clas: { eight: false } });

            // if (this.state.clas.nine === true)
            //     this.setState({ clas: { nine: false } });

            // if (this.state.clas.ten === true)
            //     this.setState({ clas: { ten: false } });

            // if (this.state.clas.eleven === true)
            //     this.setState({ clas: { eleven: false } });

            // if (this.state.clas.tweleve === true)
            //     this.setState({ clas: { tweleve: false } });



            this.props.changeCheck(false);
        }
        console.log(this.state.sub);



        let displayClass = this.props.standard;
        displayClass = Object.keys(this.state.clas).filter((x) => this.state.clas[x]);
        this.props.classValue(displayClass + "");

       

        return (<>
            

            Class :
            <input type='checkbox' value={this.state.clas.six} name='six' onChange={this.checkClass} checked={this.state.clas.six} /> <label> 6 </label>
            <input type='checkbox' value={this.state.clas.seven} name='seven' onChange={this.checkClass} checked={this.state.clas.seven} /> <label> 7 </label>
            <input type='checkbox' value={this.state.clas.eight} name='eight' onChange={this.checkClass} checked={this.state.clas.eight} /> <label> 8 </label>
            <input type='checkbox' value={this.state.clas.nine} name='nine' onChange={this.checkClass} checked={this.state.clas.nine} /> <label> 9 </label>
            <input type='checkbox' value={this.state.clas.ten} name='ten' onChange={this.checkClass} checked={this.state.clas.ten} /> <label> 10 </label>
            <input type='checkbox' value={this.state.clas.eleven} name='eleven' onChange={this.checkClass} checked={this.state.clas.eleven} /> <label> 11 </label>
            <input type='checkbox' value={this.state.clas.twelve} name='twelve' onChange={this.checkClass} checked={this.state.clas.twelve} /> <label> 12 </label> <br />


            Subject:
            <input type='checkbox' name='Physics' value={this.state.sub.Physics} checked={this.state.sub.Physics} onChange={this.checkSubject} /> <label> Physics </label>
            <input type='checkbox' name='Chemistry' value={this.state.sub.Chemistry} checked={this.state.sub.Chemistry} onChange={this.checkSubject} /> <label> Chemistry </label>
            <input type='checkbox' name='Maths' value={this.state.sub.Maths} checked={this.state.sub.Maths} onChange={this.checkSubject} /> <label> Maths </label> <br />


        </>)
    }
}

export default CheckBox;





