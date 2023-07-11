import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props.name + "Child Component");

        this.state = {
            count:0,
            count1:0
        }
    }

    componentDidMount(){
        console.log(this.props.name +"Child Component Did Mount");
      }


    render(){
        console.log(this.props.name +"Child Render");
        return (
            <div className="user-card">
            <h2>Count: {this.state.count}</h2>
            <h2>Count1: {this.state.count1}</h2>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                    count1: this.state.count1 + 2
                })
            }}>Count Increase </button>
            <h3>Name: {this.props.name}</h3>
            <h4>Location: {this.props.location}</h4>
           
        </div>
        )
    }

}

export default UserClass;
