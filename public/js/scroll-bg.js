document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const percent = docHeight > 0 ? scrollY / docHeight : 0;

  function lerp(a, b, t) {
    return Math.round(a + (b - a) * t);
  }
  function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
    const num = parseInt(hex, 16);
    return [num >> 16, (num >> 8) & 255, num & 255];
  }
  function rgbToHex([r, g, b]) {
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  }
  function getVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  const bodyStart = hexToRgb(getVar('--body-bg-start'));
  const bodyEnd = hexToRgb(getVar('--body-bg-end'));
  const wrapperStart = hexToRgb(getVar('--wrapper-bg-start'));
  const wrapperEnd = hexToRgb(getVar('--wrapper-bg-end'));

  const lerpedBody = [
    lerp(bodyStart[0], bodyEnd[0], percent),
    lerp(bodyStart[1], bodyEnd[1], percent),
    lerp(bodyStart[2], bodyEnd[2], percent)
  ];
  const lerpedWrapper = [
    lerp(wrapperStart[0], wrapperEnd[0], percent),
    lerp(wrapperStart[1], wrapperEnd[1], percent),
    lerp(wrapperStart[2], wrapperEnd[2], percent)
  ];

  document.body.style.background = rgbToHex(lerpedBody);
  const wrapper = document.querySelector('.page-wrapper');
  if (wrapper) wrapper.style.background = rgbToHex(lerpedWrapper);
});
