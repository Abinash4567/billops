import Header from '@/components/common/header';
import Main from '@/components/common/main';
import Section from '@/components/common/section';
import Trusted from '@/components/common/trusted';
import Plans from '@/components/common/plans';
import Faqs from '@/components/common/faqs';
import Footer from '@/components/common/footer';


export default function Home() {
  return (
  <div>
    <Header />
    <Main />
    <Section />
    <Trusted />
    <Plans/>
    <Faqs/>
    <Footer/>
  </div>);
}
