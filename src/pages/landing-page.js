import React from 'react';
import Postcode from '../components/postcode';
import Group from '../components/group';
import Footer from '../components/footer';

import './landing-page.css'

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: 0,
      active: 'postcode',
    };
    this.postcodeCallback = this.postcodeCallback.bind(this);
  }

  postcodeCallback(x) {
    this.setState({postcode: x, active: 'group'});
  }

  getActive() {
    switch(this.state.active) {
      case 'postcode':
        return <Postcode callback={this.postcodeCallback}/>
        break;
      case 'group':
        return <Group />
        break;
    }
  }

  render() {
    return (
      <div>
        {this.getActive()}
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
