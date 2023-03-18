import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <div className='col-3'>
            <div className='blog-card'>
                <div className='card-image'>
                    <img className='img-fluid' src='images\blog-1.jpg' alt='blog' />
                </div>
                <div className='blog-content'>
                    <p className='date'>13 March, 2023</p>
                    <h5 className='title'>
                        Abeautiful sundaqy morning renaissance
                    </h5>
                    <p className='desc'>Lorem ipsum dolor sit amet. Est quasi numquam et quos corporis At perferendis nobis sed veniam consectetur..</p>
                    <Link to='/' className='button'>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard