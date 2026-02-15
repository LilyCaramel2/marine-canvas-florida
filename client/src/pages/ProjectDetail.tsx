import React from 'react';
import { useRoute } from 'wouter';
import { Link } from 'wouter';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Award } from 'lucide-react';
import { serviceProjects, services } from '@/data/services';

const ProjectDetail = () => {
  const [match, params] = useRoute('/projects/:id');

  if (!match) return null;

  const project = serviceProjects.find(p => p.id === parseInt(params?.id));
  const service = services.find(s => s.id === project?.service);

  if (!project || !service) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/projects">
            <a className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      {/* Hero Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center mb-12"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <Link to="/projects">
            <a className="inline-flex items-center gap-2 text-white hover:text-yellow-300 transition-colors mb-4 w-fit">
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </a>
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">{project.name}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-card rounded-lg p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Project Overview</h2>
              <p className="text-foreground/80 text-lg mb-6">{project.description}</p>

              <h3 className="text-xl font-bold text-foreground mb-4">Project Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Service Type</p>
                    <p className="text-foreground/70">{service.title}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Completion Date</p>
                    <p className="text-foreground/70">2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-foreground/70">Tarpon Springs, Florida</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Gallery */}
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">Project Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-48 bg-gradient-to-br from-primary to-secondary rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.name} - Photo ${i}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Service Info */}
            <div className="bg-card rounded-lg p-6 shadow-lg mb-6 sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-4">Related Service</h3>
              <Link to={`/services/${service.slug}`}>
                <a className="block group">
                  <div className="h-32 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-4xl mb-4 group-hover:shadow-lg transition-shadow">
                    {service.icon}
                  </div>
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {service.title}
                  </h4>
                  <p className="text-foreground/70 text-sm mb-4">{service.shortDescription}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </Link>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Interested in This Service?</h3>
              <p className="text-sm mb-6 opacity-90">Get a free consultation for your marine canvas project.</p>
              <Link to="/contact">
                <a className="block w-full bg-white text-primary font-bold py-3 rounded-lg text-center hover:bg-gray-100 transition-colors">
                  Request Consultation
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Related Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceProjects
              .filter(p => p.service === service.id && p.id !== project.id)
              .slice(0, 3)
              .map(relatedProject => (
                <Link key={relatedProject.id} to={`/projects/${relatedProject.id}`}>
                  <a className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    <div className="h-48 bg-gradient-to-br from-primary to-secondary overflow-hidden">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {relatedProject.name}
                      </h3>
                      <p className="text-foreground/70 text-sm">{relatedProject.description}</p>
                    </div>
                  </a>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
