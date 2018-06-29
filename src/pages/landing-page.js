import React from 'react';
import Carousel from 'nuka-carousel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '../components/group';
import './landing-page.css'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

const group = [
  {
    url: 'https://odysseyonline-img.rbl.ms/simage/http%3A%2F%2Fcdn1.theodysseyonline.com%2Ffiles%2F2015%2F11%2F09%2F635826395277009417-64976811_Single-Because.jpg/2000%2C2000/GVqnI8WV6hR3lYmF/img.jpg',
    title: 'Single',
    width: '33%',
  },
  {
    url: 'http://www.roseparkpsychology.com.au/wp-content/uploads/2014/08/Family-Therapy.jpg',
    title: 'Family',
    width: '33%',
  },
  {
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/01-prince-harry-meghan-markle-1517172379.jpg?crop=1.00xw:0.377xh;0,0.0457xh&resize=768:*',
    title: 'Couple',
    width: '34%',
  },
];


const activity_style = [
  {
    url: 'http://3.bp.blogspot.com/-7QCrq-5p7CI/UlvjxOZctFI/AAAAAAAABHM/Ips8G5QiHm0/s1600/sunday.jpg',
    title: 'Easy Weekend',
    width: '33%',
  },
  {
    url: 'data:image/jpeg;base64,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',
    title: 'Mild chill',
    width: '33%',
  },
  {
    url: 'https://media.npr.org/assets/img/2018/04/09/limp-wrist-52_custom-77b62c6c96e8252a1cf9889dffdadbbc74d377e0-s900-c85.jpg',
    title: 'Hard core',
    width: '34%',
  },
];

export default class extends React.Component {
    state = {
        postcode: '',
        group: 'single'
      };
    handleChange = postcode => event => {
        this.setState({
          [postcode]: event.target.value,
        });
      };

  render() {
    return (
      <div className='main'>
      <Carousel>
        <div className='slide start'>
        <h1> Let's start awesome weekend together</h1></div>
        <div className='slide postcode'> 
          <div className='postcode-container'>
          <InputLabel htmlFor="postcode">Postcode</InputLabel>
            <Input
              id="postcode"
              value={this.state.postcode}
              onChange={this.handleChange('postcode')}
              startAdornment={<InputAdornment position="start"></InputAdornment>}
            />
            </div>
        </div>
        <div className='slide group'> 
            <ButtonGroup data={group}/>
        
        </div>
        <div className='slide style'>  
          <ButtonGroup data={activity_style}/>
        </div>
       
      </Carousel>
      </div>
    );
  }
}