import React from 'react';
import { Link } from 'wouter';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/kbuCeaZfrgJv7ecTDWFekd/sandbox/96UDgFpgJy05Lzp9RGvltf-img-2_1771113025000_na1fn_aGVyby1zYWlsYm9hdA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2J1Q2VhWmZyZ0p2N2VjVERXRmVrZC9zYW5kYm94Lzk2VURnRnBnSnkwNUx6cDlSR3ZsdGYtaW1nLTJfMTc3MTExMzAyNTAwMF9uYTFmbl9hR1Z5YnkxellXbHNZbTloZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RTRxyGnTbbhuJlNXF0ZuSmw2QksC9OqW9r2sToVpwbAR-d-WSCGkrMyDbI-gE9KJrlasLuxrQRQmB97VVsG4R9x5o41LQac~s0rGRGfUBJlu3fj~~bNRc753sf1OrCR1Y2mWiWvdPwn0362p6xSzNJS00iiD4KdMDs3PT5jU6jr~njUq8W2dnwFaBXt4aMqr0ILglQEPgceOsdHWYRKWauepOMDCxDGqShCjKRs5LjhBk2sqx27S79NZ2cVKER-eibmB91P0wgKd97wDxB2AeMX38iIwcNv-szn1BIvmLVunZt5j2OexTjRE3knGDkwh6awWTHzNqAnq2KfnXArLMg__)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Custom Marine Canvas: 
            <span className="text-secondary block">Unrivaled Quality</span>
            for Florida's Finest Vessels
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-xl">
            Protect and enhance your yacht or boat with bespoke canvas solutions, meticulously crafted for the demanding Florida marine environment in Tarpon Springs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary inline-block">
              Request a Free Consultation
            </Link>
            
            <Link to="/services" className="btn-secondary-inverted inline-block">
              Explore Our Craftsmanship
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
