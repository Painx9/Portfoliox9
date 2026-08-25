import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  // Form submission state management
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.querySelector('.contact-content'),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission via Web3Forms (Sends message directly to your email)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "75488f35-2c45-4409-b1aa-1030d307decc", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus("SUCCESS");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error(error);
      setStatus("ERROR");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] text-white py-32 px-6 md:px-12 flex flex-col justify-center select-none overflow-hidden"
    >
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="contact-content relative z-10 max-w-7xl mx-auto w-full space-y-16">
        
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/85 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">EPISODE FINALE</span>
            <span className="text-white/40">|</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            READY FOR PRODUCTION? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              INITIATE TRANSMISSION.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Contact Info, Socials, Phone, & Email */}
          <div className="lg:col-span-5 p-8 md:p-10 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl space-y-8">
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">Transmission Channels</h3>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Open for student-level engineering placements, internships, or 6-month Master's thesis partnerships in AI and data automation.
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <a 
                href="mailto:dp1852001@gmail.com" 
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-red-600/50 hover:bg-red-600/10 transition-all group"
              >
                <span className="text-red-500 font-bold">// EMAIL:</span>
                <span className="text-white/90 group-hover:text-white">dp1852001@gmail.com</span>
              </a>

              <a 
                href="tel:+4915560275161" 
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-red-600/50 hover:bg-red-600/10 transition-all group"
              >
                <span className="text-red-500 font-bold">// PHONE:</span>
                <span className="text-white/90 group-hover:text-white">+49 155 6027 5161</span>
              </a>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/40">Professional Networks</h4>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://github.com/Painx9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80 hover:bg-red-600 hover:text-white transition-all text-center"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/deepatel009/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80 hover:bg-red-600 hover:text-white transition-all text-center"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://discordapp.com/users/akaxpain" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80 hover:bg-red-600 hover:text-white transition-all text-center"
                >
                  Discord
                </a>
                <a 
                  href="https://www.instagram.com/deepatel.de?igsh=NHA3dXRydXRmMDM2&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80 hover:bg-red-600 hover:text-white transition-all text-center"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Fully Functional Contact Form */}
          <div className="lg:col-span-7 p-8 md:p-12 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/70">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className="w-full px-4 py-3.5 bg-black/50 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/70">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3.5 bg-black/50 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/70">Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Discussing an AI engineering internship, thesis partnership, or project..." 
                  className="w-full px-4 py-3.5 bg-black/50 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-red-600 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={submitting}
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(229,9,20,0.6)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-50"
              >
                {submitting ? "Transmitting..." : "Send Message"}
              </button>

              {status === "SUCCESS" && (
                <p className="text-xs font-mono text-green-500 text-center">Message transmitted successfully! I will get back to you soon.</p>
              )}
              {status === "ERROR" && (
                <p className="text-xs font-mono text-red-500 text-center">Transmission failed. Please email me directly at dp1852001@gmail.com.</p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
