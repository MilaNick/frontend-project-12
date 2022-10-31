import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import Chair from 'assets/images/chair.jpg';
import SignupForm from 'components/SignupForm';

import './index.scss';

const SignUp = () => {
    const {t} = useTranslation();

    return (
        <div className='card-wrap'>
            <div className='card shadow'>
                <div className='card__wrapper'>
                    <div className='card__image'>
                        <img src={Chair} alt=''/>
                    </div>
                    <div className='card__wrap'>
                        <h1 className='card__title'>{t('registration')}</h1>
                        <SignupForm/>
                    </div>
                </div>
                <div className='card__footer'>
                    <span>{t('Have an account?')}</span>
                    <Link to='/login' className='card__link'>{t('enter')}</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
