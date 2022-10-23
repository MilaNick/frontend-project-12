import {useContext} from 'react';

import {AuthContext} from 'App';
import Button from 'ui/Button';

import './index.scss';

const Footer = () => {
  const { logout} = useContext(AuthContext);
  return (
    <footer className='footer'>
      <div className='created-by'>created by <a href='https://github.com/MilaNick/frontend-project-12'
                                                 target='_blank' rel='noreferrer'>MilaNick</a></div>
      <Button onClick={logout} size='md' top='sm'>Выйти</Button>
    </footer>
  )
}

export default Footer;
