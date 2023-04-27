import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <ul>About</ul> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'ParlaDev '}
            <span className="text-gray-600">
              Your Partner in Mobile and Software Development
            </span>
          </>
        }
        description="We specialize in creating web and mobile apps for businesses of all sizes. Our team of experienced developers and designers is dedicated to providing innovative solutions that help our clients achieve their business goals"
      />
    </Section>
  </Background>
);

export { Hero };
