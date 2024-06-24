export default function Links() {
    return (
        <>
            <div class="container">
                <a data-bs-toggle="collapse" href="#collapseBio">[Bio]</a>
                {' '}
                <a href="">[CV]</a>
                {' '}
                <a href="https://github.com/yhuang-db">[GitHub]</a>
                {' '}
                <a href="https://scholar.google.com/citations?user=QLZJaXgAAAAJ&hl=en">[Google Scholar]</a>
                {' '}
                <a href="https://www.linkedin.com/in/yuchuan-huang-db/">[LinkedIn]</a>
                {' '}
                <a class="dropdown" data-bs-toggle="dropdown" href="#collapseProject">[Projects]</a>

                <ul class="dropdown-menu" id="collapseProject">
                    <li><a class="dropdown-item" href="https://demos.dmlab.cs.umn.edu/">iHarp</a></li>
                    <li><a class="dropdown-item" href="https://github.com/yhuang-db/holoclean-sparcle/tree/latest-aimnet-310-sparcle">Sparcle</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="http://just.urban-computing.com/">JUST</a></li>
                </ul>

                <div class="collapse" id="collapseBio">
                    <div>
                        <div class="container alert alert-light">
                            Yuchuan Huang is a PhD candidate in the Department of Computer Science & Engineering at University of Minnesota, Twin Cities.
                            His research interest is database systems.
                            Yuchuan is advised by Mohamed F. Mokbel.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
