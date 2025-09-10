import { ArrowDown, Code, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('html-basics');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-success/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-warning/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Web Development</span><br />
              <span className="text-foreground">Course Portfolio</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Путешествие от основ HTML до создания полноценных веб-приложений. 
              35 уроков практического обучения веб-разработке.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center space-x-2">
              <div className="gradient-primary p-2 rounded-lg">
                <Code className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">35</div>
                <div className="text-sm text-muted-foreground">Уроков</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="gradient-secondary p-2 rounded-lg">
                <Sparkles className="h-6 w-6 text-success-foreground" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">6</div>
                <div className="text-sm text-muted-foreground">Разделов</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="bg-warning/20 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-warning" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="gradient-primary hover-glow text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl transition-bounce"
            >
              Исследовать проекты
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;