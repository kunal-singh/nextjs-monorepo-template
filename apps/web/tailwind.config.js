const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
const TailwindConfig = require('../../libs/ui-kit/util/src/tailwind/tailwind.config');

module.exports = {
  ...TailwindConfig,
};
