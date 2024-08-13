import HomeContent from '@/components/home/HomeContent';

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <HomeContent />
    </div>
  );
}

// SSG
export const dynamic = 'force-static';
