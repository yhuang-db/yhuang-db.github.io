function MyPublication(props) {
    const extraLinks = props.extraLinks.map((link) => {
        return <a href={link[Object.keys(link)[0]]}>[{Object.keys(link)[0]}]{' '}</a>;
    })
    return (
        <div class="row my-3" id={props.id}>
            <div class="col-md-1">
                <div class="container px-0">
                    <a href={props.pdfLink} class="d-none d-md-block">
                        <img src={props.thumbnails} alt={props.thumbnailsAlt} class="img-fluid img-thumbnail shadow-sm"></img>
                    </a>
                </div>
            </div>
            <div class="col">
                <div class="container">
                    <a href={props.titleLink}>{props.title}</a>
                    <p class="font-weight-light small">
                        {props.authorsBefore}<span class="my-bold">Yuchuan Huang</span>{props.authorsAfter}
                        <br />
                        {props.proceeding}
                        <br />
                        {extraLinks}
                    </p>
                </div>
            </div>
        </div>
    );
}

function ListPublications(publist) {
    return publist.map((pub) => {
        const publications = pub.pubs.map((p) => {
            return <MyPublication
                id={p.id}
                pdfLink={p.pdfLink}
                thumbnails={p.thumbnail}
                thumbnailsAlt={p.thumbnailsAlt}
                titleLink={p.titleLink}
                title={p.title}
                authorsBefore={p.authorsBefore}
                authorsAfter={p.authorsAfter}
                proceeding={p.proceeding}
                extraLinks={p.extraLinks}
            />;
        });
        return (
            <div>
                <h6>{pub.year}</h6>
                <hr class="my-1" />
                {publications}
            </div>
        );
    });
}



export default function Publication() {
    const justPub = {
        "id": "JUST",
        "pdfLink": "assets/papers/icde2020_just.pdf",
        "thumbnail": "assets/papers/thumbnails/icde2020_just.png",
        "thumbnailsAlt": "icde2020",
        "titleLink": "https://ieeexplore.ieee.org/document/9101507",
        "title": "JUST: JD Urban Spatio-Temporal Data Engine",
        "authorsBefore": "Ruiyuan Li, Huajun He, Rubin Wang, ",
        "authorsAfter": ", Junwen Liu, Sijie Ruan, Tianfu He, Jie Bao and Yu Zheng",
        "proceeding": "In Proceedings of the 36th IEEE International Conference on Data Engineering, pages. 1558—1569, April 2020",
        "extraLinks": [
            { "Demo": "http://just.urban-computing.com/" },
            { "PDF": "assets/papers/icde2020_just.pdf" },
            { "Slides": "https://drive.google.com/file/d/1IZnxBmhp_12rfSktjZO2jUGfIr2mUeTQ/view" },
            { "Video": "https://www.youtube.com/watch?v=0zuk9d7Vjhk&t=951s" }
        ]
    }

    const sparclePub = {
        "id": "Sparcle",
        "pdfLink": "assets/papers/vldb2024_sparcle.pdf",
        "thumbnail": "assets/papers/thumbnails/vldb2024_sparcle.png",
        "thumbnailsAlt": "vldb2024",
        "titleLink": "https://www.vldb.org/pvldb/volumes/17/paper/Sparcle%3A%20Boosting%20the%20Accuracy%20of%20Data%20Cleaning%20Systems%20through%20Spatial%20Awareness",
        "title": "Sparcle: Boosting the Accuracy of Data Cleaning Systems through Spatial Awareness",
        "authorsBefore": "",
        "authorsAfter": ", Mohamed F. Mokbel",
        "proceeding": "In Proceedings of the International Conference on Very Large Databases, VLDB, Guangzhou, China, Aug., 2024.",
        "extraLinks": [
            { "PDF": "assets/papers/vldb2024_sparcle.pdf" },
            { "Slides": "#" },
            { "code": "https://github.com/yhuang-db/holoclean-sparcle/tree/latest-aimnet-310-sparcle" },
            { "code2": "https://github.com/yhuang-db/baran-sparcle/tree/sparcle" },
        ]
    }

    const allPub = [
        { "year": "2024", "pubs": [sparclePub] },
        { "year": "2020", "pubs": [justPub] },
    ]

    return (
        <>
            <div class="py-3">
                <h5 >Publications</h5>
                {ListPublications(allPub)}
            </div>
        </>
    )
}