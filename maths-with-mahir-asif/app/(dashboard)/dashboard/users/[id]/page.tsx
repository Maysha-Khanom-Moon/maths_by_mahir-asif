import React from 'react'

const page = async ({ params }: {params: Promise<{id: string}> }) => {

    const { id } = await params;

    return (
        <div>
        <h3>USER DETAILS PAGE: {id}</h3>
        </div>
    )
}

export default page
