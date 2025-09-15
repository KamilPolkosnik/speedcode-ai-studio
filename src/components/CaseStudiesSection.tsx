import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageLightbox } from "./ImageLightbox";
import { useLanguage } from "@/hooks/useLanguage";

// Import images
import virentiacrm1 from "@/assets/virentia-crm-1.png";
import virentiacrm2 from "@/assets/virentia-crm-2.png";
import virentiacrm3 from "@/assets/virentia-crm-3.png";
import virentiashop1 from "@/assets/virentia-shop-1.png";
import virentiashop2 from "@/assets/virentia-shop-2.png";
import virentiashop3 from "@/assets/virentia-shop-3.png";
import sessio1 from "@/assets/sessio-1.png";
import sessio2 from "@/assets/sessio-2.png";
import sessio3 from "@/assets/sessio-3.png";

const CaseStudiesSection = () => {
  const { t } = useLanguage();

  const caseStudies = [
    {
      category: "CRM",
      title: "Virentia Luxuria",
      description: t('casestudies.virentia.desc'),
      images: [virentiacrm1, virentiacrm2, virentiacrm3]
    },
    {
      category: "E-commerce",
      title: "Sklep Virentia Luxuria",
      description: t('casestudies.shop.desc'),
      images: [virentiashop1, virentiashop2, virentiashop3]
    },
    {
      category: "CRM",
      title: "Bookfinanse",
      description: t('casestudies.bookfinanse.desc'),
      images: []
    },
    {
      category: "SaaS",
      title: "Sessio",
      description: t('casestudies.sessio.desc'),
      images: [sessio1, sessio2, sessio3]
    }
  ];

  const categories = [t('casestudies.all'), ...Array.from(new Set(caseStudies.map(c => c.category)))];
  const [activeCat, setActiveCat] = useState<string>(t('casestudies.all'));
  const [activeImages, setActiveImages] = useState<{[key: string]: number}>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>(".cs-reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in-view");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((it) => io.observe(it));
    return () => io.disconnect();
  }, [activeCat]);

  const filtered = activeCat === t('casestudies.all') ? caseStudies : caseStudies.filter(c => c.category === activeCat);

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  const handleTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget as HTMLDivElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 6; // max 6deg
    const rotateX = -((y - midY) / midY) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const handleTiltLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget as HTMLDivElement;
    card.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  };

  return (
    <section id="case-studies" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            {t('casestudies.title')}
          </h2>
          <p className="text-xl text-foreground mb-12">
            {t('casestudies.subtitle').split('SpeedCode').length > 1 ? (
              <>
                {t('casestudies.subtitle').split('SpeedCode')[0]}
                <span className="text-primary italic font-bold">SpeedCode</span>
                {t('casestudies.subtitle').split('SpeedCode')[1]}
              </>
            ) : (
              t('casestudies.subtitle')
            )}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                activeCat === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {filtered.map((study, index) => (
            <div key={`${study.title}-${index}`} className="cs-reveal">
              <Card
                className="cs-card relative p-6 cursor-pointer cs-tilt"
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
                onClick={() => {
                  if (study.images.length > 0) {
                    openLightbox(study.images, 0, study.title);
                  }
                }}
              >
                {/* glow */}
                <div className="cs-glow" style={{background: "radial-gradient(120px 120px at 50% 30%, hsl(var(--brand-blue)/.35), transparent 60%)"}} />

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {study.category}
                  </span>
                </div>

                <h3 className="cs-title text-xl font-bold mb-2 text-foreground">{study.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{study.description}</p>

                {/* Image Gallery - positioned below title and description */}
                {study.images.length > 0 && (
                  <div className="mb-6">
                    <div className="grid grid-cols-3 gap-2">
                      {study.images.slice(0, 3).map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="aspect-video rounded-lg overflow-hidden bg-muted cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                          onClick={(e) => {
                            e.stopPropagation();
                            openLightbox(study.images, imgIndex, study.title);
                          }}
                        >
                          <img 
                            src={image} 
                            alt={`${study.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                          />
                        </div>
                      ))}
                    </div>
                    
                    {study.images.length > 3 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openLightbox(study.images, 0, study.title);
                        }}
                        className="text-xs text-primary hover:text-primary/80 mt-2 transition"
                      >
                        +{study.images.length - 3} {t('casestudies.morePhotos')}
                      </button>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                  <span>{t('casestudies.seeMore')}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-20 text-center">
          <div
            className="relative overflow-hidden rounded-2xl p-12 text-white"
            onMouseMove={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              const rect = el.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              el.style.setProperty("--mx", `${x}%`);
              el.style.setProperty("--my", `${y}%`);
            }}
            style={{
              background:
                "radial-gradient(600px 300px at var(--mx,50%) var(--my,50%), hsl(var(--brand-blue)/.25), transparent 40%), linear-gradient(135deg, hsl(var(--brand-blue)) 0%, hsl(var(--brand-blue-light)/.15) 100%)",
            }}
          >
            <div className="max-w-5xl mx-auto text-center">
              <p className="uppercase tracking-widest text-white/80 text-sm mb-4">{t('casestudies.accelerate')}</p>

              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                {t('casestudies.useYourSoftware')}
              </h2>

              <div className="text-2xl md:text-3xl font-extrabold mb-6">
                <CountUp start={1} end={40} duration={2} suffix="%" enableScrollSpy /> {t('casestudies.fasterAndCheaper')}
              </div>

              <p className="text-lg md:text-xl text-white/90 mb-8">
                {t('casestudies.createdFaster')}
              </p>

              <div className="grid sm:grid-cols-3 gap-3 mb-10">
                <div className="rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-medium text-white/90 backdrop-blur-sm hover:bg-white/20 transition">{t('casestudies.lowerCosts')}</div>
                <div className="rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-medium text-white/90 backdrop-blur-sm hover:bg-white/20 transition">{t('casestudies.shorterTime')}</div>
                <div className="rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-medium text-white/90 backdrop-blur-sm hover:bg-white/20 transition">{t('casestudies.higherQuality')}</div>
              </div>

              <a href="#contact">
                <Button
                  type="button"
                  size="lg"
                  className="ai-bounce inline-flex items-center justify-center mt-4 h-14 md:h-16 px-10 leading-none text-center bg-[#2F6BFF] hover:bg-[#2A5FF0] text-white rounded-[28px] uppercase tracking-wide border-0 shadow-[0_20px_60px_-10px_rgba(47,107,255,0.45)]"
                >
                  {t('casestudies.contactUs')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setLightboxIndex}
        title={lightboxTitle}
      />
    </section>
  );
};

export default CaseStudiesSection;