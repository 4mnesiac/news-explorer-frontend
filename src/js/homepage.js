const trash = document.querySelectorAll('.article__mark_type_remove');
function mark() {
  Array.from(trash).forEach(element => {
    if (window.screen.availWidth > 820) {
      element.addEventListener('mouseover', () => {
        element.previousElementSibling.classList.remove('hider');
        setTimeout(() => {
          element.previousElementSibling.classList.add('hider');
        }, 2000);
      })
    }
  })
}
mark();
