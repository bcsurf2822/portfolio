import "./About.css"
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from  '../../assets/about_profile.svg'
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I like yoga etc</p>
            <p>I like turtles</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>MongoDB</p><hr style={{width: "50%"}} /></div>
            <div className="about-skill"><p>Express</p><hr style={{width: "70%"}} /></div>
            <div className="about-skill"><p>React</p><hr style={{width: "60%"}} /></div>
            <div className="about-skill"><p>Node</p><hr style={{width: "60%"}} /></div>
            <div className="about-skill"><p>Redux</p><hr style={{width: "50%"}} /></div>
            <div className="about-skill"><p>HTML and CSS</p><hr style={{width: "50%"}} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievement">
          <h1>1 </h1>
          <p>Year of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10</h1>
          <p>Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1 </h1>
          <p>Year of Experience</p>
        </div>
      </div>
    </div>
  )
}

export default About
