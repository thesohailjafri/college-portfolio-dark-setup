/* eslint-disable react/no-unescaped-entities */
import { CNLink } from '@/components/chakra-next'
import Metahead from '@/components/MetaHead'
import { siteMap } from '@/lib/config/site-config'
import { Box, Heading, Separator, Stack, Text } from '@chakra-ui/react'
import { CiMail } from 'react-icons/ci'
import { GoArrowUpRight } from 'react-icons/go'

export default function HomePage() {
  return (
    <>
      <Metahead
        title="Home | College Portfolio"
        description="This is a portfolio website built using Next.js and Chakra UI by ChakraFramer Team for college students to showcase their resume, projects, and contact information."
        keywords={['Portfolio', 'Resume', 'ChakraFramer']}
        url={siteMap.home}
      />
      <Stack gap={8} separator={<Separator opacity={0.2} />}>
        <Stack>
          <Heading as="h1" fontSize="3xl" mb={4}>
            Sup, I'm Sohail Jafri
          </Heading>
          <Text>
            I’m a Full Stack Web Developer from Mumbai, India, specializing in
            building (and occasionally designing) exceptional digital solutions.
          </Text>
        </Stack>
        {chunks.map((item) => (
          <Stack key={item.title}>
            <Heading as="h2">{item.title}</Heading>
            <Box>{item.content}</Box>
          </Stack>
        ))}
      </Stack>
    </>
  )
}

export const chunks = [
  {
    title: 'Professional Work',
    content: (
      <Stack gap={2}>
        <Text>
          I specialize in developing scalable and user-focused digital
          solutions. Currently, I work as a Freelance Developer with various
          clients, contributing to projects in web and mobile application
          development, and optimizing performance for existing platforms.
        </Text>
        <Text>
          One of my key projects involved creating a B2B platform that
          streamlined operational workflows for a mid-sized business. For more
          examples of my work, check out the Projects page.
        </Text>
      </Stack>
    ),
  },
  {
    title: 'Leadership & Community',
    content: (
      <Text>
        I have experience leading teams in collaborative environments, focusing
        on delivering impactful results. I’ve also contributed to workshops and
        training sessions aimed at enhancing technical and organizational
        skills. Additionally, I’ve played a role in organizing community events
        that bring people together.
      </Text>
    ),
  },
  {
    title: 'Personal Interests',
    content: (
      <Text>
        Beyond work, I enjoy exploring topics in technology, reading about
        personal development, and engaging in creative hobbies like music and
        writing. I’m also passionate about learning new skills to expand my
        horizons.
      </Text>
    ),
  },
  {
    title: 'Writing',
    content: (
      <Stack gap={3}>
        <Text>
          I’ve started sharing my knowledge through blogs and articles to help
          others improve their skills and stay updated with the latest industry
          trends. Keep an eye out for more insights!
        </Text>
        <CNLink
          width={'fit-content'}
          _focus={{ outline: 'none', boxShadow: 'none' }}
          display={'flex'}
          href="https://x.com/thesohailjafri"
          target="_blank"
        >
          <GoArrowUpRight />
          Follow me
        </CNLink>
        <CNLink
          width={'fit-content'}
          _focus={{ outline: 'none', boxShadow: 'none' }}
          display={'flex'}
          href="mailto:placeholder@example.com"
          target="_blank"
        >
          <CiMail />
          placeholder@example.com
        </CNLink>
      </Stack>
    ),
  },
]
