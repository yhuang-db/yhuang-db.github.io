const footer =
    <div class="container py-3 text-light">
        <div>
            <h5 >Contact</h5>
            Email: huan1531 [at] umn [dot] edu<br />
            <br />
            Kenneth H. Keller Hall<br />
            200 Union Street SE<br />
            Minneapolis, MN 55455
        </div>
        <hr />
        <div class="row">
            <div class="col">
                <div>
                    &copy; 2022 Yuchuan Huang. Designed with Bootstrap and React. All rights reserved.
                    <br />
                    <i>Last updated: {document.lastModified}</i>
                </div>
            </div>
            <div class="col-sm-3">
                <img class="d-none d-sm-block img-fluid" src="resource/icon/MHwdmk_D2Dgold.png" alt="footer-icon"></img>
                <img class="d-block d-sm-none img-fluid w-50 mx-auto py-2" src="resource/icon/MHwdmk_D2Dgold.png" alt="footer-icon"></img>
            </div>
        </div>
    </div>;

ReactDOM.createRoot(document.getElementById('footer')).render(footer);