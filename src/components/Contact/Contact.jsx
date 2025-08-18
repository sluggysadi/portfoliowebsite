import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Simple honeypot: if filled, likely a bot → silently exit
    if (form.current?.elements?.honeypot?.value) return;

    try {
      setIsSending(true);
      await emailjs.sendForm(
        "service_3u6t0gw",    // your Service ID
        "template_qppz2kg",   // your Template ID (must accept `to_email`, `user_email`, `user_name`, `subject`, `message`)
        form.current,
        "YbQ9YF5wPi_DzTS1F"   // your Public Key
      );

      form.current.reset();
      toast.success("Message sent successfully! ✅", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } catch (err) {
      console.error("Error sending message:", err);
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-24 h-1 mx-auto mt-3 bg-[linear-gradient(90deg,#ff9966,#ff5e62,#6a11cb)]" />
        <p className="text-white/70 mt-4 text-base md:text-lg">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Glass card — matches “invisible” Skills styling */}
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-[0_10px_40px_rgba(0,0,0,.25)]">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4">
          {/* Hidden recipient (configure your EmailJS template to use {{to_email}} as the To:) */}
          <input type="hidden" name="to_email" value="sadiafathimacollege@gmail.com" />
          {/* Honeypot */}
          <input type="text" name="honeypot" className="hidden" tabIndex="-1" autoComplete="off" />

          <label className="block">
            <span className="sr-only">Your Email</span>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </label>

          <label className="block">
            <span className="sr-only">Your Name</span>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </label>

          <label className="block">
            <span className="sr-only">Subject</span>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </label>

          <label className="block">
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="w-full p-3 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </label>

          <button
            type="submit"
            disabled={isSending}
            className="w-full py-3 rounded-md font-semibold text-white transition
                       bg-[linear-gradient(90deg,#ff9966,#ff5e62,#6a11cb)]
                       hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;