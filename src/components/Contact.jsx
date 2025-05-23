import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAppContent } from "../context/AppContent";

function Contact() {
  const { contact: contactContent } = useAppContent();
  const [formData, setFormData] = useState(
    Object.fromEntries(contactContent.formFields.map(field => [field.name, ""]))
  );
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "bbd83f87-5d24-4750-aad5-3e60ccece838");
      formDataToSend.append("from_name", "MediaonePH");
      formDataToSend.append("subject", "New Contact Form Submission");
      formDataToSend.append("To: ", "gvbsr55@gmail.com");

      // Map form fields to Web3Forms expected field names
      formDataToSend.append("name", `${formData.firstName} ${formData.lastName}`);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("message", formData.message);

      // Add honeypot field to prevent spam
      formDataToSend.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData(
          Object.fromEntries(contactContent.formFields.map(field => [field.name, ""]))
        );
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 md:px-16 bg-gradient-to-b from-[#010168] via-[#0a1358] to-[#000081] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex flex-col justify-center">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {contactContent.title.firstLine}
            <br />
            {contactContent.title.secondLine}
          </motion.h2>
          <div className="mt-8 sm:mt-10 md:mt-12 space-y-6 sm:space-y-8">
            {contactContent.contactInfo.map((info, index) => (
              <motion.div
                key={info.type}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 flex items-center justify-center">
                  {info.type === "email" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 sm:h-8 sm:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  )}
                  {info.type === "phone" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 sm:h-8 sm:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  )}
                  {info.type === "address" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 sm:h-8 sm:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="text-xs sm:text-sm">{info.text}</p>
                  {Array.isArray(info.value) ? (
                    info.value.map((line, i) => (
                      <p
                        key={i}
                        className="text-xs sm:text-sm md:text-base font-semibold"
                      >
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm sm:text-base font-semibold">
                      {info.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="flex flex-col justify-center mt-8 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {contactContent.formFields.slice(0, 2).map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block mb-1 sm:mb-2 text-sm sm:text-base"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={`Enter ${field.label}`}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white/30 rounded focus:outline-none focus:border-white text-sm"
                    required={field.required}
                  />
                </div>
              ))}
            </div>
            {contactContent.formFields.slice(2).map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block mb-1 sm:mb-2 text-sm sm:text-base"
                >
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={`Enter ${field.label}`}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white/30 rounded focus:outline-none focus:border-white h-24 sm:h-32 resize-none text-sm"
                    required={field.required}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={`Enter ${field.label}`}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border border-white/30 rounded focus:outline-none focus:border-white text-sm"
                    required={field.required}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full py-2 sm:py-3 bg-[#007bff] text-white font-medium uppercase tracking-wider rounded hover:bg-[#0069d9] transition-colors text-sm sm:text-base"
            >
              {contactContent.submitButtonText}
            </button>
            {status === "success" && (
              <p className="text-green-500 text-sm text-center">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
