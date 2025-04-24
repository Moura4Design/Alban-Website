import React, { Component } from 'react';
import {  Card, CardTitle, CardActions } from 'react-mdl';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import { Link } from 'react-router-dom';
import en from '../Languages/en';
import fr from '../Languages/fr';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('fr', fr);

counterpart.setLocale('en');

class Portfolio extends Component {
    render() { 
        return ( 
            <div>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-xl-3 col-lg-4 col-md-6'}>
                            <div className={'card-card'}>
                                <Link style={{textDecoration:'none'}} to={'/weddings'}>
                                    <Card 
                                        className={'text-center mx-auto d-block card_style'} 
                                        shadow={0} 
                                        style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Weddings/38.jpg) center / cover`, marginTop: '60px'}}
                                    >
                                        <CardTitle expand />
                                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                            <Translate className={'card-title'} content={'weddings'} component={'span'} />
                                        </CardActions>
                                    </Card>
                                </Link>
                            </div>
                        </div>

                        <div className={'col-xl-3 col-lg-4 col-md-6'}>
                            <div className={'card-card'}>
                                <Link style={{textDecoration:'none'}} to={'/africa'}>
                                    <Card 
                                        className={'text-center mx-auto d-block card_style'} 
                                        shadow={0} 
                                        style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Travels/Africa/10.jpg) center / cover`, marginTop: '60px'}}
                                    >
                                        <CardTitle expand />
                                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                            <Translate className={'card-title'} content={'travels'} component={'span'} />
                                        </CardActions>
                                    </Card>
                                </Link>
                            </div>
                        </div>
                        
                        <div className={'col-xl-3 col-lg-4 col-md-6'}>
                            <div className={'card-card'}>
                                <Link style={{textDecoration:'none'}} to={'/casual'}>
                                    <Card 
                                        className={'text-center mx-auto d-block card_style'} 
                                        shadow={0} 
                                        style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Portraits/Casual/7.jpg) center / cover`, marginTop: '60px'}}
                                    >
                                        <CardTitle expand />
                                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                            <Translate className={'card-title'} content={'portraits'} component={'span'} />
                                        </CardActions>
                                    </Card>
                                </Link>
                            </div>
                        </div>

                        <div className={'col-xl-3 col-lg-4 col-md-6'}>
                            <div className={'card-card'}>
                                <Link style={{textDecoration:'none'}} to={'/nature'}>
                                    <Card 
                                        className={'text-center mx-auto d-block card_style'} 
                                        shadow={0} 
                                        style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Nature/10.jpg) center / cover`, marginTop: '60px'}}
                                    >
                                        <CardTitle expand />
                                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                                <Translate className={'card-title'} content={'nature'} component={'span'} />
                                        </CardActions>
                                    </Card>
                                </Link>
                            </div>
                        </div>

                        <div className={'col-xl-3 col-lg-4 col-md-6 d-xl-none d-block'}>
                            <div className={'card-card'}>
                                <Link style={{textDecoration:'none'}} to={'/animals'}>
                                    <Card 
                                        className={'text-center mx-auto d-block card_style'} 
                                        shadow={0} 
                                        style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Animals/13.jpg) center / cover`, marginTop: '60px'}}
                                    >
                                        <CardTitle expand />
                                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                            <Translate className={'card-title'} content={'animals'} component={'span'} />
                                        </CardActions>
                                    </Card>
                                </Link>
                            </div>
                        </div>

                        <div className={'col-xl-3 col-lg-4 col-md-6 d-xl-none d-block'}>
                            <div className={'card-card'}>
                                <Link style={{textDecoration:'none'}} to={'/eventcorporate'}>
                                    <Card 
                                        className={'text-center mx-auto d-block card_style'} 
                                        shadow={0} 
                                        style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Events/SocialEvents/3.jpg) center / cover`, marginTop: '60px'}}
                                    >
                                        <CardTitle expand />
                                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                            <Translate className={'card-title'} content={'events'} component={'span'} />
                                        </CardActions>
                                    </Card>
                                </Link>
                            </div>
                        </div>

                        {/* <div style={{paddingLeft: '150px'}} className='col-xl-1'></div>

                        <div className='col-xl-3 col-lg-4 col-md-6 d-none d-xl-block'>
                            <div className='card-card'>
                                <Link style={{textDecoration:'none'}} to='/animals'>
                                    <Card className='text-center mx-auto d-block' shadow={0} style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Animals/13.jpg) center / cover`, marginTop: '60px'}}>
                                        <CardTitle expand />
                                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                            <Translate className='card-title' content='animals' component='span' />
                                        </CardActions>
                                    </Card>
                                </Link>
                            </div>
                        </div> */}

                        {/* <div className='col-xl-3 col-lg-4 col-md-6 d-none d-xl-block'>
                            <div className='card-card'>
                                <Link style={{textDecoration:'none'}} to='/eventcorporate'>
                                    <Card className='text-center mx-auto d-block' shadow={0} style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Events/SocialEvents/3.jpg) center / cover`, marginTop: '60px'}}>
                                        <CardTitle expand />
                                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                            <Translate className='card-title' content='events' component='span' />
                                        </CardActions>
                                    </Card>
                                </Link>
                            </div>
                        </div> */}

                        {/* <div className='col-xl-3 col-lg-12'>
                            <div className='card-card'>
                                <Link style={{textDecoration:'none'}} to='/food'>
                                    <Card className='text-center mx-auto d-block' shadow={0} style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Food/10.jpg) center / cover`, marginTop: '60px'}}>
                                        <CardTitle expand />
                                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                        <Translate className='card-title' content='food' component='span' />
                                        </CardActions>
                                    </Card>
                                </Link>
                            </div>
                        </div>

                        <div className='col-xl-1'></div> */}


                    </div>
                </div>

                <div className={'container-fluid'}>
                    <div className={'row'}>

                        <div style={{paddingLeft: '150px'}} className={'col-xl-1'}></div>

                        <div className={'col-xl-3 col-lg-4 col-md-6 d-none d-xl-block'}>
                            <div className={'card-card'}>
                                <Link style={{textDecoration:'none'}} to={'/animals'}>
                                    <Card 
                                        className={'text-center mx-auto d-block card_style'} 
                                        shadow={0} 
                                        style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Animals/13.jpg) center / cover`, marginTop: '60px'}}
                                    >
                                        <CardTitle expand />
                                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                            <Translate className={'card-title'} content={'animals'} component={'span'} />
                                        </CardActions>
                                    </Card>
                                </Link>
                            </div>
                        </div>

                        <div className={'col-xl-3 col-lg-4 col-md-6 d-none d-xl-block'}>
                            <div className={'card-card'}>
                                <Link style={{textDecoration:'none'}} to={'/eventcorporate'}>
                                    <Card 
                                        className={'text-center mx-auto d-block card_style'} 
                                        shadow={0} 
                                        style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Events/SocialEvents/3.jpg) center / cover`, marginTop: '60px'}}
                                    >
                                        <CardTitle expand />
                                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                            <Translate className={'card-title'} content={'events'} component={'span'} />
                                        </CardActions>
                                    </Card>
                                </Link>
                            </div>
                        </div>

                        <div className={'col-xl-3 col-lg-12'}>
                            <div className={'card-card'}>
                                <Link style={{textDecoration:'none'}} to={'/food'}>
                                    <Card 
                                        className={'text-center mx-auto d-block card_style'} 
                                        shadow={0} 
                                        style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Food/10.jpg) center / cover`, marginTop: '60px'}}
                                    >
                                        <CardTitle expand />
                                        <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                        <Translate className={'card-title'} content={'food'} component={'span'} />
                                        </CardActions>
                                    </Card>
                                </Link>
                            </div>
                        </div>

                        <div className={'col-xl-1'}></div>

                    </div>
                </div>

            
                {/* <div className='card-portfolio'>
                   <div className='card-card'>
                        <Link style={{textDecoration:'none'}} to='/weddings'>
                            <Card className='text-center mx-auto d-block' shadow={0} style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Weddings/38.jpg) center / cover`, marginTop: '60px'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                    <Translate className='card-title' content='weddings' component='span' />
                                </CardActions>
                            </Card>
                        </Link>
                    </div>

                    <div className='card-card'>
                        <Link style={{textDecoration:'none'}} to='/africa'>
                            <Card className='text-center mx-auto d-block' shadow={0} style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Travels/Africa/10.jpg) center / cover`, marginTop: '60px'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                    <Translate className='card-title' content='travels' component='span' />
                                </CardActions>
                            </Card>
                        </Link>
                    </div>

                    <div className='card-card'>
                        <Link style={{textDecoration:'none'}} to='/casual'>
                            <Card className='text-center mx-auto d-block' shadow={0} style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Portraits/Casual/7.jpg) center / cover`, marginTop: '60px'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                    <Translate className='card-title' content='portraits' component='span' />
                                </CardActions>
                            </Card>
                        </Link>
                    </div>

                    <div className='card-card'>
                        <Link style={{textDecoration:'none'}} to='/nature'>
                            <Card className='text-center mx-auto d-block' shadow={0} style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Nature/10.jpg) center / cover`, marginTop: '60px'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                        <Translate className='card-title' content='nature' component='span' />
                                </CardActions>
                            </Card>
                        </Link>
                    </div>

                </div>

                <div className="row">
                    <div className='col-xl-2'></div>
                    <div className='col-xl-8'>
                    <div className='card-portfolio'>
                    <div className='card-card'>
                        <Link style={{textDecoration:'none'}} to='/animals'>
                            <Card className='text-center mx-auto d-block' shadow={0} style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Animals/13.jpg) center / cover`, marginTop: '60px'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                    <Translate className='card-title' content='animals' component='span' />
                                </CardActions>
                            </Card>
                        </Link>
                    </div>

                    <div className='card-card'>
                        <Link style={{textDecoration:'none'}} to='/eventcorporate'>
                            <Card className='text-center mx-auto d-block' shadow={0} style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Events/SocialEvents/3.jpg) center / cover`, marginTop: '60px'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                    <Translate className='card-title' content='events' component='span' />
                                </CardActions>
                            </Card>
                        </Link>
                    </div>

                    <div className='card-card'>
                        <Link style={{textDecoration:'none'}} to='/food'>
                            <Card className='text-center mx-auto d-block' shadow={0} style={{width: '260px', height: '300px', borderRadius: '15%', background: `url(/images/Food/10.jpg) center / cover`, marginTop: '60px'}}>
                                <CardTitle expand />
                                <CardActions style={{height: '52px', padding: '16px', background: 'rgba(255,255,255,0.5)', marginTop:'84%'}}>
                                   <Translate className='card-title' content='food' component='span' />
                                </CardActions>
                            </Card>
                        </Link>
                    </div>
                </div>
                    </div>
                    <div className='col-xl-2'></div>
                </div>
                */}
                <div className={'pt-4'}></div>
           </div>
         );
    }
}

 
export default Portfolio;