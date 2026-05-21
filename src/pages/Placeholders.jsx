import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow flex flex-col items-center justify-center p-20 bg-gray-50">
      <h1 className="text-5xl font-bold text-navy mb-4">{title}</h1>
      <p className="text-gray-500 text-lg max-w-md text-center">
        We are working hard to bring you the best {title.toLowerCase()} experience. 
        Stay tuned for our amazing academic services.
      </p>
      <div className="mt-8 w-16 h-1 bg-primary rounded-full animate-pulse"></div>
    </main>
    <Footer />
  </div>
);

export const LoginPage = () => <PlaceholderPage title="Account Login" />;
