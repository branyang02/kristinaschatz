import '../styles/Biography.css';

import { Avatar, Heading, Pane, Text } from 'evergreen-ui';
import React from 'react';

import Contact from './Contact';
import WorkHistory from './WorkHistory';

const Biography: React.FC = () => {
  return (
    <Pane className="biography-container">
      <Pane className="biography-text">
        <h3>Biography</h3>
        <Text color="black">
          I am a pre-med student at the{' '}
          <a href="https://www.virginia.edu/">University of Virginia</a> majoring in
          cognitive science and minoring in Chinese. I am currently working as a research
          assistant with Dr. Sanja Arandjelovic at the{' '}
          <a href="https://www.arandjeloviclab.com/">Arandjelovic Lab</a>. I am interested
          in uncovering the complexities of immune system cells to one day contribute to
          novel therapies for rheumatologic diseases. Outside of research, I work as an
          organic chemistry teaching assistant at UVA. For service, I volunteer as an EMT
          at Western Albemarle Rescue Squad. Additionally, I volunteer as a classroom
          assistant for the{' '}
          <a href="https://www.rescue.org/united-states/charlottesville-va">
            International Rescue Committee&apos;s
          </a>{' '}
          English as a Second Language class, helping refugees improve their English
          speaking, reading, and listening skills. Finally, I am a hospice volunteer and
          provide companionship to elderly patients in memory care facilities.
        </Text>
        <WorkHistory />
      </Pane>
      <Pane
        className="biography-image"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Avatar
          src="https://branyang02.github.io/images/kristina.jpg"
          name="Kristina Schatz"
          size={300}
        />
        <Heading size={900} marginTop={10}>
          Kristina Schatz
        </Heading>
        <Text size={500} color="muted">
          Pre-Med Student at University of Virginia
        </Text>
        <Contact />
      </Pane>
    </Pane>
  );
};

export default Biography;
