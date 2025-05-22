  {/* Booking Section */}
  import React, { useRef, useState } from 'react';
  
  import './App.css';
  
  const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const bookingRef = useRef(null);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  
    const toggleMenu = () => setMenuOpen(!menuOpen);
  
    const scrollToBooking = () => {
      bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      alert('Your message has been sent!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    };
    
  
    return (
        <div>
  <section className="booking-section" ref={bookingRef} id="book">
  <h2>Book Your Stay</h2>
  <p>Fill in the form below to reserve your spot at Lucky Dormitory.</p>
<form className="booking-form">
<div className="form-group">
<label htmlFor="name">Full Name</label>
<input type="text" id="name" name="name" required />
</div>

<div className="form-group">
<label htmlFor="email">Email Address</label>
<input type="email" id="email" name="email" required />
</div>

<div className="form-group">
<label htmlFor="checkin">Check-in Date</label>
<input type="date" id="checkin" name="checkin" required />
</div>

<div className="form-group">
<label htmlFor="checkout">Check-out Date</label>
<input type="date" id="checkout" name="checkout" required />
</div>

<div className="form-group">
<label htmlFor="roomType">Room Type</label>
<select id="roomType" name="roomType" required>
<option value="">Select Room Type</option>
<option value="standard">Standard</option>
<option value="deluxe">Deluxe</option>
<option value="shared">Shared</option>
</select>
</div>

<button type="submit" className="submit-button">Reserve Now</button>
</form>

</section>
 {/* About Us (Footer) Section */}
 <section className="about-us-footer" id="about">
 <h2>About Lucky Dormitory</h2>
 <p>
   Lucky Dormitory offers a friendly, affordable, and comfortable living space for students and young professionals. Our mission is to create a home-like environment where residents can grow, study, and thrive together.
 </p>
 <div className="footer-links">
   <a href="#home">Home</a>
   <a href="#facilities">Facilities</a>
   <a href="#book">Book Now</a>
   <a href="#contact">Contact Us</a>
 </div>
 <div className="footer-socials">
   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">F</a>
   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">T</a>
   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">I</a>
 </div>
 <p>&copy; 2025 Lucky Dormitory. All rights reserved.</p>
</section>
</div>
 );
};

export default App;