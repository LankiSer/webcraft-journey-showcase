import { 
  Code2, 
  Palette, 
  Sparkles, 
  Rocket, 
  Github, 
  Database,
  FileText,
  Layout
} from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseSection from '@/components/CourseSection';
import InteractiveDemo from '@/components/InteractiveDemo';
import { courseData } from '@/data/courseData';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero />

      {/* HTML Basics Section */}
      <CourseSection
        id="html-basics"
        title="HTML Основы"
        description="Первые шаги в веб-разработке: знакомство с HTML, структурой документов и основными тегами"
        icon={Code2}
        gradientClass="gradient-primary"
        lessons={courseData.htmlBasics.lessons}
      >
        <InteractiveDemo type="html" />
      </CourseSection>

      {/* CSS Styling Section */}
      <CourseSection
        id="css-styling"
        title="CSS Стилизация"
        description="Изучение каскадных таблиц стилей, создание красивых дизайнов и работа с Figma"
        icon={Palette}
        gradientClass="gradient-secondary"
        lessons={courseData.cssStyling.lessons}
      >
        <InteractiveDemo type="css" />
      </CourseSection>

      {/* Layout and Design Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-warning/20 p-4 rounded-2xl w-fit mx-auto mb-6 shadow-glow">
              <Layout className="h-12 w-12 text-warning" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Верстка и Дизайн
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Превращение дизайн-макетов в живые веб-страницы с pixel-perfect точностью
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseData.layoutAndFigma.lessons.map((lesson) => (
              <div key={lesson.number} className="course-card rounded-2xl p-6 hover-glow transition-bounce">
                <div className="flex items-center justify-between mb-4">
                  <span className="gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Урок {lesson.number}
                  </span>
                  <span className="bg-warning text-warning-foreground px-2 py-1 rounded text-xs">
                    {lesson.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{lesson.title}</h3>
                <p className="text-muted-foreground mb-4">{lesson.description}</p>
                <div className="flex flex-wrap gap-2">
                  {lesson.skills.map((skill, index) => (
                    <span key={index} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Git and Deployment Section */}
      <CourseSection
        id="git-deployment"
        title="Git и Деплой"
        description="Управление версиями кода и размещение проектов в интернете с помощью GitHub Pages"
        icon={Github}
        gradientClass="bg-foreground/20"
        lessons={courseData.gitDeployment.lessons}
      />

      {/* JavaScript Section */}
      <CourseSection
        id="javascript"
        title="JavaScript"
        description="Оживление сайтов с помощью интерактивности, анимаций и динамического контента"
        icon={Sparkles}
        gradientClass="gradient-primary"
        lessons={courseData.javascript.lessons}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InteractiveDemo type="js" />
          <InteractiveDemo type="animation" />
        </div>
      </CourseSection>

      {/* Advanced Section */}
      <CourseSection
        id="advanced"
        title="Продвинутые темы"
        description="Сложные концепции: архитектура приложений, AJAX, LocalStorage и системы авторизации"
        icon={Database}
        gradientClass="bg-destructive/20"
        lessons={courseData.advanced.lessons}
      >
        <InteractiveDemo type="form" />
      </CourseSection>

      {/* Projects Showcase */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="gradient-secondary p-4 rounded-2xl w-fit mx-auto mb-6 shadow-glow">
              <Rocket className="h-12 w-12 text-success-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Финальные проекты
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Практические проекты, созданные в процессе обучения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Первый лендинг",
                description: "Статический лендинг с использованием HTML и CSS",
                tech: ["HTML", "CSS", "Responsive"],
                lessons: "5-12"
              },
              {
                title: "Многостраничный сайт",
                description: "Полноценный сайт с несколькими страницами и навигацией",
                tech: ["HTML", "CSS", "JavaScript", "Figma"],
                lessons: "17-25"
              },
              {
                title: "SPA с авторизацией",
                description: "Одностраничное приложение с системой входа в аккаунт",
                tech: ["JavaScript", "LocalStorage", "JSON", "AJAX"],
                lessons: "30-35"
              }
            ].map((project, index) => (
              <div key={index} className="course-card rounded-2xl p-6 hover-glow transition-bounce">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">Уроки: {project.lessons}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="gradient-primary text-primary-foreground px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="gradient-primary p-2 rounded-lg">
              <Code2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient">WebDev Course Portfolio</span>
          </div>
          <p className="text-muted-foreground">
            35 уроков практического обучения веб-разработке
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
