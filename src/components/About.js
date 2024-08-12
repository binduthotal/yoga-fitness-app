import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          About This Project
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          This yoga and fitness application was developed with a mission to
          promote health and well-being through a holistic approach. As a solo
          developer, I am committed to empowering individuals to reach their
          full potential, both physically and mentally, by providing accessible
          tools and resources.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          My Journey
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          The journey began with a passion for wellness and a simple goal: to
          make yoga and fitness accessible to everyone, regardless of their
          background or experience level. As a solo developer, I have poured my
          heart and soul into every aspect of this project, from design to
          functionality, to ensure that it meets the needs of its users.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          A Solo Effort
        </h2>
        <p className="text-gray-600 leading-relaxed">
          This application was created single-handedly, with no team, driven by
          a dedication to quality and user satisfaction. Every feature, from the
          intuitive interface to the extensive library of resources, has been
          carefully crafted to provide the best possible experience.
        </p>
      </div>
    </section>
  );
}

export default About;
