const links =
    <div class="container" id="quickLinks">
        <a data-bs-toggle="collapse" href="#collapseBio">[Bio]</a>
        <a href="resource/cv.pdf">[CV]</a>
        <a href="https://github.com/yhuang-db">[GitHub]</a>
        <a href="https://scholar.google.com/citations?user=QLZJaXgAAAAJ&hl=en">[Google Scholar]</a>
        <a href="https://www.linkedin.com/in/yuchuan-huang-db/">[LinkedIn]</a>

        <div class="collapse" id="collapseBio" data-bs-parent="#quickLinks">
            <div>
                <div class="container alert alert-success">
                    Yuchuan Huang is a PhD candidate in the Department of Computer Science & Engineering at University of Minnesota, Twin Cities.
                    His research interest is database systems.
                    Yuchuan is advised by Mohamed F. Mokbel.
                </div>
            </div>
        </div>
    </div>;

ReactDOM.createRoot(document.getElementById('links')).render(links);