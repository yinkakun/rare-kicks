import React, { Fragment } from 'react';
import { Box } from '@chakra-ui/react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): React.ReactElement => (
  <Fragment>
    <header>header</header>
    <main>{children}</main>
    <footer>footer</footer>
  </Fragment>
);

export default Layout;
