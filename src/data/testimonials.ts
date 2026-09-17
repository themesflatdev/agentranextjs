export interface Testimonial {
  ratingLabel: string;
  title: string;
  text: string;
  name: string;
  position: string;
}

export interface FeaturedTestimonial extends Testimonial {
  image: string;
}

export const featuredTestimonial: FeaturedTestimonial = {
  ratingLabel: "(4.8)",
  title: "“We Highly Recommend their Services.\"",
  text: "“Working with this team completely transform our business. Their AI solutions streamlined our operations and boosted efficiency beyond expectations.”",
  name: "James Anderson",
  position: "CEO, eTech Solutions",
  image: "/assets/images/testimonials/img-tes-item-1.jpg",
};

const REPEATED_TESTIMONIAL: Testimonial = {
  ratingLabel: "(4.8)",
  title: "“Creative Team members.\"",
  text: "“Reliable support and innovative thinking. They helped us build a scalable AI system to continues to grow with our business.”",
  name: "Emily Johnson",
  position: "COO, nTech Solutions",
};

// The source demo repeats this same testimonial 4 times in the swiper.
export const testimonials: Testimonial[] = [
  REPEATED_TESTIMONIAL,
  REPEATED_TESTIMONIAL,
  REPEATED_TESTIMONIAL,
  REPEATED_TESTIMONIAL,
];
