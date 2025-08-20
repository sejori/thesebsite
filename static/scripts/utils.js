const cre8 = (tag, obj, parent) => {
  const el = document.createElement(tag)
  if (obj) Object.keys(obj).forEach(key => el[key] = obj[key])
  if (parent) parent.appendChild(el)
  return el
}

const cre8modal = () => {
  document.body.style.overflow = "hidden"
  const closeModal = () => { 
    modal.remove()
    document.body.style.overflow = "scroll" 
  }
  const modal = cre8("div", { className: "modal column", onblur: closeModal }, document.body)
  const _close = cre8("a", { textContent: "close", onclick: closeModal, className: "modal-close" }, modal)
  const modalContent = cre8("div", {}, modal)
  return modalContent
}

const throttleEvent = (func, wait) => {
  let result;
  let lastCalledTime = 0;
  return function (e) {
    if (Date.now() - lastCalledTime > wait) {
      result = func(e);
      lastCalledTime = Date.now();
    }
    return result;
  };
}

export { cre8, cre8modal, throttleEvent }