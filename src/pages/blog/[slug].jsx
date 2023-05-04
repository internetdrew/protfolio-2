import { darkModeState } from '@/src/atoms/darkModeAtom';
import { Layout, Navbar } from '@/src/components';
import { useRecoilValue } from 'recoil';

const Post = () => {
  const darkMode = useRecoilValue(darkModeState);

  console.log(darkMode);

  return (
    <Layout>
      <div className='pt-40 dark:text-slate-200'>Blog post</div>
    </Layout>
  );
};

export default Post;
