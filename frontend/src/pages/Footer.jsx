import Blackhole from "../assets/blackhole.webm";

export default function Footer() {
  return (
    <>
      {/* Video Section */}
      <section className=" w-full h-[360px] relative overflow-hidden mb-[-180px]">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={Blackhole} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient overlays */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[400px] rounded-[100%] bg-gradient-radial from-purple-300 via-purple-500 to-transparent opacity-30 blur-[60px]" />
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] rounded-[100%] bg-gradient-radial from-white via-purple-300 to-transparent opacity-40 blur-[40px]" />
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[400px] h-[200px] rounded-[100%] bg-gradient-radial from-white to-transparent opacity-50 blur-[20px]" />
      </section>

      {/* Footer Section */}
      <footer className="relative w-full bg-black text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Dev Clash</h3>
              <p className="text-sm">Empowering developers through competitive coding challenges.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Challenges</a></li>
                <li><a href="#" className="hover:text-white">Leaderboard</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Email: info@devclash.com</li>
                <li>Phone: +1 234 567 890</li>
                <li>Address: Tech Hub, Innovation Street</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p>&copy; 2024 Dev Clash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}