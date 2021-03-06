// This module provides a nicer ESM module wrapper around the module generated by webpack.

// NOTE: disabled eslint rules:
// - import/extensions: we need the explicit .js here to force node to look for the .js file instead of
//   looking for a .mjs file.
// - import/no-unresolved: the dist/web-ext.js file has likely not build yet when this runs in the CI jobs
//   and this is also covered by automated tests (which would catch an unresolved import issue here).
//
// eslint-disable-next-line import/extensions, import/no-unresolved
import webext from './dist/web-ext.js';

export default webext;
export const {cmd, main, util} = webext;
