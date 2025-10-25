import {
  Egg,
  Bird,
  Wheat,
  Stethoscope,
  Truck,
  Building2,
} from "lucide-react";

export interface Service {
  id: string;
  icon: any;
  title: string;
  description: string;
  category: string;
}

export const services: Service[] = [
  {
    id: "hatchery",
    icon: Egg,
    title: "Hatchery Services",
    description: "High-quality day-old chicks with guaranteed health and biosecurity standards.",
    category: "Production",
  },
  {
    id: "layer-management",
    icon: Egg,
    title: "Layer Management & Egg Supply",
    description: "Fresh farm eggs with consistent quality and timely delivery to your location.",
    category: "Production",
  },
  {
    id: "broiler-production",
    icon: Bird,
    title: "Broiler Production & Supply",
    description: "Premium broiler chickens raised with proper nutrition and care standards.",
    category: "Production",
  },
  {
    id: "feed-nutrition",
    icon: Wheat,
    title: "Feed & Nutrition Solutions",
    description: "Scientifically formulated feed for optimal growth and health of your flock.",
    category: "Support",
  },
  {
    id: "veterinary",
    icon: Stethoscope,
    title: "Veterinary & Advisory Services",
    description: "Expert veterinary care and farm management consultation for better yields.",
    category: "Support",
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Cold-chain Logistics & Packaging",
    description: "Temperature-controlled transport ensuring product freshness from farm to customer.",
    category: "Support",
  },
];

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image?: string;
  moq?: string;
}

export const products: Product[] = [
  {
    id: "layer-eggs",
    name: "Farm Fresh Layer Eggs",
    description: "High-quality fresh eggs from bio-secure layer farms. Weekly delivery available.",
    category: "Eggs",
    moq: "MOQ 3000 eggs/week",
  },
  {
    id: "day-old-chicks",
    name: "Day-Old Chicks",
    description: "Healthy, vaccinated day-old chicks from our modern hatchery facilities.",
    category: "Chicks",
    moq: "MOQ 500 chicks",
  },
  {
    id: "broiler-chickens",
    name: "Broiler Chickens",
    description: "Ready-to-market broilers raised with quality feed and proper care.",
    category: "Broilers",
    moq: "Contact for bulk rates",
  },
  {
    id: "layer-feed",
    name: "Layer Feed",
    description: "Nutritionally balanced feed for optimal egg production.",
    category: "Feed",
    moq: "50 kg bags minimum",
  },
  {
    id: "broiler-feed",
    name: "Broiler Feed",
    description: "High-protein feed formulated for rapid broiler growth.",
    category: "Feed",
    moq: "50 kg bags minimum",
  },
  {
    id: "chick-starter",
    name: "Chick Starter Feed",
    description: "Specially formulated feed for day-old to 3-week chicks.",
    category: "Feed",
    moq: "25 kg bags minimum",
  },
];

export const getServicesByCategory = (category: string) => {
  return services.filter((service) => service.category === category);
};

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};

export const getAllCategories = () => {
  return [...new Set(services.map((service) => service.category))];
};

export const getAllProductCategories = () => {
  return [...new Set(products.map((product) => product.category))];
};
