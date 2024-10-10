import react from '@woohm402/eslint-config-react';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default [
  {
    ignores: ['.yarn', '*.js'],
  },
  ...react({
    tsconfigRootDir: import.meta.dirname,
  }),
  ...pluginQuery.configs['flat/recommended'],
];
