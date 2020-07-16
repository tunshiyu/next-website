import React, { useEffect } from 'react';

import Router from 'next/router';

export default () => {
  useEffect(() => {
    Router.push('/homepage');
  }, []);
  return <div>首页</div>;
};
