"use client"

export function AuthSidebar() {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center px-12 py-12 bg-gray-900 rounded-3xl m-8">
      {/* Logo Icon */}
      <div className="mb-12 flex justify-center">
        <div className="w-24 h-24 flex items-center justify-center">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            {/* Large Triangle */}
            <polygon points="50,15 85,80 15,80" fill="none" stroke="#666" strokeWidth="3" opacity="0.6" />
            {/* Medium Triangle */}
            <polygon points="50,35 70,70 30,70" fill="none" stroke="#888" strokeWidth="2" opacity="0.8" />
            {/* Small Triangle (solid) */}
            <polygon points="50,50 60,65 40,65" fill="#999" />
          </svg>
        </div>
      </div>

      {/* Welcome Text */}
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl font-semibold mb-4">Welcome to C-ORDER</h2>
        <p className="text-gray-400 text-base leading-relaxed max-w-sm">
          C-ORDER helps streamline your ordering workflow with smart organization and real-time collaboration. Join
          thousands of teams already optimizing their processes.
        </p>
      </div>

      {/* CTA Card */}
      <div className="w-full bg-gray-800 rounded-2xl p-6 text-center border border-gray-700">
        <h3 className="text-white text-lg font-semibold mb-2">Get your right order and right place apply now</h3>
        <p className="text-gray-400 text-sm mb-4">
          Be among the first founders to experience the easiest way to manage your operations.
        </p>
        {/* Avatar Stack */}
        <div className="flex justify-center -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-gray-800 flex items-center justify-center text-white text-xs font-bold"
            >
              {String.fromCharCode(64 + i)}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-800 to-transparent rounded-full blur-3xl opacity-20 pointer-events-none"></div>
    </div>
  )
}
