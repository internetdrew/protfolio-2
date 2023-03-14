import { Card } from '@/components';
import screenshot from '@/public/screen.png';

const projects = [
  {
    name: 'The Frank Store',
    description:
      'An online store for collectible images of your favorite Frank Costanza moments, built with Next.js, Sanity.io headless CMS, Stripe checkout, and more.',
    link: 'https://the-frank-store.vercel.app/',
    repo: 'https://github.com/internetdrew/the-frank-store',
    screenshot,
  },
];

const Projects = () => {
  return (
    <section id='projects' className='w-full mx-auto mt-20 md:w-5/6'>
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
