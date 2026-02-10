import { Link } from "react-router-dom";
import { ArrowRight, Newspaper, Calendar } from "lucide-react";
import heroInterpreter from "@/assets/hero-interpreter.jpg";
import heroRealestate from "@/assets/hero-realestate.jpg";

const sampleNews = [
  {
    id: 1,
    title: "ახალი საიმიგრაციო კანონები 2024",
    excerpt: "რა იცვლება იმიგრანტებისთვის წელს",
    date: "15 იანვარი, 2024",
    image: heroInterpreter,
  },
  {
    id: 2,
    title: "უძრავი ქონების ბაზარი ნიუ იორკში",
    excerpt: "როგორ იპოვოთ ხელმისაწვდომი საცხოვრებელი",
    date: "12 იანვარი, 2024",
    image: heroRealestate,
  },
];

export const NewsPreview = () => {
  return (
    <section className="py-6 px-4 bg-muted/30">
      <div className="container">
        {/* Section header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Newspaper className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">ახალი ამბები</h2>
              <p className="text-xs text-muted-foreground">სასარგებლო ინფორმაცია ემიგრანტებისთვის</p>
            </div>
          </div>
          <Link to="/news" className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
            ყველა <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News cards - with cover images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sampleNews.map((article) => (
            <Link 
              key={article.id} 
              to={`/news/${article.id}`}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all group"
            >
              {/* Cover image */}
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
