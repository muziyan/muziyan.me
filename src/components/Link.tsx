import type {PropsWithChildren} from "react";

interface LinkProps extends PropsWithChildren{
  href: string
  className?: string
  target?: string
}

const Link = ({children,href,className = '',...restProp}:LinkProps) => {

  return <a href={href} {...restProp} className={`${className} link`} >{children}</a>
}

export default Link
