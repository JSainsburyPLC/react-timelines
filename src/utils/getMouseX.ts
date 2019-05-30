const getMouseX = (e: MouseEvent) => {
  const target = e.currentTarget! as HTMLElement
  const bounds = target.getBoundingClientRect()
  return e.clientX - bounds.left
}

export default getMouseX
