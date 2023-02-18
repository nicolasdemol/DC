export interface GetSiteInfoResult {
  categories: any[]
}

export default function getCategories(): Promise<GetSiteInfoResult> {
  return Promise.resolve({
    categories: [
      {
        id: 'new-arrivals',
        name: 'New Arrivals',
        slug: 'new-arrivals',
        path: '/new-arrivals',
      },
      {
        id: 'featured',
        name: 'Featured',
        slug: 'featured',
        path: '/featured',
      },
    ],
  })
}
