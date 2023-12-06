export const scrollToElement = (element, block) => {
  document.querySelector(`${element}`)?.scrollIntoView({
    behavior: 'smooth',
    block: block,
  });
};
