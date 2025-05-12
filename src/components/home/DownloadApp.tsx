"use client";
export default function DownloadApp() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Download Our Mobile App</h2>
            <p className="text-white/80 text-lg mb-8">
              Get exclusive deals and manage your bookings on the go with our easy-to-use mobile application.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-black hover:bg-black/80 text-white py-3 px-6 rounded-lg flex items-center transition duration-300">
                <i className="fab fa-apple text-2xl mr-3"></i>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-black hover:bg-black/80 text-white py-3 px-6 rounded-lg flex items-center transition duration-300">
                <i className="fab fa-google-play text-2xl mr-3"></i>
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600" 
              alt="AutoRental Mobile App" 
              className="rounded-lg shadow-xl max-w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
