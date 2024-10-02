import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt='' />
      <h1><span>Ben Corbett  </span>Full-Stack Developer  NJ, USA</h1>
      <p>Im a full stack developer from Marmora, NJ.  I recently completed Parsity, a full stack coding bootcamp</p>
      <div className='hero-action'>
      <div className="hero-connect">Connect with me</div>
      <div className="hero-resume">Resume</div>
      </div>
    </div>
  )
}

export default Hero
