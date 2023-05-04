import Head from 'next/head';
import {
  Hero,
  Navbar,
  About,
  Projects,
  Contact,
  Footer,
  Layout,
} from '@/src/components';

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
