import React from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/kbuCeaZfrgJv7ecTDWFekd/sandbox/9KnOyH6C2Uxbyg74CEAyOU-img-1_1771114274000_na1fn_aGVyby1hYm91dA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2J1Q2VhWmZyZ0p2N2VjVERXRmVrZC9zYW5kYm94LzlLbk95SDZDMlV4YnlnNzRDRUF5T1UtaW1nLTFfMTc3MTExNDI3NDAwMF9uYTFmbl9hR1Z5YnkxaFltOTFkQS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Jg~7QVoZ19zHxli5d26lvOrGyYE6qOTCzDjWpHY7AxHmwHsEdc5eOSHx5sSlzngY0nwET9X-JhW8GNkOh8vOHZiQMCeOcNAaBQbZ1QnPyytImSCtNhSQj6yNTkd7b0cD0osK26TfHPJtTG3xpozf71bIJQT~nJJ4Cq270jxf4PA6IDcEge9g~al7PBQ17cCbfnf2BgNsDBR94sB5p837EgciIw~24XZpT1dAvXD5Z3mgRChcvytwc~gaoHd8hVX5iOVT1fDRcZ4mFVqInDPNCdlbgZTDwghBDRak3JSrtbhIm8Ke-Pb0j1LFGL3WHISCj6tUtw~A~ihiLYJbZudh-w__)',
        }}
      />

      {/* Dark Gradient Overlay - Left darker, right lighter */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10" />

      {/* Content - Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Custom Marine Canvas:
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">
            Unmatched Quality
          </span>
          <br />
          for Florida's Finest Vessels
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-2xl drop-shadow-md leading-relaxed">
          Protect and enhance your yacht or boat with bespoke canvas solutions, meticulously crafted for the demanding Florida marine environment in Tarpon Springs.
        </p>

        {/* CTA Buttons - Better Spacing */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full">
          <Link to="/contact">
            <a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Request a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
          <Link to="/services">
            <a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/40">
              Explore Our Craftsmanship
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
