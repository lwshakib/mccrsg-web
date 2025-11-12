"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Award,
  Calendar,
  Handshake,
  Heart,
  MapPin,
  ScrollText,
  Target,
  UserCircle,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] bg-gradient-to-br from-primary/20 via-primary/10 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              আমাদের সম্পর্কে
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              মুরারিচাঁদ কলেজ রোভার স্কাউট গ্রুপের ইতিহাস, মূল্যবোধ এবং আমাদের
              লক্ষ্য
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/den.jpg"
                alt="মুরারিচাঁদ কলেজ রোভার স্কাউট গ্রুপের ডেন"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                আমাদের ইতিহাস
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  পাকিস্তান-ভারত উপমহাদেশের স্কাউট আন্দোলন ১৯১০ সালে গঠিত হয়।
                  ১৯২০ সালে বঙ্গ বয় স্কাউট অ্যাসোসিয়েশন স্বীকৃত হয়। প্রাদেশিক
                  স্কাউট সংগঠন গঠনের অব্যবহিত পরেই, ১৯২৭ সালের ১২ই ফেব্রুয়ারি,
                  একটি এম. সি. কলেজ রোভার গ্রুপ গঠিত হয়। রোভারিং যাত্রা শুরু
                  হয় মাত্র ১৪ জন সদস্য নিয়ে। রোভার গ্রুপটি অধ্যাপক পি. সি.
                  সান্যাল এম. এ.-এর নেতৃত্বে গঠিত হয়।
                </p>
                <p>
                  মুরারিচাঁদ কলেজ রোভারিং নিবন্ধন হয় ১৯৭৬ সালের ২রা ডিসেম্বর।
                  রোভার কর্মসূচি আনুষ্ঠানিকভাবে শুরু হয় ১৯৮০ সালে।
                </p>
              </div>
            </div>
          </div>

          {/* Key Milestones */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              গুরুত্বপূর্ণ মাইলফলক
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">১৯২৭</h3>
                <p className="text-muted-foreground">
                  এম. সি. কলেজ রোভার গ্রুপ গঠিত হয়
                </p>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">১৯৭৬</h3>
                <p className="text-muted-foreground">
                  রোভারিং আনুষ্ঠানিকভাবে নিবন্ধিত হয়
                </p>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">১৯৮০</h3>
                <p className="text-muted-foreground">
                  রোভার কর্মসূচি আনুষ্ঠানিকভাবে শুরু
                </p>
              </Card>
            </div>
          </div>

          {/* Founding Members */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              প্রতিষ্ঠাকালীন নেতৃবৃন্দ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">
                  রোভার স্কাউট গ্রুপ
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1">
                      সভাপতি
                    </Badge>
                    <span>অধ্যাপক হাসান ওয়ারিশ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1">
                      রোভার লিডার
                    </Badge>
                    <span>আবিদুল ইসলাম</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1">
                      সিনিয়র রোভার মেট
                    </Badge>
                    <span>আলী আজগর খান</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">
                  গার্লস-ইন-রোভার ইউনিট
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1">
                      রোভার স্কাউট লিডার
                    </Badge>
                    <span>সাজিয়া আফরিন খান</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1">
                      সিনিয়র রোভার মেট
                    </Badge>
                    <span>শামিমা ফেরদৌস নিপা</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Registration Numbers */}
          <Card className="p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              নিবন্ধন নম্বর
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-semibold">রোভার স্কাউট গ্রুপ</p>
                  <p className="text-muted-foreground">নিবন্ধন নম্বর: ১১০/৭৮</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-semibold">গার্লস-ইন-রোভার ইউনিট</p>
                  <p className="text-muted-foreground">নিবন্ধন নম্বর: ৫৭৭/৭১</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Scout Laws */}
      <section className="py-16 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="px-4 py-1 text-base">
              ঐতিহ্য
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-foreground">
              স্কাউট আইন
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              একজন স্কাউটের জীবনকে এগিয়ে নিতে এই আইনগুলোই আমাদের পথপ্রদর্শক।
              আমরা প্রতিদিনের কর্মকাণ্ডে এই নীতিগুলো ধারণ করি।
            </p>
          </div>

          <Card className="p-10 shadow-sm border-primary/10">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-shrink-0">
                <ScrollText className="w-16 h-16 text-primary" />
              </div>
              <div className="flex-1">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-4">
                    <span className="text-foreground font-semibold">০১</span>
                    <span>
                      স্কাউট আচার্যাদার বিশ্বাসী (A Scout&apos;s honour is to be
                      trusted)
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-foreground font-semibold">০২</span>
                    <span>স্কাউট সকলের বন্ধু (A Scout is friend to all)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-foreground font-semibold">০৩</span>
                    <span>
                      স্কাউট বিনয়ী ও অনুগত (A Scout is courteous and obedient)
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-foreground font-semibold">০৪</span>
                    <span>
                      স্কাউট জীবের প্রতি সদয় (A Scout is kind to animal)
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-foreground font-semibold">০৫</span>
                    <span>
                      স্কাউট সদা প্রফুল্ল (A Scout is cheerful at all times)
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-foreground font-semibold">০৬</span>
                    <span>স্কাউট মিতব্যয়ী (A Scout is thrifty)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-foreground font-semibold">০৭</span>
                    <span>
                      স্কাউট চিন্তা, কথা ও কাজে নির্মল (A Scout is clean
                      thought, word and deed)
                    </span>
                  </li>
                </ul>

                <div className="mt-10 p-6 rounded-lg bg-primary/5 text-foreground">
                  <p className="font-semibold mb-2">
                    সহজে মনে রাখার জন্য আমরা বলি:
                  </p>
                  <p className="text-muted-foreground">
                    বিশ্বাসী - বন্ধু - বিনয়ী - সদয়, প্রফুল্ল - মিতব্যয়ী -
                    নির্মল মন।
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Scout Promise */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <Handshake className="w-16 h-16 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  স্কাউট প্রতিজ্ঞা
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  আমি আমার আদর্শের ওপর নির্ভর করে প্রতিজ্ঞা করেছি যে, আল্লাহ ও
                  আমার দেশের প্রতি কর্তব্য পালন করতে, সর্বদা অপরকে সাহায্য করতে,
                  স্কাউট আইন মেনে চলতে, আমি আমার যথাসাধ্য চেষ্টা করব।
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="px-4 py-1 text-base">
              বর্তমান নেতৃত্ব
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-foreground">
              মুরারিচাঁদ কলেজ রোভার স্কাউট গ্রুপ
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              বর্তমান গ্রুপ কমিটির দায়িত্বশীল সদস্যরা নিবেদিত মন নিয়ে রোভারিং
              এর পরম্পরা এগিয়ে নিচ্ছেন।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <UserCircle className="w-12 h-12 text-primary" />
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    রোভার স্কাউট গ্রুপ
                  </h3>
                  <p className="text-muted-foreground">
                    অধ্যাপক আবুল ফজল মোঃ রিয়াজ (সভাপতি, উপাধ্যাপক -
                    পদার্থবিজ্ঞান)
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  বর্তমান গ্রুপ কমিটির সম্পাদক মোহাম্মদ আবদুল খালেক (সহযোগী
                  অধ্যাপক, উদ্ভিদবিজ্ঞান বিভাগ)।
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="font-semibold text-foreground mb-1">
                      মোহাম্মদ আবদুল খালেক
                    </p>
                    <p className="text-sm">
                      সহযোগী অধ্যাপক, উদ্ভিদবিজ্ঞান বিভাগ (গ্রুপ সম্পাদক)
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="font-semibold text-foreground mb-1">
                      শেখ মোঃ নাজমুল ইসলাম
                    </p>
                    <p className="text-sm">
                      সহযোগী অধ্যাপক, বাংলা বিভাগ (গ্রুপ নেতা)
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <UserCircle className="w-12 h-12 text-primary" />
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    রোভার স্কাউট লিডার (গার্লস ইন রোভার)
                  </h3>
                  <p className="text-muted-foreground">
                    ফৌজিয়া আক্তার (সহযোগী অধ্যাপক, অর্থনীতি বিভাগ)
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  শায়লা বেগম (সহযোগী অধ্যাপক, উদ্ভিদবিজ্ঞান বিভাগ)
                  গার্লস-ইন-রোভার ইউনিটের গ্রুপ নেতা হিসেবে দায়িত্ব পালন করছেন।
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="font-semibold text-foreground mb-1">
                      ফৌজিয়া আক্তার
                    </p>
                    <p className="text-sm">
                      সহযোগী অধ্যাপক, অর্থনীতি বিভাগ (রোভার স্কাউট লিডার)
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="font-semibold text-foreground mb-1">
                      শায়লা বেগম
                    </p>
                    <p className="text-sm">
                      সহযোগী অধ্যাপক, উদ্ভিদবিজ্ঞান বিভাগ (গ্রুপ নেতা)
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              আমাদের লক্ষ্য ও মূল্যবোধ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আমরা যা বিশ্বাস করি এবং যা অর্জন করতে চাই
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Target className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">আমাদের লক্ষ্য</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>তরুণদের মধ্যে নেতৃত্বের গুণাবলী বিকাশ করা</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>কমিউনিটির সেবা করার জন্য অনুপ্রাণিত করা</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>ব্যক্তিগত বিকাশ এবং আত্মনির্ভরতা বৃদ্ধি করা</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>পরিবেশ সংরক্ষণে অবদান রাখা</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">আমাদের মূল্যবোধ</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>সততা এবং নৈতিকতা</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>দলগত কাজ এবং সহযোগিতা</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>সম্মান এবং শ্রদ্ধা</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>সামাজিক দায়িত্ব</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>ব্যক্তিগত উন্নতি</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
