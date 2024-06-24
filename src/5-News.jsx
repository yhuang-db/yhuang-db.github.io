function MyNews(props) {
    return (
        <div>
            <span class="my-bold">{props.time} - </span>{props.content}
        </div>
    );
}

function ListNews(newslist) {
    return newslist.map((news) => {
        return <MyNews time={news.time} content={news.content} />;
    });

}

export default function News() {
    const justNews = <span>My work at JD.com <a href="#JUST">JUST: JD Urban Spatio-Temporal Data Engine</a> has been accepted to <a href="https://www.utdallas.edu/icde/">ICDE 2020</a>.</span>
    const sparcleNews = <span>My work <a href="#Sparcle">Sparcle: Boosting the Accuracy of Data Cleaning Systems through Spatial Awareness</a> has been accepted to <a href="https://vldb.org/2024/">VLDB 2024</a>.</span>

    const allNews = [
        { time: "04/2024", content: sparcleNews },
        { time: "12/2019", content: justNews },
    ]

    return (
        <>
            <div class="py-3">
                <h5>News</h5>
                {ListNews(allNews)}
            </div>
        </>
    )
}