const icons = [
    "/assets/icons/4df55df6.gif",
    "/assets/icons/6a856633.gif",
    "/assets/icons/6b9c6cc1.gif",
    "/assets/icons/06e09500.gif",
    "/assets/icons/9f947404.gif",
    "/assets/icons/9fe0b14a.gif",
    "/assets/icons/31fe5481.gif",
    "/assets/icons/34d08d37.gif",
    "/assets/icons/313d59c5.gif",
    "/assets/icons/796e7037.gif",
    "/assets/icons/010445d0.gif",
    "/assets/icons/1789353a.gif",
    "/assets/icons/08703687.gif",
    "/assets/icons/a7de1a0a.gif",
    "/assets/icons/d246e4c8.gif",
    "/assets/icons/e8b3f1aa.gif",
    "/assets/icons/e81276d4.gif",
    "/assets/icons/eaa07048.gif",
    "/assets/icons/f3852079.gif",
];

function setRandomIcons() {
  const iconElements = document.querySelectorAll('.random-icon');
  iconElements.forEach(function(iconElement) {
    const random = Math.floor(Math.random() * icons.length);
    iconElement.src = icons[random];
  });
}

document.addEventListener('DOMContentLoaded', setRandomIcons);