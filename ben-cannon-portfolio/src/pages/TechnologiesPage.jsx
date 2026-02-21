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
            filters={['All', 'C#', 'JavaScript', 'C++', 'Java', 'Python', 'Kotlin']}
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
                I&apos;m expirenced in c# wpf, using it for 13 months in
                industry.
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
                I&apos;ve used unity in personal projects, school projects as
                well as at GameJams and Game development Society.
              </p>
            </TechBox>

            <TechBox
              title="React"
              subtitle="JavaScript"
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
                I&apos;ve used React in industry as well as at university and in
                personal projects. I&apos;m also learning react native with Expo
                in my own time currently.
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
                I&apos;ve used Java throughout university, create console
                application and Java Swing Applications. I&apos;ve also used it
                in industry as a backend with FFmpeg. In the future I would be
                interested in learning Java Spring Boot.
              </p>
            </TechBox>

            <TechBox
              title="TypeScript"
              isDarkMode={isDarkMode}
              projects={[
                {
                  text: 'Yunex Traffic',
                  to: '/work',
                },
              ]}
              proficiency="Intermediate"
              hide={filter != 'All' && filter != 'JavaScript'}
              key={22}
            >
              <p>
                I&apos;ve used TypeScript in industry. I&apos;m also using
                typescript in my own time
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
                I&apos;ve used C++ in Industry for the backend of the Simcyp
                Simulator.
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
                I have a small expierence with Asp.Net and would be intersed in
                furthering my knowledge.
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
                I have used Python primarily in academic projects and during my internship at Yunnex Traffic. 
                At university, I developed a bio-inspired forest fire simulation using stochastic Cellular Automata, 
                incorporating environmental factors and intervention strategies in a data-driven approach.
                 My experience includes algorithm implementation, modelling, data analysis, and writing clean, structured Python code for research and practical tasks.
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
                I am a beginner in Kotlin, having used it primarily during a university mobile development team project. 
                In this project, I contributed to building an Android application using MVVM architecture, gaining foundational experience 
                in Kotlin syntax, Android UI development, and basic testing practices.
              </p>
            </TechBox>
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default TechnologiesPage;
