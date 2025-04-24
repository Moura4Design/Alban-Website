import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from '../Languages/en';
import fr from '../Languages/fr';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('fr', fr);

counterpart.setLocale('en');

class Navbar extends Component {
    state = {
        lang: 'en'
    }

    onLangChange = (e) => {
        this.setState({lang: e.target.value})
        counterpart.setLocale(e.target.value)
    }

    render() { 
    
        return ( 
            <div>
                <div>
                    <nav className={'navbar navbar-expand-md navbar-dark'} style={{borderBottom: '1px solid black'}}>
                        <Link className={'navbar-brand'} style={{color: '#7B7C80'}} to='/'>Alban Wagner<br />
                            <Translate content={'title'} component={'span'} style={{fontSize: '13px', marginLeft: '20px'}} />
                        </Link>
                        <button className={'navbar-toggler'}
                            data-toggle={'collapse'} 
                            data-target={'#collapse_target'}>
                            <span className={'navbar-toggler-icon'}></span>
                        </button>
                        <div className={'collapse navbar-collapse'} id={'collapse_target'}>
                            <ul className={'navbar-nav ml-4'}>
                                <li className={'nav-item'}>
                                    <div className={'btn-group'}>

                                        <Link 
                                            className={'text-uppercase'} 
                                            to={'/portfolio'} 
                                            style={{textDecoration: 'none'}}
                                        >
                                            <Translate content={'link'} component={'span'} className={'nav-link'} />
                                        </Link>

                                        <Link 
                                            to={'/'} 
                                            className={"dropdown-toggle"} 
                                            style={{color: '#7B7C80', marginTop: '7px', marginRight:'7px', cursor: 'pointer'}}  
                                            data-toggle={"dropdown"} 
                                            id={'dropdown_target'}>
                                        </Link>

                                        <div className={'dropdown-menu'}>

                                            <Link 
                                                className={'text-uppercase'} 
                                                to={'/weddings'} 
                                                style={{textDecoration: 'none'}}
                                            >
                                                <Translate content={'weddings'} component={'span'} className={'nav-link'} />
                                            </Link>

                                            <Link className={'text-uppercase'} to={'/africa'} style={{textDecoration: 'none'}}>
                                                <Translate content={'travels'} component={'span'} className={'nav-link'} />
                                            </Link>

                                            <Link className={'text-uppercase'} to={'/casual'} style={{textDecoration: 'none'}}>
                                                <Translate content={'portraits'} component={'span'} className={'nav-link'} />
                                            </Link>

                                            <Link className={'text-uppercase'} to={'/nature'} style={{textDecoration: 'none'}}>
                                                <Translate content={'nature'} component={'span'} className={'nav-link'} />
                                            </Link>

                                            <Link className={'text-uppercase'} to={'/animals'} style={{textDecoration: 'none'}}>
                                                <Translate content={'animals'} component={'span'} className={'nav-link'} />
                                            </Link>

                                            <Link className={'text-uppercase'} to={'/eventcorporate'} style={{textDecoration: 'none'}}>
                                                <Translate content={'events'} component={'span'} className={'nav-link'} />
                                            </Link>

                                            <Link className={'text-uppercase'} to={'/food'} style={{textDecoration: 'none'}}>
                                                <Translate content={'food'} component={'span'} className={'nav-link'} />
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li className={'nav-item'}>
                                    <Link className={'text-uppercase'} to={'/about'} style={{textDecoration: 'none'}}>
                                        <Translate content={'about'} component={'span'} className={'nav-link'} />  
                                    </Link>  
                                </li>
                                <li className={'nav-item'}>
                                    <Link className={'text-uppercase'} to={'/contact'} style={{textDecoration: 'none'}}>
                                        <Translate content={'contact'} component={'span'} className={'nav-link'} />
                                    </Link>
                                </li>
                            </ul>
                            <select className={'options-languages'} value={this.state.lang} onChange={this.onLangChange}>
                                <option value={'en'}>EN</option>
                                <option value={'fr'}>FR</option>
                            </select>

                            <div className={'ml-auto mr-2 d-block'}>
                                <ul className={'navbar-nav align-items-md-end social-media'}>
                                    <li className={'nav-item social-links'}>
                                        <a 
                                            className={'nav-link'} 
                                            href={'https://www.facebook.com/albanwagnerphotography'} 
                                            target={'_blank'}
                                            rel='noopener noreferrer'
                                        >
                                            <i className={'fa fa-facebook-square'} aria-hidden={'true'}></i> 
                                        </a>
                                    </li>
                                    <li className={'nav-item social-links'}>
                                        <a 
                                            className={'nav-link'} 
                                            href={'https://www.instagram.com/alban_wagner_photography/'} 
                                            rel='noopener noreferrer'
                                            target={'_blank'}
                                        >
                                            <i className={'fa fa-instagram'} aria-hidden={'true'}></i> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
               
            </div>
        );
    }
}
 
export default Navbar;

