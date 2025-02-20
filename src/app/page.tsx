import { redirect } from 'next/navigation';
import MainContent from '@/components/MainContent';

export default function Home() {
  redirect('/5/introduce');
  return <MainContent />;
}
