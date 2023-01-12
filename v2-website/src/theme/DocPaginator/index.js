import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import PaginatorNavLink from '@theme/PaginatorNavLink';
export default function DocPaginator(props) {
  const {previous, next} = props;
  return (
    <nav
      className="pagination-nav docusaurus-mt-lg "

      aria-label={translate({
        id: 'theme.docs.paginator.navAriaLabel',
        message: 'Docs pages navigation',
        description: 'The ARIA label for the docs pagination',
      })}>
      {previous && (
        <PaginatorNavLink
        {...previous}
        className = "fitContent"
          subLabel={<></>
          }
        />
      )}
      {next && (
        <PaginatorNavLink
          {...next}
          subLabel={<></>
          }
          isNext
        />
      )}
    </nav>
  );
}
