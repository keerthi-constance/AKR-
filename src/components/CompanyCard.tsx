import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CompanyCardProps {
  name: string;
  description: string;
  icon?: string;
  image?: string;
}

export function CompanyCard({ name, description, icon, image }: CompanyCardProps) {
  return (
    <Card className="glass-card p-6 cosmic-hover group overflow-hidden">
      <div className="space-y-4">
        {image ? (
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : icon && (
          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-2xl">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>
        <Button variant="cosmic" size="sm" className="w-full">
          Learn More
        </Button>
      </div>
    </Card>
  );
}