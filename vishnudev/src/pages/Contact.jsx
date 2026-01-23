import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Loader2, Code, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_gbghw0w",
        "template_83ozoev",
        formRef.current,
        "AnJnx4f8zwhHhkt1Z"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen text-gray-200 flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-14">

        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Let’s <span className="text-sky-400">Connect</span>
          </h1>

          <p className="text-gray-400 text-lg mb-6">
            Have an idea, a project, or just want to say hello?
            Fill out the form and I’ll get back to you.
          </p>

          <a
            href="mailto:vishnudev@email.com"
            className="flex items-center gap-2 text-gray-300 hover:text-sky-400 transition"
          >
            <Mail size={16} className="text-sky-400" />
            vishnudev@email.com
          </a>

          <p className="flex items-center gap-2 text-gray-300">
            <MapPin size={16} className="text-sky-400" />
            India · Remote Friendly
          </p>

          <p className="flex items-center gap-2 text-gray-300">
            <Code size={16} className="text-sky-400" />
            Full-Stack Developer (React · Django)
          </p>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl shadow-xl space-y-6"
        >
          <div>
            <label className="block text-sm mb-2">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows="5"
              name="message"
              required
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-sky-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-sky-400 text-black font-semibold hover:bg-sky-500 transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
