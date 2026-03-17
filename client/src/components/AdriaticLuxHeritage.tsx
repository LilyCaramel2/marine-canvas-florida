import { Anchor, Award, Star, Shield } from 'lucide-react';

interface AdriaticLuxHeritageProps {
  variant?: 'marine' | 'industrial';
}

const AdriaticLuxHeritage = ({ variant = 'marine' }: AdriaticLuxHeritageProps) => {
  const isIndustrial = variant === 'industrial';

  return (
    <section
      className={`py-16 ${
        isIndustrial
          ? 'bg-slate-900 border-t border-slate-700'
          : 'bg-gradient-to-br from-primary/5 via-background to-accent/5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Dual-brand header */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Life-ring badge */}
          <div
            className={`relative flex items-center justify-center w-28 h-28 rounded-full border-4 mb-6 ${
              isIndustrial
                ? 'border-yellow-500 bg-slate-800'
                : 'border-primary bg-white shadow-xl'
            }`}
          >
            <Anchor
              className={`w-10 h-10 ${isIndustrial ? 'text-yellow-400' : 'text-primary'}`}
            />
            {/* Ring label top */}
            <span
              className={`absolute -top-3 text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded ${
                isIndustrial
                  ? 'bg-yellow-500 text-slate-900'
                  : 'bg-primary text-white'
              }`}
            >
              Adriatic Lux
            </span>
            {/* Ring label bottom */}
            <span
              className={`absolute -bottom-3 text-xs font-semibold tracking-wider uppercase px-2 py-0.5 rounded ${
                isIndustrial
                  ? 'bg-slate-700 text-yellow-400 border border-yellow-500'
                  : 'bg-accent/20 text-primary border border-primary/30'
              }`}
            >
              Marine Canvas Florida
            </span>
          </div>

          <p
            className={`text-xs font-bold tracking-widest uppercase mb-3 ${
              isIndustrial ? 'text-yellow-400' : 'text-accent'
            }`}
          >
            Our Heritage
          </p>
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isIndustrial ? 'text-white' : 'text-primary'
            }`}
          >
            {isIndustrial
              ? 'Industrial Precision Rooted in European Craftsmanship'
              : 'Two Decades of Ocean-Tested Excellence'}
          </h2>
          <p
            className={`text-lg max-w-3xl leading-relaxed ${
              isIndustrial ? 'text-slate-300' : 'text-text/80'
            }`}
          >
            {isIndustrial
              ? 'Marine Canvas Florida is the industrial fabrication division of Adriatic Lux — a master craftsman workshop founded in 2014 by Peck and Ella, Serbian-born sailors who rebuilt a sunken ocean-going vessel from an empty hull and crossed the Atlantic. The same discipline that survived Hurricane Don at sea is now applied to your cleanroom, data centre, and equipment protection requirements.'
              : 'Marine Canvas Florida is powered by the master craftsmen of Adriatic Lux, our heritage workshop founded in Tarpon Springs in 2014. With roots in the Mediterranean and over 20 years of hands-on fabrication experience, we bring European craftsmanship and ocean-tested quality to every project — from a 30ft fishing boat to a 120ft luxury yacht.'}
          </p>
        </div>

        {/* Trust credentials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <Award className={`w-6 h-6 ${isIndustrial ? 'text-yellow-400' : 'text-accent'}`} />,
              label: 'Founded 2014',
              sub: 'Tarpon Springs, FL',
            },
            {
              icon: <Star className={`w-6 h-6 ${isIndustrial ? 'text-yellow-400' : 'text-accent'}`} />,
              label: '36+ Five-Star Reviews',
              sub: 'Google Business Profile',
            },
            {
              icon: <Shield className={`w-6 h-6 ${isIndustrial ? 'text-yellow-400' : 'text-accent'}`} />,
              label: 'MFA Member',
              sub: 'Marine Fabricators Association',
            },
            {
              icon: <Anchor className={`w-6 h-6 ${isIndustrial ? 'text-yellow-400' : 'text-accent'}`} />,
              label: '20+ Years Expertise',
              sub: 'Mediterranean to Atlantic',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center p-5 rounded-lg ${
                isIndustrial
                  ? 'bg-slate-800 border border-slate-700'
                  : 'bg-white shadow-md border border-border'
              }`}
            >
              <div className="mb-3">{item.icon}</div>
              <p
                className={`font-bold text-sm ${
                  isIndustrial ? 'text-white' : 'text-primary'
                }`}
              >
                {item.label}
              </p>
              <p
                className={`text-xs mt-1 ${
                  isIndustrial ? 'text-slate-400' : 'text-text/60'
                }`}
              >
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Trust signal tagline */}
        <p
          className={`text-center mt-10 text-sm font-medium italic ${
            isIndustrial ? 'text-slate-400' : 'text-text/60'
          }`}
        >
          {isIndustrial
            ? '"The same 5-star yacht-grade precision, now engineered for industrial applications."'
            : '"Whether it is a 30ft fishing boat or a 120ft luxury yacht, the same innovative and professional service is promised."'}
        </p>
      </div>
    </section>
  );
};

export default AdriaticLuxHeritage;
