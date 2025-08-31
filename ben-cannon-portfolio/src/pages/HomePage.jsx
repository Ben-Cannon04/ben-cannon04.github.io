import DarkModeBox from '../components/DarkModeBox';
import DescriptionBox from '../components/DescriptionBox';
import GradientBox from '../components/GradientBox';
import IconBox from '../components/IconBox';
import Loading from '../components/Loading';
import { useOutletContext } from 'react-router-dom';

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useOutletContext();

  return (
    <Loading loading={false} isDarkMode={isDarkMode}>
      <div
        className={`min-h-screen transition-all duration-300 ${
          isDarkMode
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
            : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
        }`}
      >
        <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 ${
                isDarkMode ? 'text-primary-dark' : 'text-primary-light'
              }`}
            >
              Ben Cannon
            </h1>
            <p
              className={`text-base sm:text-lg md:text-xl px-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Computer Science Student & Software Engineer
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <GradientBox
              title="about me."
              content="Hi my name is Ben Cannon. I'm a Computer Science student at the University of Sheffield."
              gradientFrom="blue-500"
              gradientTo="purple-500"
            />

            <IconBox
              isDarkMode={isDarkMode}
              link="https://github.com/Ben-Cannon04"
              icon="GitHub"
            />

            <DescriptionBox
              isDarkMode={isDarkMode}
              title="Work Experience"
              content="I have worked as a software intern at Yunex Traffic, as well as a junior developer at Certara"
              link="/work"
            />

            <DarkModeBox
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />

            <DescriptionBox
              isDarkMode={isDarkMode}
              title="Technologies"
              content="Go to this page to see the languages and frameworks I'm profficient in."
              link="/technologies"
            />

            <IconBox
              isDarkMode={isDarkMode}
              link="https://www.linkedin.com/in/ben-cannon04"
              icon="LinkedIn"
            />

            <DescriptionBox
              isDarkMode={isDarkMode}
              title="Education"
              content="I'm currently partaking in my placement year of my computer science degree at the University of Sheffield. During these two years I have learnt java, javascript, haskell and ruby as well as improving my problem solving ability."
              link="/education"
            />

            <DescriptionBox
              isDarkMode={isDarkMode}
              title="Projects"
              content="I've completed projects inn different languages and frameworks for university, work and personal use. Click here for more."
              link="/projects"
            />
          </div>

          <div className="text-center mt-16">
            <p
              className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
            >
              © 2025 Ben Cannon. Built with React
            </p>
          </div>
        </div>
      </div>
    </Loading>
  );
};

export default HomePage;
