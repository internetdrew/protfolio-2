import { Card } from '@/src/components';

const Projects = ({ projects }) => {
  return (
    <section id='projects' className='w-full mx-auto mt-20 xl:max-w-6xl'>
      <h3 className='text-center text-3xl font-bold mb-10 dark:text-pink-600 md:text-4xl'>
        Projects
      </h3>
      <div className='grid lg:grid-cols-2 gap-10'>
        {projects.map(project => (
          <Card key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
