import React from "react";
import './ContactForm.css';
import { Box, Stack, Typography } from '@mui/material'
import {helpDog} from "../assest/frolic-pug-puppy-dog-red-cap-holding-up-tablet-phone-text-contact-us-hanging-sideways-white-banne-isolated-frolic-109394706.webp"


const Contact = () => {
  return (
    <div>
      <Box  className='rescue-home'sx={{ p: 2.9 ,backgroundPosition:'center',backgroundSize:'cover' , backgroundRepeat:'no-repeat', backgroundImage:`url(https://img.freepik.com/free-vector/frame-with-dogs-vector-white-background_53876-127700.jpg?w=1060&t=st=1694492636~exp=1694493236~hmac=7a3a88219cab702bd7d76a9a1c82e4929ed4a3db88301666e5cfe5e2a07d4995)`}}>
          <Stack justifyContent='end' alignItems='center'>
              <Box minHeight='100vh' display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <Typography maxWidth="600px" fontSize={{md:58,sm:48,xs:38}} fontWeight={700} color='#ff6d00' lineHeight={1.5} letterSpacing={1} textAlign={'center'} >
                  "Get in touch with us today and let's make tails wag together!"</Typography>
                <div>
                  <button className="rescue-btn">Contact Us</button>
                </div>
              </Box>  
          </Stack>
        </Box>
      {/* <h2 className="common-heading">Feel Free to Contact us</h2> */}
      
      <div class="contact-container">
        <h2 className="common-heading">Feel Free to Contact Us</h2>
        <div class="contact-info">
            <p>We Love Hearing from You!</p>
            <p>Email: <a href="mailto:contact@yourpetwebsite.com">contact@yourpetwebsite.com</a></p>
            <p>Phone: [Phone Number]</p>
            <p>Social Media: <a href="https://www.facebook.com/YourPetWebsite">Facebook</a>, <a href="https://www.instagram.com/YourPetWebsite">Instagram</a></p>
        </div>
        <div class="office-address">
            <p>Our Office Address:</p>
            <p>[Your Pet Animal Website Name]</p>
            <p>123 Pet Lovers Lane</p>
            <p>City, State ZIP Code</p>
            <p>Country</p>
        </div>
        <div class="support-hours">
            <p>Customer Support Hours:</p>
            <ul>
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
            </ul>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

        {/* <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xaygjgry"
              method="POST"
              className="contact-inputs">
              <input
                type="text"
                name="username"
                placeholder="username"
                autoComplete="off"
                required
              />

              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />

              <textarea
                name="message"
                cols="30"
                rows="6"
                autoComplete="off"
                placeholder="write your message..."
                required></textarea>
              <input className="rescue-btn" type="submit" value="Contact Us" />
            </form>
          </div>
        </div> */}
      <Box   sx={{  p: 2.9 ,backgroundSize:'cover',  boxSizing: 'content-box', backgroundRepeat:'no-repeat', backgroundImage:`url(https://images.unsplash.com/photo-1548092372-6fa982d00458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`}}>
      <div className="container">
        <h1 className="form-heading">Get in Touch </h1>
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xaygjgry"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              placeholder="write your message..."
              required></textarea>
            <input className="rescue-btn" type="submit" value="Contact Us" />
          </form>
        </div>
      </div>
        </Box>
    </div>
  );
};

export default Contact;

