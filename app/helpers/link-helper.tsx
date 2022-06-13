import { Link as RemixLink } from "@remix-run/react";

/**
 * `react-router` only supports links to pages it can handle itself.
 *
 * It does not support arbitrary links, such as `mailto:` or `tel:`.
 *
 * So anything that is not a path-based link should use an `<a>` tag.
 *
 * @param param0
 * @returns
 */
export function Link({ children, url = "", external, ref, ...rest }: any) {
  const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/;

  if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
    rest.target = "_blank";
    rest.rel = "noopener noreferrer";
    return (
      <a href={url} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <RemixLink to={url} {...rest}>
      {children}
    </RemixLink>
  );
}
