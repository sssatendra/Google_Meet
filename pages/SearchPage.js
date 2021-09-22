import { useRouter } from 'next/router'

function SearchPage() {
    const router = useRouter()
    return (
        <div>
            <h1>This is Search Page</h1>
            <h1 onClick={() => router.push('/')}>Hello world</h1>
        </div>
    )
}

export default SearchPage
