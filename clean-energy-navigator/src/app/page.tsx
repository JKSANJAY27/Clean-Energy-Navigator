// src/app/page.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sun, Wind, Battery, DollarSign, LineChart, MapPin } from 'lucide-react';
import RotatingText from '@/components/RotatingText';
import NearbyResources from './location/page';

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
      <Icon className="w-6 h-6 text-green-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Sun className="w-8 h-8 text-green-600" />
              <span className="text-xl font-bold text-gray-800">Clean Energy Navigator</span>
            </Link>
            <Link 
              href="/form" 
              className="flex items-center space-x-2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          Your Path to
          <RotatingText
            texts={['Sustainable Energy', 'Clean Energy', 'Energy Independence', 'Environmental Impact', 'Cost Savings']}
            mainClassName="px-2 sm:px-2 md:px-3 text-green overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover the perfect clean energy solution tailored to your needs. Save money, reduce your carbon footprint, and contribute to a sustainable future.
        </p>
        <Link 
          href="/form" 
          className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full text-lg hover:bg-green-700 transition-colors duration-300"
        >
          <span>Find Your Solution</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </header>

            {/* Sustainability Check Section */}
            <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Check Product Sustainability</h2>
        <p className="text-xl text-center text-gray-600 mb-8">
          Quickly analyze the sustainability of a product by entering its link.
        </p>
        <div className="text-center">
          <Link
            href="/check"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <span>Check Product</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

            {/* Call to action */}
            <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Find Sustainable Energy Alternatives Nearby</h2>
        <p className="text-xl text-center text-gray-600 mb-8">
          Look for some better options in places near you
        </p>
        <div className="text-center">
          <Link
            href="/location"
            className="inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-4 rounded-full text-lg hover:bg-purple-700 transition-colors duration-300"
          >
            <span>Find Location</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={MapPin}
            title="Input Your Details"
            description="Share your location, energy usage, and budget to help us understand your needs."
          />
          <FeatureCard
            icon={LineChart}
            title="AI Analysis"
            description="Our advanced AI analyzes your data to find the most cost-effective clean energy solutions."
          />
          <FeatureCard
            icon={DollarSign}
            title="Get Your Report"
            description="Receive a detailed report with savings projections, breakeven analysis, and supplier recommendations."
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Battery className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reduce Energy Bills</h3>
              <p className="text-gray-600">Lower your monthly electricity costs with efficient clean energy solutions.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Wind className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
              <p className="text-gray-600">Minimize your carbon footprint and contribute to a cleaner planet.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Sun className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Energy Independence</h3>
              <p className="text-gray-600">Take control of your energy future with sustainable solutions.</p>
            </div>
          </div>
        </div>
      </section>

            {/* AI Chatbot Section */}
            <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Talk to our Sustainability AI Chatbot</h2>
        <p className="text-xl text-center text-gray-600 mb-8">
          Get personalized advice and information on your path to clean energy solutions.
        </p>
        <div className="text-center">
          <Link
            href="/chatbot"
            className="inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-4 rounded-full text-lg hover:bg-purple-700 transition-colors duration-300"
          >
            <span>Chat with AI</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sun className="w-6 h-6" />
            <span className="text-xl font-bold">Clean Energy Navigator</span>
          </div>
          <p className="text-gray-400">© 2024 Clean Energy Navigator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;