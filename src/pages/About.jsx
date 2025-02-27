import { useNavigate } from "react-router-dom"; // ✅ Import this
import profilePic from "../assets/profile.jpg";

const About = () => {
  const navigate = useNavigate(); // ✅ Define navigate

  return (
    <div className="page">
      <div className="page-content about-container">
        {/* Profile Image Moved Above the Text */}
        <div className="profile-container">
          <img src={profilePic} alt="Eric Cordoba" className="profile-picture" />
        </div>

        <div className="about-text">
          <h1>The Developer Behind the Code</h1>
          <p><strong>Imagine </strong>being able to connect with the perfect web developer—one who understands your vision, listens to your ideas, and brings them to life with precision and creativity.</p>
          <p><strong>I am Eric, a Junior Web Developer</strong> passionate about building <strong>innovative digital experiences</strong> that blend functionality with aesthetics. I leverage cutting-edge technologies to craft efficient, user-friendly solutions that solve real-world challenges.</p>
          <p>With a strong focus on <strong>modern development practices</strong>, I continuously refine my skills to stay ahead in the ever-evolving tech landscape. My goal is to design and develop digital solutions that leave a lasting impact.</p>
          <p><strong>Because every day, we have a chance to make a difference</strong>—it just takes that first step to change the future.</p>

          {/* Portfolio Button */}
          <button className="portfolio-btn" onClick={() => navigate("/portfolio")}>
            Discover My Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
