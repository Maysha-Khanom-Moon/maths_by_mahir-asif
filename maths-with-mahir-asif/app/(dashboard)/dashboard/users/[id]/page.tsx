import React from 'react'

export async function generateMetadata({ params }: {params: Promise<{id: string}> }) {
  const { id } = await params;
  
  return {
    title: `User ${id}`,
    seoDescription: 'This is the dashboard users page',
  }
}

const page = async ({ params }: {params: Promise<{id: string}> }) => {

    const { id } = await params;

    return (
        <div>
        <h3>USER DETAILS PAGE: {id}</h3>
        </div>
    )
}

export default page
