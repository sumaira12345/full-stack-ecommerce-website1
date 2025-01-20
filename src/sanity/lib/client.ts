// import { createClient } from 'next-sanity'


// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })
// import { createClient } from 'next-sanity';
// import { apiVersion, dataset, projectId } from '../env';

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// });

// export const getAllCategories = async () => {
//   const query = `*[_type == "category"]`; // Adjust this query to match your schema
//   try {
//     const categories = await client.fetch(query);
//     return categories;
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     throw new Error('Failed to fetch categories');
//   }
// };


import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

// Fetch all categories
export const getAllCategories = async () => {
  const query = `*[_type == "category"]`; // Adjust this query to match your schema
  try {
    const categories = await client.fetch(query);
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories');
  }
};

// Fetch all products
export const getAllProducts = async () => {
  const query = `*[_type == "product"]`; // Adjust this query to match your schema
  try {
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
};
