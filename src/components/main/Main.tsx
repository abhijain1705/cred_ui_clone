import React from 'react';
import Button from '../common/button/Button';
import './Main.scss';

const Main = () => {
  return (
    <div className='main-section-wrapper'>
      <div className='flex absolute-center main-section flex-col max-width'>
        <div className='main-heading'>rewards for paying credit card bills.</div>
        <div className='main-subheading'>join 9M+ members who win rewards and cashbacks everyday</div>
        <Button buttonText='Download CRED' />
      </div>
    </div>
  )
}

export default Main;