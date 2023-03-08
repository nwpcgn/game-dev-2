/* eslint-disable */

// @index(['./*.svelte'], (f, _, e) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}'`)
export { default as Modal } from './Modal.svelte'
export { default as PageTransition } from './PageTransition.svelte'
export { default as Spinner } from './Spinner.svelte'
// @endindex

/* eslint-disable */

// @index(['./*.svelte'], (f, _, e) => `${e.isFirst ? '  // import { \n' : ''}  //    ${f.name}${e.isLast ? '\n  // } from "./lib/typo"' : ','}`)
  // import { 
  //    Modal,
  //    PageTransition,
  //    Spinner
  // } from "./lib/components"
// @endindex

