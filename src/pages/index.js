import { Hero, About, Projects, Contact, Layout } from '@/src/components';

export default function Home() {
  return (
    <Layout title='Andrew Rowley — Software Engineer'>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}
