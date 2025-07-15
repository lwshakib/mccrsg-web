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
import { useState, useCallback, useMemo } from "react";
import { toast } from "sonner";

type Props = {};

const sessionOptions = ["2020-2021", "2021-2022", "2022-2023", "2023-2024"];
const departmentOptions = [
  "Computer Science",
  "Mechanical",
  "Electrical",
  "Civil",
  "Business",
];
const classOptions = ["HSC", "Honors", "Degree", "Masters"];

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
  const validateField = useCallback((field: string, value: string) => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Name is required.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        if (!/^[a-zA-Z\s]+$/.test(value.trim())) return "Name can only contain letters and spaces.";
        break;
      case "whatsapp":
        if (!value.trim()) return "WhatsApp number is required.";
        if (!phoneRegex.test(value.trim())) return "Please enter a valid WhatsApp number.";
        break;
      case "mobile":
        if (!value.trim()) return "Mobile number is required.";
        if (!phoneRegex.test(value.trim())) return "Please enter a valid mobile number.";
        break;
      case "session":
        if (!value) return "Session is required.";
        break;
      case "department":
        if (!value) return "Department is required.";
        break;
      case "className":
        if (!value) return "Class is required.";
        break;
    }
    return "";
  }, [phoneRegex]);

  // Handle input changes without real-time validation
  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  // Format phone number as user types
  const formatPhoneNumber = useCallback((value: string) => {
    // Remove all non-digit characters except +
    const cleaned = value.replace(/[^\d+]/g, '');
    
    // If it starts with +, keep it
    if (cleaned.startsWith('+')) {
      return cleaned;
    }
    
    // Otherwise, format as needed
    return cleaned;
  }, []);

  // Check if form has all required fields filled
  const isFormValid = useMemo(() => {
    return Object.values(formData).every(value => value.trim() !== '');
  }, [formData]);

  // Handle form submission
  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
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
    if (Object.values(newErrors).some(error => error !== "")) {
      toast.error("Please fix the errors in the form.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Form submitted successfully! We'll contact you soon.");
      
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
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-muted/40">
      <Card className="w-full max-w-md my-24">
        <CardHeader>
          <CardTitle>Join Us</CardTitle>
          <CardDescription>
            Fill out the form below to become a member. We'll contact you soon!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">{/* Form converted to div for React component */}
            <div className="flex flex-col gap-1 w-full">
              <Label className="font-medium" htmlFor="name">
                Name:
              </Label>
              <Input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                disabled={isSubmitting}
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.name}
                </span>
              )}
            </div>
            
            <div className="flex flex-col gap-1 w-full">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Label className="font-medium" htmlFor="whatsapp">
                    WhatsApp Number:
                  </Label>
                </TooltipTrigger>
                <TooltipContent>
                  We'll use this to contact you on WhatsApp.
                </TooltipContent>
              </Tooltip>
              <Input
                id="whatsapp"
                type="tel"
                name="whatsapp"
                required
                placeholder="e.g. +1234567890"
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
                    Mobile Number:
                  </Label>
                </TooltipTrigger>
                <TooltipContent>
                  Your regular phone number (if different).
                </TooltipContent>
              </Tooltip>
              <Input
                id="mobile"
                type="tel"
                name="mobile"
                required
                placeholder="e.g. +1234567890"
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
                Session:
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
                    {formData.session || "Select session"}
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
                Department:
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
                    {formData.department || "Select department"}
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
                Class:
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
                    {formData.className || "Select class"}
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
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </CardFooter>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default page;