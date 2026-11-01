import { siteConfig } from "@/config/site";
import { Star, Quote } from "lucide-react";
import { tv } from "tailwind-variants";
import { MainWrapper } from "../layout/wrapper";

const reviewsVariants = tv({
  slots: {
    container: "relative w-full py-20 px-6 bg-bg-dark overflow-hidden",
    headerWrapper:
      "text-center mb-12 max-w-2xl flex flex-col items-center gap-3",
    subtitle:
      "text-brand-primary text-xs font-mono tracking-widest uppercase font-bold",
    title:
      "text-4xl md:text-5xl font-extrabold uppercase font-display tracking-tight mt-1 text-text-light",
    // Rating Summary Badge (Image 2 Inspired)
    scoreBadge: "flex items-center gap-4 self-start md:self-auto",
    scoreNumber:
      "font-display text-4xl font-black text-brand-primary tracking-tight",
    scoreTextGroup: "flex flex-col",
    scoreLabel:
      "text-xs font-mono font-bold text-text-muted uppercase tracking-wider",

    starsGroup: "flex items-center gap-1 text-brand-primary mt-1",
    star: "w-4 h-4 fill-brand-primary text-brand-primary",

    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl",
    card: "group relative bg-bg-dark-surface backdrop-blur-md border border-border-muted p-7 shadow-2xl flex flex-col justify-between hover:border-brand-primary/50 transition-all duration-300",
    reviewHeader: "flex items-center justify-between mb-4",
    reviewerGroup: "flex items-center gap-3",
    avatar:
      "w-11 h-11 rounded-full bg-brand-primary/15 border border-brand-primary/40 flex items-center justify-center font-display font-bold text-brand-primary text-xl uppercase",
    reviewerName:
      "text-text-light font-display font-medium text-lg uppercase tracking-wide transition-colors",
    reviewStars: "flex gap-1 mt-0.5",
    quoteIcon:
      "w-7 h-7 text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors shrink-0",
    reviewText: "text-text-muted font-light text-sm leading-relaxed mt-2",
    cardAccent:
      "w-full h-0.5 bg-linear-to-r from-transparent via-brand-primary/30 to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  },
});
export const ReviewsSection = () => {
  const styles = reviewsVariants();
  return (
    <section className={styles.container()} id="reviews">
      <MainWrapper className="flex flex-col items-center">
        {/* Header */}
        <div className={styles.headerWrapper()}>
          <div>
            <span className={styles.subtitle()}>Real Feedbacks</span>
            <h2 className={styles.title()}>What Customers Say</h2>
          </div>

          <div className={styles.scoreBadge()}>
            <span className={styles.scoreNumber()}>100%</span>
            <div className={styles.scoreTextGroup()}>
              <span className={styles.scoreLabel()}>Customer Satisfaction</span>
              <div className={styles.starsGroup()}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={styles.star()} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className={styles.grid()}>
          {siteConfig.testimonials.map((review, index) => (
            <div key={index} className={styles.card()}>
              {/* Top Row: Avatar Initial, Name & Quote Icon */}
              <div>
                <div className={styles.reviewHeader()}>
                  <div className={styles.reviewerGroup()}>
                    <div className={styles.avatar()}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className={styles.reviewerName()}>{review.name}</h3>
                      {/* 5-Star Rating */}
                      <div className={styles.reviewStars()}>
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className={styles.star()} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Quote className={styles.quoteIcon()} />
                </div>

                {/* Review Text */}
                <p className={styles.reviewText()}>{review.content}</p>
              </div>

              {/* Card Accent Border */}
              <div className={styles.cardAccent()} />
            </div>
          ))}
        </div>
      </MainWrapper>
    </section>
  );
};
