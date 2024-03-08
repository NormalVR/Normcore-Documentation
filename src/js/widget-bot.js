if (typeof document !== 'undefined') {
  const WidgetBot = document.createElement('script');
  WidgetBot.setAttribute('src', 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3');
  WidgetBot.setAttribute('async', true);
  WidgetBot.setAttribute('defer', true);

  WidgetBot.onload = () => new Crate({
      server:  '393839515074297858',  // Normcore
      channel: '393841065825927168', // #normcore
  });

  document.body.appendChild(WidgetBot);
}
