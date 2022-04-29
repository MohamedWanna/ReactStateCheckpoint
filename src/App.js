import React, { Component } from 'react'
import "./styles.css"
import Myprofile from './Myprofile';
export default class App extends Component {

  state = {
    fullName: "Mohamed Wanna",
    bio: "Licence",
    profession: "Freelance",
    imgSrc: "/images/Myself.jpg",
    show: false,
    timeApp:0
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({timeApp:this.state.timeApp+1})
    }, 1000);
  }
 showMyProfile() {
    this.setState({ show:!this.state.show})
  }
  render() {
    return (
      <div>
        <div>
          <h3>Time App:<span>{this.state.timeApp}</span></h3>
        </div>

        <button onClick={() =>this.showMyProfile()}>Show</button>
        {
          this.state.show ?<Myprofile />:""
        }

      </div>
    );
  }
}


