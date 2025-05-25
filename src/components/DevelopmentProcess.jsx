import React from "react";

const DevelopmentProcess = () => {
  const processSteps = [
    {
      title: "Requirement Analysis",
      description: "Understanding project requirements and defining scope",
      icon: "🔍",
    },
    {
      title: "Planning & Design",
      description: "Creating architecture diagrams and component structure",
      icon: "📝",
    },
    {
      title: "Development",
      description: "Implementing features with clean, maintainable code",
      icon: "💻",
    },
    {
      title: "Testing",
      description: "Unit tests, integration tests, and manual testing",
      icon: "🧪",
    },
    {
      title: "Deployment",
      description: "Setting up CI/CD pipelines and deploying to production",
      icon: "🚀",
    },
    {
      title: "Maintenance",
      description: "Monitoring performance and fixing bugs",
      icon: "🔧",
    },
  ];

  const problemSolving = [
    {
      title: "Break Down Problems",
      description: "Divide complex problems into smaller, manageable tasks",
    },
    {
      title: "Research & Documentation",
      description: "Study best practices and official documentation",
    },
    {
      title: "Version Control",
      description: "Use Git for tracking changes and collaborating",
    },
    {
      title: "Code Review",
      description: "Regular code reviews and pair programming",
    },
    {
      title: "Testing First",
      description: "Write tests before implementing features",
    },
    {
      title: "Continuous Learning",
      description: "Stay updated with latest technologies and patterns",
    },
  ];

  return (
    <section
      id="process"
      className="w-full bg-gradient-to-br from-[#232526] to-[#414345] text-gray-100 py-10 px-4"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
          Development Workflow & Methodology
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Development Process
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-[#232526] rounded-xl p-6 border border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-2 text-cyan-400">
                      {step.icon}
                    </span>
                    <h4 className="font-semibold">{step.title}</h4>
                  </div>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 md:text-start text-center">
              Problem Solving Methodology
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {problemSolving.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#232526] rounded-xl p-6 border border-gray-700"
                >
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
