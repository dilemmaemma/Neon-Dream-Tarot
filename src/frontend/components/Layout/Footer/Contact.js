import React from 'react';
import '../../../styles/Contact.css';

const Contact = () => (
  <div>
    <a href="mailto:neondreamtarot@gmail.com" className='contact-link'>
        <i className="fas fa-envelope contact-icon"></i> 
        <p className='contact-text'>Book a reading with me</p>
    </a>
    <br />
    <a href="https://www.instagram.com/neon_dream_tarot" className='contact-link'>
        <i className="fab fa-instagram contact-icon"></i> 
        <p className='contact-text'>Check me out on Instagram</p>
    </a>
    <br />
    <a href="https://www.youtube.com/@Neon_Dream_Tarot" className='contact-link'>
        <i className="fab fa-youtube contact-icon"></i> 
        <p className='contact-text'>Check out my full collective reads on YouTube</p>
    </a>
    <br />
    <a href="https://www.tiktok.com/@neon_dream_tarot" className='contact-link'>
        <i className="fab fa-tiktok contact-icon"></i> 
        <p className='contact-text'>Watch my collective read reels</p>
    </a>
  </div>
);

export default Contact;
