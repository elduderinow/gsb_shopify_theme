/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    ],
    },
};
