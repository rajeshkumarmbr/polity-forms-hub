import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  processingTime?: string;
}

const ServiceCard = ({ icon: Icon, title, description, processingTime }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-primary">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {processingTime && (
          <p className="text-sm text-muted-foreground mb-4">
            Processing Time: <span className="font-medium text-foreground">{processingTime}</span>
          </p>
        )}
        <Button className="w-full group-hover:bg-accent transition-colors">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
