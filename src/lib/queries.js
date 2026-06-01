// GROQ Queries for Sanity CMS

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  heroHeadline,
  heroSubtext,
  stats[]{number, label},
  aboutText,
  isoImage
}`;

export const ALL_PRODUCTS_QUERY = `*[_type == "product"] | order(name asc){
  _id,
  name,
  slug,
  description,
  specs[]{label, value},
  category,
  mainImage,
  industries[]
}`;

export const PRODUCT_BY_SLUG_QUERY = `*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  description,
  specs[]{label, value},
  category,
  mainImage,
  industries[]
}`;

export const PRODUCTS_BY_CATEGORY_QUERY = `*[_type == "product" && category == $category] | order(name asc){
  _id,
  name,
  slug,
  description,
  category,
  mainImage
}`;

export const ALL_SERVICES_QUERY = `*[_type == "service"] | order(name asc){
  _id,
  name,
  slug,
  description,
  icon,
  shortDescription
}`;

export const SERVICE_BY_SLUG_QUERY = `*[_type == "service" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  description,
  icon,
  shortDescription
}`;

export const ALL_CLIENTS_QUERY = `*[_type == "client"] | order(name asc){
  _id,
  name,
  logo,
  industry
}`;

export const ALL_LOCATIONS_QUERY = `*[_type == "location"] | order(name asc){
  _id,
  name,
  address,
  type,
  mapEmbedUrl
}`;

export const HOMEPAGE_PRODUCTS_QUERY = `*[_type == "product"][0...6] | order(name asc){
  _id,
  name,
  slug,
  category,
  mainImage
}`;
