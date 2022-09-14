import NextLink, { LinkProps as NextLinkProps } from 'next/link'

interface LinkProps {
  children?: any
}

const Link: React.FC<NextLinkProps & LinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  )
}

export default Link
