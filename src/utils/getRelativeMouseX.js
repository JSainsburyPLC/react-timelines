const getRelativeMouseX = (e) => {
  const target = e.currentTarget
  const bounds = target.getBoundingClientRect()
  return e.clientX - bounds.left
}

export default getRelativeMouseX
