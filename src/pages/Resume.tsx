import { Avatar, Heading, Pane, Paragraph, Strong, Text } from 'evergreen-ui';
import React from 'react';

const Resume = () => {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={16}
      background="tint2"
      borderRadius={4}
    >
      <Avatar
        src="https://branyang02.github.io/images/kristina.jpg"
        name="Kristina Schatz"
        size={120}
      />
      <Heading size={900} marginTop={16}>
        Kristina Schatz
      </Heading>
      <Text size={500} color="muted">
        Pre-Med Student at University of Virginia
      </Text>

      <Pane marginTop={32} width="100%" maxWidth={800}>
        <Heading size={700}>Biography</Heading>
        <Paragraph marginTop={8}>
          I am a pre-med student at the{' '}
          <a href="https://www.virginia.edu/">University of Virginia</a>. I have
          experience as an Emergency Medical Technician (EMT), and I am actively involved
          in refugee support and volunteering activities. Additionally, I serve as a
          Teaching Assistant (TA) and have been shadowing doctors affiliated with the{' '}
          <a href="https://www.sjia.org/">SJIA</a>. My diverse experiences have fueled my
          passion for medicine and community service, and I am committed to making a
          positive impact in the healthcare field.
        </Paragraph>

        <Heading size={700} marginTop={32}>
          Work History
        </Heading>
        <Pane marginTop={8}>
          <Strong>TA for Biology 101 (UVA)</Strong>
          <Text color="muted"> — Jan 2024 - Current</Text>
          <Paragraph marginTop={4}>
            Assisted in teaching and grading for the Biology 101 course.
          </Paragraph>

          <Strong>Volunteer at University of Virginia Health System</Strong>
          <Text color="muted"> — May 2022 - Current</Text>
          <Paragraph marginTop={4}>
            Provided support and assistance to patients and staff.
          </Paragraph>

          <Strong>EMT at Charlottesville-Albemarle Rescue Squad</Strong>
          <Text color="muted"> — Oct 2023 - Current</Text>
          <Paragraph marginTop={4}>
            Responded to emergency calls and provided medical care.
          </Paragraph>

          <Strong>Shadowing Doctor at SJIA</Strong>
          <Text color="muted"> — May 2023 - Aug 2023</Text>
          <Paragraph marginTop={4}>
            Gained hands-on experience by shadowing doctors in various departments.
          </Paragraph>

          <Strong>Refugee Support Volunteer at International Rescue Committee</Strong>
          <Text color="muted"> — Jan 2023 - May 2023</Text>
          <Paragraph marginTop={4}>
            Assisted refugees in their resettlement process and provided necessary
            support.
          </Paragraph>
        </Pane>

        <Heading size={700} marginTop={32}>
          Contact Information
        </Heading>
        <Paragraph marginTop={8}>
          <Strong>Email:</Strong>{' '}
          <a href="mailto:jqm9ba@virginia.edu">jqm9ba@virginia.edu</a>
        </Paragraph>
        <Paragraph>
          <Strong>LinkedIn:</Strong>{' '}
          <a href="https://www.linkedin.com/in/byang02/">LinkedIn Profile</a>
        </Paragraph>
        <Paragraph>
          <Strong>GitHub:</Strong>{' '}
          <a href="https://github.com/branyang02">GitHub Profile</a>
        </Paragraph>
      </Pane>
    </Pane>
  );
};

export default Resume;
