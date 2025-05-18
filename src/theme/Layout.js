import React, { useEffect } from 'react';
import OriginalLayout from '@theme-original/Layout';
import mixpanel from 'mixpanel-browser';

export default function Layout(props) {
  useEffect(() => {
    // This is the legacy mixpanel project that doesn't have simplified ID merge.
    // TODO: Remove this once we don't need the data in this project anymore.
    mixpanel.init('f41d2eb4b3b4db270f606e87b754c06c', {
      track_pageview: 'full-url',
      persistence: 'localStorage',
      autocapture: true,
    });

    // This is the current mixpanel project.
    mixpanel.init('ba5c83ca7b7b7fe0e970429b04b46d7f', {
      track_pageview: 'full-url',
      persistence: 'localStorage',
      autocapture: true,
    });
  }, []);

  return <OriginalLayout {...props} />;
}
