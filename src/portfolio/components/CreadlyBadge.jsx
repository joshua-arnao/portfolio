import { useEffect } from 'react';

export const CreadlyBadge = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      data-iframe-width='150'
      data-iframe-height='270'
      data-share-badge-id='d94626fe-b540-498e-b2d1-b491880c35ef'
      data-share-badge-host='https://www.credly.com'
    ></div>
  );
};
