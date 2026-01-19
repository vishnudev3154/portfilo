import React from "react"
function Content(){

return(


        <div class="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-6">

            {/* Name */}
            <h1
              className="text-4xl md:text-6xl font-extrabold
              bg-gradient-to-r from-blue-500 to-purple-600
              bg-clip-text text-transparent tracking-wide"
            >
              Vishnudev Jayakumar
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-lg md:text-xl text-gray-700">
              Python Full Stack Developer | React | Django
            </p>

            {/* Buttons */}
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white
                hover:bg-blue-700 transition shadow-lg"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-blue-600
                text-blue-600 hover:bg-blue-600 hover:text-white
                transition"
              >
                Contact Me
              </a>
            </div>

          </div>
        </div>
)}

export default Content