import {useContext} from 'react';
import {useTranslation} from 'react-i18next';

import {AuthContext} from 'App';
import Button from 'ui/Button';

import './index.scss';

const Footer = () => {
    const {t} = useTranslation();

    const {auth, logout} = useContext(AuthContext);

    return (
        <footer className='footer'>
            <div className='created-by'>created by <a href='https://github.com/MilaNick/frontend-project-12'
                                                      target='_blank' rel='noreferrer'>MilaNick</a></div>
            {auth && <Button onClick={logout} size='md' top='sm'>{t('exit')}</Button>}
        </footer>
    )
}

export default Footer;
