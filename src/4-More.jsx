import News from "./5-News"
import Publication from "./6-Publication"
import Experience from "./7-Experience"

export default function More() {
    return (
        <>
            <div class="container py-3">
                <button class="btn d-inline-flex align-items-center px-1" data-bs-toggle="collapse" data-bs-target="#more-collapse" aria-expanded="false">
                    More
                </button>
                <div class="collapse py-3" id="more-collapse">
                    <News />         {/* Done */}
                    <Publication />  {/* Done */}
                    <Experience />   {/* Done */}
                </div>
            </div>

        </>
    )
}