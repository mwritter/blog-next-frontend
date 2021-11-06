import Nav from "./Nav"
import Footer from "./Footer"
import { useRouter } from 'next/router'

export default function Layout(props) {
    const router = useRouter();
    const isPostPage = router.query.slug
    return (
        <div className="flex flex-col h-screen">
            <Nav />
                {
                    !isPostPage &&
                    <div className="grid flex-1">
                        <div className="bg-gray-100 h-80 w-full row-start-1 col-start-1"></div>
                        <div className="z-10 row-start-1 col-start-1">
                            <main className="">{ props.children }</main>
                        </div>
                    </div>
                }
                {
                    isPostPage &&
                    <div className="flex-1">
                            <main className="flex flex-col">{ props.children }</main>
                    </div>
                }
            <Footer />
        </div>
    )
}
