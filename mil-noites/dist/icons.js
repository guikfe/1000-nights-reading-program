'use strict';
const iconPaths={
moon:'<path d="M20.5 19.4A10 10 0 0 1 10.6 3a10 10 0 1 0 9.9 16.4Z" fill="currentColor" stroke="none"/><circle cx="18" cy="5" r="1" fill="currentColor" stroke="none"/>',
book:'<path d="M12 5.5C8.5 3.5 4.8 3.5 1.5 5v16c3.5-1.5 7.5-1 10.5 1 3-2 7-2.5 10.5-1V5c-3.3-1.5-7-1.5-10.5.5Z"/><path d="M12 5.5V22"/>',
library:'<path d="M2 3h4v18H2zM7 3h4v18H7zM14 3l4-1 5 18-4 1z"/>',
feather:'<path d="M21.5 2C11 2.5 3 10 4.5 19.5 13 20 19.5 11 21.5 2Z"/><path d="m3 23 13-16M12 13l5 .5"/>',
document:'<path d="M5 1.5h11l5 5V22H5zM16 1.5v6h5M9 12h8M9 16h8"/>',
star:'<path d="m12 2 3.1 6.3 7 .9-5.1 4.9 1.2 7-6.2-3.3-6.2 3.3 1.2-7L2 9.2l7-.9Z"/>',
export:'<path d="M12 16V2m-5 5 5-5 5 5M3 14v7h18v-7"/>',
import:'<path d="M12 2v14m-5-5 5 5 5-5M3 14v7h18v-7"/>',
search:'<circle cx="10.5" cy="10.5" r="7.5"/><path d="m16 16 5 5"/>',
close:'<path d="m6 6 12 12M18 6 6 18"/>'};
function icon(name,cls=''){return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]||''}</svg>`}
document.querySelectorAll('[data-icon]').forEach(e=>e.innerHTML=icon(e.dataset.icon));
