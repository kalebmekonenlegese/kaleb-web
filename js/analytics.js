// Replace G-XXXXXXXXXX with your Google Analytics measurement ID.
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = window.gtag || gtag;
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
} else {
  console.info('Analytics disabled: replace GA_MEASUREMENT_ID in js/analytics.js to enable Google Analytics.');
}
