import React from 'react'
// import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className='footer d-flex align-items-center justify-content-evenly w-100 mb-5'>
                <div style={{ width: '400px' }}>
                    <h4 style={{ color: "white", fontSize: '20px' }}><i class="fa-solid fa-video  text-warning me-2"></i>Media Player</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio reprehenderit, eum incidunt provident ad quasi illum ratione laudantium nisi inventore eligendi facere odit voluptatibus a tenetur aspernatur excepturi non vero!</p>
                </div>
                <div>
                <h4>Links</h4>
                <Link to={'/'} style={{textDecoration:'none'}}><h6>Landing Page</h6></Link>
                <Link to={'/home'} style={{textDecoration:'none'}}><h6>Home Page</h6></Link>
                <Link to={'/watch'} style={{textDecoration:'none'}}><h6>History Page</h6>
                </Link>
            </div>
            <div>
                <h4>Guides</h4>
                <h6>React</h6>
                <h6>React Bootstarp</h6>
                <h6>Bootswatch</h6>
            </div>
            <div>
                <h4>Contact Us</h4>
                <div className='d-flex'> 
                    <input type="text" placeholder='Enter your Email' className='form-control' />
                    <button className='btn btn-warning ms-2'>Subscribe</button>
                </div>
                <div className="mt-4 color-white mb-5 fs-4 justify-content-evenly d-flex ">
            
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-facebook"></i>
            
            </div>
               
            </div>
            </div>
           
           
            <div className='text-center'>
                <p>Copyright &#169; 2023.Media player built with react</p>
            </div>
        </>
    )
}
