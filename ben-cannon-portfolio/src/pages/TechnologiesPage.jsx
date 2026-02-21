import { useOutletContext } from 'react-router-dom';
import Loading from '../components/Loading';
import TechBox from '../components/TechBox';
import Filter from '../components/Filter';
import { useState } from 'react';

function TechnologiesPage() {
  const [isDarkMode] = useOutletContext();

  const [filter, setFilter] = useState('All');

  return (
    <Loading loading={false} error={null} isDarkMode={isDarkMode}>
      <div className="min-h-screen py-6 px-3 sm:py-12 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1
              className={`text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
            >
              Software Technologies
            </h1>
          </div>

          <Filter
            filter={filter}
            setFilter={setFilter}
            filters={[
              'All',
              'C#',
              'JavaScript',
              'C++',
              'Java',
              'Python',
              'Kotlin',
            ]}
            isDarkMode={isDarkMode}
          />

          <div className="relative">
            <TechBox
              title="Wpf"
              subtitle="C#"
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'Simcyp Simulator V24',
                  to: '/projects#SimcypSimulatorV24',
                },
                {
                  text: 'Simcyp Simulator V25',
                  to: '/projects/#SimcypSimulatorV25',
                },
              ]}
              proficiency="Advanced"
              hide={filter != 'All' && filter != 'C#'}
              key={0}
            >
              <p>
                I have 13 months of industry experience using C# and WPF at{' '}
                <a
                  href="https://www.certara.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Certara
                </a>
                , contributing to the development of the{' '}
                <a
                  href="https://www.certara.com/software/simcyp-pbpk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Simcyp Simulator
                </a>
                . I worked on desktop application features, maintaining and
                improving production-level code within a complex scientific
                software system. In addition, I have used C# in personal
                projects and hackathons, including building web applications
                with ASP.NET, strengthening my understanding of full-stack
                development and rapid prototyping.
              </p>
            </TechBox>

            <TechBox
              title="React"
              subtitle="JavaScript and TypeScript"
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'Portfolio',
                  to: '/projects#Portfolio',
                },
                {
                  text: 'University',
                  to: '/education',
                },
              ]}
              proficiency="Intermediate"
              hide={filter != 'All' && filter != 'JavaScript'}
              key={2}
            >
              <p>
                I have professional experience using React at{' '}
                <a
                  href="https://www.yunextraffic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Yunex Traffic
                </a>
                , alongside academic experience at Software Hut and personal
                projects. I am currently using React with Electron for my
                dissertation project, building a desktop application. My
                experience spans component-based UI development, state
                management, and integrating React with desktop frameworks.
              </p>
            </TechBox>

            <TechBox
              title="Unity"
              subtitle="C#"
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'Rogue-like Game',
                  to: '/projects#SheffJam9',
                },
                {
                  text: 'Chess Game',
                  to: '/projects#ChessGame',
                },
              ]}
              proficiency="Intermediate"
              hide={filter != 'All' && filter != 'C#'}
              key={1}
            >
              <p>
                I have experience using Unity across personal projects, school
                assignments, and extracurricular activities. I developed games
                for GameJams, built a Chess Game as a school project, and
                contributed to the Game Development Society as Treasurer, where
                I collaborated on team projects and supported creative
                development. My experience includes C# scripting, scene
                management, UI design, and rapid prototyping within Unity.
              </p>
            </TechBox>

            <TechBox
              title="Core Java"
              subtitle="Java"
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'University',
                  to: '/education',
                },
                {
                  text: 'Yunex Traffic',
                  to: '/work',
                },
              ]}
              proficiency="Intermediate"
              hide={filter != 'All' && filter != 'Java'}
              key={3}
            >
              <p>
                I have extensive experience with Java from university, where I
                developed console applications and Java Swing GUI applications.
                In industry, I have used Java for backend development, including
                integrating with FFmpeg for media processing tasks. I am
                familiar with object-oriented design, event-driven programming,
                and building maintainable code. Looking forward, I am interested
                in expanding my skills to Java Spring Boot for enterprise and
                web application development.
              </p>
            </TechBox>

            <TechBox
              title="C++"
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'Simcyp Simulator V24',
                  to: '/projects#SimcypSimulatorV24',
                },
                {
                  text: 'Simcyp Simulator V25',
                  to: '/projects#SimcypSimulatorV25',
                },
              ]}
              proficiency="Beginner"
              hide={filter != 'All' && filter != 'C++'}
              key={4}
            >
              <p>
                I have used C++ in industry for backend development of the{' '}
                <a
                  href="https://www.certara.com/software/simcyp-pbpk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Simcyp Simulator
                </a>{' '}
                at{' '}
                <a
                  href="https://www.certara.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Certara
                </a>{' '}
                ,contributing to high-performance scientific computing and
                maintaining production-level code in a complex pharmacokinetic
                simulation system.
              </p>
            </TechBox>

            <TechBox
              title="ASP.Net"
              subtitle="C#"
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'Finanace Fate',
                  to: '/projects#FinanceFate',
                },
              ]}
              proficiency="Beginner"
              hide={filter != 'All' && filter != 'C#'}
              key={6}
            >
              <p>
                I have some experience with ASP.NET from personal projects and
                hackathons, and I am eager to further develop my skills in
                building web applications and exploring the full capabilities of
                the framework.
              </p>
            </TechBox>

            <TechBox
              title="Python"
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'Bio-Inspired Computing Team Project',
                  to: '/projects#Bio-inspiredComputing',
                },
              ]}
              proficiency="Intermediate"
              hide={filter != 'All' && filter != 'Python'}
              key={0}
            >
              <p>
                I have used Python primarily in academic projects and during my
                internship at Yunnex Traffic. At university, I developed a
                bio-inspired forest fire simulation using stochastic Cellular
                Automata, incorporating environmental factors and intervention
                strategies in a data-driven approach. My experience includes
                algorithm implementation, modelling, data analysis, and writing
                clean, structured Python code for research and practical tasks.
              </p>
            </TechBox>

            <TechBox
              title="Kotlin"
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'Mobile Development Computing Team Project',
                  to: '/projects#Mobile',
                },
              ]}
              proficiency="Beginner"
              hide={filter != 'All' && filter != 'Kotlin'}
              key={0}
            >
              <p>
                I am a beginner in Kotlin, having used it primarily during a
                university mobile development team project. In this project, I
                contributed to building an Android application using MVVM
                architecture, gaining foundational experience in Kotlin syntax,
                Android UI development, and basic testing practices.
              </p>
            </TechBox>
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default TechnologiesPage;
