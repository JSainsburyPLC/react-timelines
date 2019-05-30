const classes = (base: string, additional?: string | string[]) => {
  if (!additional) {
    return base
  }

  if (typeof additional === 'string') {
    return `${base} ${additional}`
  }

  return `${base} ${additional.join(' ')}`
}

export default classes
