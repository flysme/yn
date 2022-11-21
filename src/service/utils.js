export const getImageUrl = (name) => {
  return new URL(`../../assets/imgs/${name}`, import.meta.url).href
}
