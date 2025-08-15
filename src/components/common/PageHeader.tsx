import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  backgroundImage?: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  icon: Icon,
  backgroundImage,
  className = '',
}) => {
  return (
    <div 
      className={`relative bg-gradient-to-r from-sky-500 to-sky-600 py-20 ${className}`}
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.8), rgba(2, 132, 199, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {Icon && (
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Icon className="w-8 h-8 text-white" />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-sky-100 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;