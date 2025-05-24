import Link from 'next/link';
import { Pizza } from 'lucide-react';

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
        <div className="bg-accent-red p-2 rounded-full">
          <Pizza className="w-8 h-8 text-white" />
        </div>
        <div className="bg-accent-yellow px-4 py-1 rounded-lg">
          <span className="text-2xl font-bold tracking-wider text-white uppercase font-lilita">
            Puccini
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Logo; 