import { Zap, Home, Building2, Lightbulb, ShieldCheck, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential Electrical',
      description: 'Complete home electrical services including installations, repairs, and upgrades for your safety and comfort.'
    },
    {
      icon: Building2,
      title: 'Commercial Electrical',
      description: 'Professional electrical solutions for businesses, offices, and commercial properties with minimal downtime.'
    },
    {
      icon: Lightbulb,
      title: 'Lighting Installation',
      description: 'Expert lighting design and installation for interior and exterior spaces to enhance ambiance and efficiency.'
    },
    {
      icon: Zap,
      title: 'Emergency Repairs',
      description: '24/7 emergency electrical repair services to quickly resolve urgent electrical issues and restore power.'
    },
    {
      icon: ShieldCheck,
      title: 'Safety Inspections',
      description: 'Thorough electrical safety inspections to ensure your property meets all code requirements and standards.'
    },
    {
      icon: Wrench,
      title: 'Panel Upgrades',
      description: 'Electrical panel upgrades and replacements to handle modern power demands safely and efficiently.'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-gray-900">What We Offer</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Comprehensive electrical services tailored to meet your residential and commercial needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-200 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-slate-700" strokeWidth={2} />
                </div>
                <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 text-gray-900">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
