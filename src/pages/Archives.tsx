import { Layout } from "@/components/Layout";

const Archives = () => {
  return (
    <Layout>
      <section className="container py-10 md:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Archives
          </h2>
          <p className="quote-text text-lg md:text-xl leading-relaxed">
            "Short-form archival entries. Origin stories, lost food spots, seasonal rituals. 
            This is preservation, not blogging."
          </p>
        </div>

        {/* Archive Entries Preview */}
        <div className="mt-12 space-y-8">
          {[
            {
              title: "The Last Payasam Shop of SM Street",
              date: "Documented 2024",
              excerpt: "How a 70-year-old shop survived the mall era, serving the same recipe to three generations of Kozhikode families.",
            },
            {
              title: "Ramadan Nights at Beach Road, 1990s",
              date: "Oral History",
              excerpt: "Before the food courts, before the Instagram spots—when iftar was community infrastructure.",
            },
            {
              title: "The Running Trail Before the Running App",
              date: "Community Memory",
              excerpt: "How Calicut Runners established the Mananchira-Beach route before fitness became algorithmic.",
            },
          ].map((entry, index) => (
            <article 
              key={entry.title}
              className="border-l-4 border-primary/30 pl-6 py-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <span className="text-xs text-timestamp uppercase tracking-wider">
                {entry.date}
              </span>
              <h3 className="font-display text-xl font-semibold mt-2 mb-3 text-foreground">
                {entry.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {entry.excerpt}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 p-8 bg-muted/50 border border-border">
          <p className="text-center text-muted-foreground font-display italic">
            Archive contributions by verified community admins only.
            <br />
            <span className="text-sm not-italic">Preservation over performance.</span>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Archives;
