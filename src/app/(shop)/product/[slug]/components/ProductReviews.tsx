interface ProductReviewsProps {
  rating: number;
  reviewCount: number;
  testimonials: Array<{ author: string; rating: number; text: string }>;
  salesCount: number;
  viewersCount: number;
}

export default function ProductReviews({
  rating,
  reviewCount,
  testimonials,
  salesCount,
  viewersCount,
}: ProductReviewsProps) {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-border p-6 text-center">
          <div className="text-3xl font-bold">{rating}</div>
          <div className="mt-2 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-sm">
                {i < Math.round(rating) ? "★" : "☆"}
              </span>
            ))}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {reviewCount} verified reviews
          </p>
        </div>

        <div className="rounded-lg border border-border p-6 text-center">
          <div className="text-3xl font-bold text-accent">{salesCount}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Customers purchased
          </p>
        </div>

        <div className="rounded-lg border border-border p-6 text-center">
          <div className="text-3xl font-bold text-accent">{viewersCount}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            People viewing this item
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Customer Reviews</h3>
        <div className="space-y-4">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="rounded-lg border border-border p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{testimonial.author}</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="text-sm">
                      {idx < testimonial.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-foreground/80">{testimonial.text}</p>
            </div>
          ))}
        </div>
        <button className="w-full rounded-lg border border-border py-3 text-sm font-medium hover:bg-muted transition-colors">
          View all reviews
        </button>
      </div>
    </div>
  );
}
