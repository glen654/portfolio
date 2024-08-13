import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDemo = [{
  title: 'Project 1',
  description: 'This is a really long project about this project'
},{
  title: 'Project 2',
  description: 'This is a really long project about this project
},{
  title: 'Project 3',
  description: 'This is a really long project about this project
},{
  title: 'Project 4',
  description: 'This is a really long project about this project
}];

const Projects = () => (
  <Section nopadding id="projects">
      <SectionDivider/>
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {[0, 1, 2, 3, 4, 5].map((project => {
          <div>
            {project}
          </div>
        }))}
      </GridContainer>
  </Section>
);

export default Projects;