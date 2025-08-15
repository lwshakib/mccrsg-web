"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { useCallback, useMemo, useState } from "react";
import { toast } from "sonner";

type Props = {};

const sessionOptions = ["২০২০-২০২১", "২০২১-২০২২", "২০২২-২০২৩", "২০২৩-২০২৪"];
const departmentOptions = [
  "কম্পিউটার সায়েন্স",
  "মেকানিক্যাল",
  "ইলেকট্রিক্যাল",
  "সিভিল",
  "ব্যবসায়",
];
const classOptions = ["এইচএসসি", "অনার্স", "ডিগ্রি", "মাস্টার্স"];

function page({}: Props) {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    mobile: "",
    session: "",
    department: "",
    className: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    whatsapp: "",
    mobile: "",
    session: "",
    department: "",
    className: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Phone number validation regex
  const phoneRegex = useMemo(() => /^\+?[\d\s\-\(\)]{7,15}$/, []);

  // Real-time validation function
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
      }
      return "";
    },
    [phoneRegex]
  );

  // Handle input changes without real-time validation
  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  // Format phone number as user types
  const formatPhoneNumber = useCallback((value: string) => {
    // Remove all non-digit characters except +
    const cleaned = value.replace(/[^\d+]/g, "");

    // If it starts with +, keep it
    if (cleaned.startsWith("+")) {
      return cleaned;
    }

    // Otherwise, format as needed
    return cleaned;
  }, []);

  // Check if form has all required fields filled
  const isFormValid = useMemo(() => {
    return Object.values(formData).every((value) => value.trim() !== "");
  }, [formData]);

  // Handle form submission
  const handleSubmit = async (
    e?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (e) e.preventDefault();

    // Validate all fields
    const newErrors = {
      name: validateField("name", formData.name),
      whatsapp: validateField("whatsapp", formData.whatsapp),
      mobile: validateField("mobile", formData.mobile),
      session: validateField("session", formData.session),
      department: validateField("department", formData.department),
      className: validateField("className", formData.className),
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error !== "")) {
      toast.error("ফর্মে ত্রুটি আছে। দয়া করে সংশোধন করুন।");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(
        "ফর্ম সফলভাবে জমা হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।"
      );

      // Reset form and clear any errors
      setFormData({
        name: "",
        whatsapp: "",
        mobile: "",
        session: "",
        department: "",
        className: "",
      });
      setErrors({
        name: "",
        whatsapp: "",
        mobile: "",
        session: "",
        department: "",
        className: "",
      });

      // Reset form (no form element to reset in React component)
      // e.currentTarget.reset();
    } catch (error) {
      toast.error("ফর্ম জমা দিতে ব্যর্থ। আবার চেষ্টা করুন।");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-muted/40">
      <Card className="w-full max-w-md my-24">
        <CardHeader>
          <CardTitle>আমাদের সাথে যোগ দিন</CardTitle>
          <CardDescription>
            সদস্য হতে নিচের ফর্মটি পূরণ করুন। আমরা শীঘ্রই আপনার সাথে যোগাযোগ
            করব!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {/* Form converted to div for React component */}
            <div className="flex flex-col gap-1 w-full">
              <Label className="font-medium" htmlFor="name">
                নাম:
              </Label>
              <Input
                id="name"
                type="text"
                name="name"
                required
                placeholder="আপনার পূর্ণ নাম"
                className="w-full"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                disabled={isSubmitting}
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Label className="font-medium" htmlFor="whatsapp">
                    হোয়াটসঅ্যাপ নম্বর:
                  </Label>
                </TooltipTrigger>
                <TooltipContent>
                  আমরা হোয়াটসঅ্যাপে আপনার সাথে যোগাযোগ করব।
                </TooltipContent>
              </Tooltip>
              <Input
                id="whatsapp"
                type="tel"
                name="whatsapp"
                required
                placeholder="যেমন: +৮৮০১৭১২৩৪৫৬৭৮"
                className="w-full"
                value={formData.whatsapp}
                onChange={(e) => {
                  const formatted = formatPhoneNumber(e.target.value);
                  handleInputChange("whatsapp", formatted);
                }}
                disabled={isSubmitting}
              />
              {errors.whatsapp && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.whatsapp}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Label className="font-medium" htmlFor="mobile">
                    মোবাইল নম্বর:
                  </Label>
                </TooltipTrigger>
                <TooltipContent>
                  আপনার সাধারণ ফোন নম্বর (যদি আলাদা হয়)।
                </TooltipContent>
              </Tooltip>
              <Input
                id="mobile"
                type="tel"
                name="mobile"
                required
                placeholder="যেমন: +৮৮০১৭১২৩৪৫৬৭৮"
                className="w-full"
                value={formData.mobile}
                onChange={(e) => {
                  const formatted = formatPhoneNumber(e.target.value);
                  handleInputChange("mobile", formatted);
                }}
                disabled={isSubmitting}
              />
              {errors.mobile && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.mobile}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <Label className="font-medium" htmlFor="session">
                সেশন:
              </Label>
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
                <span className="text-red-500 text-sm mt-1">
                  {errors.session}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <Label className="font-medium" htmlFor="department">
                বিভাগ:
              </Label>
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
                      onClick={() => handleInputChange("department", opt)}
                    >
                      {opt}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {errors.department && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.department}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <Label className="font-medium" htmlFor="class">
                ক্লাস:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    type="button"
                    className="justify-between w-full"
                    id="class"
                    disabled={isSubmitting}
                  >
                    {formData.className || "ক্লাস নির্বাচন করুন"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {classOptions.map((opt) => (
                    <DropdownMenuItem
                      key={opt}
                      onClick={() => handleInputChange("className", opt)}
                    >
                      {opt}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {errors.className && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.className}
                </span>
              )}
            </div>

            <CardFooter className="pt-4">
              <Button
                type="button"
                className="w-full"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? "জমা হচ্ছে..." : "জমা দিন"}
              </Button>
            </CardFooter>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default page;
