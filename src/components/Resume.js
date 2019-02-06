import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Education from './Education';

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
      <br />
      <br />
      <br />
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img 
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '2em'}}>Rajal Kumar</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Location</h5>
            <p>Wellington, New Zealand</p>
            <h5>Phone</h5>
            <p>123 456 7890</p>
            <h5>Email</h5>
            <p>rajalkumar@protonmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
              <Education />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
