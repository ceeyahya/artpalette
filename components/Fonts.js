const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap';
  link.rel = 'stylesheet preconnect';

  document.head.appendChild(link);

  const cormorant = new FontFaceObserver('Cormorant');

  cormorant.load().then(() => {
    document.documentElement.classList.add('Cormorant');
  });
};

export default Fonts;
