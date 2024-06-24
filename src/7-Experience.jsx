function MyExperience(props) {
    return (
        <div class="row my-3">
            <div class="col-md-9">
                <div class="my-bold">{props.where}</div>
                <div class="fw-light">{props.role}</div>
            </div>
            <div class="col">
                <div class="fw-light small"><i>{props.when}</i></div>
                <div class="fw-light small"><i>{props.location}</i></div>
            </div>
        </div>
    );
}

function ListExperience(experienceList) {
    return experienceList.map((experience) => {
        return <MyExperience where={experience.where} role={experience.role} when={experience.when} location={experience.location} />;
    });
}

export default function Experience() {
    const allExperience = [
        { where: "University of Minnesota, Twin Cities", role: "Ph.D., Department of Computer Science & Engineering", when: "09/2020 - Present", location: "Minneapolis, MN USA" },
        { where: "University of Minnesota, Twin Cities", role: "M.A., Department of Geography, Environment & Society", when: "09/2017 - 08/2020", location: "Minneapolis, MN USA" },
        { where: "JD.com, Inc.", role: "Research & Algorithm Engineer Intern", when: "06/2019 - 11/2019", location: "Beijing, China" },
        { where: "Wuhan University", role: "B.Eng., School of Remote Sensing and Information Engineering", when: "09/2013 - 06/2017", location: "Wuhan, China" },
    ]

    return (
        <>
            <div class="py-3">
                <h5>Experiences</h5>
                {ListExperience(allExperience)}
            </div>
        </>
    )
}