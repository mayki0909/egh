'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '030 628 310',
      link: 'tel:030628310'
    },
    {
      icon: Mail,
      title: 'E-pošta',
      value: 'egh@gmail.com',
      link: 'mailto:egh@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Lokacija',
      value: 'Groharjevo naselje 5, 4220 Škofja Loka',
      link: null
    },
    {
      icon: Clock,
      title: 'Delovni čas',
      value: 'Pon-Pet: 7:00-18:00, Nujna pomoč 24/7',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-gray-900">Kontaktirajte nas</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Pripravljeni začeti vaš projekt? Kontaktirajte nas še danes za brezplačno posvetovanje in ponudbo za električne storitve v Kranju in okolici
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-slate-50 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base text-gray-900 mb-1">{info.title}</p>
                      <p className="text-sm sm:text-base text-gray-600">{info.value}</p>
                    </div>
                  </div>
                );

                return info.link ? (
                  <a key={index} href={info.link} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            <div className="bg-slate-700 text-white p-6 sm:p-8 rounded-xl">
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-white">Dežurni električar v Kranju in okolici</h3>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base text-slate-100">
                Dežurni električar pravimo tistemu, ki nudi svoja dela tudi izven klasičnega delovnega časa. V kolikor imate težave z električnimi inštalacijami, napravami ali varovalkami v Kranju, Škofji Loki in okolici, nas lahko pokličete tudi ponoči. Obrazložite svoje težave dežurnemu električarju preko telefona, kjer vam bo svetoval kakšen je nadaljnji postopek. V primeru visoke nujnosti, pa vam bo pomoč nudil tudi na domu.
              </p>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base text-slate-100">
                Ob težavah z električnimi inštalacijami v proizvodni, kjer obratovanje poteka 24 ur na dan, bo dežurni električar izvedel obisk na lokaciji v Kranju in okolici.
              </p>
              <a
                href="tel:030628310"
                className="inline-block bg-white text-slate-900 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-slate-100 transition-colors text-sm sm:text-base font-semibold"
              >
                Pokličite dežurnega električarja: 030 628 310
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-xl shadow-lg order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base text-gray-700 mb-2">
                  Ime in priimek *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
                  placeholder="Janez Novak"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base text-gray-700 mb-2">
                    E-pošta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="janez@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="030 123 456"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm sm:text-base text-gray-700 mb-2">
                  Potrebna storitev *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
                >
                  <option value="">Izberite storitev</option>
                  <option value="residential">Domače električne storitve</option>
                  <option value="commercial">Poslovne električne storitve</option>
                  <option value="lighting">Namestitev razsvetljave</option>
                  <option value="emergency">Nujna popravila</option>
                  <option value="inspection">Varnostni pregled</option>
                  <option value="panel">Nadgradnja električne omarice</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm sm:text-base text-gray-700 mb-2">
                  Sporočilo *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700 resize-none"
                  placeholder="Prosimo, opišite vaše električne potrebe..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-700 text-white py-3 sm:py-4 text-sm sm:text-base rounded-lg hover:bg-slate-600 transition-colors"
              >
                {submitted ? 'Sporočilo poslano!' : 'Pošlji sporočilo'}
              </button>

              {submitted && (
                <p className="text-sm sm:text-base text-green-600 text-center">
                  Hvala! Kmalu vas bomo kontaktirali.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
