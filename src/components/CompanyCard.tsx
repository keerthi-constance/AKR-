import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CompanyCardProps {
  name: string;
  description: string;
  icon?: string;
}

export function CompanyCard({ name, description, icon }: CompanyCardProps) {
  return (
    <Card className="glass-card p-6 cosmic-hover group">
      <div className="space-y-4">
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-2xl">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
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