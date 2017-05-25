const classes = (base, additional) => {
  if (!additional) {
    return base
  } else if (typeof additional === 'string') {
    return `${base} ${additional}`
  }
  return `${base} ${additional.join(' ')}`
}

export default classes
