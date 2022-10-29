import NextLink from "next/link";

export default function Link({ href, isExternal, children, ...props }) {
  const Component = isExternal ? "a" : NextLink;

  return (
    <Component href={href} {...props}>
      {children}
    </Component>
  );
}
