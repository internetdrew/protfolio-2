import { SocialLinks } from '.';

const Footer = () => {
  return (
    <div className='pt-4 pb-2'>
      <h1 className='text-center text-xl dark:text-slate-200 mb-2'>
        Thank you for visiting. If we haven't already, lets connect!
      </h1>
      <SocialLinks />
    </div>
  );
};

export default Footer;
