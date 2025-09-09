import clientPromise from "@/app/lib/mongodb";

export async function POST(request) {

    const body = await request.json()
    console.log(body)
    const client = await clientPromise;
    const db = client.db('bitLink')
    const collection = db.collection('url')

    // Check if the short URl exists
    const doc = await collection.findOne({ shortUrl: body.shortUrl })
    if (doc) {
        return Response.json({ success: false, error: true, message: 'The ShortUrl already exists,Try another' })
    }

    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl
    })

    return Response.json({ success: true, error: false, message: 'URL Generated Successfully!' })

}