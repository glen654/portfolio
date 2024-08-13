import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
          <SectionTitle>
              Hello There! <br />
              I'm Glen
          </SectionTitle>
          <SectionText>
              A passionate Full-Stack Developer trying to give get better
          </SectionText>
          <Button onClick={()=> window.location = 'https://linkedin.com'}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;