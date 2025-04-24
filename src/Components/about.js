import React from 'react';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from '../Languages/en';
import fr from '../Languages/fr';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('fr', fr);

counterpart.setLocale('en');

const About = () => {
    return (
            <div>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-6'}>
                            <h3 className={'text-center'}>Alban Wagner</h3>
                        </div>
                        <div className={'col-md-6'}></div>
                    </div>
                </div>
                <div className={'container'}>
                    <div className={'row'}>
                        {/* <div className='col-md-6 align-self-start mt-2 cont_img'>
                            <img className='img-fluid' src='/images/Alban.jpg' width='500' alt='aboutme' />
                            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className='but' rel='noopener noreferrer' target='_blank'>
                                <i className='fa fa-hand-pointer'></i>
                            </a>
                        </div> */}
                        <div className={'col-md-6 align-self-start mt-2'}>
                            <img className={'img-fluid mx-auto d-block'} src={'/images/Alban.jpg'} width={'400'} alt={'aboutme'} />
                        </div>
                        <div className={'col-md-6'}>
                            <Translate content={'textp1'} component={'p'} />
                            <Translate content={'textp2'} component={'p'} />
                            <Translate content={'textp3'} component={'p'} />
                            <Translate content={'textp4'} component={'p'} />
                            <Translate content={'textp5'} component={'p'} />
                            <Translate content={'textp6'} component={'p'} />
                            <Translate content={'textp7'} component={'p'} />
                            <Translate content={'textp8'} component={'p'} />
                            <Translate content={'textp9'} component={'p'} />
                        </div>
                    </div>
                </div>
                <div className={'pt-5'}></div>
            </div>
    )
} 
 
export default About;