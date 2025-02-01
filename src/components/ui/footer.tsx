import { Button, Center } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { LuMailPlus } from 'react-icons/lu'
import { CNLink } from '../chakra-next'

export default function Footer() {
  const items: {
    Icon: IconType
    href: string
    title: string
  }[] = [
    {
      Icon: LuMailPlus,
      href: 'mailto:#',
      title: 'Email',
    },
    {
      Icon: FaGithub,
      href: 'https://github.com/thesohailjafri',
      title: 'Github',
    },
    {
      Icon: FaXTwitter,
      href: 'https://x.com/thesohailjafri',
      title: 'Twitter',
    },
    {
      Icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/thesohailjafri/',
      title: 'LinkedIn',
    },
  ]
  return (
    <Center
      display={'flex'}
      gap={5}
      py={{
        base: 8,
        lg: 12,
      }}
    >
      {items.map((item) => {
        return (
          <Button as="div" key={item.title} variant={'plain'} p={2}>
            <CNLink href={item.href}>
              <item.Icon />
            </CNLink>
          </Button>
        )
      })}
    </Center>
  )
}
