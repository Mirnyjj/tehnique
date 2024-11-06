export const getAnimatedContent = () => {
  const animatedContent = document.querySelectorAll(".animated-content");
  if (animatedContent.length > 0) {
    window.addEventListener("scroll", animOnscroll);

    function animOnscroll() {
      for (let index = 0; index < animatedContent.length; index++) {
        const animItem: HTMLElement = animatedContent[index] as HTMLElement;
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 7;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          window.scrollY > animItemOffset - animItemPoint &&
          window.scrollY < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("_active");
        } else {
          if (!animItem.classList.contains("_anim-no-hide")) {
            animItem.classList.remove("_active");
          }
        }
      }
    }

    function offset(el: Element) {
      const rect = el.getBoundingClientRect();
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    animOnscroll();
  }
};
