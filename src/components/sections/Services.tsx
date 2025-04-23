import React from "react";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/services";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="My Services"
          subtitle="Specialized expertise to bring your digital vision to life."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
