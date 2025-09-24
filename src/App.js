import React from "react";
import "./index.css"; // Import Tailwind styles

export default function App() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      {/* NAV */}
      <header className="bg-blue-600 shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-md bg-blue-800 flex items-center justify-center text-white font-bold">FC</div>
              <div>
                <h1 className="text-lg font-semibold">First Class Cleaning Service</h1>
                <p className="text-xs text-blue-100">Home • Laundry • Windows • More</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6 text-sm">
              <a href="#services" className="hover:text-yellow-200">Services</a>
              <a href="#about" className="hover:text-yellow-200">About</a>
              <a href="#pricing" className="hover:text-yellow-200">Pricing</a>
              <a href="#contact" className="hover:text-yellow-200">Contact</a>
            </nav>

            <div className="hidden md:block">
              <a href="#book" className="inline-flex items-center px-4 py-2 rounded-md bg-yellow-400 text-blue-900 text-sm font-medium hover:bg-yellow-500">Book Now</a>
            </div>

            <div className="md:hidden">
              <a href="#book" className="inline-flex items-center px-3 py-2 rounded-md bg-yellow-400 text-blue-900 text-sm">Book</a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="bg-blue-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid gap-10 grid-cols-1 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl font-extrabold leading-tight text-blue-900">Affordable, reliable, and spotless results</h2>
              <p className="mt-4 text-blue-800">Home Cleaning, Laundry Services, Move In & Out clean up, Windows and more. Our services start from R350.</p>

              <div className="mt-6 flex items-center space-x-3">
                <a href="#book" className="px-5 py-3 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700">Get a quote</a>
                <a href="#services" className="px-5 py-3 rounded-md border border-blue-300 text-sm text-blue-900">View services</a>
              </div>
            </div>

            <div className="relative">
              <img src="https://hippoapp.io/storage/cleaning-hero.jpg"
                   alt="cleaning service" className="rounded-lg shadow-lg w-full object-cover h-80 md:h-96" />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-2xl font-bold text-blue-900">Our Services</h3>
          <p className="text-blue-700 mt-2">We provide trusted cleaning solutions tailored to your needs.</p>

          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Home Cleaning', body: 'Keep your home sparkling clean with our thorough service.' },
              { title: 'Laundry Services', body: 'Convenient and professional laundry services for your household.' },
              { title: 'Move In & Out Clean Up', body: 'Perfect for tenants and landlords, ensuring a spotless property.' },
              { title: 'Windows & More', body: 'Crystal-clear windows and other specialized cleaning services.' },
            ].map((s) => (
              <article key={s.title} className="bg-white rounded-lg p-5 shadow-sm border border-blue-100">
                <div className="h-12 w-12 rounded-md bg-blue-100 flex items-center justify-center font-semibold text-blue-700">✓</div>
                <h4 className="mt-3 font-semibold text-blue-900">{s.title}</h4>
                <p className="mt-2 text-sm text-blue-700">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-blue-600 py-20 px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">For More Info</h2>
          <p className="text-lg mb-6">Contact us directly via WhatsApp:</p>
          <div className="text-2xl font-semibold">
            <p>📱 073 992 2202</p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white text-center py-8">
        <p>&copy; {new Date().getFullYear()} First Class Cleaning Service. All rights reserved.</p>
      </footer>
    </div>
  );
}
