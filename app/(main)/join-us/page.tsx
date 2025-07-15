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
import { useState } from "react";
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
  const [session, setSession] = useState("");
  const [department, setDepartment] = useState("");
  const [className, setClassName] = useState("");
  const [errors, setErrors] = useState({
    session: "",
    department: "",
    className: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { session: "", department: "", className: "" };
    if (!session) {
      newErrors.session = "Session is required.";
      valid = false;
    }
    if (!department) {
      newErrors.department = "Department is required.";
      valid = false;
    }
    if (!className) {
      newErrors.className = "Class is required.";
      valid = false;
    }
    setErrors(newErrors);
    if (!valid) return;
    toast.success("Form submitted! We'll contact you soon.");
    // Optionally reset form here
    // setSession(""); setDepartment(""); setClassName("");
    // e.currentTarget.reset();
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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
              />
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
                type="text"
                name="whatsapp"
                required
                placeholder="e.g. +1234567890"
                className="w-full"
              />
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
                type="text"
                name="mobile"
                required
                placeholder="e.g. +1234567890"
                className="w-full"
              />
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
                  >
                    {session || "Select session"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {sessionOptions.map((opt) => (
                    <DropdownMenuItem key={opt} onClick={() => setSession(opt)}>
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
                  >
                    {department || "Select department"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {departmentOptions.map((opt) => (
                    <DropdownMenuItem
                      key={opt}
                      onClick={() => setDepartment(opt)}
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
                  >
                    {className || "Select class"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {classOptions.map((opt) => (
                    <DropdownMenuItem
                      key={opt}
                      onClick={() => setClassName(opt)}
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
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default page;
