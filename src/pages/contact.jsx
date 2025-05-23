import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAppContent } from "../context/AppContent";

const ContactPage = () => {
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
      formDataToSend.append("To: ", "ruinze@mediaoneph.com");

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
    <div className="relative min-h-screen bg-gradient-to-b from-[#000028] via-[#000000] to-[#00005a] overflow-hidden">
      <div className="h-28"></div>
      <div className="container mx-auto px-4 py-5 text-center mb-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {`${contactContent.title.firstLine} ${contactContent.title.secondLine}`}
        </motion.h1>
      </div>
      <div className="relative">
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{
            backgroundImage: 'url("/Texture.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(0 0, 50% 10%, 100% 0, 100% 80%, 50% 100%, 0 80%)"
          }}
        />
        <div className="container mx-auto px-4 pt-50 pb-60 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-6">
                  <motion.h2
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#010170] mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {contactContent.title.firstLine}
                    <br />
                    {contactContent.title.secondLine}
                  </motion.h2>
                  <motion.div
                    className="mt-8 space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {contactContent.contactInfo.map((info, index) => (
                      <motion.div
                        key={info.type}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-10 h-10 mr-4 flex items-center justify-center">
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-[#010170]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            whileHover={{ scale: 1.1 }}
                          >
                            {info.type === "email" && (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                              />
                            )}
                            {info.type === "phone" && (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            )}
                            {info.type === "address" && (
                              <>
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
                              </>
                            )}
                          </motion.svg>
                        </div>
                        <div>
                          <p className="text-sm text-[#010170]">{info.text}</p>
                          {Array.isArray(info.value) ? (
                            info.value.map((line, i) => (
                              <p
                                key={i}
                                className="text-sm font-semibold text-[#010170]"
                              >
                                {line}
                              </p>
                            ))
                          ) : (
                            <p className="text-base font-semibold text-[#010170]">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {contactContent.formFields.slice(0, 2).map((field) => (
                        <div key={field.name}>
                          <label
                            htmlFor={field.name}
                            className="block mb-2 text-sm text-[#010170]"
                          >
                            {field.label}
                          </label>
                          <motion.input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={`Enter ${field.label}`}
                            className="w-full px-4 py-3 border border-[#010170] rounded focus:outline-none focus:border-[#010170] text-[#010170] text-sm"
                            required={field.required}
                            whileFocus={{
                              boxShadow: "0 0 0 2px rgba(1, 1, 112, 0.2)"
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    {contactContent.formFields.slice(2).map((field) => (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="block mb-2 text-sm text-[#010170]"
                        >
                          {field.label}
                        </label>
                        {field.type === "textarea" ? (
                          <motion.textarea
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={`Enter ${field.label}`}
                            rows={4}
                            className="w-full px-4 py-3 border border-[#010170] rounded focus:outline-none focus:border-[#010170] text-[#010170] text-sm"
                            required={field.required}
                            whileFocus={{
                              boxShadow: "0 0 0 2px rgba(1, 1, 112, 0.2)"
                            }}
                          />
                        ) : (
                          <motion.input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={`Enter ${field.label}`}
                            className="w-full px-4 py-3 border border-[#010170] rounded focus:outline-none focus:border-[#010170] text-[#010170] text-sm"
                            required={field.required}
                            whileFocus={{
                              boxShadow: "0 0 0 2px rgba(1, 1, 112, 0.2)"
                            }}
                          />
                        )}
                      </div>
                    ))}
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#010170] text-white font-medium uppercase tracking-wider rounded hover:bg-[#0069d9] transition-colors text-sm"
                    >
                      {contactContent.submitButtonText}
                    </button>
                    {status === "success" && (
                      <p className="text-green-500 text-sm text-center mt-2">
                        Thank you for your message. We'll get back to you soon!
                      </p>
                    )}
                    {status === "error" && (
                      <p className="text-red-500 text-sm text-center mt-2">
                        Oops! Something went wrong. Please try again later.
                      </p>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-60"></div>
    </div>
  );
};

export default ContactPage;
