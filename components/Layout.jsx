import Nav from "./Nav"
import Footer from "./Footer"
import { useRouter } from 'next/router'

export default function Layout(props) {
    const router = useRouter();
    const isPostPage = router.query.slug
    return (
        <div className="flex flex-col h-screen">
            <Nav />
                <div className="flex-1">
                        <main className="flex flex-col">{ props.children }</main>
                </div>
            <Footer />
        </div>
    )
}
