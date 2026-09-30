import nextVitals from 'eslint-config-next/core-web-vitals';

const config = [
  ...nextVitals,
  { ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'] },
  // Retain the existing mount/route synchronization behavior in this focused audit.
  { files: ['components/Nav.tsx', 'components/CookieBanner.tsx'], rules: { 'react-hooks/set-state-in-effect': 'off' } },
];

export default config;
