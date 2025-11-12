"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(
        "আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("বার্তা পাঠাতে ব্যর্থ। আবার চেষ্টা করুন।");
    } finally {
      setIsSubmitting(false);
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
              যোগাযোগ করুন
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              আমাদের সাথে যোগাযোগ করুন - আমরা আপনার প্রশ্নের উত্তর দিতে প্রস্তুত
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  আমাদের সাথে যোগাযোগ করুন
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  আমাদের স্কাউট গ্রুপ সম্পর্কে আরও জানতে, প্রশ্ন করতে বা
                  যোগদানের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা আপনার বার্তার
                  উত্তর দিতে প্রস্তুত।
                </p>
              </div>

              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">ঠিকানা</h3>
                        <p className="text-muted-foreground">
                          মুরারিচাঁদ কলেজ
                          <br />
                          সিলেট, বাংলাদেশ
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">ফোন</h3>
                        <p className="text-muted-foreground">
                          +৮৮০ ১৭১২-৩৪৫৬৭৮
                          <br />
                          +৮৮০ ১৯১২-৩৪৫৬৭৮
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">ইমেইল</h3>
                        <p className="text-muted-foreground">
                          info@mccrsg.com
                          <br />
                          contact@mccrsg.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">অফিস সময়</h3>
                        <p className="text-muted-foreground">
                          শনি - বৃহস্পতিবার: ৯:০০ AM - ৫:০০ PM
                          <br />
                          শুক্রবার: বন্ধ
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>আমাদের কাছে বার্তা পাঠান</CardTitle>
                <CardDescription>
                  আপনার প্রশ্ন বা বার্তা আমাদের কাছে পাঠান, আমরা শীঘ্রই আপনার
                  সাথে যোগাযোগ করব
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">নাম *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="আপনার পূর্ণ নাম"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">ইমেইল *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">ফোন নম্বর</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+৮৮০ ১৭১২-৩৪৫৬৭৮"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">বিষয় *</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="বার্তার বিষয়"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">বার্তা *</Label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="আপনার বার্তা লিখুন..."
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "পাঠানো হচ্ছে..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        বার্তা পাঠান
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              আমাদের অবস্থান
            </h2>
            <p className="text-muted-foreground">
              আমাদের অফিসে সরাসরি আসতে পারেন
            </p>
          </div>
          <Card className="overflow-hidden">
            <div className="relative w-full h-[450px]">
              <iframe
                title="মুরারিচাঁদ কলেজের মানচিত্র"
                src="https://maps.google.com/maps?q=Murari%20Chand%20College%20Sylhet&z=16&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <CardContent className="bg-background">
              <p className="text-sm text-muted-foreground">
                দিকনির্দেশনার জন্য জুম ইন বা আউট করুন এবং &quot;View larger
                map&quot; অপশনে ক্লিক করে পূর্ণ স্ক্রিনে মানচিত্র দেখুন।
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
