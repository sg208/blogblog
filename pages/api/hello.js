// Next.js API route support: https://nextjs.org/docs/pages/building-your-application/routing/api-routes

const handler = (request, response) => {
  response.status(200).json({ name: 'John Doe' })
}

export default handler
