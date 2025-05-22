import React, { useRef, useState,useEffect } from 'react';
import './App.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';


// Define the type for the form data
 const handleRateUs = () => {
    // Navigate manually (update URL as needed)
    window.location.href = '/rate-us';
  };
const facilities = [
  {
    title: 'Focus on the big picture',
    description:
      'Many desktop publishing packages and web page editors now use Pinky...',
  },
  {
    title: 'Fast Wi-Fi',
    description:
      'Seamless high-speed internet connectivity for all your study and entertainment needs.',
  },
  {
    title: 'Daily Housekeeping',
    description:
      'Rooms cleaned and maintained every day for hygiene and comfort.',
  },
  {
    title: '24/7 Security',
    description:
      'CCTV and guards around the clock for complete peace of mind.',
  },
];


const images = [
  { src: "dorm1.jpeg", caption: "" },
  { src: "dorm2.jpeg", caption: "" },
  { src: "dorm3.jpeg", caption: "" },
  { src: "dorm4.jpeg", caption: "" },
  { src: "dorm5.jpg", caption: "" },
  { src: "dorm6.jpeg", caption: "" },
   { src: "dorm7.jpg", caption: "" },
    { src: "dorm8.jpeg", caption: "" },
];



const App = () => {
const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index) => {
    if (index >= images.length) setCurrentSlide(0);
    else if (index < 0) setCurrentSlide(images.length - 1);
    else setCurrentSlide(index);
  };

  const nextSlides = () => showSlide(currentSlide + 1);
  const prevSlides = () => showSlide(currentSlide - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlides();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [guests, setGuests] = useState('');
  const [message, setMessage] = useState(''); // State for the popup message
  const [showMessage, setShowMessage] = useState(false);

   const calculateNights = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = endDate - startDate;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // convert ms to days
  };

const handleSubmits = async (e) => {
    e.preventDefault();
    setMessage(''); //reset
    setShowMessage(false);
     if (!arrivalDate || !departureDate || !guests) {
      alert("Please fill all fields.");
      return;
    }

    const nights = calculateNights(arrivalDate, departureDate);

    if (nights <= 0) {
      alert("Departure date must be after arrival date.");
      setShowMessage(true);
      return;
    }

    const totalCost = nights * parseInt(guests) * 400;
    setMessage(`Total Cost: ₹${totalCost}\nGuests: ${guests}\nNights: ${nights}`);
    setShowMessage(true);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
    setMessage('');
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const bookingRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  

    const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? facilities.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === facilities.length - 1 ? 0 : prev + 1));
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };
 const carouselRef = useRef(null);

  const handleRedirectToMMT = () => {
    // You can perform some logic here before redirecting
    console.log('Redirecting to Google...');
    window.location.href = 'https://www.makemytrip.com/hotels/chakala_dormitory-details-mumbai.html'; // Redirect to an external URL
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

  
  const scrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Offset for sticky header
        behavior: "smooth",
      });
    }
    
  
    // Close mobile menu after clicking a link
    setMenuOpen(false);
  };
  

  return (
    <div className="app-body">
      {/* Header */}
      <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
  <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
    <h1 style={{ color: 'white' }}>Lucky Beds - PG & Hostel</h1>
    <button className="nav-toggle" onClick={toggleMenu}>
      ☰
    </button>
    <nav className={menuOpen ? 'open' : ''}>
      <ul style={{ margin: 0, padding: 0 }}>
        <li><a href="#home" onClick={scrollToSection}>Home</a></li>
        <li><a href="#facilities" onClick={scrollToSection}>Facilities</a></li>
        <li><a href="#policies" onClick={scrollToSection}>Policies</a></li>
        <li><a href="#otherbranch" onClick={scrollToSection}>Branches</a></li>
        <li><a href="#contact" onClick={scrollToSection}>Contact</a></li>
       <a onClick={handleRedirectToMMT} className="navbtn">BOOK NOW</a>
      </ul>
    </nav>
  </div>
</header>


      {/* Hero/Main Section */}
      <section className="hero-section" id="home">
        <div className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="text-content">
          <h1>Discover The Perfect Balance Of Hospitality, Luxury And Comfort.</h1>
          <p>We are focused on providing clients with the highest level of comfort and excellent affordable rates</p>
          <a onClick={handleRedirectToMMT} className="btn">BOOK NOW</a>
        </div>
        <form className="booking-form" onSubmit={handleSubmits}>
          <h3>Scared you can't afford it?</h3>
          <p>Don't worry, our hotel offers the best affordable rates you can ever find.</p>
          <input
            type="date"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
            placeholder="Arrival Date"
          />
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            placeholder="Departure Date"
          />
          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            placeholder="Guests"
          />
          <button type="submit">CHECK RATES</button>
        </form>
      </div>
       {/* Popup Message */}
      {showMessage && (
        <div className="popup">
          <div className="popup-content">
            <p>{message}</p>
            <button onClick={handleCloseMessage}>Close</button>
          </div>
        </div>
      )}
    </div>
      </section>


      <div className="section-divider"></div>

{/*Image Section */}
  <section className="slider-section">
      <h2>Explore Our Dormitory</h2>
      <div className="image-slider">
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image.src} alt={image.caption} />
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </div>
    </section>

     <div className="section-divider"></div>


      {/* Facilities Section */}
      <section className="facilities-section" id="facilities">
        <h2>Our Facilities</h2>
       <div className="carousel-container">
      <button className="nav-button left" onClick={prevSlide}>
        &#8249;
      </button>
      <div className="carousel">
        {facilities.map((item, index) => {
          const offset = index - activeIndex;
          return (
            <div
              key={index}
              className="cards"
              style={{
                '--offset': offset,
                '--abs-offset': Math.abs(offset),
                'opacity': Math.abs(offset) >= 3 ? 0 : 1,
                'display': Math.abs(offset) > 3 ? 'none' : 'block',
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#">Read more →</a>
            </div>
          );
        })}
      </div>
      <button className="nav-button right" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
      </section>
      <div className="section-divider"></div>

      
 
{/* Policies Section */}
<section className="policies-section" id="policies">
        <h2>Our Policies</h2>
        <div className="policies-container">
          <div className="policy-card">
            <img src="booklogo.png" alt="Booking Confirmation" className="policy-logo" />
            <h3>Booking Confirmation</h3>
            <p>Ensure to follow deadlines and procedures for confirming your room booking.</p>
          </div>

          <div className="policy-card">
            <img src="payment.png" alt="Payment Schedules" className="policy-logo" />
            <h3>Payment Schedules</h3>
            <p>Adhere to the established schedule for dormitory fee payments.</p>
          </div>

        {/* Policies Section   <div className="policy-card">
            <img src="checkin-checkout-logo.png" alt="Check-in/Check-out" className="policy-logo" />
            <h3>Check-in/Check-out Procedures</h3>
            <p>Follow the designated timelines and processes for moving in and out.</p>
          </div> */}

          <div className="policy-card">
            <img src="quiet-logo.png" alt="Quiet Hours" className="policy-logo" />
            <h3>Quiet Hours</h3>
            <p>Respect designated quiet times to minimize noise.</p>
          </div>

          <div className="policy-card">
            <img src="cleanliness-logo.ong.png" alt="Cleanliness Standards" className="policy-logo" />
            <h3>Cleanliness Standards</h3>
            <p>Maintain a reasonable level of cleanliness in rooms and shared spaces.</p>
          </div>

          <div className="policy-card">
            <img src="nopets-logo.png" alt="No Pets Allowed" className="policy-logo" />
            <h3>No Pets Allowed</h3>
            <p>Pets are prohibited within the dormitory.</p>
          </div>


          <div className="policy-card">
            <img src="noachohol-logo.png" alt="Alcohol Restrictions" className="policy-logo" />
            <h3>Alcohol Prohibited</h3>
            <p>Abide by the rules regarding alcohol, it is strictly prohibited.</p>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>


      <section class="branches-section">
  <h2>Other Branches</h2>
  <p>
    We have expanded our presence across Mumbai to better serve our guests. In addition to our Sakinaka branch, our comfortable and well-equipped dormitories are also available in Chakala and Marol. Each location offers the same quality experience with easy access to nearby transportation and local amenities.
  </p>

  <div class="branch-grid">
    <div class="branch-card">
      <img src="chakalabranch.avif" alt="Chakala Dormitory" />
      <h3>Chakala Branch</h3>
      <p>Located near Western Express Highway, our Chakala dormitory offers quick access to business hubs and metro stations.</p>
      <a href="https://www.makemytrip.com/hotels/chakala_dormitory-details-mumbai.html" target="_blank" class="visit-link">Visit Branch</a>
    </div>

    <div class="branch-card">
      <img src="homelogo.png" alt="Marol Dormitory" />
      <h3>Marol MIDC Branch</h3>
      <p>Situated close to Marol Naka Metro Station, this branch provides a peaceful stay with nearby shopping and dining options.</p>
      <a href="https://www.makemytrip.com/hotels/dormitory_inn-details-mumbai.html" target="_blank" class="visit-link">Visit Branch</a>
    </div>
  </div>
</section>

{/* Contact us  Section */}
<div className="section-divider"></div>
<section className="contact-container">
     <div className="contact-section">
  <div className="contact-header">
    <div className="text-content">
      <h1>Get in touch</h1>
      <p>Want to get in touch? We’d love to hear from you. Here’s how you can reach us.</p>
    </div>
    <div className="header-image">
      <img src="contactus.jpg" alt="Support" />
    </div>
  </div>

  <div className="contact-cards">
    <div className="contcard">
      <i className="fas fa-phone"></i>
      <h3>Talk to book</h3>
      <p>Interested? Just pick up the phone to chat with a member of our sales team.</p>
      <a href="tel:+91 8108897862">+91 810 889 7862</a>
      <a href="#" className="secondary-link">View other numbers</a>
    </div>

    <div className="contcard">
      <i className="fas fa-comments"></i>
      <h3>Contact Customer Support</h3>
      <p>Need help? Chat with our support team. Don’t worry—we’re here for you.</p>
    <a href="https://wa.me/918108897862" ><button  className="support-btn">Contact Support</button></a>  
    </div>
  </div>
</div>

    </section>


      
   {/* About Us (Footer) Section */}
    <footer className="footer">
      <div className="footer-section logo-rating">
        <h1 className="logo-text">Lucky <br /> Dormitory</h1>
        <p>Comfortable, affordable, and safe living for all.</p>
        
        <div className="stars">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>
       <a href='https://www.google.com/search?rlz=1C1CHBF_enIN1130IN1130&sca_esv=806b124b1fa22633&cs=0&tbm=lcl&sxsrf=AHTn8zrpEe49hDoh5wBZQRKgvEb4ynVXdg:1747938696736&q=Dormitory+Hub&rflfq=1&num=20&stick=H4sIAAAAAAAAAB2Ru00EQRBEdQYIB2sRxlobQv8_PgYmKRxoEUiHFu2BQTpEQFxEQQ3OGK2qrlc9V5fzVOHU3lldylzZrfMkJc3R1eFsHe2KYZiUUht7UlpAmfNkXZXMwkok5BkBpVK0alKRmKQ2a883zBnM6umOl5pJa54SMZJlJsSaGSI2Tw4MVbhjrNV2cjBlpqVxCKA8KKOwVKyyIDWKAFqkKKbgKzVuDzURBkgAVQXsTtxcUixBgihSQwK6gznVsnhsBWIh1ZTN2Bxk8DNkmJVqE5m5wS_ILhV2XAYtsmL4MxGqgtM0iAEnI6pHARwPHTNylIVUXdmxoik4vAINMLX-_wupbpzG8BXxczj8Hm4f1u39tC7H03lbzutxf3pZnrf9--L6btvfXj-2_Wu5_3z8AxAHPr7ZAQAA&ved=2ahUKEwjO7eyI27eNAxW5wjgGHfGxAKcQicgKegQIBBAF&rldimm=8650959789831187993#lkt=LocalPoiReviews'><button className="rate-button">Rate Us</button></a> 
      </div>

      <div className="footer-section quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#facilities">Facilities</a></li>
          <li><a href="#branches">Branches</a></li>
          <li><a href="#policies">Policies</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section follow-contact">
         <div>
          <h3>Contact</h3>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> luckydormitory@gmail.com</p>
        </div>

        <div>
          <h3>Follow Us</h3>
          <div className='socialicons'>
          <p><FaFacebookF /> </p><p>
          <FaInstagram /> </p>
          <p><FaWhatsapp /> </p>
          </div>
        </div>

       
        <div>
          <h3>Address</h3>
          <p><FaMapMarkerAlt /> Survey no. 36 , PVK Compound,Khairani Road, Mumbai, MH 400072</p>
        </div>
      </div>

      <div className="footer-section message-box">
        <h3>Write a message</h3>
        <form>
          <input type="email" placeholder="Your email address" required />
          <textarea placeholder="Message..." required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </footer>
    </div>
  );
};

export default App