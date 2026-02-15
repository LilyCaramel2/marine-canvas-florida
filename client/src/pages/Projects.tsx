import React, { useState } from 'react';
import { Link } from 'wouter';
import { services, serviceProjects } from '@/data/services';
import { Filter, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const filteredProjects = selectedService
    ? serviceProjects.filter(p => p.service === selectedService)
    : serviceProjects;

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Project Portfolio
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Explore our collection of completed projects showcasing our expertise in marine canvas solutions.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Filter by Service</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedService(null)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedService === null
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-foreground hover:bg-primary/20'
              }`}
            >
              All Projects ({serviceProjects.length})
            </button>
            {services.map(service => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedService === service.id
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-foreground hover:bg-primary/20'
                }`}
              >
                {service.title} ({serviceProjects.filter(p => p.service === service.id).length})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map(project => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <a className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                {/* Image */}
                <div className="h-64 bg-gradient-to-br from-primary to-secondary overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/70 text-lg">
              No projects found in this category. Check back soon!
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-center text-white mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today for a free consultation and custom quote for your marine canvas needs.
          </p>
          <Link to="/contact">
            <a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Request a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
