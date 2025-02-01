import { CNLink } from '@/components/chakra-next'
import Metahead from '@/components/MetaHead'
import { siteMap } from '@/lib/config/site-config'
import { Flex, Heading, HStack, Separator, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLink } from 'react-icons/fa6'

export default function ProjectPage() {
  return (
    <Stack gap={8}>
      <Heading as="h1" fontSize="3xl" mb={4}>
        Projects 🚀
      </Heading>
      {projectData.map((i) => (
        <Project key={i.title} {...i} />
      ))}
    </Stack>
  )
}

type Project = {
  title: string
  description: string
  previewUrl?: string
  gitUrl?: string
}

const Project = ({ title, description, previewUrl, gitUrl }: Project) => {
  return (
    <>
      <Metahead
        title="Projects | College Portfolio"
        description="This is a portfolio website built using Next.js and Chakra UI by ChakraFramer Team for college students to showcase their resume, projects, and contact information."
        keywords={['Portfolio', 'Resume', 'ChakraFramer']}
        url={siteMap.projects}
      />
      <Stack gap={4}>
        <Flex flexWrap={'wrap'} gapX={4} gapY={2}>
          <Text textStyle={'cardHeading'} color={'white'}>
            {title}
          </Text>
          <HStack gap={4}>
            <CNLink hidden={!previewUrl} href={previewUrl!} color={'white'}>
              <FaLink size={'1.2rem'} />
            </CNLink>
            <CNLink hidden={!gitUrl} href={gitUrl!} color={'white'}>
              <FaGithub size={'1.2rem'} />
            </CNLink>
          </HStack>
        </Flex>
        <Separator opacity={0.2} />
        <Text>{description}</Text>
      </Stack>
    </>
  )
}

const projectData: Project[] = [
  {
    title: 'Project Alpha',
    description:
      'A task management application designed to help users organize and prioritize their daily tasks effectively.',
    previewUrl: '#',
    gitUrl: '#',
  },
  {
    title: 'Project Beta',
    description:
      'A real-time chat application with user authentication and custom chat rooms.',
    previewUrl: '#',
    gitUrl: '#',
  },
  {
    title: 'Project Gamma',
    description:
      'An e-commerce platform for small businesses, featuring product catalogs, carts, and payment integration.',
    previewUrl: '#',
    gitUrl: '#',
  },
  {
    title: 'Project Delta',
    description:
      'A portfolio website template for freelancers to showcase their skills and projects.',
    previewUrl: '#',
    gitUrl: '#',
  },
  {
    title: 'Project Epsilon',
    description:
      'A weather forecast app that provides real-time weather updates and a 7-day forecast.',
    previewUrl: '#',
    gitUrl: '#',
  },
]
