import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bfrom-slate-900 via-slate-800 to-black text-gray-200 flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-14">

        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Let’s <span className="text-sky-400">Connect</span>
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Have an idea, a project, or just want to say hello?  
            Fill out the form and I’ll get back to you as soon as possible.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📧 vishnudev@email.com</p>
            <p>📍 India</p>
            <p>💼 Full-Stack Developer</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl shadow-xl space-y-6">
          <div>
            <label className="block text-sm mb-2">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-sky-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-sky-400 text-black font-semibold hover:bg-sky-500 transition"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
