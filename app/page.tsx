import { Inter } from 'next/font/google';
import Image from 'next/image';

import Card from '@/components/card';
import Dropdown from '@/components/dropdown';
import List from '@/components/list';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const recipe = [
    'Telor ayam 1 butir',
    'Minyak goreng 1/2 cup',
    'Garam 1/2 sendok teh',
    'Merica 1/2 sendok teh',
    'Butter 1/2 sendok makan',
  ];
  const subMenu = ['UI&UX Design', 'Web Development', 'Mobile Development'];
  return (
    <main className='flex min-h-screen w-full flex-col items-center gap-12 overflow-hidden p-2 md:p-24'>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        <div className='flex flex-col gap-2'>
          <p className='text-lg'>1. Card</p>
          <Card
            title='Little Known Facts'
            image='/sample-image.jpeg'
            description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
          />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <p className='text-lg'>2. Dropdown</p>
          <Dropdown title='Our Works' subMenu={subMenu} />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <p className='text-lg'>3. List</p>
          <List data={recipe} />
        </div>
      </div>
    </main>
  );
}
