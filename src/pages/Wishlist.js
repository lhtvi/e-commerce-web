import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Wishlist = () => {
    return (
        <>
            <Meta title='WishList' />
            <BreadCrumb title='WishList' />
            <div className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img className='position-absolute cross img-fluid' src='images\cross.svg' alt='cross' />
                                <div className='wishlist-card-image'>
                                    <div className='wishlist-card-image'>
                                        <img className='img-fluid w-100' src='images\watch1.jpg' alt='watch' />
                                    </div>
                                    <div className=' py-3 px-3'>
                                    <h5 className='title'>
                                        Abeautiful sundaqy morning renaissance
                                    </h5>
                                    <h6 className='price'>$ 100</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img className='position-absolute cross img-fluid' src='images\cross.svg' alt='cross' />
                                <div className='wishlist-card-image'>
                                    <div className='wishlist-card-image'>
                                        <img className='img-fluid w-100' src='images\watch1.jpg' alt='watch' />
                                    </div>
                                    <div className=' py-3 px-3'>
                                    <h5 className='title'>
                                        Abeautiful sundaqy morning renaissance
                                    </h5>
                                    <h6 className='price'>$ 100</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img className='position-absolute cross img-fluid' src='images\cross.svg' alt='cross' />
                                <div className='wishlist-card-image'>
                                    <div className='wishlist-card-image'>
                                        <img className='img-fluid w-100' src='images\watch1.jpg' alt='watch' />
                                    </div>
                                    <div className=' py-3 px-3'>
                                    <h5 className='title'>
                                        Abeautiful sundaqy morning renaissance
                                    </h5>
                                    <h6 className='price'>$ 100</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img className='position-absolute cross img-fluid' src='images\cross.svg' alt='cross' />
                                <div className='wishlist-card-image'>
                                    <div className='wishlist-card-image'>
                                        <img className='img-fluid w-100' src='images\watch1.jpg' alt='watch' />
                                    </div>
                                    <div className=' py-3 px-3'>
                                    <h5 className='title'>
                                        Abeautiful sundaqy morning renaissance
                                    </h5>
                                    <h6 className='price'>$ 100</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist
