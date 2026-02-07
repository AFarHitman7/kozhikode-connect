import { Layout } from "@/components/Layout";

const Manifesto = () => {
  return (
    <Layout>
      <section className="container py-10 md:py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Manifesto
          </h2>

          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-2xl font-display font-semibold text-primary text-center">
              "Kozhikode's strength is not scale. It is continuity."
            </p>

            <div className="border-t border-b border-border py-8 my-10">
              <h3 className="font-display text-xl font-semibold mb-4">This platform exists to:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  Make communities visible without commodifying them
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  Preserve social rhythm, not amplify noise
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  Treat food and ritual as civic infrastructure
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  Reduce admin fatigue
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  Avoid becoming another generic "events platform"
                </li>
              </ul>
            </div>

            <h3 className="font-display text-xl font-semibold mb-4">What we will never do:</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="p-4 bg-muted/50 border border-border">No open forums</div>
              <div className="p-4 bg-muted/50 border border-border">No DMs</div>
              <div className="p-4 bg-muted/50 border border-border">No algorithmic feeds</div>
              <div className="p-4 bg-muted/50 border border-border">No influencer profiles</div>
              <div className="p-4 bg-muted/50 border border-border col-span-2 text-center">
                No ads inside community spaces
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="font-display text-xl italic text-muted-foreground">
                This is civic infrastructure.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                If successful, this becomes a living map of Kozhikode's social fabric—
                a replicable model for culture-first cities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Manifesto;
