import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent!", {
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  // Contact info data
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      title: "Email",
      value: "lomoke01@gmail.com",
      link: "mailto:lomoke01@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: "Phone",
      value: "+254 788 663233",
      link: "tel:+254 788 663233"
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: "Location",
      value: "Nairobi",
    }
  ];

  // Social media links with icons
  const socialLinks = [
    {
      platform: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "#github" // Replace with actual URL, e.g., "https://github.com/yourusername"
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "#linkedin" // Replace with actual URL, e.g., "https://linkedin.com/in/yourusername"
    },
    {
      platform: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://wa.me/+254788663233" // WhatsApp link using phone number from contactInfo
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-primary text-sm uppercase tracking-wider font-medium">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Let's Work Together</h2>
          <div className="h-1 w-20 gradient-bg mx-auto mt-4"></div>
          <div className="dash mx-auto mt-4"></div>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Have a project in mind or just want to say hello? Feel free to reach out.
            I'm always open to discussing new projects and opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="glass p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">{info.icon}</div>
                    <div>
                      <h4 className="text-sm text-muted-foreground mb-1">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-lg hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-lg">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map(({ platform, icon, href }) => (
                    <a 
                      key={platform}
                      href={href}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{platform}</span>
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label 
                    htmlFor="name" 
                    className="block text-gray-300 text-sm font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-gray-600 px-0 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-0 focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label 
                    htmlFor="email" 
                    className="block text-gray-300 text-sm font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-gray-600 px-0 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-0 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-gray-600 px-0 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-0 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label 
                  htmlFor="message" 
                  className="block text-gray-300 text-sm font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-transparent border-0 border-b border-gray-600 px-0 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-0 focus:outline-none resize-none transition-colors"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  variant="outline"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full btn-primary font-medium py-4 px-8 rounded-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};