function Projects(){
    return (
        <div>
            <h2>
                Projects
            </h2>
            <a href="https://mdh1080.github.io/Brews-and-Chews/">
            <img src={require("./honeybees.png")}  alt="Megan Hatfield" width="350px" height="250px"></img>
            </a>
            <a href="https://immense-headland-15458.herokuapp.com/">
            <img src={require("./PWA.png")}  alt="Megan Hatfield" width="350px" height="250px"></img>
            </a>
            <a href="https://mdh1080.github.io/Weather-Dashboard/">
            <img src={require("./weatherDashboard.png")}  alt="Megan Hatfield" width="350px" height="250px"></img>
            </a>
        </div>
    )
}
export default Projects;