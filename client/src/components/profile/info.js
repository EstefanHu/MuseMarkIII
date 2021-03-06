import React from 'react';

import ProfileImage from './info/image';
import Name from './info/name';
import Email from './info/email';
import Credibility from './info/credibility';
import Link from './info/link';

const Info = props => {
  const { firstName, lastName, email, credibility, links } = props.user;
  return (
    <section className="left" >
      <div style={info} >
        <ProfileImage />
        <Name name={ firstName + " " + lastName } />
        <Email email={ email } />
        <Credibility credibility={ credibility } />
        <Link links={ links }/>
      </div>
    </section>
    
  )
}

const info = {
  backgroundColor: 'white',
  boxShadow: '12px 12px 12px 0 rgba(0, 0, 0, 0.05)',
  height: 'auto',
  width: '240px',
  padding: '20px',
  borderRadius: '5px',
  position: 'fixed',
  textAlign: 'center'
}

export default Info;