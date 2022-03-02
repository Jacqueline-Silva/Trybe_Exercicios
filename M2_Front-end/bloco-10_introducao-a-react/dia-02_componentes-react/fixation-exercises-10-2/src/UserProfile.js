import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div className='content'>
        <section className='card'>
          <p > {this.props.user.name} </p>
          <p > {this.props.user.email} </p>
          <p className="cardImage">
            <Image  source={this.props.user.avatar} alternativeText="User avatar" />
          </p>
          
        </section>
      </div>
    );
  }
}

export default UserProfile;