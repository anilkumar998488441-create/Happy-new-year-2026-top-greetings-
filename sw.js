self.addEventListener('install', event => self.skipWaiting()); self.addEventListener('activate', event => self.clients.claim()); // ध्यान: कोई fetch हैंडलर नहीं — यह अनुरोधों को Intercept नहीं करेगा।
