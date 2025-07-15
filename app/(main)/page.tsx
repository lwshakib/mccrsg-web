"use client";

import Header from "@/components/header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import heroImage from "../../public/hero.jpg";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full " id="">
      <Header />

      {/* Hero Section */}
      <section className="w-full h-screen relative">
        <Image src={heroImage} alt="Hero Image" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-transparent" />

        {/* Hero Text and Button */}
        <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-2xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Welcome to MC Rover Scout Troupe
            </h1>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-6 py-3 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              onClick={() => {
                const element = document.getElementById("features");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Explore Our Features
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-16 bg-background" id="featured-stories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Stories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover inspiring stories from our scout community and learn
              about the impact we're making together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 pt-0">
              <div className="relative aspect-video">
                <Image
                  src="https://picsum.photos/800/450?random=1"
                  alt="Scout Adventure Story"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Mountain Expedition Success
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our scouts completed a challenging 5-day mountain expedition,
                  demonstrating exceptional teamwork and resilience in the face
                  of adverse weather conditions.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    March 15, 2024
                  </span>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Story 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 pt-0">
              <div className="relative aspect-video">
                <Image
                  src="https://picsum.photos/800/450?random=2"
                  alt="Community Service Story"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Community Garden Project
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Scouts transformed an abandoned lot into a thriving community
                  garden, providing fresh produce to local families and creating
                  a beautiful green space.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    February 28, 2024
                  </span>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Story 3 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 pt-0">
              <div className="relative aspect-video">
                <Image
                  src="https://picsum.photos/800/450?random=3"
                  alt="Leadership Training Story"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Leadership Development Camp
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Young leaders participated in an intensive leadership
                  development program, learning essential skills for guiding
                  their peers and serving their communities.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    January 20, 2024
                  </span>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Story 4 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 pt-0">
              <div className="relative aspect-video">
                <Image
                  src="https://picsum.photos/800/450?random=4"
                  alt="Environmental Conservation Story"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Beach Cleanup Initiative
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Over 50 scouts participated in a massive beach cleanup,
                  removing over 200 pounds of plastic waste and educating the
                  community about ocean conservation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    December 10, 2023
                  </span>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Story 5 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 pt-0">
              <div className="relative aspect-video">
                <Image
                  src="https://picsum.photos/800/450?random=5"
                  alt="First Aid Training Story"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Emergency Response Training
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Scouts completed advanced first aid and emergency response
                  training, preparing them to assist in crisis situations and
                  help their communities.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    November 15, 2023
                  </span>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Story 6 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 pt-0">
              <div className="relative aspect-video">
                <Image
                  src="https://picsum.photos/800/450?random=6"
                  alt="Cultural Exchange Story"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  International Scout Exchange
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our scouts hosted an international exchange program, building
                  lasting friendships and learning about different cultures from
                  around the world.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    October 5, 2023
                  </span>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scout Leaders Section */}
      <section className="py-16 bg-background" id="leaders">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Scout Leaders
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our dedicated leaders bring years of experience and passion to
              guide the next generation of scouts.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4 items-stretch">
              {/* Leader 1 */}
              <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full">
                <Card className="overflow-hidden h-96 flex flex-col">
                  <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4">
                      <Image
                        src="https://i.pravatar.cc/300?img=1"
                        alt="Sarah Johnson"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Sarah Johnson
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-2 sm:mb-3">
                      Scout Leader • 2020-2025
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-0 flex-1 line-clamp-4">
                      With over 15 years of experience in outdoor education and
                      leadership development, Sarah has guided hundreds of
                      scouts through challenging adventures and personal growth.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Leader 2 */}
              <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full">
                <Card className="overflow-hidden h-96 flex flex-col">
                  <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4">
                      <Image
                        src="https://i.pravatar.cc/300?img=2"
                        alt="Michael Chen"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Michael Chen
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-2 sm:mb-3">
                      Scout Leader • 2019-2025
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-0 flex-1 line-clamp-4">
                      A certified mountaineering instructor with expertise in
                      rock climbing and expedition planning. Michael has led
                      successful expeditions across multiple continents.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Leader 3 */}
              <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full">
                <Card className="overflow-hidden h-96 flex flex-col">
                  <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4">
                      <Image
                        src="https://i.pravatar.cc/300?img=3"
                        alt="Emily Rodriguez"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Emily Rodriguez
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-2 sm:mb-3">
                      Scout Leader • 2021-2025
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-0 flex-1 line-clamp-4">
                      Specializing in community outreach and environmental
                      conservation projects. Emily has organized over 50
                      community service initiatives benefiting thousands of
                      people.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Leader 4 */}
              <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full">
                <Card className="overflow-hidden h-96 flex flex-col">
                  <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4">
                      <Image
                        src="https://i.pravatar.cc/300?img=4"
                        alt="David Thompson"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      David Thompson
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-2 sm:mb-3">
                      Scout Leader • 2018-2025
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-0 flex-1 line-clamp-4">
                      A former emergency medical technician with advanced
                      certifications in wilderness medicine and disaster
                      response training for scouts and communities.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Leader 5 */}
              <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full">
                <Card className="overflow-hidden h-96 flex flex-col">
                  <CardContent className="p-4 sm:p-6 text-center flex flex-col h-full">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4">
                      <Image
                        src="https://i.pravatar.cc/300?img=5"
                        alt="Lisa Park"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Lisa Park
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-2 sm:mb-3">
                      Scout Leader • 2022-2025
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-0 flex-1 line-clamp-4">
                      Fluent in five languages and experienced in cultural
                      exchange programs. Lisa has facilitated international
                      scout partnerships across 20+ countries.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 lg:-left-8" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 lg:-right-8" />
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our scout troupe,
              activities, and joining process.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I join the MC Rover Scout Troupe?
              </AccordionTrigger>
              <AccordionContent>
                You can join by visiting our{" "}
                <a href="/join-us" className="underline text-primary">
                  Join Us
                </a>{" "}
                page and filling out the application form. Our team will contact
                you with the next steps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What age groups do you accept?
              </AccordionTrigger>
              <AccordionContent>
                We welcome scouts aged 15 and above. Our programs are tailored
                for older teens and young adults interested in adventure,
                leadership, and service.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What activities do you offer?</AccordionTrigger>
              <AccordionContent>
                Our troupe offers a variety of activities including camping,
                hiking, community service, leadership training, environmental
                projects, and international exchanges.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Do I need prior experience to join?
              </AccordionTrigger>
              <AccordionContent>
                No prior scouting experience is required! We welcome both
                newcomers and experienced scouts. Our leaders will guide you
                every step of the way.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How can parents get involved?</AccordionTrigger>
              <AccordionContent>
                Parents can support by volunteering at events, helping with
                logistics, or joining our parent committee. Contact us for more
                information on how to get involved.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}
