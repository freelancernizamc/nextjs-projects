import Image from 'next/image'
import Slider from './slider/page';
import Video from './video/page';

const HomePage = () => {
  return (
    <main className='bg-gradient-to-r from-pink-500 to-green-800'>
      <Slider />
      <Video />
    </main>
  )
}

export default HomePage;
