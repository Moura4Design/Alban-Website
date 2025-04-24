import React, { Component } from 'react';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from '../Languages/en';
import fr from '../Languages/fr';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('fr', fr);

counterpart.setLocale('en');

class Contact extends Component {
    render() { 
        return ( 
            <div>
                <div className={'container'}>
                    <div className={'row'}>

                        <div className={'col-md-6'} style={{padding: '2em'}}>
                            <img className={'img-fluid mx-auto d-block'} src={"/images/contact.jpg"} alt={'Contacto'} width={'300'} />
                            <br />
                            <Translate content={'text10'} component={'p'} />
                            <Translate content={'text11'} component={'p'} />
                            <Translate content={'text12'} component={'p'} />
                        </div>
            
                         <div className={'col-md-6 align-self-center'}>
                            <section className={'contact-space'}>
                                <form method={'post'} action={'https://formspree.io/info@albanwagner.nl'}>
                                    <div>
                                        <Translate content={'name'} component={'label'} />
                                        <input type={'text'} name={'name'} />

                                        <Translate className={'mt-2'} content={'email'} component={'label'} />
                                        <input type={'email'} name={'_replyto'} />

                                    </div>
                                    <Translate className={'mt-2'} content={'message'} component={'label'} />
                                    <textarea className={'contactTextArea'} type={'text'} name={'message'}></textarea>
                        
                        
                                    <div className={'btnSubmit'}>
                                        <Translate className={'form-control mt-4'} component={'input'} type={'submit'} attributes={{value: 'send'}} />
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                    <h3 className={'text-center'}>Pricing</h3>
                    <div className={'row justify-content-center'}>
                        <div className={'col-lg-4 col-md-6 mt-3 d-flex justify-content-center'}>
                            <div className={'card priceCard'}>
                                <div className={'card-header text-center priceHeader'}>
                                    <h4>Wedding – Standard package</h4>
                                </div>
                                <div className={'card-body text-center'}>
                                    <p className={'h5 text-dark'}><b>From 800 Euros</b></p>
                                    <p>6 hours shoot on location</p>
                                    <p>200 retouched pictures (minimum)</p>
                                    <p>Pictures delivered via web transfer within 1 month</p>
                                    <p>Including High Quality pictures on USB stick</p>
                                    <p>No traveling costs in Utrecht and Amsterdam area</p>
                                </div>
                            </div>
                        </div>

                        <div className={'col-lg-4 col-md-6 mt-3 d-flex justify-content-center'}>
                            <div className={'card priceCard'}>
                                <div className={'card-header text-center priceHeader'}>
                                    <h4>Wedding – Deluxe package</h4>
                                </div>
                                <div className={'card-body text-center'}>
                                    <p className={'h5 text-dark'}><b>From 1000 Euros</b></p>                                        
                                    <p>8 hours shoot on location</p>
                                    <p>275 retouched pictures (minimum)</p>
                                    <p>Pictures delivered via web transfer within 1 month</p>
                                    <p>Including High Quality pictures on USB stick</p>
                                    <p>No traveling costs in Utrecht and Amsterdam area</p>
                                </div>
                            </div>
                        </div>

                        <div className={'col-lg-4 col-md-6 mt-3 d-flex justify-content-center'}>
                            <div className={'card priceCard'}>
                                <div className={'card-header text-center priceHeader'}>
                                    <h4>Wedding – Premium package</h4>
                                </div>
                                <div className={'card-body text-center'}>
                                    <p className={'h5 text-dark'}><b>From 1200 Euros</b></p>                                        
                                    <p>10 hours shoot on location</p>
                                    <p>350 retouched pictures (minimum)</p>
                                    <p>Pictures delivered via web transfer within 1 month</p>
                                    <p>Including High Resolution pictures on USB stick</p>
                                    <p>No traveling costs in Utrecht and Amsterdam area</p>
                                    <p><b>Extra</b></p>
                                    <p>Additional hour: 100 Euros</p>
                                    <p>Traveling costs per km from 3531GJ: 0,35 Euros</p>
                                </div>
                            </div>
                        </div>

                        <div className={'col-lg-4 col-md-6 mt-3 d-flex justify-content-center'}>
                            <div className={'card priceCard'}>
                                <div className={'card-header text-center priceHeader'}>
                                    <h4>Headshot / Family Session</h4>
                                </div>
                                <div className={'card-body text-center'}>
                                    <p className={'h5 text-dark'}><b>From 100 Euros</b></p>                                        
                                    <p>Studio (Utrecht) or Location Shoot</p>
                                    <p>6 retouched images</p>
                                    <p>1 hour shoot</p>
                                    <p>Wide variety of lighting and backgrounds</p>
                                    <p>Pictures delivered via web transfer within 2 weeks</p>
                                </div>
                            </div>
                        </div>

                        <div className={'col-lg-4 col-md-6 mt-3 d-flex justify-content-center'}>
                            <div className={'card priceCard'}>
                                <div className={'card-header text-center priceHeader'}>
                                    <h4>Event Session</h4>
                                </div>
                                <div className={'card-body text-center'}>
                                    <p className={'h5 text-dark'}><b>From 250 Euros</b></p>                                        
                                    <p>2,5 hours shoot on location</p>
                                    <p>50 retouched pictures (minimum)</p>
                                    <p>Pictures delivered via web transfer within 2 weeks</p>
                                    <p>No traveling costs in Utrecht and Amsterdam area</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <br />
                <Translate className={'text-center'} content={'alban'} component={'p'}/>
            
            </div>
         );
    }
}
 
export default Contact;
