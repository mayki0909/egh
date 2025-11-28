import { Award, Users, Clock, ThumbsUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function About() {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Emergency Service' },
    { icon: ThumbsUp, value: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                alt="Electrician at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-slate-700 p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl hidden md:block">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-white">Licensed</p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200">& Insured</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-gray-900">About Us</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              With over 15 years of experience in the electrical industry, we pride ourselves on delivering top-quality electrical services to both residential and commercial clients. Our team of licensed and certified electricians is dedicated to ensuring your safety and satisfaction.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              We stay up-to-date with the latest electrical codes and technologies, ensuring that every project is completed to the highest standards. From small repairs to large installations, we handle every job with professionalism and expertise.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-4 sm:p-5 lg:p-6 bg-slate-100 rounded-lg">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-slate-700 mx-auto mb-2 sm:mb-3" strokeWidth={2} />
                    <p className="text-2xl sm:text-2xl lg:text-3xl text-slate-900 mb-1">{stat.value}</p>
                    <p className="text-xs sm:text-sm lg:text-base text-slate-700">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
