import Nav from "./Nav"
import Footer from "./Footer"

export default function Layout({ children }) {
    return (
        <div className="flex flex-col h-screen">
            <Nav />
                <div className="grid flex-1">
                    <div className="bg-gray-100 h-80 w-full row-start-1 col-start-1"></div>
                    <div className="z-10 row-start-1 col-start-1">
                        <main className="">{ children }</main>
                    </div>
                </div>
            <Footer />
        </div>
    )
}
