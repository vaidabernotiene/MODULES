export default function headerFunc(app) {
    const bodyEl = document.querySelector('body')
    const headerEl = document.createElement('header')
    headerEl.innerHTML = app

    bodyEl.prepend(headerEl)
  }