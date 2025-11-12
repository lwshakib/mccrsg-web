"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { 
  Tent, 
  Mountain, 
  Users, 
  Heart, 
  GraduationCap, 
  TreePine,
  MapPin,
  Calendar,
  Award
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "ক্যাম্পিং ও আউটডোর কার্যক্রম",
    description: "প্রকৃতির সাথে মিলিত হয়ে ক্যাম্পিং, হাইকিং এবং বিভিন্ন আউটডোর কার্যক্রমে অংশগ্রহণ করুন। আমরা নিয়মিতভাবে বিভিন্ন স্থানে ক্যাম্পিং অভিযান পরিচালনা করি যেখানে স্কাউটরা প্রকৃতির সৌন্দর্য উপভোগ করে এবং আউটডোর দক্ষতা শিখে।",
    icon: Tent,
    color: "bg-green-500",
    features: [
      "রাতের ক্যাম্পিং",
      "হাইকিং অভিযান",
      "বনভোজন",
      "আগুন জ্বালানো",
      "খোলা আকাশের নিচে রাত কাটানো"
    ],
    image: "https://picsum.photos/800/600?random=40"
  },
  {
    id: 2,
    title: "পর্বত অভিযান",
    description: "চ্যালেঞ্জিং পর্বত অভিযানে অংশগ্রহণ করুন এবং আপনার সীমা অতিক্রম করুন। আমাদের অভিজ্ঞ নেতৃবৃন্দের তত্ত্বাবধানে আপনি নিরাপদে পর্বত আরোহণ করতে পারবেন এবং অসাধারণ দৃশ্য উপভোগ করতে পারবেন।",
    icon: Mountain,
    color: "bg-blue-500",
    features: [
      "পর্বত আরোহণ",
      "ট্রেকিং",
      "প্রাকৃতিক সৌন্দর্য উপভোগ",
      "দলগত কাজ",
      "শারীরিক চ্যালেঞ্জ"
    ],
    image: "https://picsum.photos/800/600?random=41"
  },
  {
    id: 3,
    title: "নেতৃত্ব বিকাশ",
    description: "নেতৃত্বের দক্ষতা বিকাশ করুন এবং একজন দক্ষ নেতা হয়ে উঠুন। আমাদের নেতৃত্ব বিকাশ প্রোগ্রামে আপনি যোগাযোগ, সিদ্ধান্ত গ্রহণ, দল পরিচালনা এবং সমস্যা সমাধানের দক্ষতা শিখবেন।",
    icon: Users,
    color: "bg-purple-500",
    features: [
      "নেতৃত্ব কর্মশালা",
      "দল পরিচালনা",
      "যোগাযোগ দক্ষতা",
      "সিদ্ধান্ত গ্রহণ",
      "সমস্যা সমাধান"
    ],
    image: "https://picsum.photos/800/600?random=42"
  },
  {
    id: 4,
    title: "সামাজিক সেবা",
    description: "কমিউনিটির সেবা করুন এবং একটি ইতিবাচক পরিবর্তন আনুন। আমরা নিয়মিতভাবে বিভিন্ন সামাজিক সেবা প্রকল্প পরিচালনা করি যেখানে স্কাউটরা কমিউনিটির উন্নতিতে অবদান রাখে।",
    icon: Heart,
    color: "bg-red-500",
    features: [
      "কমিউনিটি সেবা",
      "স্বাস্থ্য ক্যাম্প",
      "শিক্ষা কার্যক্রম",
      "পরিবেশ সংরক্ষণ",
      "বৃক্ষরোপণ"
    ],
    image: "https://picsum.photos/800/600?random=43"
  },
  {
    id: 5,
    title: "প্রশিক্ষণ ও দক্ষতা উন্নয়ন",
    description: "বিভিন্ন দক্ষতা শিখুন যা আপনার ব্যক্তিগত ও পেশাগত জীবনে কাজে লাগবে। আমাদের প্রশিক্ষণ প্রোগ্রামে ফার্স্ট এইড, জরুরি সাড়া, নেভিগেশন, এবং আরও অনেক কিছু অন্তর্ভুক্ত।",
    icon: GraduationCap,
    color: "bg-yellow-500",
    features: [
      "ফার্স্ট এইড",
      "জরুরি সাড়া",
      "নেভিগেশন",
      "সারভাইভাল দক্ষতা",
      "প্রাথমিক চিকিৎসা"
    ],
    image: "https://picsum.photos/800/600?random=44"
  },
  {
    id: 6,
    title: "পরিবেশ সংরক্ষণ",
    description: "পরিবেশ সংরক্ষণে অবদান রাখুন এবং একটি সবুজ ভবিষ্যত গড়ে তুলুন। আমরা পরিবেশ সংরক্ষণ সম্পর্কে সচেতনতা বৃদ্ধি, বৃক্ষরোপণ, এবং পরিষ্কার-পরিচ্ছন্নতা অভিযান পরিচালনা করি।",
    icon: TreePine,
    color: "bg-emerald-500",
    features: [
      "বৃক্ষরোপণ",
      "পরিষ্কার অভিযান",
      "পরিবেশ সচেতনতা",
      "পুনর্ব্যবহার",
      "জলবায়ু পরিবর্তন"
    ],
    image: "https://picsum.photos/800/600?random=45"
  }
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] bg-gradient-to-br from-primary/20 via-primary/10 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              আমাদের কার্যক্রম
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              আমাদের স্কাউট গ্রুপে বিভিন্ন ধরনের কার্যক্রমে অংশগ্রহণ করুন এবং নতুন দক্ষতা শিখুন
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <Card
                  key={activity.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className={`${activity.color} p-3 rounded-lg shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {activity.title}
                      </h2>
                    </div>
                  </div>
                  <CardHeader>
                    <CardDescription className="text-base leading-relaxed">
                      {activity.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        মূল বৈশিষ্ট্য
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {activity.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              কেন আমাদের সাথে যোগ দিন?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আমাদের কার্যক্রমে অংশগ্রহণ করে আপনি যা অর্জন করতে পারবেন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">দক্ষতা উন্নয়ন</h3>
              <p className="text-muted-foreground">
                বিভিন্ন দক্ষতা শিখুন যা আপনার ব্যক্তিগত ও পেশাগত জীবনে কাজে লাগবে
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">দলগত কাজ</h3>
              <p className="text-muted-foreground">
                নতুন বন্ধু তৈরি করুন এবং দলগত কাজের মাধ্যমে সফলতা অর্জন করুন
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">সামাজিক অবদান</h3>
              <p className="text-muted-foreground">
                কমিউনিটির সেবা করুন এবং একটি ইতিবাচক পরিবর্তন আনুন
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

