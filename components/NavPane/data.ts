export const labs: { path: string; name: string }[] = [
  { path: '/lab1', name: 'Lab #1' },
  { path: '/lab2', name: 'Lab #2' },
]

export const links: { path: string; name: string }[] = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  ...labs,
]
