"use client";

import { useCallback, useMemo, useState } from "react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ArrowRight,
  CalendarCheck,
  Compass,
  HeartHandshake,
  ShieldCheck,
  UserPlus,
  Users,
} from "lucide-react";

const sessionOptions = ["২০২০-২০২১", "২০২১-২০২২", "২০২২-২০২৩", "২০২৩-২০২৪"];
const departmentOptions = [
  "কম্পিউটার সায়েন্স",
  "মেকানিক্যাল",
  "ইলেকট্রিক্যাল",
  "সিভিল",
  "ব্যবসায়",
];
const classOptions = ["এইচএসসি", "অনার্স", "ডিগ্রি", "মাস্টার্স"];

const stats = [
  {
    label: "সক্রিয় সদস্য",
    value: "১২০+",
    description: "নিয়মিত অংশগ্রহণকারী",
  },
  { label: "বছরের অভিজ্ঞতা", value: "৯৫+", description: "ইতিহাসের গৌরব" },
  {
    label: "মাসিক অনুষ্ঠান",
    value: "৮+",
    description: "বিভিন্ন প্রশিক্ষণ ও ইভেন্ট",
  },
];

const processSteps = [
  {
    title: "অনলাইনে আবেদন",
    description:
      "মাত্র কয়েকটি ধাপে আপনার মৌলিক তথ্য প্রদান করুন এবং ফর্মটি সাবমিট করুন।",
    icon: UserPlus,
  },
  {
    title: "স্ক্রিনিং ও সাক্ষাৎকার",
    description:
      "আমাদের সদস্যরা আপনার সাথে যোগাযোগ করবে এবং একটি পরিচিতিমূলক সাক্ষাৎকার নেবে।",
    icon: CalendarCheck,
  },
  {
    title: "প্রাথমিক প্রশিক্ষণ",
    description:
      "স্কাউটিংয়ের মূল নীতিমালা ও দক্ষতা শেখার জন্য প্রাথমিক প্রশিক্ষণে অংশ নিন।",
    icon: ShieldCheck,
  },
];

const membershipBenefits = [
  {
    title: "নেতৃত্ব ও আত্মবিশ্বাস",
    description:
      "সম্মেলন, কর্মশালা এবং প্রকৃত পরিকল্পনার মাধ্যমে নেতৃত্বের দক্ষতা অর্জন করুন।",
    icon: Compass,
  },
  {
    title: "কমিউনিটি সেবা",
    description:
      "বিভিন্ন সামাজিক কার্যক্রমে অংশ নিয়ে কমিউনিটির ইতিবাচক পরিবর্তনে অবদান রাখুন।",
    icon: HeartHandshake,
  },
  {
    title: "আজীবন বন্ধুত্ব",
    description:
      "সদৃশ লক্ষ্যে কাজ করা সহকর্মীদের সাথে ঘনিষ্ঠ সম্পর্ক গড়ে তুলুন।",
    icon: Users,
  },
];

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    mobile: "",
    session: "",
    department: "",
    className: "",
    motivation: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    whatsapp: "",
    mobile: "",
    session: "",
    department: "",
    className: "",
    motivation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneRegex = useMemo(() => /^\+?[\d\s\-\(\)]{7,15}$/, []);

  const validateField = useCallback(
    (field: string, value: string) => {
      switch (field) {
        case "name":
          if (!value.trim()) return "নাম প্রয়োজন।";
          if (value.trim().length < 2) return "নাম কমপক্ষে ২ অক্ষর হতে হবে।";
          if (!/^[a-zA-Z\s]+$/.test(value.trim()))
            return "নামে শুধুমাত্র অক্ষর এবং স্পেস থাকতে পারে।";
          break;
        case "whatsapp":
          if (!value.trim()) return "হোয়াটসঅ্যাপ নম্বর প্রয়োজন।";
          if (!phoneRegex.test(value.trim()))
            return "সঠিক হোয়াটসঅ্যাপ নম্বর দিন।";
          break;
        case "mobile":
          if (!value.trim()) return "মোবাইল নম্বর প্রয়োজন।";
          if (!phoneRegex.test(value.trim())) return "সঠিক মোবাইল নম্বর দিন।";
          break;
        case "session":
          if (!value) return "সেশন নির্বাচন করুন।";
          break;
        case "department":
          if (!value) return "বিভাগ নির্বাচন করুন।";
          break;
        case "className":
          if (!value) return "ক্লাস নির্বাচন করুন।";
          break;
        case "motivation":
          if (!value.trim()) return "আপনার আগ্রহ লিখুন।";
          if (value.trim().length < 20)
            return "কমপক্ষে ২০ অক্ষরে আপনার আগ্রহ লিখুন।";
          break;
      }
      return "";
    },
    [phoneRegex]
  );

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const formatPhoneNumber = useCallback((value: string) => {
    const cleaned = value.replace(/[^\d+]/g, "");
    if (cleaned.startsWith("+")) {
      return cleaned;
    }
    return cleaned;
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: validateField("name", formData.name),
      whatsapp: validateField("whatsapp", formData.whatsapp),
      mobile: validateField("mobile", formData.mobile),
      session: validateField("session", formData.session),
      department: validateField("department", formData.department),
      className: validateField("className", formData.className),
      motivation: validateField("motivation", formData.motivation),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) {
      toast.error("ফর্মে ত্রুটি আছে। দয়া করে সংশোধন করুন।");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(
        "ফর্ম সফলভাবে জমা হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।"
      );

      setFormData({
        name: "",
        whatsapp: "",
        mobile: "",
        session: "",
        department: "",
        className: "",
        motivation: "",
      });
      setErrors({
        name: "",
        whatsapp: "",
        mobile: "",
        session: "",
        department: "",
        className: "",
        motivation: "",
      });
    } catch (error) {
      toast.error("ফর্ম জমা দিতে ব্যর্থ। আবার চেষ্টা করুন।");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="relative w-full min-h-[55vh] bg-gradient-to-br from-primary/20 via-primary/10 to-background pb-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4">
              সদস্যপদ আবেদন
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              এমসি রোভার স্কাউট গ্রুপের সদস্য হন
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              নেতৃত্ব, সেবা এবং অ্যাডভেঞ্চারের অসাধারণ যাত্রায় যোগ দিতে
              প্রস্তুত? অনলাইনে সহজে আবেদন করুন এবং আমাদের সক্রিয় কমিউনিটির অংশ
              হয়ে উঠুন।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="backdrop-blur-md bg-background/70"
              >
                <CardContent className="p-6">
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-foreground mt-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10">
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>কিভাবে সদস্য হবেন</CardTitle>
                  <CardDescription>
                    তিনটি সহজ ধাপে আমাদের রোভার স্কাউট পরিবারের অংশ হন
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {processSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={step.title}
                        className="flex gap-4 rounded-xl border border-border/70 p-4 hover:border-primary transition-colors"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {index + 1}. {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  <div className="rounded-xl bg-muted/40 p-4">
                    <p className="text-sm text-muted-foreground">
                      আপনার আবেদন আমরা ৩ কর্মদিবসের মধ্যে পর্যালোচনা করি।
                      প্রয়োজনে আমাদের টিম সরাসরি ফোন বা ইমেইলে যোগাযোগ করবে।
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5 shadow-lg">
                <CardHeader>
                  <CardTitle>যোগাযোগের তথ্য</CardTitle>
                  <CardDescription>
                    আবেদন সংক্রান্ত যেকোনো সহায়তার জন্য আমাদের সাথে যোগাযোগ
                    করুন
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">ফোন</p>
                    <p className="text-lg font-semibold text-foreground">
                      +৮৮০ ১৭১২-৩৪৫৬৭৮
                    </p>
                    <p className="text-sm text-muted-foreground">
                      শনিবার - বৃহস্পতিবার, সকাল ৯টা - বিকাল ৫টা
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">ইমেইল</p>
                    <p className="text-lg font-semibold text-foreground">
                      membership@mccrsg.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ২৪/৭ সাপোর্ট - ১ কর্মদিবসের মধ্যে উত্তর
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-2xl border-border/60">
              <CardHeader className="space-y-2">
                <CardTitle>সদস্য আবেদন ফর্ম</CardTitle>
                <CardDescription>
                  অনুগ্রহ করে সঠিক তথ্য প্রদান করুন যাতে আমাদের টিম দ্রুত আপনার
                  সাথে যোগাযোগ করতে পারে।
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">নাম *</Label>
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="আপনার পূর্ণ নাম"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">হোয়াটসঅ্যাপ নম্বর *</Label>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Input
                            id="whatsapp"
                            type="tel"
                            name="whatsapp"
                            placeholder="যেমন: +৮৮০১৭১২৩৪৫৬৭৮"
                            value={formData.whatsapp}
                            onChange={(e) => {
                              const formatted = formatPhoneNumber(
                                e.target.value
                              );
                              handleInputChange("whatsapp", formatted);
                            }}
                            disabled={isSubmitting}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          আমরা হোয়াটসঅ্যাপে আপনার সাথে যোগাযোগ করব।
                        </TooltipContent>
                      </Tooltip>
                      {errors.whatsapp && (
                        <p className="text-sm text-destructive">
                          {errors.whatsapp}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile">মোবাইল নম্বর *</Label>
                      <Input
                        id="mobile"
                        type="tel"
                        name="mobile"
                        placeholder="যেমন: +৮৮০১৭১২৩৪৫৬৭৮"
                        value={formData.mobile}
                        onChange={(e) => {
                          const formatted = formatPhoneNumber(e.target.value);
                          handleInputChange("mobile", formatted);
                        }}
                        disabled={isSubmitting}
                      />
                      {errors.mobile && (
                        <p className="text-sm text-destructive">
                          {errors.mobile}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="session">সেশন *</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            type="button"
                            className="justify-between w-full"
                            id="session"
                            disabled={isSubmitting}
                          >
                            {formData.session || "সেশন নির্বাচন করুন"}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full">
                          {sessionOptions.map((opt) => (
                            <DropdownMenuItem
                              key={opt}
                              onClick={() => handleInputChange("session", opt)}
                            >
                              {opt}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                      {errors.session && (
                        <p className="text-sm text-destructive">
                          {errors.session}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department">বিভাগ *</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            type="button"
                            className="justify-between w-full"
                            id="department"
                            disabled={isSubmitting}
                          >
                            {formData.department || "বিভাগ নির্বাচন করুন"}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full">
                          {departmentOptions.map((opt) => (
                            <DropdownMenuItem
                              key={opt}
                              onClick={() =>
                                handleInputChange("department", opt)
                              }
                            >
                              {opt}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                      {errors.department && (
                        <p className="text-sm text-destructive">
                          {errors.department}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="className">ক্লাস *</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            type="button"
                            className="justify-between w-full"
                            id="className"
                            disabled={isSubmitting}
                          >
                            {formData.className || "ক্লাস নির্বাচন করুন"}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full">
                          {classOptions.map((opt) => (
                            <DropdownMenuItem
                              key={opt}
                              onClick={() =>
                                handleInputChange("className", opt)
                              }
                            >
                              {opt}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                      {errors.className && (
                        <p className="text-sm text-destructive">
                          {errors.className}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">আপনার আগ্রহ *</Label>
                    <textarea
                      id="motivation"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="আপনি কেন রোভার স্কাউট গ্রুপে যোগ দিতে চান তা সংক্ষেপে লিখুন..."
                      value={formData.motivation}
                      onChange={(e) =>
                        handleInputChange("motivation", e.target.value)
                      }
                      disabled={isSubmitting}
                    />
                    {errors.motivation && (
                      <p className="text-sm text-destructive">
                        {errors.motivation}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "জমা হচ্ছে..." : "আবেদন সাবমিট করুন"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              সুবিধা
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              আমাদের সাথে যুক্ত হলে যা অর্জন করবেন
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ব্যক্তিগত বিকাশ থেকে কমিউনিটি সেবা—স্কাউটিং আপনাকে একটি সামগ্রিক
              অভিজ্ঞতা প্রদান করে।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {membershipBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={benefit.title}
                  className="relative overflow-hidden border-border/60 hover:border-primary/60 transition-colors"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
