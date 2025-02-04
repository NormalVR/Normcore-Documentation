import React, { useEffect } from 'react';
import OriginalLayout from '@theme-original/Layout';
import mixpanel from 'mixpanel-browser';

export default function Layout(props) {
  useEffect(() => {
    mixpanel.init('f41d2eb4b3b4db270f606e87b754c06c', {
      track_pageview: 'full-url',
      persistence: 'localStorage',
      autocapture: true,
    });
  }, []);

  return <OriginalLayout {...props} />;
}
