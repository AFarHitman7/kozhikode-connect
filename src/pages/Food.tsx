import { Layout } from "@/components/Layout";

const Food = () => {
  return (
    <Layout>
      <section className="container py-10 md:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Food as Infrastructure
          </h2>
          <p className="quote-text text-lg md:text-xl leading-relaxed mb-8">
            "Dish centric, not restaurant centric. No ratings. No lists."
          </p>
        </div>

        {/* Dish Index Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            { name: "Biryani", note: "The eternal debate: dum versus open pot", communities: 3 },
            { name: "Pathiri", note: "Morning ritual, evening comfort", communities: 2 },
            { name: "Kallummakkaya", note: "Monsoon essential, beach road staple", communities: 4 },
            { name: "Halwa Variants", note: "Festival sweetness, generational recipes", communities: 2 },
            { name: "Sulaimani", note: "Philosophy served in cups", communities: 5 },
            { name: "Thalassery Dum Biryani", note: "The northern distinction", communities: 2 },
          ].map((dish, index) => (
            <article 
              key={dish.name}
              className="community-card p-5 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-display text-xl font-semibold mb-2">{dish.name}</h3>
              <p className="text-sm text-muted-foreground italic mb-4">{dish.note}</p>
              <p className="text-xs text-location uppercase tracking-wide">
                {dish.communities} communities associated
              </p>
            </article>
          ))}
        </div>

        {/* Food Circles Teaser */}
        <div className="mt-16 border-t border-border pt-10">
          <h3 className="font-display text-2xl font-semibold mb-6">Food Circles</h3>
          <p className="text-muted-foreground max-w-xl mb-6">
            Food-centric communities treated equally. Iftar hopping groups, biryani walks, 
            late-night chai circles. These are communities, not content.
          </p>
          <p className="text-sm italic text-muted-foreground font-display">
            Coming soon: Post-meetup food rituals mapped across Kozhikode's social arteries.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Food;
