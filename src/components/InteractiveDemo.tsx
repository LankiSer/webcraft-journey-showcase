import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Code, 
  Palette, 
  MousePointer, 
  Zap,
  RefreshCw,
  Save
} from 'lucide-react';

interface InteractiveDemoProps {
  type: 'html' | 'css' | 'js' | 'form' | 'animation';
}

const InteractiveDemo = ({ type }: InteractiveDemoProps) => {
  const [htmlCode, setHtmlCode] = useState('<h1>Привет, мир!</h1>');
  const [cssCode, setCssCode] = useState('h1 { color: #8b5cf6; font-size: 2rem; }');
  const [jsOutput, setJsOutput] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [animationActive, setAnimationActive] = useState(false);

  const runJavaScript = () => {
    const code = `
      const result = [];
      for (let i = 1; i <= 5; i++) {
        result.push('Элемент ' + i);
      }
      return result.join(', ');
    `;
    try {
      const func = new Function(code);
      setJsOutput(func());
    } catch (error) {
      setJsOutput('Ошибка в коде');
    }
  };

  const handleFormSubmit = () => {
    if (formData.name && formData.email) {
      alert(`Добро пожаловать, ${formData.name}! Email: ${formData.email}`);
    }
  };

  const resetDemo = () => {
    switch (type) {
      case 'html':
        setHtmlCode('<h1>Привет, мир!</h1>');
        break;
      case 'css':
        setCssCode('h1 { color: #8b5cf6; font-size: 2rem; }');
        break;
      case 'js':
        setJsOutput('');
        break;
      case 'form':
        setFormData({ name: '', email: '' });
        break;
      case 'animation':
        setAnimationActive(false);
        break;
    }
  };

  const renderDemo = () => {
    switch (type) {
      case 'html':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">HTML Код</h4>
              </div>
              <Textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                className="font-mono text-sm h-32"
                placeholder="Введите HTML код..."
              />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Play className="h-5 w-5 text-success" />
                <h4 className="font-semibold">Результат</h4>
              </div>
              <div 
                className="p-4 border border-border rounded-lg bg-card min-h-32"
                dangerouslySetInnerHTML={{ __html: htmlCode }}
              />
            </div>
          </div>
        );

      case 'css':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Palette className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">CSS Стили</h4>
              </div>
              <Textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                className="font-mono text-sm h-32"
                placeholder="Введите CSS стили..."
              />
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Play className="h-5 w-5 text-success" />
                <h4 className="font-semibold">Стилизованный результат</h4>
              </div>
              <div className="p-4 border border-border rounded-lg bg-card min-h-32">
                <style>{cssCode}</style>
                <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
              </div>
            </div>
          </div>
        );

      case 'js':
        return (
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-5 w-5 text-warning" />
              <h4 className="font-semibold">JavaScript Демо</h4>
            </div>
            <Button onClick={runJavaScript} className="gradient-primary hover-glow">
              <Play className="mr-2 h-4 w-4" />
              Запустить код
            </Button>
            {jsOutput && (
              <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                <p className="text-success font-mono">{jsOutput}</p>
              </div>
            )}
          </div>
        );

      case 'form':
        return (
          <div className="max-w-md mx-auto space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MousePointer className="h-5 w-5 text-primary" />
              <h4 className="font-semibold">Интерактивная форма</h4>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Введите ваш email"
                />
              </div>
              <Button onClick={handleFormSubmit} className="w-full gradient-primary hover-glow">
                <Save className="mr-2 h-4 w-4" />
                Отправить форму
              </Button>
            </div>
          </div>
        );

      case 'animation':
        return (
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-5 w-5 text-primary" />
              <h4 className="font-semibold">CSS Анимации</h4>
            </div>
            <div className="flex justify-center mb-6">
              <div 
                className={`w-20 h-20 gradient-primary rounded-full transition-all duration-1000 ${
                  animationActive ? 'animate-bounce scale-150' : ''
                }`}
              />
            </div>
            <Button 
              onClick={() => setAnimationActive(!animationActive)}
              className="gradient-secondary hover-glow"
            >
              <Play className="mr-2 h-4 w-4" />
              {animationActive ? 'Остановить' : 'Запустить'} анимацию
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="course-card border-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Badge className="gradient-primary text-primary-foreground border-0">
              Демо
            </Badge>
          </CardTitle>
          <Button variant="outline" size="sm" onClick={resetDemo}>
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {renderDemo()}
      </CardContent>
    </Card>
  );
};

export default InteractiveDemo;