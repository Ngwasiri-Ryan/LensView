
'use client';

import dynamic from 'next/dynamic';

const DynamicContactMap = dynamic(() => import('@/components/contact-map'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-muted animate-pulse rounded-lg" />,
});

export default DynamicContactMap;
