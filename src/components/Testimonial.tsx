import Image from "next/image";

interface TestimonialProps {
  image: string;
  text: string;
  alt?: string;
}

export default function Testimonial({ image, text, alt = "Testimonial" }: TestimonialProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex items-start gap-4 max-w-md">
      {/* Circular Image - Left Aligned */}
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={alt}
          width={60}
          height={60}
          className="rounded-full object-cover w-15 h-15"
        />
      </div>
      
      {/* Text Content - Right Aligned */}
      <div className="flex-1">
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          {text}
        </p>
      </div>
    </div>
  );
} 