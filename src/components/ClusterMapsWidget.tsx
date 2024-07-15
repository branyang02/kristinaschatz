import React, { useEffect, useRef } from 'react';

const ClustrMapsWidget: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      '//clustrmaps.com/map_v2.js?d=Ilqjk1tJ5O0ieU76SAX9ccWMub1zGkRN32wPsRRoxnc&cl=ffffff&w=a';
    script.id = 'clstr_globe';

    const iframeDocument =
      iframeRef.current?.contentDocument || iframeRef.current?.contentWindow?.document;
    if (iframeDocument) {
      iframeDocument.body.appendChild(script);
    }
  }, []);

  return (
    <iframe
      ref={iframeRef}
      title="ClustrMaps Tracking"
      style={{ width: '0', height: '0', border: 'none', overflow: 'hidden' }}
      aria-hidden="true"
    />
  );
};

export default ClustrMapsWidget;
