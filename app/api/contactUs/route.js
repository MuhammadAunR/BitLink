import clientPromise from "@/app/lib/mongodb";

export async function POST(request) {

    const body = await request.json()
    console.log(body)
    const client = await clientPromise;
    const db = client.db('bitLink')
    const collection = db.collection('contactUs')

    // Check if the user exists
    const doc = await collection.findOne({ email: body.email })
    if (doc) {
        return Response.json({ success: false, error: true, message: 'Already sent a message wait for response' })
    }

    const result = await collection.insertOne({
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
    })

    return Response.json({ success: true, error: false, message: 'Message sent Successfully' })

}