import { useRecoilValue } from 'recoil';
import { darkModeState } from '@/src/atoms/darkModeAtom';

export default function Blog() {
  const darkMode = useRecoilValue(darkModeState);
  return <div className={darkMode ? 'dark' : ''}>index</div>;
}
