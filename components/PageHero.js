export default function PageHero({ title, description }) {
  return (
    <section className="bg-gradient-to-b from-muted/50 to-background border-b border-border">
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
