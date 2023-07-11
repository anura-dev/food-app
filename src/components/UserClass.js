import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props.name + "Child Component Constructor");

        this.state = {
            // count:0,
            // count1:0
            userInfo: {
                login: "dummy",
                
            }
        }
    }

   async componentDidMount(){
      console.log(this.props.name +"Child Component Did Mount");
      const data = await fetch("https://api.github.com/users/anura-dev");
      const json = await data.json();
      console.log(json);

      this.setState({
        userInfo:json
      })
      }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render(){
       console.log(this.props.name +"Child Render");
      const {login, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
           {/* <h2>Count: {this.state.count}</h2>
            <h2>Count1: {this.state.count1}</h2>
            {/*<button onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                    count1: this.state.count1 + 2
                })
            }}>Count Increase </button> */}
            <img src= {avatar_url} />
            <h3>Login: {login}</h3>
           
        </div>
        )
    }

}

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy data)
 * Render (dummy)
 *      <HTML Dummy data>
 * Component Did Mount
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATING ----
 *
 *      render again (state has been updated with API data)
 *      <HTML (new API data>)
 *      componentDid Update
 *
 *
 *
 *
 */

export default UserClass;
