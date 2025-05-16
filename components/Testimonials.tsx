import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content:
      'Working with [Your Name] was a game-changer for our project. Their expertise in web development helped us launch our product ahead of schedule.',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director, StartupX',
    content:
      "[Your Name] delivered a beautiful, responsive website that perfectly captured our brand identity. We've seen a significant increase in user engagement since the launch.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          What People Say
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {testimonials.map(testimonial => (
            <Card key={testimonial.name}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                  {testimonial.content}
                </p>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src="/placeholder.svg"
                      alt={testimonial.name}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
