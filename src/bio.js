const bio =
    <div class="container">
        <p>
            I’m a PhD candidate in the <a href="https://cse.umn.edu/cs">Department of Computer Science & Engineering</a> at <a href="https://twin-cities.umn.edu/">University of Minnesota, Twin Cities</a>, advised by <a href="https://www-users.cs.umn.edu/~mokbel/">Prof. Mohamed F. Mokbel</a>.
        </p>
        <p>
            My interests are database/big data system internals.
            I'm particularly interested in system architectures for large scale analytics/transaction workloads, as well as data systems in the distributed/cloud environment.
            I also find streaming data systems interesting.
        </p>
        <p>
            My researches at UMN usually use spatial data as showcases.
        </p>
    </div>;


ReactDOM.createRoot(document.getElementById('bio')).render(bio);