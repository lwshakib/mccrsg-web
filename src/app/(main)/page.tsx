"use client";

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
import heroImage from "../../../public/hero.jpg";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full " id="">
      {/* Hero Section */}
      <section className="w-full h-screen relative">
        <Image src={heroImage} alt="Hero Image" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-transparent" />

        {/* Hero Text and Button */}
        <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-2xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              এমসি রোভার স্কাউট ট্রুপে আপনাকে স্বাগতম
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
              আমাদের বৈশিষ্ট্যগুলো অনুসন্ধান করুন
            </Button>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="py-16 bg-background" id="our-achievements">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              আমাদের অর্জন
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              আমাদের স্কাউট কমিউনিটির অনুপ্রেরণাদায়ক গল্পগুলো আবিষ্কার করুন এবং
              একসাথে আমরা কীভাবে প্রভাব ফেলছি তা জানুন।
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
                  পর্বত অভিযান সফলতা
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  আমাদের স্কাউটরা ৫ দিনের চ্যালেঞ্জিং পর্বত অভিযান সম্পন্ন
                  করেছে, প্রতিকূল আবহাওয়ার মধ্যেও অসাধারণ দলগত কাজ ও সহনশীলতা
                  প্রদর্শন করেছে।
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    মার্চ ১৫, ২০২৪
                  </span>
                  <Button variant="outline" size="sm">
                    আরও পড়ুন
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
                  কমিউনিটি গার্ডেন প্রকল্প
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  স্কাউটরা একটি পরিত্যক্ত জমিকে একটি সমৃদ্ধ কমিউনিটি গার্ডেনে
                  রূপান্তর করেছে, যা স্থানীয় পরিবারগুলোকে তাজা শাকসবজি সরবরাহ
                  করছে এবং একটি সুন্দর সবুজ পরিবেশ তৈরি করেছে।
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ফেব্রুয়ারি ২৮, ২০২৪
                  </span>
                  <Button variant="outline" size="sm">
                    আরও পড়ুন
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
                  নেতৃত্ব বিকাশ প্রশিক্ষণ ক্যাম্প
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  তরুণ নেতারা একটি নিবিড় নেতৃত্ব উন্নয়ন প্রোগ্রামে অংশগ্রহণ
                  করেছে, যেখানে তারা তাদের সহকর্মীদের নেতৃত্ব দেওয়ার এবং
                  কমিউনিটিকে সেবা করার জন্য গুরুত্বপূর্ণ দক্ষতা শিখেছে।
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    জানুয়ারি ২০, ২০২৪
                  </span>
                  <Button variant="outline" size="sm">
                    আরও পড়ুন
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
                  সমুদ্র সৈকত পরিষ্কার অভিযান
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  ৫০ জনেরও বেশি স্কাউট একটি বিশাল সমুদ্র সৈকত পরিষ্কার অভিযানে
                  অংশগ্রহণ করেছে, ২০০ পাউন্ডেরও বেশি প্লাস্টিক বর্জ্য অপসারণ
                  করেছে এবং সমুদ্র সংরক্ষণ সম্পর্কে কমিউনিটিকে শিক্ষিত করেছে।
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ডিসেম্বর ১০, ২০২৩
                  </span>
                  <Button variant="outline" size="sm">
                    আরও পড়ুন
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
                  জরুরি সাড়া প্রশিক্ষণ
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  স্কাউটরা উন্নত ফার্স্ট এইড ও জরুরি সাড়া প্রশিক্ষণ সম্পন্ন
                  করেছে, যা তাদের সংকট পরিস্থিতিতে সহায়তা করতে এবং কমিউনিটিকে
                  সাহায্য করতে প্রস্তুত করেছে।
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    নভেম্বর ১৫, ২০২৩
                  </span>
                  <Button variant="outline" size="sm">
                    আরও পড়ুন
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
                  আন্তর্জাতিক স্কাউট বিনিময়
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  আমাদের স্কাউটরা একটি আন্তর্জাতিক বিনিময় প্রোগ্রাম আয়োজন
                  করেছে, যেখানে তারা স্থায়ী বন্ধুত্ব গড়ে তুলেছে এবং বিশ্বের
                  বিভিন্ন সংস্কৃতি সম্পর্কে শিখেছে।
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    অক্টোবর ৫, ২০২৩
                  </span>
                  <Button variant="outline" size="sm">
                    আরও পড়ুন
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scout Leaders Section */}
      <section className="py-16 bg-background md:mx-4" id="our-leaders">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              আমাদের স্কাউট নেতৃবৃন্দকে জানুন
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              আমাদের নিবেদিত নেতৃবৃন্দ বছরের পর বছর অভিজ্ঞতা ও উদ্দীপনা নিয়ে
              পরবর্তী প্রজন্মের স্কাউটদের পথ দেখান।
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
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full">
                <Card className="overflow-hidden h-96 flex flex-col">
                  <CardContent className="p-4 sm:p-6 text-left flex flex-col h-full">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4">
                      <Image
                        src="https://i.pravatar.cc/300?img=1"
                        alt="Sarah Johnson"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      সারা জনস্যাচ্ছিল
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-2 sm:mb-3">
                      স্কাউট নেতা • ২০২০-২০২৫
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-0 flex-1 line-clamp-4">
                      আউটডোর শিক্ষায় ১৫ বছরেরও বেশি অভিজ্ঞতা ও নেতৃত্ব বিকাশে
                      দক্ষ, সারাহ শত শত স্কাউটকে চ্যালেঞ্জিং অ্যাডভেঞ্চার ও
                      ব্যক্তিগত বিকাশের পথে পরিচালিত করেছেন।
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Leader 2 */}
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full">
                <Card className="overflow-hidden h-96 flex flex-col">
                  <CardContent className="p-4 sm:p-6 text-left flex flex-col h-full">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4">
                      <Image
                        src="https://i.pravatar.cc/300?img=2"
                        alt="Michael Chen"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      মাইকেল চেন
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-2 sm:mb-3">
                      স্কাউট নেতা • ২০১৯-২০২৫
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-0 flex-1 line-clamp-4">
                      পর্বতারোহণ প্রশিক্ষক এবং অভিযানের পরিকল্পনায় দক্ষ, মাইকেল
                      একাধিক মহাদেশে সফল অভিযান পরিচালনা করেছেন।
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Leader 3 */}
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full">
                <Card className="overflow-hidden h-96 flex flex-col">
                  <CardContent className="p-4 sm:p-6 text-left flex flex-col h-full">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4">
                      <Image
                        src="https://i.pravatar.cc/300?img=3"
                        alt="Emily Rodriguez"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      এমিলি রোড্রিগেজ
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-2 sm:mb-3">
                      স্কাউট নেতা • ২০২১-২০২৫
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-0 flex-1 line-clamp-4">
                      কমিউনিটি আউটরিচ ও পরিবেশ সংরক্ষণ প্রকল্পে বিশেষজ্ঞ, এমিলি
                      ৫০টিরও বেশি কমিউনিটি সার্ভিস উদ্যোগ সংগঠিত করেছেন যা হাজার
                      হাজার মানুষের উপকারে এসেছে।
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Leader 4 */}
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full">
                <Card className="overflow-hidden h-96 flex flex-col">
                  <CardContent className="p-4 sm:p-6 text-left flex flex-col h-full">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4">
                      <Image
                        src="https://i.pravatar.cc/300?img=4"
                        alt="David Thompson"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      ডেভিড থমপসন
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-2 sm:mb-3">
                      স্কাউট নেতা • ২০১৮-২০২৫
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-0 flex-1 line-clamp-4">
                      একজন প্রাক্তন জরুরি চিকিৎসা প্রযুক্তিবিদ, যিনি বন্য
                      পরিবেশে চিকিৎসা ও দুর্যোগ প্রতিক্রিয়া প্রশিক্ষণে দক্ষ।
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Leader 5 */}
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 lg:basis-1/3 xl:basis-1/4 h-full">
                <Card className="overflow-hidden h-96 flex flex-col">
                  <CardContent className="p-4 sm:p-6 text-left flex flex-col h-full">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4">
                      <Image
                        src="https://i.pravatar.cc/300?img=5"
                        alt="Lisa Park"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      লিসা পার্ক
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium mb-2 sm:mb-3">
                      স্কাউট নেতা • ২০২২-২০২৫
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-0 flex-1 line-clamp-4">
                      পাঁচটি ভাষায় দক্ষ এবং সাংস্কৃতিক বিনিময় প্রোগ্রামে
                      অভিজ্ঞ, লিসা ২০টিরও বেশি দেশের স্কাউট পার্টনারশিপ পরিচালনা
                      করেছেন।
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-6 -translate-y-1/2 z-10 lg:-left-10" />
            <CarouselNext className="absolute right-2 top-6 -translate-y-1/2 z-10 lg:-right-10" />
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              আমাদের স্কাউট ট্রুপ, কার্যক্রম এবং যোগদানের প্রক্রিয়া সম্পর্কে
              সাধারণ প্রশ্নের উত্তর খুঁজুন।
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                কিভাবে আমি এমসি রোভার স্কাউট ট্রুপে যোগ দিতে পারি?
              </AccordionTrigger>
              <AccordionContent>
                আপনি আমাদের{" "}
                <a href="/join-us" className="underline text-primary">
                  যোগ দিন
                </a>{" "}
                পৃষ্ঠায় গিয়ে আবেদন ফর্ম পূরণ করতে পারেন। আমাদের টিম আপনাকে
                পরবর্তী ধাপ সম্পর্কে জানাবে।
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                আপনি কোন বয়সের স্কাউটদের গ্রহণ করেন?
              </AccordionTrigger>
              <AccordionContent>
                আমরা ১৫ বছর এবং তার ঊর্ধ্বে স্কাউটদের স্বাগত জানাই। আমাদের
                প্রোগ্রামগুলো কিশোর ও তরুণদের জন্য উপযোগী, যারা অ্যাডভেঞ্চার,
                নেতৃত্ব ও সেবায় আগ্রহী।
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                আপনারা কী কী কার্যক্রম পরিচালনা করেন?
              </AccordionTrigger>
              <AccordionContent>
                আমাদের ট্রুপ ক্যাম্পিং, হাইকিং, কমিউনিটি সার্ভিস, নেতৃত্ব
                প্রশিক্ষণ, পরিবেশ প্রকল্প এবং আন্তর্জাতিক বিনিময়সহ বিভিন্ন
                কার্যক্রম পরিচালনা করে।
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                যোগদানের জন্য কি পূর্ব অভিজ্ঞতা লাগবে?
              </AccordionTrigger>
              <AccordionContent>
                যোগদানের জন্য কোনো পূর্ব স্কাউটিং অভিজ্ঞতা লাগবে না! আমরা নতুন
                এবং অভিজ্ঞ উভয় স্কাউটকেই স্বাগত জানাই। আমাদের নেতৃবৃন্দ আপনাকে
                প্রতিটি ধাপে গাইড করবেন।
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                অভিভাবকরা কিভাবে যুক্ত হতে পারেন?
              </AccordionTrigger>
              <AccordionContent>
                অভিভাবকরা ইভেন্টে স্বেচ্ছাসেবক হিসেবে, লজিস্টিক সহায়তায় বা
                আমাদের অভিভাবক কমিটিতে যোগ দিয়ে সহায়তা করতে পারেন। আরও জানতে
                আমাদের সাথে যোগাযোগ করুন।
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}
