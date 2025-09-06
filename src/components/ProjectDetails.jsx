import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "./ProjectData";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const controls = useAnimation();
  
  // Find the project with the matching ID
  const project = projects.find(p => p.id.toString() === projectId);
  
  // If project not found, redirect to projects page
  useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);
  
  if (!project) {
    return null; // or a loading spinner
  }

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-10 bg-[#f8f7f0] GetFontSol">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6 w-fit"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Projects
      </button>

      {/* Project Details */}
      <motion.div 
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-1/2">
            <img 
              className="h-full w-full object-cover md:h-full md:w-full" 
              src={project.image} 
              alt={project.title} 
            />
          </div>
          <div className="p-8 md:w-1/2">
            <div className="uppercase tracking-wide text-sm text-green-600 font-semibold mb-1">
              {project.category}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            
            {project.kwp && project.kwp !== "N/A" && (
              <div className="mt-4">
                <span className="text-gray-600">Capacity:</span>{' '}
                <span className="font-medium">{project.kwp} kWp</span>
              </div>
            )}
            
            <div className="mt-6">
              <p className="text-gray-600 mb-4">
                This {project.category.toLowerCase()} project showcases our commitment to delivering high-quality solar solutions. 
                {project.kwp && project.kwp !== "N/A" && ` With a capacity of ${project.kwp} kWp, `} 
                this installation demonstrates our expertise in the field.
              </p>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Highlights</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Custom-designed solar solution</li>
                  <li>High-efficiency solar panels</li>
                  <li>Professional installation by certified technicians</li>
                  <li>Comprehensive maintenance support</li>
                </ul>
              </div>
              
              <div className="mt-8">
                <button 
                  onClick={() => window.history.back()}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Back to Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Related Projects */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter(p => p.id !== project.id && p.category === project.category)
            .slice(0, 3)
            .map(relatedProject => (
              <div 
                key={relatedProject.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(`/projectdetails/${relatedProject.id}`)}
              >
                <img 
                  src={relatedProject.image} 
                  alt={relatedProject.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800">{relatedProject.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{relatedProject.category}</p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;
