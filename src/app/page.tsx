import { redirect } from 'next/navigation';
import MainContent from '@/components/MainContent';

export default function Home() {
  redirect('/6/introduce');
  return <MainContent />;
}
