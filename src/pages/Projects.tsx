import { Heading, minorScale, Pane, Text } from 'evergreen-ui';
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      image: 'https://via.placeholder.com/300',
      title: 'Community Garden Initiative',
      description:
        'A project aimed at creating a community garden to promote sustainable living and provide fresh produce to local residents.',
      link: 'https://example.com/community-garden',
      metaLinks: [
        {
          name: 'Learn More',
          link: 'https://example.com/community-garden',
        },
      ],
      techStack: [],
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Local Art Exhibition',
      description:
        'An exhibition showcasing the work of local artists, providing them with a platform to display their art and connect with the community.',
      link: 'https://example.com/art-exhibition',
      metaLinks: [
        {
          name: 'Learn More',
          link: 'https://example.com/art-exhibition',
        },
      ],
      techStack: [],
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Neighborhood Clean-Up Drive',
      description:
        'A volunteer-driven initiative to clean up local parks and streets, fostering a sense of community and environmental responsibility.',
      link: 'https://example.com/clean-up-drive',
      metaLinks: [
        {
          name: 'Learn More',
          link: 'https://example.com/clean-up-drive',
        },
      ],
      techStack: [],
    },
  ];

  return (
    <Pane>
      <Pane display="flex" flexDirection="column" alignItems="center">
        {projects.map((project, index) => (
          <Pane
            key={index}
            width="100%"
            marginBottom={24}
            display="flex"
            flexDirection="row"
            padding={16}
            background={'white'}
            borderRadius={4}
            color={'black'}
          >
            <Pane flex={1} marginRight={16}>
              {project.image && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', borderRadius: '4px' }}
                  />
                </a>
              )}
            </Pane>
            <Pane flex={2}>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Text
                    size={600}
                    marginTop={minorScale(2)}
                    color={'black'}
                    display="block"
                    fontWeight="bold"
                  >
                    {project.title}
                  </Text>
                </a>
              ) : (
                <Text
                  size={600}
                  marginTop={minorScale(2)}
                  color={'black'}
                  display="block"
                  fontWeight="bold"
                >
                  {project.title}
                </Text>
              )}
              <Text size={400} marginTop={minorScale(2)} color={'black'} display="block">
                {project.description}
              </Text>
              {project.metaLinks && (
                <Text
                  size={400}
                  marginTop={minorScale(1)}
                  color={'black'}
                  display="block"
                >
                  {project.metaLinks.map((metaLink, metaLinkIndex) => (
                    <React.Fragment key={metaLinkIndex}>
                      <a
                        href={metaLink.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        {metaLink.name}
                      </a>
                      {metaLinkIndex < project.metaLinks.length - 1 && ' / '}
                    </React.Fragment>
                  ))}
                </Text>
              )}
            </Pane>
          </Pane>
        ))}
      </Pane>
    </Pane>
  );
};

export default Projects;
