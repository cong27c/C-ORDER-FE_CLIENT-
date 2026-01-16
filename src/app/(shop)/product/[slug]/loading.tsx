export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="mx-auto max-w-7xl px-4 py-4 md:py-6">
        <div className="h-4 w-32 rounded bg-muted animate-pulse"></div>
      </nav>

      <section className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Gallery skeleton */}
          <div className="space-y-4">
            <div
              className="w-full rounded-lg bg-muted animate-pulse"
              style={{ aspectRatio: "4 / 5" }}
            ></div>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-muted animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Info skeleton */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="h-4 w-24 rounded bg-muted animate-pulse"></div>
              <div className="h-8 w-full rounded bg-muted animate-pulse"></div>
            </div>
            <div className="h-6 w-32 rounded bg-muted animate-pulse"></div>
            <div className="h-10 w-24 rounded bg-muted animate-pulse"></div>
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-full rounded bg-muted animate-pulse"
                ></div>
              ))}
            </div>
            <div className="h-12 w-full rounded-lg bg-muted animate-pulse"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
