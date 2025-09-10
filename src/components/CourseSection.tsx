import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Lesson {
  number: number;
  title: string;
  description: string;
  skills: string[];
  difficulty: 'Начальный' | 'Средний' | 'Продвинутый';
}

interface CourseSectionProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradientClass: string;
  lessons: Lesson[];
  children?: ReactNode;
}

const CourseSection = ({ 
  id, 
  title, 
  description, 
  icon: Icon, 
  gradientClass, 
  lessons,
  children 
}: CourseSectionProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Начальный': return 'bg-success text-success-foreground';
      case 'Средний': return 'bg-warning text-warning-foreground';
      case 'Продвинутый': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`${gradientClass} p-4 rounded-2xl w-fit mx-auto mb-6 shadow-glow`}>
            <Icon className="h-12 w-12 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Interactive Demo Section */}
        {children && (
          <div className="mb-16">
            <div className="course-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Интерактивная демонстрация</h3>
              {children}
            </div>
          </div>
        )}

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <Card key={lesson.number} className="course-card border-0 hover-glow transition-bounce">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="gradient-primary text-primary-foreground border-0">
                    Урок {lesson.number}
                  </Badge>
                  <Badge className={getDifficultyColor(lesson.difficulty)}>
                    {lesson.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{lesson.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {lesson.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-foreground">Изучаемые навыки:</h4>
                  <div className="flex flex-wrap gap-2">
                    {lesson.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;