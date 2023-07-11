import React from 'react'
import UserClass from "./UserClass";

class About extends React.Component{

  constructor(props){
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent Component Did Mount");
  }

  render(){
    console.log("Parent Render");
    return (
          <div>
              <h2>About Class Page</h2>
              <h3>This is Food App</h3>
              <UserClass name = {"First classes"} location={"Gurgaon classes"} />
            { /* <UserClass name = {"Second classes"} location={"US classes"} />*/ } 
          </div>
    )
  }

}

// const About = () => {
//   return (
//     <div>
//         <h2>About Page</h2>
//         <h3>This is Food App</h3>
//     </div>
//   )
// }

//Render Phase
  // Parent Constructor
  // Parent Render
  //   First Child Component
  //   First Child Render
  //   Second Child Component
  //   Second Child Render

//Commit Phase (DOM UPDATED - IN SINGLE BATCH )
  // First Child Component Did Mount
  // Second Child Component Did Mount
  //  Parent Component Did Mount

export default About;
