// Copied from this post
// https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition

import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);