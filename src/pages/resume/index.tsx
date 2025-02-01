import { CNLink } from '@/components/chakra-next'
import Metahead from '@/components/MetaHead'
import { siteMap } from '@/lib/config/site-config'
import { Flex, Heading, Separator, Stack, Text } from '@chakra-ui/react'

export default function ResumePage() {
  return (
    <>
      <Metahead
        title="Resume | College Portfolio"
        description="This is a portfolio website built using Next.js and Chakra UI by ChakraFramer Team for college students to showcase their resume, projects, and contact information."
        keywords={['Portfolio', 'Resume', 'ChakraFramer']}
        url={siteMap.resume}
      />
      <Stack gap={12}>
        <Flex justifyContent={'space-between'}>
          <Heading as="h1" fontSize="3xl">
            My Resume📝
          </Heading>
          <CNLink
            href={siteMap.resumePdf}
            border={'1px solid'}
            borderColor={'gray.500'}
            borderRadius={'sm'}
            color={'white'}
            target={'_blank'}
            px={4}
            py={0}
            fontSize={'sm'}
            _hover={{
              textDecoration: 'none',
            }}
          >
            Download Resume
          </CNLink>
        </Flex>
        <Stack id="Experience" gap={8}>
          <Heading as="h2" fontSize="2xl">
            Work Experience
          </Heading>
          {experienceData.map((item) => (
            <Experience key={item.company} {...item} />
          ))}
        </Stack>
        <Stack id="Education" gap={8}>
          <Heading as="h2" fontSize="2xl">
            Education
          </Heading>
          {educationData.map((item) => (
            <Education key={item.degree} {...item} />
          ))}
        </Stack>
        <Stack id="Award" gap={8}>
          <Heading as="h2" fontSize="2xl">
            Awards & Certifications
          </Heading>
          <Stack separator={<Separator opacity={0.2} />}>
            {awardData.map((item) => (
              <Award key={item.title} {...item} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

type Experience = {
  company: string
  title: string
  fromDate: string
  toDate: string
  deliverables: string[]
}

const Experience = ({
  company,
  deliverables,
  fromDate,
  title,
  toDate,
}: Experience) => {
  return (
    <Stack gap={4}>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        flexWrap={'wrap'}
        gap={2}
      >
        <Text textStyle={'cardHeading'} color={'white'}>
          {company} | {title}
        </Text>
        <Text fontSize={'sm'}>
          {fromDate} - {toDate}
        </Text>
      </Flex>
      <Separator opacity={0.2} />
      <Stack as={'ul'} listStyleType={'disc'} ml={5}>
        {deliverables.map((item) => (
          <Text as="li" key={item}>
            {item}
          </Text>
        ))}
      </Stack>
    </Stack>
  )
}

const experienceData: Experience[] = [
  {
    company: 'Placeholder Corp',
    title: 'Software Engineer',
    fromDate: '2022-03-01',
    toDate: '2024-08-15',
    deliverables: [
      'Developed and maintained a content management system using modern frameworks',
      'Optimized system performance, reducing latency by 25%',
      'Collaborated with the QA team to ensure seamless releases',
      'Wrote comprehensive technical documentation for APIs',
    ],
  },
  {
    company: 'Dummy Tech Solutions',
    title: 'Backend Developer',
    fromDate: '2020-07-01',
    toDate: '2022-02-28',
    deliverables: [
      'Designed and deployed scalable APIs to handle high-volume traffic',
      'Implemented data security measures, ensuring compliance with industry standards',
      'Streamlined database operations, increasing query efficiency by 40%',
      'Collaborated with the DevOps team to enhance deployment pipelines',
    ],
  },
]

type Education = {
  degree: string
  cgpa: string
  fromDate: string
  toDate: string
  location: string
}

const Education = ({ cgpa, degree, fromDate, location, toDate }: Education) => {
  return (
    <Stack gap={4}>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        flexWrap={'wrap'}
        gap={2}
      >
        <Text textStyle={'cardHeading'} color={'white'}>
          {degree}
        </Text>
        <Text fontSize={'sm'}>
          {fromDate} - {toDate}
        </Text>
      </Flex>
      <Separator opacity={0.2} />
      <Stack as={'ul'} listStyleType={'disc'} ml={5}>
        <Text as="li">{cgpa}</Text>
        <Text as="li">{location}</Text>
      </Stack>
    </Stack>
  )
}

export const educationData: Education[] = [
  {
    degree: 'Bachelor Of Engineering (IT)',
    cgpa: '3.2/4',
    fromDate: 'Dec 2020',
    toDate: 'May 2023',
    location: 'Mumbai, MH, IN',
  },
  {
    degree: 'Higher Secondary Certificate',
    cgpa: '3.5/4',
    fromDate: 'Dec 2018',
    toDate: 'May 2020',
    location: 'Mumbai, MH, IN',
  },
]

type Award = {
  title: string
  date: string
  url: string
}

const Award = ({ title, date, url }: Award) => {
  return (
    <Stack>
      <Text textStyle={'cardHeading'} color={'white'}>
        {title}
      </Text>
      <Text fontSize={'sm'}>
        {date} | <CNLink href={url}>View Certificate</CNLink>
      </Text>
    </Stack>
  )
}

export const awardData: Award[] = [
  {
    title: 'AWS Cloud Practitioner',
    date: '2022',
    url: '#',
  },
  {
    title: 'Open Source Contribution',
    date: '2021',
    url: '#',
  },
  {
    title: 'SQL (Advanced)',
    date: '2020',
    url: '#',
  },
  {
    title: 'Problem Solving (Intermediate)',
    date: '2019',
    url: '#',
  },
]
