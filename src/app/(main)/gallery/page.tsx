"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    src: "https://picsum.photos/800/600?random=20",
    title: "ক্যাম্পিং অভিযান",
    category: "ক্যাম্পিং",
    date: "জানুয়ারি ২০২৪"
  },
  {
    id: 2,
    src: "https://picsum.photos/800/600?random=21",
    title: "নেতৃত্ব কর্মশালা",
    category: "প্রশিক্ষণ",
    date: "ফেব্রুয়ারি ২০২৪"
  },
  {
    id: 3,
    src: "https://picsum.photos/800/600?random=22",
    title: "পরিবেশ সংরক্ষণ",
    category: "সামাজিক সেবা",
    date: "মার্চ ২০২৪"
  },
  {
    id: 4,
    src: "https://picsum.photos/800/600?random=23",
    title: "পর্বত অভিযান",
    category: "অভিযান",
    date: "এপ্রিল ২০২৪"
  },
  {
    id: 5,
    src: "https://picsum.photos/800/600?random=24",
    title: "স্কাউট দিবস",
    category: "উদযাপন",
    date: "মে ২০২৪"
  },
  {
    id: 6,
    src: "https://picsum.photos/800/600?random=25",
    title: "কমিউনিটি সেবা",
    category: "সামাজিক সেবা",
    date: "জুন ২০২৪"
  },
  {
    id: 7,
    src: "https://picsum.photos/800/600?random=26",
    title: "হাইকিং অভিযান",
    category: "অভিযান",
    date: "জুলাই ২০২৪"
  },
  {
    id: 8,
    src: "https://picsum.photos/800/600?random=27",
    title: "ফার্স্ট এইড প্রশিক্ষণ",
    category: "প্রশিক্ষণ",
    date: "আগস্ট ২০২৪"
  },
  {
    id: 9,
    src: "https://picsum.photos/800/600?random=28",
    title: "বনভোজন",
    category: "ক্যাম্পিং",
    date: "সেপ্টেম্বর ২০২৪"
  },
  {
    id: 10,
    src: "https://picsum.photos/800/600?random=29",
    title: "বৃক্ষরোপণ",
    category: "সামাজিক সেবা",
    date: "অক্টোবর ২০২৪"
  },
  {
    id: 11,
    src: "https://picsum.photos/800/600?random=30",
    title: "আন্তর্জাতিক বিনিময়",
    category: "উদযাপন",
    date: "নভেম্বর ২০২৪"
  },
  {
    id: 12,
    src: "https://picsum.photos/800/600?random=31",
    title: "শীতকালীন ক্যাম্প",
    category: "ক্যাম্পিং",
    date: "ডিসেম্বর ২০২৪"
  }
];

const categories = ["সব", "ক্যাম্পিং", "প্রশিক্ষণ", "সামাজিক সেবা", "অভিযান", "উদযাপন"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("সব");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "সব" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const selectedImageIndex = selectedImage !== null 
    ? filteredImages.findIndex(img => img.id === selectedImage)
    : -1;

  const handleNext = () => {
    if (selectedImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[selectedImageIndex + 1].id);
    } else {
      setSelectedImage(filteredImages[0].id);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex > 0) {
      setSelectedImage(filteredImages[selectedImageIndex - 1].id);
    } else {
      setSelectedImage(filteredImages[filteredImages.length - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[350px] bg-gradient-to-br from-primary/20 via-primary/10 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              গ্যালারি
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              আমাদের স্কাউট গ্রুপের স্মরণীয় মুহূর্তগুলো দেখুন
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30 sticky top-[70px] z-30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedImage(null);
                }}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center px-4">
                      <h3 className="font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm">{image.date}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            
            {selectedImageIndex > 0 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
            )}
            
            {selectedImageIndex < filteredImages.length - 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            )}

            <div
              className="relative w-full h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[selectedImageIndex]?.src || ""}
                alt={filteredImages[selectedImageIndex]?.title || ""}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                {filteredImages[selectedImageIndex]?.title}
              </h3>
              <p className="text-sm opacity-90">
                {filteredImages[selectedImageIndex]?.category} • {filteredImages[selectedImageIndex]?.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

