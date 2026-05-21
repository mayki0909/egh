import { containerClass } from '../lib/figma-assets';

export default function Projects() {
  return (
    <section id="projects" className="bg-bg-page py-16 md:py-20 lg:py-24">
      <div className={`${containerClass} flex flex-col gap-10 md:gap-14`}>
        <div className="flex flex-col gap-4 items-center text-center max-w-[871px] mx-auto">
          <p className="font-label text-accent text-base uppercase leading-7">Naši Projekti</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[48px] text-white leading-tight">
            <span className="text-accent">Kvalitetna</span> Izvedba in{' '}
            <span className="text-accent">Zanesljiva</span> Storitev za Vaše Električne Naloge!
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.42fr_1fr] gap-6">
            <div className="bg-bg-placeholder rounded-lg h-[280px] md:h-[424px]" />
            <div className="bg-bg-placeholder rounded-lg h-[280px] md:h-[424px]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-bg-placeholder rounded-lg h-[280px] md:h-[424px]" />
            <div className="bg-bg-placeholder rounded-lg h-[280px] md:h-[424px]" />
            <div className="bg-bg-placeholder rounded-lg h-[280px] md:h-[424px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
