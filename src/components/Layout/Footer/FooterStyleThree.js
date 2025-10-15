import { Link } from 'react-router-dom';
import footerShape1 from '../../../assets/images/shapes/site-footer-three-bg-shape.png';
import footerLogo from '../../../assets/images/plat2.png'

const footerData = {
  newsletterTitle: 'Subscribe to Our',
  newsletterSubtitle: 'Newsletter',
  emailPlaceholder: 'Enter your email',
  subscribeButtonText: 'Subscribe Now',
  footerLogo: footerLogo,
  aboutText: 'It is a long established fact that a Empowering Communities',
  socialLinks: [
    { href: '#', icon: 'icon-facebook-f' },
    { href: '#', icon: 'icon-Vector' },
    { href: '#', icon: 'icon-instagram' },
    { href: '#', icon: 'icon-pinterest' },
  ],
  services: [
    { href: 'reliable-roof-repair', text: 'Roof Renewal' },
    { href: 'peak-performance-roofing', text: 'Peak Protection' },
    { href: 'skyline-roofing-solutions', text: 'Skyline Roof Care' },
    { href: 'sure-guard-roofing-services', text: 'Guardian Roof' },
    { href: 'top-notch-roofing-restoration', text: 'Top Notch Roof' },
  ],
  pages: [
    { href: 'about', text: 'About Us' },
    { href: 'services', text: 'Service' },
    { href: 'project', text: 'Portfolio' },
    { href: 'contact', text: 'Contact' },
    { href: 'testimonials', text: 'Testimonial' },
  ],
  contact: {
    email: 'debra.holt@example.com',
    address: (
      <>
        3891 Ranchview Dr.<br />
        Richardson
      </>
    ),
    phone: ['01245789321', '012457895146'],
  },
  bottomText: '© themehealer 2024 | All Rights Reserved',
  bottomLinks: [
    { href: 'terms', text: 'Terms & Condition' },
    { href: 'privacy', text: 'Privacy Policy' },
    { href: 'contact', text: 'Contact Us' },
  ],
};

export default function FooterThree() {
  return (
    <>
      {/* Site Footer Three Start */}
      <footer className="site-footer-three">
        <div
          className="site-footer-three__bg-shape float-bob-y"
          style={{ backgroundImage: `url(${footerShape1})` }}
        ></div>

        {/* Newsletter Section */}
        <div className="site-footer-three__top">
          <div className="container">
            <div className="site-footer-three__top-inner">
              <h3 className="site-footer-three__top-title">
                {footerData.newsletterTitle}
                <br />
                <span>{footerData.newsletterSubtitle}</span>
              </h3>
              <div className="site-footer-three__form-box">
                <form className="footer-widget-three__form mc-form" noValidate>
                  <div className="footer-widget-three__form-input-box">
                    <input type="email" placeholder={footerData.emailPlaceholder} name="EMAIL" />
                    <button type="submit" className="footer-widget-three__newsletter-btn thm-btn-two">
                      {footerData.subscribeButtonText}
                      <span className="icon-dubble-arrow-right"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="site-footer-three__middle">
          <div className="container">
            <div className="site-footer-three__middle-inner">
              <div className="row">
                {/* About Section */}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                  <div className="footer-widget-three__column footer-widget-three__about">
                    <div className="footer-widget-three__logo">
                      <Link to="/">
                        <img src={footerData.footerLogo} alt="Footer Logo" />
                      </Link>
                    </div>
                    <p className="footer-widget-three__about-text">{footerData.aboutText}</p>
                    <div className="footer-widget-three__social">
                      {footerData.socialLinks.map((link, index) => (
                        <Link key={index} to={link.href}>
                          <span className={link.icon}></span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Services Section */}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                  <div className="footer-widget-three__column footer-widget-three__services">
                    <h3 className="footer-widget-three__title">Services</h3>
                    <ul className="footer-widget-three__services-list list-unstyled">
                      {footerData.services.map((service, index) => (
                        <li key={index}>
                          <Link to={`/${service.href}`}>
                            <span className="icon-angle-left"></span>
                            {service.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Page Section */}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                  <div className="footer-widget-three__column footer-widget-three__page">
                    <h3 className="footer-widget-three__title">Page</h3>
                    <ul className="footer-widget-three__page-list list-unstyled">
                      {footerData.pages.map((page, index) => (
                        <li key={index}>
                          <Link to={`/${page.href}`}>{page.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                  <div className="footer-widget-three__column footer-widget-three__contact">
                    <h3 className="footer-widget-three__title">Contact</h3>
                    <ul className="footer-widget-three__contact-list list-unstyled">
                        <li>
                          <div className="icon">
                            <span className="icon-envelope"></span>
                          </div>
                          <div className="text">
                            <p>
                              <a href={`mailto:${footerData.contact.email}`}>{footerData.contact.email}</a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-location"></span>
                          </div>
                          <div className="text">
                            <p>{footerData.contact.address}</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-call"></span>
                          </div>
                          <div className="text">
                            {footerData.contact.phone.map((phone, index) => (
                              <p key={index}>
                                <a href={`tel:${phone}`}>{phone}</a>
                              </p>
                            ))}
                          </div>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="site-footer-three__bottom">
          <div className="container">
            <div className="site-footer-three__bottom-inner">
              <p className="site-footer-three__bottom-text">{footerData.bottomText}</p>
              <ul className="site-footer-three__bottom-menu list-unstyled">
                {footerData.bottomLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={`/${link.href}`}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Site Footer Three End */}
    </>
  );
}
