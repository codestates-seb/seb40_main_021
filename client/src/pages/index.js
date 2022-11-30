import { Footer } from '../components/home/Footer';
import { Section_1 } from '../components/home/Section1';
import { Section_2 } from '../components/home/Section2';
import { Section_3 } from '../components/home/Section3';
import { HomeWrapper } from '../style/index.style';

export const Home = () => {
   return (
      <HomeWrapper>
         <Section_1 />
         <Section_2 />
         <Section_3 />
         <Footer />
      </HomeWrapper>
   );
};
