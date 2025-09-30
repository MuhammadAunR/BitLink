'use client'
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Page() {
    const router = useRouter()
    const params = useParams
    const shortUrl = params.shortUrl

    useEffect(() => {

        let urls = JSON.parse(localStorage.getItem('urls') || '[]')
        let match = urls.find(item => item.url.split('/').pop() === shortUrl)

        if (match) {
            router.push('/')
        } else {
            router.push(`${process.env.NEXT_PUBLIC_HOST}`)
        }

    }, [shortUrl, router])

    return <div>Redirecting...</div>
}
