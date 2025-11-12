"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";

const upcomingEvents = [
  {
    id: 1,
    title: "বর্ষাকালীন ক্যাম্পিং অভিযান",
    description:
      "একটি উত্তেজনাপূর্ণ ৩ দিনের ক্যাম্পিং অভিযান যেখানে স্কাউটরা প্রকৃতির সাথে মিলিত হবে এবং বিভিন্ন আউটডোর কার্যক্রমে অংশগ্রহণ করবে।",
    date: "১৫-১৭ জুলাই, ২০২৪",
    location: "সিলেটের চা বাগান",
    participants: "৫০+ স্কাউট",
    duration: "৩ দিন",
    image: "https://picsum.photos/800/450?random=10",
    status: "upcoming",
    category: "ক্যাম্পিং",
  },
  {
    id: 2,
    title: "নেতৃত্ব বিকাশ কর্মশালা",
    description:
      "তরুণ নেতাদের জন্য একটি নিবিড় নেতৃত্ব বিকাশ কর্মশালা যেখানে তারা নেতৃত্বের দক্ষতা, যোগাযোগ এবং দলগত কাজ শিখবে।",
    date: "২৫ জুলাই, ২০২৪",
    location: "মুরারিচাঁদ কলেজ ক্যাম্পাস",
    participants: "৩০+ স্কাউট",
    duration: "১ দিন",
    image: "https://picsum.photos/800/450?random=11",
    status: "upcoming",
    category: "প্রশিক্ষণ",
  },
  {
    id: 3,
    title: "পরিবেশ সংরক্ষণ অভিযান",
    description:
      "স্থানীয় কমিউনিটির সাথে একত্রে একটি বৃহৎ পরিবেশ সংরক্ষণ অভিযান যেখানে আমরা বৃক্ষরোপণ এবং পরিষ্কার-পরিচ্ছন্নতা কার্যক্রম পরিচালনা করব।",
    date: "৫ আগস্ট, ২০২৪",
    location: "সিলেট শহর",
    participants: "১০০+ স্কাউট",
    duration: "১ দিন",
    image: "https://picsum.photos/800/450?random=12",
    status: "upcoming",
    category: "সামাজিক সেবা",
  },
];

const pastEvents = [
  {
    id: 4,
    title: "আন্তর্জাতিক স্কাউট দিবস উদযাপন",
    description:
      "আন্তর্জাতিক স্কাউট দিবস উদযাপন করা হয়েছে বিভিন্ন কার্যক্রমের মাধ্যমে যেখানে স্কাউটরা তাদের দক্ষতা প্রদর্শন করেছে।",
    date: "২২ ফেব্রুয়ারি, ২০২৪",
    location: "মুরারিচাঁদ কলেজ",
    participants: "২০০+ স্কাউট",
    duration: "১ দিন",
    image: "https://picsum.photos/800/450?random=13",
    status: "past",
    category: "উদযাপন",
  },
  {
    id: 5,
    title: "পর্বত অভিযান - জাফলং",
    description:
      "একটি সফল পর্বত অভিযান যেখানে স্কাউটরা জাফলংয়ের সুন্দর প্রাকৃতিক সৌন্দর্য উপভোগ করেছে এবং চ্যালেঞ্জিং ট্রেকিং সম্পন্ন করেছে।",
    date: "১০-১২ মার্চ, ২০২৪",
    location: "জাফলং, সিলেট",
    participants: "৪০+ স্কাউট",
    duration: "৩ দিন",
    image: "https://picsum.photos/800/450?random=14",
    status: "past",
    category: "অভিযান",
  },
  {
    id: 6,
    title: "কমিউনিটি স্বাস্থ্য ক্যাম্প",
    description:
      "স্থানীয় কমিউনিটির জন্য একটি বিনামূল্যে স্বাস্থ্য ক্যাম্প আয়োজন করা হয়েছে যেখানে স্কাউটরা স্বেচ্ছাসেবক হিসেবে কাজ করেছে।",
    date: "২০ মার্চ, ২০২৪",
    location: "সিলেট শহর",
    participants: "১৫০+ স্কাউট",
    duration: "১ দিন",
    image: "https://picsum.photos/800/450?random=15",
    status: "past",
    category: "সামাজিক সেবা",
  },
  {
    id: 7,
    title: "ফার্স্ট এইড প্রশিক্ষণ",
    description:
      "স্কাউটদের জন্য একটি ব্যাপক ফার্স্ট এইড প্রশিক্ষণ সেশন যেখানে তারা জরুরি পরিস্থিতিতে কীভাবে সাড়া দিতে হয় তা শিখেছে।",
    date: "১৫ এপ্রিল, ২০২৪",
    location: "মুরারিচাঁদ কলেজ",
    participants: "৬০+ স্কাউট",
    duration: "১ দিন",
    image: "https://picsum.photos/800/450?random=16",
    status: "past",
    category: "প্রশিক্ষণ",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] bg-gradient-to-br from-primary/20 via-primary/10 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              আমাদের ইভেন্টসমূহ
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              আমাদের স্কাউট গ্রুপের বিভিন্ন কার্যক্রম, অভিযান এবং উদযাপন
              সম্পর্কে জানুন
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              আসন্ন ইভেন্টসমূহ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আমাদের পরবর্তী কার্যক্রমগুলোতে অংশগ্রহণ করুন এবং নতুন অভিজ্ঞতা
              অর্জন করুন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="default"
                      className="bg-green-600 hover:bg-green-700"
                    >
                      আসন্ন
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{event.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{event.participants}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="default">
                    বিস্তারিত জানুন
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              অতীতের ইভেন্টসমূহ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আমাদের সম্পন্ন হওয়া সফল কার্যক্রমগুলো দেখুন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300 opacity-90"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">সম্পন্ন</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{event.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{event.participants}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    বিস্তারিত দেখুন
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
