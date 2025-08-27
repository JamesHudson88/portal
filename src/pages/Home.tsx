import React from "react";
import Facebook from "lucide-react/dist/esm/icons/facebook";
import Youtube from "lucide-react/dist/esm/icons/youtube";
import Instagram from "lucide-react/dist/esm/icons/instagram";
import { 
  Truck, 
  DollarSign,
  Check,
  Handshake,
  Linkedin,
  Twitter,
  Github,
  Globe,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import FAQSection from "./FAQsection";


const HomePage = () => {
  
  return (
    
    <div className="font-sans bg-white">
      {/* Header */}
      
      <header className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="00text-2xl font-bold">VORZA</div>
        <nav className="space-x-10 text-md font-medium text-gray-900">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Blogs</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
        <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-md">Lets talk</button>
      </header>
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gray-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empowering Digital Growth <br /> All-in-One place
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          From design to development, strategy to deployment - vorza360 delivers complete digital solutions for startups, brands, and enterprises.
        </p>
        <button className="bg-cyan-500 text-white px-6 py-3 rounded-md">Get Started →</button>
      </section>

      {/* Roles */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 px-6 bg-white">
        <div className="text-center">
          <img src="\assets\Graphicdesigning.svg" alt="Graphics Designer" className="mx-auto mb-4 h-22" />
          <p>Graphics Designer</p>
        </div>
        <div className="text-center">
          <img src="\assets\Webdeveloper.svg" alt="Web/App Developer" className="mx-auto mb-4 h-22" />
          <p>Web/App Developer</p>
        </div>
        <div className="text-center">
          <img src="\assets\Technicalsupport.svg" alt="Technical Support" className="mx-auto mb-4 h-22" />
          <p>Technical support</p>
        </div>
        <div className="text-center">
          <img src="\assets\socialmediamarketing.svg" alt="Social Media Marketer" className="mx-auto mb-4 h-22" />
          <p>Social Media Marketer</p>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-16 px-6 bg-gray-50">
  <h2 className="text-2xl font-bold text-center mb-10">Our Technical Expertise</h2>
  
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 w-full px-4">
    {[
      { name: "React", icon: "/icons/Reacticon.jpeg" },
      { name: "Bootstrap", icon: "/icons/Bootstrapicon.png" },
      { name: "MongoDB", icon: "/icons/Mangodbicon.png" },
      { name: "MySQL", icon: "/icons/mysqlicon.png" },
      { name: "HTML5", icon: "/icons/html5icon.png" },
      { name: "Python", icon: "/icons/pythonicon.png" },
      { name: "Apache HTTP Server", icon: "/icons/apacheicon.jpeg" },
      { name: "Flask", icon: "/icons/flaskicon.png" },
      { name: "Django", icon: "/icons/djangoicon.png" },
      { name: "Angular 2", icon: "/icons/angular2.png" },
    ].map((tech, idx) => (
      <div
        key={idx}
        className="bg-white px-4 py-3 border rounded shadow-sm text-sm flex items-center justify-start gap-3 hover:shadow-lg transition-shadow duration-300"
      >
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-10 h-10 object-contain"
        />
        <span className="mt-1">{tech.name}</span>
      </div>
    ))}
  </div>
</section>



      {/* Services */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10 ">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, quas alias! Quas, nostrum? Dolores vitae beatae impedit amet velit culpa cumque aliquam explicabo eligendi magni ipsa, quas repudiandae modi fugiat! 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          <div className="p-6 bg-gray-70 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/icons/web.png" 
              alt="Web Development Icon" 
              className="w-12 h-12 mb-4 mx-auto" 
            />
            <h3 className="font-semibold mb-2">Web Development</h3>
            <p className="text-sm text-gray-600">Responsive websites that convert visitors into customers</p>
          </div>
          <div className="p-6 bg-gray-70 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/icons/app.png" 
              alt="App Development Icon" 
              className="w-12 h-12 mb-4 mx-auto" 
            />
            <h3 className="font-semibold mb-2">App Development</h3>
            <p className="text-sm text-gray-600">Native and cross-platform apps for iOS and Android</p>
          </div>
          <div className="p-6 bg-gray-70 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/icons/seo.png" 
              alt="SEO Icon" 
              className="w-12 h-12 mb-4 mx-auto" 
            />
            <h3 className="font-semibold mb-2">SEO</h3>
            <p className="text-sm text-gray-600">Get your website to top of search results</p>
          </div>
          <div className="p-6 bg-gray-70 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/icons/smm.png" 
              alt="Social Media Management Icon" 
              className="w-12 h-12 mb-4 mx-auto" 
            />
            <h3 className="font-semibold mb-2">Social Media Management</h3>
            <p className="text-sm text-gray-600">Manage your brand’s presence and audience engagement</p>
          </div>
          <div className="p-6 bg-gray-70 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/icons/tech.png" 
              alt="Technical Support Icon" 
              className="w-12 h-12 mb-4 mx-auto" 
            />
            <h3 className="font-semibold mb-2">Technical Support</h3>
            <p className="text-sm text-gray-600">Expert assistance with backend & digital issues</p>
          </div>
          <div className="p-6 bg-gray-70 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/icons/graphic.png" 
              alt="Graphic Icon" 
              className="w-12 h-12 mb-4 mx-auto" 
            />
            <h3 className="font-semibold mb-2">Graphic Designing</h3>
            <p className="text-sm text-gray-600">Designing brand visuals & support for digital assets</p>
          </div>
        </div>
      </section>

      <div className="bg-white">
      {/* How it Works Section */}
      <h2 className="text-3xl font-semibold mb-12 text-center">How it works?</h2>
        <section className="flex items-start justify-center space-x-8 mt-12">
          
          {/* First card */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-lg">
              <Handshake className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Join the Program</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Wonder twenty hunted and put income set desire expect. Am cottage calling.
            </p>
          </div>

          {/* Dotted curve */}
          <svg
            viewBox="0 0 200 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-25 -mt-40 h-20 self-center"
          >
            <defs>
              <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <path
              d="M 0 80 Q 100 0, 200 80"
              stroke="url(#lineGradient1)"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="transparent"
            />
            <circle cx="0" cy="80" r="5" fill="#7C3AED" />
            <circle cx="200" cy="80" r="5" fill="#06B6D4" />
          </svg>

          {/* Second card */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-lg">
              <DollarSign className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Sell the Services</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight.
            </p>
          </div>

          {/* Dotted curve */}
          <svg
            viewBox="0 0 200 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-25 -mb-10 h-20 self-center"
          >
            <defs>
              <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>

            {/* Flipped horizontally by reversing start & end and changing curve */}
            <path
              d="M 0 0 Q 100 80, 200 0"
              stroke="url(#lineGradient2)"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="transparent"
            />

            <circle cx="0" cy="0" r="5" fill="#06B6D4" />
            <circle cx="200" cy="0" r="5" fill="#7C3AED" />
          </svg>

          {/* Third card */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg">
              <Truck className="w-8 h-8 text-gray-800" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">We Deliver</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible.
            </p>
          </div>
        </section>



      {/* Pricing Plan Section */}
      <section className="py-16 px-6 text-center bg-gray-0">
        <h2 className="text-3xl font-bold mb-3">Pricing plan</h2>
        <p className="text-gray-900 mb-12 max-w-xl mx-auto">
          Choose a plan that fits your business needs and budget. Straightforward pricing for the powerful financial management.
        </p>
        
        <p className="text-sm text-cyan-500 mb-2 font-semibold mr-80">Recommended</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Choose Plan Box */}
            
          <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
            <h2 className="text-2xl font-bold">Choose your plan</h2>
          </div>
          {/* Freelancer Plan */}
          <div className="relative">
          <div className=" absolute top-0 left-0 w-[265px] h-2 bg-cyan-500 rounded-t-lg"></div>
          <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            
            <h3 className="text-xl font-bold">Freelancer Plan</h3>
            
            <br />
            <p className="mt-2 text-gray-600 text-sm">
              Perfect for individual professionals getting started.
            </p>
            <br />
            <p className="mt-4 text-2xl font-bold">PKR 2,999 <span className="text-sm font-normal">/ one time</span></p>
            <br />
            <button className="mt-6 bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition">
              Get Started
            </button>
          </div>
          </div>

          {/* Agency Plan */}
          <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <h3 className="text-xl font-bold">Agency Plan</h3>
            <br />
            <p className="mt-2 text-gray-600 text-sm">
              Ideal for small teams or digital agencies handling multiple clients.
            </p>
            <br />
            <p className="mt-4 text-2xl font-bold">PKR 7,999 <span className="text-sm font-normal">/ one time</span></p>
            <br />
            <button className="mt-6 border border-gray-800 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-100 transition">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <h3 className="text-xl font-bold">Enterprise Plan</h3>
            <br />
            <p className="mt-2 text-gray-600 text-sm">
              Best for large teams or resellers managing multiple clients at scale.
            </p>
            <br />
            <p className="mt-4 text-2xl font-bold">PKR 17,999</p>
            <br />
            <button className="mt-6 border border-gray-800 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-100 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>


    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-lg font-bold mb-6">Top Features</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="w-1/4"></th>
              <th className="w-1/4 text-center font-medium border-b">20 Pages</th>
              <th className="w-1/4 text-center font-medium border-b">
                600 Pages
                <div className="text-sm text-gray-500">Pages Add-ons on Demand</div>
              </th>
              <th className="w-1/4 text-center font-medium border-b">
                Unlimited
                <div className="text-sm text-gray-500">Pages Add-ons on Demand</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {/* Row 1 */}
            <tr className="bg-green-50">
              <td className="p-3 font-medium">Number of Users</td>
              <td className="text-center p-3">20 Pages</td>
              <td className="text-center p-3">600 Pages</td>
              <td className="text-center p-3">Unlimited</td>
            </tr>
            {/* Row 2 */}
            <tr>
              <td className="p-3 font-medium">Users Per Page</td>
              <td className="text-center p-3">5 Pages</td>
              <td className="text-center p-3">50 Pages</td>
              <td className="text-center p-3">Unlimited</td>
            </tr>
            {/* Row 3 */}
            <tr className="bg-green-50">
              <td className="p-3 font-medium">Includes essential features to get started</td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
            </tr>
            {/* Row 4 */}
            <tr>
              <td className="p-3 font-medium">More advanced features for increased productivity</td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
            </tr>
            {/* Row 5 */}
            <tr className="bg-green-50">
              <td className="p-3 font-medium">Designing & Development</td>
              <td></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
            </tr>
            {/* Row 6 */}
            <tr>
              <td className="p-3 font-medium">Customizable options to meet your specific needs</td>
              <td></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
            </tr>
            {/* Row 7 */}
            <tr className="bg-green-50">
              <td className="p-3 font-medium">Secure data storage</td>
              <td></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
            </tr>
            {/* Row 8 */}
            <tr>
              <td className="p-3 font-medium">Email Support</td>
              <td></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
            </tr>
            {/* Row 9 */}
            <tr className="bg-green-50">
              <td className="p-3 font-medium">24/7 customer support</td>
              <td></td>
              <td></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
            </tr>
            {/* Row 10 */}
            <tr>
              <td className="p-3 font-medium">Analytics and reporting</td>
              <td></td>
              <td></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
            </tr>
            {/* Row 11 */}
            <tr className="bg-green-50">
              <td className="p-3 font-medium">Account Management</td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
              <td className="text-center p-3"><Check className="w-5 h-5 text-teal-600 mx-auto" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>






    <section className="text-center py-20 px-4 bg-cyan-500 text-white">
        <h3 className="text-4xl md:text-5xl font-bold mb-4">
          Ready To Start Your Digital Agency?
        </h3>
        <p className=" max-w-2xl mx-auto mb-6">
          Join vorza360 and start earning without the hassle or hiring a team of learning technical skills</p>
        <button className="bg-white text-gray-900 px-6 py-3 rounded-md">Get Started Now →</button>
      </section>

      <FAQSection />

      {/* Footer Placeholder */}
      <footer className="bg-[#0D1B2A] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <h1 className="text-6xl mb-4">Let's talk</h1>
          <div className="flex space-x-3 mb-4 text-gray-300">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-cyan-400" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-cyan-400" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-cyan-400" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-cyan-400" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-cyan-400" />
            <Github className="w-5 h-5 cursor-pointer hover:text-cyan-400" />
            <Globe className="w-5 h-5 cursor-pointer hover:text-cyan-400" />
          </div>
          <select className="bg-cyan-500 text-white px-4 py-2 rounded-md outline-none">
            <option>English</option>
            <option>Urdu</option>
          </select>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-cyan-400">
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Partner Program</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-cyan-400">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Faq's</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <div className="mt-6">
            <button className="mt-6 bg-white border border-gray-800 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-100 transition ">
              Review us on Trustpilot
            </button>
          </div>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="flex items-center space-x-2 mb-2 ">
            <Phone className="w-4 h-4 text-white " />
            <a href="tel:+923084102839" className="text-cyan-400">
              +92 308 410 2839
            </a>
          </p>
          <p className="flex items-center space-x-2 mb-2">
            <Mail className="w-4 h-4 text-white" />
            <a href="mailto:sales@vorza360.com" className="text-cyan-400">
              sales@vorza360.com
            </a>
          </p>
          <p className="flex items-center space-x-2 mb-2">
            <Mail className="w-4 h-4 text-white" />
            <a href="mailto:cs@vorza360.com" className="text-cyan-400">
              cs@vorza360.com
            </a>
          </p>
          <p className="flex items-start space-x-2 mb-4">
            <MapPin className="w-4 h-4 text-white mt-1" />
            <span className="text-cyan-400">
              Office #88, Street #24-S Zubair St<br />
              Mohra Shareef Bund Road Lahore.
            </span>
          </p>
          <h2 className="text-white text-4xl font-semibold mb-2">
            Providing creative ideas for your business
          </h2>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>Copyright © 2025 VORZA360 SMC-PRIVATE LIMITED</p>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <img src="/visa.png" alt="Visa" className="h-5" />
          <img src="/mastercard.png" alt="Mastercard" className="h-5" />
          <img src="/paypal.png" alt="Paypal" className="h-5" />
          <img src="/bitcoin.png" alt="Bitcoin" className="h-5" />
          <img src="/easypaisa.png" alt="Easypaisa" className="h-5" />
          <img src="/jazzcash.png" alt="Jazzcash" className="h-5" />
        </div>
      </div>
    </footer>
    </div>
  );
}

export default HomePage;
