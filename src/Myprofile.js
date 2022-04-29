import React, { Component } from 'react'
import "./styles.css";
export default class Profile extends Component {
    state = {
        fullName: "Mohamed Wanna",
        bio: "Licence",
        profession: "Freelance",
        imgSrc: "/images/Myself.jpg",
        show: false,
    }
    render() {
        return (
            <div>
                <img src={this.state.imgSrc} alt="Myself" />
                <h3><span className='titre'>Full Name:</span>
                <span>
                    {
                        this.state.fullName
                    }
                </span>
                </h3>
                <h3><span className='titre'>Bio:</span>
                <span>
                    {
                        this.state.bio
                    }
                </span>
                </h3>
                <h3><span className='titre'>Profession:</span>
                <span>
                    {
                        this.state.profession
                    }
                </span>
                </h3>
            </div>
        );
    }
}

