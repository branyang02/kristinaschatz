import { Avatar, Heading, Pane, Paragraph, Strong, Text } from 'evergreen-ui';

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
        zyy2sb@virginia.edu ▪ kristinaschatz17@gmail.com
      </Text>

      <Pane marginTop={32} width="100%" maxWidth={800}>
        <Heading size={700}>Education</Heading>
        <Paragraph marginTop={8}>
          <Strong>University of Virginia, Charlottesville, VA</Strong> — May 2025
          <br />
          Major: B.A. Cognitive Science, Minor: Chinese Language & Literature
          <br />
          GPA: 3.975 / 4.0
          <br />
          Certifications: Emergency Medical Technician, BLS CPR
        </Paragraph>

        <Heading size={700} marginTop={32}>
          Experience
        </Heading>
        <Pane marginTop={8}>
          <Strong>Research Assistant, Arandjelovic Lab, Charlottesville, VA</Strong>
          <Text color="muted"> — May 2022 - Present</Text>
          <Paragraph marginTop={4}>
            • Perform lipid transfection and antibiotic selection to create stable
            macrophage cell lines which display reduced efferocytosis.
            <br />
            • Conduct wound healing assays to analyze changes in macrophage wound closure
            in the presence of apoptotic supernatants.
            <br />
            • Maintain LR73 and J774 cell cultures by splitting cells.
            <br />• Perform qPCR analysis, including isolation of RNA and creation of
            cDNA.
          </Paragraph>

          <Strong>
            Patient Transporter, UVA University Hospital, Charlottesville, VA
          </Strong>
          <Text color="muted"> — June 2022 - Dec 2022</Text>
          <Paragraph marginTop={4}>
            • Discharged patients from hospital units.
            <br />
            • Transported equipment throughout hospital to provide units with necessary
            supplies.
            <br />• Disinfected soiled equipment to ensure clean equipment available for
            patients and staff.
          </Paragraph>

          <Strong>
            Organic Chemistry Teaching Assistant, University of Virginia, Charlottesville,
            VA
          </Strong>
          <Text color="muted"> — Jan 2024 - Present</Text>
          <Paragraph marginTop={4}>
            • Answer student questions during lectures and class discussions for 150
            students.
            <br />
            • Host office hours to explain class content and assist student learning.
            <br />• Collaborate with course staff during weekly meetings to discuss best
            teaching strategies.
          </Paragraph>
        </Pane>

        <Heading size={700} marginTop={32}>
          Volunteering
        </Heading>
        <Pane marginTop={8}>
          <Strong>
            Emergency Medical Technician, Western Albemarle Rescue Squad, Crozet, VA
          </Strong>
          <Text color="muted"> — Jan 2024 - Present</Text>
          <Paragraph marginTop={4}>
            • Respond to 911 medical calls for 12 hours per week.
            <br />
            • Take vital signs and perform assessments to evaluate patients&apos;s
            conditions.
            <br />• Administer appropriate medications and interventions.
          </Paragraph>

          <Strong>Hospice Volunteer, Heartland Hospice, Charlottesville, VA</Strong>
          <Text color="muted"> — Sep 2023 - Present</Text>
          <Paragraph marginTop={4}>
            • Visit nursing home resident weekly as a friendly visitor volunteer.
            <br />• Inform hospice staff of changes in patient&apos;s condition to ensure
            quality patient care.
          </Paragraph>

          <Strong>
            ESL Class Volunteer, International Rescue Committee, Charlottesville, VA
          </Strong>
          <Text color="muted"> — Aug 2023 - Present</Text>
          <Paragraph marginTop={4}>
            • Tutor class of refugees 2 times per week to develop student speaking,
            reading, and writing skills.
            <br />• Assist refugees in adjusting to new life in the U.S.
          </Paragraph>

          <Strong>
            Volunteer, Sentara Martha Jefferson Hospital, Charlottesville, VA
          </Strong>
          <Text color="muted"> — Feb 2023 -July 2023</Text>
          <Paragraph marginTop={4}>
            • Greeted and welcomed patients and families into surgical waiting area.
            <br />
            • Escorted families to patient rooms.
            <br />• Checked in on families in waiting rooms.
          </Paragraph>
        </Pane>

        <Heading size={700} marginTop={32}>
          Publications
        </Heading>
        <Paragraph marginTop={8}>
          • Schneider K., Schatz K., Van Wagoner K., Pavelec C., Sovinski H., Kuzniewska
          A., Leitinger N., Elliott M.R., and S. Arandjelovic. Adaptation of macrophage
          metabolism to reduced efferocytosis alleviates inflammatory arthritis.
          (Manuscript in Preparation)
        </Paragraph>

        <Heading size={700} marginTop={32}>
          Extracurriculars
        </Heading>
        <Paragraph marginTop={8}>
          <Strong>
            Public Relations Chair, UVA Chinese Student Association (CSA),
            Charlottesville, VA
          </Strong>{' '}
          — May 2023 - Present
          <br />
          • Design flyers for all CSA events during the 2023-24 school year.
          <br />• Manage CSA social media accounts.
        </Paragraph>
      </Pane>
    </Pane>
  );
};

export default Resume;
