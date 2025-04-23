
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Basic validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    const whatsAppMessage = `*New Contact Form Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;

    const whatsAppURL = `https://wa.me/919494785078?text=${encodeURIComponent(
      whatsAppMessage
    )}`;


    window.open(whatsAppURL, "_blank");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Let's connect!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              className="p-8 rounded-xl shadow-lg border border-gray-800"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-inherit border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-inherit border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-inherit border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-inherit border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className=" p-8 rounded-xl shadow-lg border border-gray-800 h-full">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-purple-900/30 p-2 rounded-lg text-purple-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:manitejagaddam1@gmail.com"
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      manitejagaddam1@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-purple-900/30 p-2 rounded-lg text-purple-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">
                      Phone
                    </h4>
                    <a
                      href="https://wa.me/919494785078" // Replace this with your actual phone number for WhatsApp
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      +91 94947 85078
                    </a>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-purple-900/30 p-2 rounded-lg text-purple-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">
                      Location
                    </h4>
                    <p className="text-white">Bhupalpally Telangana, 506169</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
