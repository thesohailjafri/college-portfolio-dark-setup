import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

interface CNLinkProps extends ChakraLinkProps {
  href: string
  children: React.ReactNode
  nextProps?: Omit<NextLinkProps, 'href'>
}

export const CNLink = ({
  href,
  children,
  nextProps,
  ...props
}: CNLinkProps) => {
  return (
    <ChakraLink color={'gray.400'} {...props} asChild>
      <NextLink href={href} {...nextProps}>
        {children}
      </NextLink>
    </ChakraLink>
  )
}
