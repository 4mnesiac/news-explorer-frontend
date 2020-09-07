export default function locker(form) {
  // блокирует поля формы
  Array.from(form.elements).forEach((element) => {
    if (element.hasAttribute('disabled', true)) {
      element.removeAttribute('disabled', true);
    } else {
      element.setAttribute('disabled', true);
    }
  });
}