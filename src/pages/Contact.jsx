import { useState } from 'react';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import { Mail, Phone } from 'lucide-react';
import './Contact.css';
import heroKopitiamWarm from '../assets/images/hero-kopitiam-warm.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email must be valid';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="contact-page page-transition">
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src={heroKopitiamWarm} alt="Hubungi Kongdjie Coffee" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container page-hero-content text-center">
          <span className="page-hero-badge">Pintu Kami Selalu Terbuka</span>
          <h1>Hubungi Kami</h1>
          <p>Kami selalu senang mendengar cerita dan pertanyaan dari Anda.</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-panel">
              <SectionTitle title="Connect With Us" />
              <p className="contact-intro">
                Punya pertanyaan tentang menu kami? Ingin menyewa tempat untuk acara? Atau sekadar ingin menyapa? Hubungi kami melalui form ini atau lewat channel di bawah.
              </p>
              
              <div className="contact-methods">
                <div className="method-item">
                  <div className="method-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div className="method-text">
                    <h4>Instagram</h4>
                    <p>@kongdjiecoffee</p>
                  </div>
                </div>
                
                <div className="method-item">
                  <div className="method-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                    </svg>
                  </div>
                  <div className="method-text">
                    <h4>WhatsApp</h4>
                    <p>+62 812 3456 7890</p>
                  </div>
                </div>
                
                <div className="method-item">
                  <div className="method-icon"><Phone size={24} /></div>
                  <div className="method-text">
                    <h4>Phone</h4>
                    <p>+62 812 3456 7890</p>
                  </div>
                </div>
                
                <div className="method-item">
                  <div className="method-icon"><Mail size={24} /></div>
                  <div className="method-text">
                    <h4>Email</h4>
                    <p>hello@kongdjiecoffee.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              {isSuccess ? (
                <div className="success-message">
                  <h3>Thank you!</h3>
                  <p>Your message has been received. We will get back to you shortly.</p>
                  <button 
                    className="btn btn-outline" 
                    onClick={() => setIsSuccess(false)}
                    style={{color: 'var(--color-dark-brown)', borderColor: 'var(--color-dark-brown)', marginTop: '2rem'}}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      className={errors.subject ? 'error' : ''}
                    />
                    {errors.subject && <span className="error-text">{errors.subject}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message} 
                      onChange={handleChange} 
                      className={errors.message ? 'error' : ''}
                    ></textarea>
                    {errors.message && <span className="error-text">{errors.message}</span>}
                  </div>
                  
                  <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
