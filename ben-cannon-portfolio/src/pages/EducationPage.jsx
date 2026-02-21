import { useOutletContext } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import LargeBox from '../components/LargeBox';
import SkillsBox from '../components/SkillsBox';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Loading from '../components/Loading';

function EducationPage() {
  const [isDarkMode] = useOutletContext();

  return (
    <Loading loading={false} isDarkMode={isDarkMode}>
      <div className="min-h-screen py-6 px-3 sm:py-12 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1
              className={`text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 ${isDarkMode ? 'text-primary-dark' : 'text-primary-light'}`}
            >
              Education
            </h1>
          </div>

          <div className="relative">
            <LargeBox
              title="A-Levels"
              subtitle="Ashby School"
              description="My A-Levels built a strong foundation for studying Computer Science at university. Computer Science introduced core programming and problem-solving
               concepts, while Mathematics developed my analytical thinking, logic, and precision—key for algorithms and data structures. 
              Physics strengthened my modelling skills and understanding of systems, alongside practical experience with data, experimentation, and technical reasoning."
              isDarkMode={isDarkMode}
              skills={['Computer Science', 'Mathematics', 'Physics']}
              grade="A*AA"
              timePeriod="2020-2022"
              icon={<SchoolIcon />}
              key={0}
            >
              <h4
                className={`text-lg font-semibold ${isDarkMode ? 'text-primary-dark' : 'text-gray-800'} mb-4`}
              >
                Modules
              </h4>
              <SkillsBox
                title="Computer Science"
                content="This course laid the foundation for understanding core principles of computer science, including both theoretical concepts and practical programming. 
                It covered areas such as algorithms, computational thinking, data structures, systems architecture, networking, and the societal impact of computing. A significant 
                component involved developing a software project independently, 
                applying the full software development lifecycle—from planning and implementation to testing and evaluation."
                skills={[
                  { text: 'C#' },
                  { text: 'Unity' },
                  { text: 'Algorithms and Data Structures' },
                  { text: 'Course Work', to: '/projects#ChessGame' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Mathematics"
                content="A-Level Mathematics provided a strong foundation in analytical and problem-solving skills through the study of pure mathematics, 
                statistics, and mechanics. The course developed a deep understanding of mathematical principles and their application to real-world and scientific contexts, 
                laying essential groundwork for further study in computer science, engineering, and data-focused disciplines."
                skills={[
                  { text: 'Calculus' },
                  { text: 'Proof Techniques' },
                  { text: 'Statistics' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Physics"
                content="A-Level Physics developed a deep understanding of the fundamental principles governing the physical world, from classical mechanics to quantum phenomena. 
                The course combined theoretical analysis with experimental work, emphasizing both conceptual understanding and mathematical modelling. It covered key areas such as forces,
                 energy, electricity, waves, particle physics, fields, and nuclear physics.
                 A significant component involved practical investigations, honing skills in data analysis, precision measurement, and scientific communication."
                skills={[
                  { text: 'Mechanics' },
                  { text: 'Scientific Methodology' },
                ]}
                isDarkMode={isDarkMode}
              />
            </LargeBox>

            <LargeBox
              title="Year 1"
              subtitle="University of Sheffield"
              description="My first year provided a strong foundation in core areas of computer science, including software engineering, 
              web development, algorithms, computer architecture, networks, AI, and the mathematical principles underpinning computing. 
              I gained practical experience through individual and team-based projects,
               applying theoretical knowledge to real-world challenges while building a solid technical skill set across multiple domains."
              isDarkMode={isDarkMode}
              skills={['Java', 'Algorithms and Data Structures', 'Team Work']}
              grade="First Class Pass"
              timePeriod="2022-2023"
              icon={<SchoolIcon />}
              key={1}
            >
              <h4
                className={`text-lg font-semibold ${isDarkMode ? 'text-primary-dark' : 'text-gray-800'} mb-4`}
              >
                Modules
              </h4>
              <SkillsBox
                title="Introduction to Software Engineering"
                content="I learnt the theory behind different software methodologies and I worked in a team
                using an agile methodolgy to create a web app using rub and sinatra."
                skills={[
                  { text: 'Ruby' },
                  { text: 'Git' },
                  { text: 'Agile Methodology' },
                  { text: 'Communication' },
                  {
                    text: 'Team Project',
                    to: '/projects#IntroductionToSoftwareEngineeringTeamProject',
                  },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Foundations of Computer Science"
                content="Introduces core mathematical concepts essential to computing, 
                laying the groundwork for future modules. Covers foundational techniques with a focus on enthusiasm and understanding rather than full depth"
                skills={[
                  { text: 'Discrete Maths' },
                  { text: 'Continous Maths' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Java Programming"
                content="Teaches programming concepts through Java, emphasizing structured programming and progressing to object-oriented design. 
                Focuses on writing clear, well-structured code and using testing to guide development."
                skills={[
                  { text: 'Java' },
                  { text: 'Object Object Oriented Programming' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Machines and Intelligence"
                content="Teaches AI techniques throughout history, aided through practical demonstrations with the Miro robots"
                skills={[{ text: 'Miro Code' }, { text: 'AI History' }]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Devices and Networks"
                content="Covers computer architecture basics such as digital logic, arithmetic, and instruction sets, along with advanced topics like
                 cache and pipelining. Also introduces network principles including protocols and reliable data transmission"
                skills={[
                  { text: 'Computer Architecture' },
                  { text: 'Networks' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Web and Internet Technology"
                content="Focuses on front-end web development using HTML, CSS, and JavaScript. Covers responsive design, accessibility, legal considerations, 
                and an introduction to information security"
                skills={[
                  { text: 'HTML' },
                  { text: 'CSS' },
                  { text: 'JavaScript' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Introduction to Algorithms and Data Structures"
                content="Introduces the design and analysis of efficient algorithms and data structures. 
                Covers algorithmic efficiency, searching, sorting, graph algorithms, and combinatorial problems like shortest path"
                skills={[
                  { text: 'Data Structures' },
                  { text: 'Problem Solving' },
                  { text: 'Big O Notation' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Gloabl Engineering Challenge Week"
                content="Working in a multi-disiplinary engineering team, we were tasked with finding a solution to 
                and engineering problem and presenting it to people with industrial expierence."
                skills={[{ text: 'Team Work' }, { text: 'Presenting' }]}
                isDarkMode={isDarkMode}
              />
            </LargeBox>

            <LargeBox
              title="Year 2"
              subtitle="University of Sheffield"
              description="In Year 2, I built on foundational knowledge with modules in machine learning, functional programming, logic, systems design, 
              and theoretical computation. I also worked on team projects that emphasized software architecture, security, and real-world application, preparing me for
               professional software development."
              isDarkMode={isDarkMode}
              skills={['System Design', 'Big O', 'Functional Programming']}
              grade="First Class Pass"
              timePeriod="2023-2024"
              icon={<SchoolIcon />}
              key={2}
            >
              <SkillsBox
                title="Data Driven Computing"
                content="This module introduced the fundamentals of machine learning with a strong focus on practical applications. 
                It explored the full data pipeline—from acquisition and preparation to analysis and learning—using Python to develop an intuitive understanding of key concepts. 
                The hands-on approach helped bridge complex mathematical ideas with real-world use cases."
                skills={[
                  { text: 'Python' },
                  { text: 'Supervised & UnSupervised Learning' },
                  { text: 'NumPy' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="System Design and Security"
                content="This module provided a comprehensive foundation in software systems design.
                It also covered critical aspects of software validation, testing, and secure development practices. Theoretical concepts were reinforced through a team-based project, 
                fostering collaboration and practical application in preparation for larger-scale software engineering work."
                skills={[
                  { text: 'UML' },
                  { text: 'Java' },
                  { text: 'Java Swing' },
                  { text: 'Design Patterns' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Robotics"
                content="This module explored the multidisciplinary foundations of robotics, combining insights from psychology, computer science, and engineering. 
                It focused on the design and implementation of the technologies behind modern robotics systems, providing both theoretical background and practical understanding."
                skills={[
                  { text: 'Python' },
                  { text: 'Human-Robot Interaction' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Logic in Computer Science"
                content="This module introduced the formal foundations of logic as applied in computer science. It covered propositional and predicate logic, natural deduction, 
                and important meta-logical concepts such as soundness, completeness, and decidability. 
                It also explored applications like automated reasoning, verification using modal and temporal logics, and type systems."
                skills={[
                  { text: 'Propositional Logic' },
                  { text: 'Predicate Logic' },
                  { text: 'Temporal Logic' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Functional Programming"
                content="This module introduced functional programming principles using Haskell. It covered core concepts such as pure functions, 
                immutability, recursion, and higher-order functions, alongside advanced topics like lazy evaluation, list comprehensions, and type classes."
                skills={[{ text: 'Haskell' }]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title=" Automata, Computation and Complexity"
                content="This module examined the theoretical underpinnings of computation through formal models such as finite automata, pushdown automata, and Turing machines. 
                It also addressed computability and computational complexity, providing insight into what can be computed and how efficiently."
                skills={[
                  { text: 'Turing Machines' },
                  { text: 'Big O' },
                  { text: 'NP-Hardness' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Software Hut"
                content="Software Hut simulated a professional software development environment, 
                where students engineered a real-world software product for an external client. 
                The module emphasized teamwork, communication, and use of industry tools and methodologies, including requirements engineering,
                 project management, modelling, testing, and client interaction."
                skills={[
                  { text: 'Agile' },
                  { text: 'Client Communication' },
                  {
                    text: 'Team Project',
                    to: '/projects#SoftwareHut',
                  },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Engineering You're Hired"
                content="This week long module focused on developing employability and professional skills essential for engineers in real-world settings, by building on the Global Engineering Challenge Module. 
                I gained experience working to client requirements, adapting to shifting goals, 
                and collaborating across disciplines. The emphasis was on demonstrating key soft skills alongside technical proficiency,
                 equipping me to better communicate, plan, and deliver under pressure—preparing me for both interviews and professional environments."
                skills={[
                  { text: 'Task Priorisation' },
                  { text: 'Communication' },
                  { text: 'Presentation' },
                  { text: 'Adaptability' },
                ]}
                isDarkMode={isDarkMode}
              />
            </LargeBox>

            <LargeBox
              title="Year in Industry"
              subtitle="Certara"
              description="I gained over a year of pratical expierience working in an agile team using C#, C++, Git and JavaScript.
              This helped me develop my communication and Technical skills."
              isDarkMode={isDarkMode}
              skills={['C#', 'C++', 'Communication']}
              timePeriod="June 2024 - July 2025"
              grade="Pass"
              icon={<EngineeringIcon />}
              link="/work#Certara"
              key={3}
            />

            <LargeBox
              title="Year 3"
              subtitle="University of Sheffield"
              description="I will start my 3rd year of University in September 2025"
              isDarkMode={isDarkMode}
              grade="In Progress"
              timePeriod="2025-Present"
              icon={<SchoolIcon />}
              key={4}
            >
              <SkillsBox
                title="Mobile Development"
                content="This module introduced the principles of mobile software development using Android as a practical case study. 
                It focused on mobile architecture, object-oriented design, and applying patterns such as MVC and MVVM. As part of a team, I helped design and develop a 
                functional Android application, implementing features such as touch interaction, data persistence, background services, and sensor integration."
                skills={[
                  { text: 'Kotlin' },
                  { text: 'MVVM Architecture' },
                  { text: 'Communication' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Bio-inspired Computing"
                content="This module explored modern AI techniques inspired by biological systems, including evolution, neural networks, swarm intelligence,
                 and cellular systems. Using Python, I applied optimisation and simulation algorithms to simulate forrest fires in the Unitest States of America, 
                 evaluating their efficiency and suitability. The module emphasised scientific experimentation, critical analysis, and collaborative problem-solving 
                 through a group project."
                skills={[
                  { text: 'Python' },
                  { text: 'Central Automata' },
                  { text: 'Immune Inspired Algorithms' },
                  { text: 'Communication' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Advanced Algorithms"
                content="This module focused on advanced algorithm design and analysis for solving complex computational problems efficiently.
                 It covered optimisation techniques, randomisation methods, approximation algorithms, streaming algorithms, and advanced data structures. 
                 Through research-led teaching and problem-solving exercises, I developed a strong theoretical foundation in analysing algorithm efficiency and 
                 selecting appropriate approaches for large-scale and challenging problems."
                skills={[
                  { text: 'Big O' },
                  { text: 'Algorithm Analysis' },
                  { text: 'Streaming Algorithms' },
                  { text: 'Random Algorithms' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Accounting and Law"
                content="This module introduced the fundamental principles of financial accounting and business law relevant to organisations.
                 It covered the preparation and interpretation of financial statements, alongside key legal concepts such as contracts, company law,
                  and regulatory responsibilities. The module developed an understanding of how financial and legal frameworks influence business decision-making 
                  and corporate governance."
                skills={[
                  { text: 'Finicial Management' },
                  { text: 'Understanding Legal Core Principals' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Reinforcement Learning"
                content="This module focused on the theory and implementation of reinforcement learning algorithms, covering Temporal Difference methods such as Q-Learning 
                and SARSA, as well as Deep Reinforcement Learning. It included the mathematical foundations of supervised learning (backpropagation) as a precursor to deep RL.
                 I implemented algorithms from first principles in Python and applied them to practical problems, producing research-style reports supported by independent 
                 study of academic literature."
                skills={[
                  { text: 'Q-Learning' },
                  { text: 'SARSA Algorithm' },
                  { text: 'Deep Reinforcement Learning' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Software Re-engineering"
                content="This module focused on understanding, analysing, and improving legacy software systems. 
                It covered reverse-engineering techniques, static and dynamic code analysis, identification of code smells and anti-patterns, 
                and applying refactoring and reengineering strategies. Through hands-on work with a large open-source system using GitHub, 
                I collaborated in a team to analyse system structure, diagnose design issues, and propose structural improvements."
                skills={[
                  { text: 'Reverse-engineering unfamiliar codebases' },
                  { text: 'Analysing Architecture' },
                  { text: 'Identifying Code Smells' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Modelling and Simulation of Natural Systems"
                content="This module explored mathematical and computational modelling of dynamic natural systems using differential equations
                 and individual-based models. I developed and simulated models of biological and population systems, analysed their stability,
                  and implemented numerical methods to explore system behaviour. The module strengthened my ability to connect mathematical theory with practical
                   computational simulations."
                skills={[
                  { text: 'Numerical Simulation Methods' },
                  { text: 'Differential Equations' },
                  { text: 'Python' },
                ]}
                isDarkMode={isDarkMode}
              />
              <SkillsBox
                title="Software Testing and Analysis"
                content="This module focused on techniques for analysing and testing software systems using both static analysis and dynamic testing approaches.
                 It covered systematic testing methods, automated test generation, and the evaluation of software quality through metrics.
                  The module strengthened my ability to assess correctness, improve reliability, and apply structured testing strategies to complex systems."
                skills={[
                  { text: 'Java' },
                  { text: 'JUnit' },
                  { text: 'Automated Testing' },
                  { text: 'Evaluating Software Quality' },
                ]}
                isDarkMode={isDarkMode}
              />
            </LargeBox>
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default EducationPage;
