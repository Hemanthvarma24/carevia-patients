"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Plus, Trash2 } from "lucide-react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/header";
import Footer from "@/components/footer";



export default function ProfileSettings() {
  const [activeTab, setActiveTab] = useState("basic-info");
  const [educationFields, setEducationFields] = useState([{ id: 1 }]);
  const [experienceFields, setExperienceFields] = useState([{ id: 1 }]);
  const [awardsFields, setAwardsFields] = useState([{ id: 1 }]);
  const [membershipsFields, setMembershipsFields] = useState([{ id: 1 }]);
  const [registrationsFields, setRegistrationsFields] = useState([{ id: 1 }]);
  const [services, setServices] = useState<string[]>([]);
  const [specializations, setSpecializations] = useState<string[]>([]);
  const [serviceInput, setServiceInput] = useState("");
  const [specializationInput, setSpecializationInput] = useState("");

  const [tabs] = useState([
    { value: "basic-info", label: "Basic Info" },
    { value: "about-me", label: "About Me" },
    { value: "clinic-info", label: "Clinic Info" },
    { value: "contact-details", label: "Contact Details" },
    { value: "pricing-services", label: "Pricing & Services" },
    { value: "education-experience", label: "Education & Experience" },
    { value: "awards-memberships", label: "Awards & Memberships" },
    { value: "registrations", label: "Registrations" },
  ]);

  const addEducationField = () => {
    setEducationFields([
      ...educationFields,
      { id: educationFields.length + 1 },
    ]);
  };

  const removeEducationField = (id: number) => {
    if (educationFields.length > 1) {
      setEducationFields(educationFields.filter((field) => field.id !== id));
    }
  };

  const addExperienceField = () => {
    setExperienceFields([
      ...experienceFields,
      { id: experienceFields.length + 1 },
    ]);
  };

  const removeExperienceField = (id: number) => {
    if (experienceFields.length > 1) {
      setExperienceFields(experienceFields.filter((field) => field.id !== id));
    }
  };

  const addAwardsField = () => {
    setAwardsFields([...awardsFields, { id: awardsFields.length + 1 }]);
  };

  const removeAwardsField = (id: number) => {
    if (awardsFields.length > 1) {
      setAwardsFields(awardsFields.filter((field) => field.id !== id));
    }
  };

  const addMembershipsField = () => {
    setMembershipsFields([
      ...membershipsFields,
      { id: membershipsFields.length + 1 },
    ]);
  };

  const removeMembershipsField = (id: number) => {
    if (membershipsFields.length > 1) {
      setMembershipsFields(
        membershipsFields.filter((field) => field.id !== id)
      );
    }
  };

  const addRegistrationsField = () => {
    setRegistrationsFields([
      ...registrationsFields,
      { id: registrationsFields.length + 1 },
    ]);
  };

  const removeRegistrationsField = (id: number) => {
    if (registrationsFields.length > 1) {
      setRegistrationsFields(
        registrationsFields.filter((field) => field.id !== id)
      );
    }
  };

  const addService = () => {
    if (serviceInput.trim() !== "") {
      setServices([...services, serviceInput]);
      setServiceInput("");
    }
  };

  const removeService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const addSpecialization = () => {
    if (specializationInput.trim() !== "") {
      setSpecializations([...specializations, specializationInput]);
      setSpecializationInput("");
    }
  };

  const removeSpecialization = (index: number) => {
    setSpecializations(specializations.filter((_, i) => i !== index));
  };

  const handleNextTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.value === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].value);
    }
  };

  return (
    <><Navbar /><div className="page-content profile-settings max-w-4xl mx-auto p-2 md:p-6">
      <div className="block bg-white rounded-xl shadow-sm">
        <div className="container">
          <div
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              {/* Tabs navigation with larger text and better spacing */}
              <div className="flex w-full overflow-x-auto bg-gray-100 rounded-t-xl p-2">
                {tabs.map((tab) => (
                  <Button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`px-4 py-2 text-base font-medium whitespace-nowrap mx-1 rounded-md transition-colors ${activeTab === tab.value
                        ? "bg-white text-blue-600 shadow"
                        : "text-gray-600 hover:bg-gray-200"}`}
                  >
                    {tab.label}
                  </Button>
                ))}
              </div>

              <TabsContent value="basic-info" className="p-4 md:p-6">
                <div className="setting-widget">
                  <div className="mb-6">
                    <h5 className="text-xl font-semibold">Basic Information</h5>
                  </div>
                  <div className="file-upload mb-6 flex justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-200">
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          alt="User Image"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full" />
                      </div>
                      <div className="absolute bottom-0 right-0 bg-gray-100 rounded-full p-1 shadow-sm cursor-pointer">
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="username">
                          Username <span className="text-red-500">*</span>
                        </Label>
                        <Input id="username" type="text" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          E-mail <span className="text-red-500">*</span>
                        </Label>
                        <Input id="email" type="email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="firstName">
                          First Name <span className="text-red-500">*</span>
                        </Label>
                        <Input id="firstName" type="text" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          Last Name <span className="text-red-500">*</span>
                        </Label>
                        <Input id="lastName" type="text" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input id="phoneNumber" type="tel" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="gender">Gender</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dob">Date of Birth</Label>
                          <div className="relative">
                            <Input id="dob" type="date" className="pr-10" />
                            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button
                        onClick={handleNextTab}
                        className="w-full bg-blue-500 sm:w-auto"
                      >
                        Next
                      </Button>
                    </div>
                  </form>
                </div>
              </TabsContent>

              <TabsContent value="about-me" className="p-4 md:p-6">
                <div className="setting-widget">
                  <div className="mb-6">
                    <h5 className="text-xl font-semibold">About Me</h5>
                  </div>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="biography">Biography</Label>
                      <Textarea
                        id="biography"
                        placeholder="Within 400 characters"
                        className="min-h-[150px]" />
                    </div>
                    <div className="pt-4">
                      <Button
                        onClick={handleNextTab}
                        className="w-full bg-blue-500  md:w-auto"
                      >
                        Next
                      </Button>
                    </div>
                  </form>
                </div>
              </TabsContent>

              <TabsContent value="clinic-info" className="p-4 md:p-6">
                <div className="setting-widget">
                  <div className="mb-6">
                    <h5 className="text-xl font-semibold">Clinic Info</h5>
                  </div>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="clinicName">Clinic Name</Label>
                      <Input id="clinicName" type="text" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clinicAddress">Clinic Address</Label>
                      <Input id="clinicAddress" type="text" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clinicImages">Clinic Images</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Input
                          id="clinicImages"
                          type="file"
                          multiple
                          className="hidden"
                          accept="image/*" />
                        <Label
                          htmlFor="clinicImages"
                          className="cursor-pointer text-gray-500 hover:text-gray-700"
                        >
                          Click here to upload images
                        </Label>
                      </div>
                      <div
                        id="uploadPreview"
                        className="grid grid-cols-3 gap-2 mt-2"
                      ></div>
                    </div>
                    <div className="pt-4">
                      <Button
                        onClick={handleNextTab}
                        className="w-full bg-blue-500  md:w-auto"
                      >
                        Next
                      </Button>
                    </div>
                  </form>
                </div>
              </TabsContent>

              <TabsContent value="contact-details" className="p-4 md:p-6">
                <div className="setting-widget">
                  <div className="mb-6">
                    <h5 className="text-xl font-semibold">Contact Details</h5>
                  </div>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="addressLine1">Address Line 1</Label>
                      <Input id="addressLine1" type="text" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="addressLine2">Address Line 2</Label>
                      <Input id="addressLine2" type="text" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" type="text" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State / Province</Label>
                      <Input id="state" type="text" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" type="text" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input id="postalCode" type="text" />
                    </div>
                    <div className="pt-4">
                      <Button
                        onClick={handleNextTab}
                        className="w-fullbg-blue-500   md:w-auto"
                      >
                        Next
                      </Button>
                    </div>
                  </form>
                </div>
              </TabsContent>

              <TabsContent value="pricing-services" className="p-4 md:p-6">
                <div className="setting-widget">
                  <div className="mb-6">
                    <h5 className="text-xl font-semibold">Pricing</h5>
                  </div>
                  <div className="pricing-col mb-6">
                    <RadioGroup defaultValue="free" className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="free" id="free" />
                        <Label htmlFor="free">Free</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="custom-price"
                          id="custom-price" />
                        <Label htmlFor="custom-price">
                          Custom Price (per hour)
                        </Label>
                      </div>
                    </RadioGroup>
                    <div className="mt-4">
                      <Input type="text" placeholder="Enter price" />
                    </div>
                  </div>

                  <div className="services-specialization space-y-6">
                    <div className="space-y-2">
                      <Label>Services</Label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Input
                          value={serviceInput}
                          onChange={(e) => setServiceInput(e.target.value)}
                          placeholder="Add a service"
                          className="flex-1" />
                        <Button
                          type="button"
                          onClick={addService}
                          size="icon"
                          className="w-full sm:w-auto"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      {services.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {services.map((service, index) => (
                            <div
                              key={index}
                              className="flex items-center bg-gray-100 rounded-full px-3 py-1"
                            >
                              <span className="text-sm">{service}</span>
                              <Button
                                type="button"
                                onClick={() => removeService(index)}
                                className="ml-2 text-gray-500 hover:text-gray-700"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>Specialization</Label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Input
                          value={specializationInput}
                          onChange={(e) => setSpecializationInput(e.target.value)}
                          placeholder="Add a specialization"
                          className="flex-1" />
                        <Button
                          type="button"
                          onClick={addSpecialization}
                          size="icon"
                          className="w-full sm:w-auto"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      {specializations.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {specializations.map((specialization, index) => (
                            <div
                              key={index}
                              className="flex items-center bg-gray-100 rounded-full px-3 py-1"
                            >
                              <span className="text-sm">{specialization}</span>
                              <Button
                                type="button"
                                onClick={() => removeSpecialization(index)}
                                className="ml-2 text-gray-500 hover:text-gray-700"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button
                      onClick={handleNextTab}
                      className="w-full bg-blue-500 md:w-auto"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="education-experience" className="p-4 md:p-6">
                <div className="setting-widget">
                  <div className="mb-6">
                    <h5 className="text-xl font-semibold">Education</h5>
                  </div>

                  {educationFields.map((field) => (
                    <div
                      key={field.id}
                      className="mb-6 p-3 sm:p-4 border border-gray-200 rounded-lg relative"
                    >
                      {educationFields.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeEducationField(field.id)}
                          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <Label>Degree</Label>
                          <Input type="text" />
                        </div>
                        <div className="space-y-2">
                          <Label>Year of Completion</Label>
                          <Input type="text" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>College/Institute</Label>
                        <Input type="text" />
                      </div>
                    </div>
                  ))}

                  <Button
                    type="button"
                    onClick={addEducationField}
                    variant="outline"
                    className="mb-6 w-full flex items-center justify-center text-sm"
                  >
                    <Plus className="mr-2 h-3 w-3" /> Add Education
                  </Button>

                  <div className="mb-6">
                    <h5 className="text-xl font-semibold">Experience</h5>
                  </div>

                  {experienceFields.map((field) => (
                    <div
                      key={field.id}
                      className="mb-6 p-3 sm:p-4 border border-gray-200 rounded-lg relative"
                    >
                      {experienceFields.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeExperienceField(field.id)}
                          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                      <div className="space-y-2 mb-4">
                        <Label>Hospital Name</Label>
                        <Input type="text" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <Label>From</Label>
                          <div className="relative">
                            <Input type="date" className="pr-10" />
                            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>To</Label>
                          <div className="relative">
                            <Input type="date" className="pr-10" />
                            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Designation</Label>
                        <Input type="text" />
                      </div>
                    </div>
                  ))}

                  <Button
                    type="button"
                    onClick={addExperienceField}
                    variant="outline"
                    className="mb-8 w-full flex items-center justify-center"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Experience
                  </Button>

                  <div className="pt-4">
                    <Button
                      onClick={handleNextTab}
                      className="w-full bg-blue-500  md:w-auto"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="awards-memberships" className="p-4 md:p-6">
                <div className="setting-widget">
                  <div className="mb-6">
                    <h5 className="text-xl font-semibold">Awards</h5>
                  </div>

                  {awardsFields.map((field) => (
                    <div
                      key={field.id}
                      className="mb-6 p-3 sm:p-4 border border-gray-200 rounded-lg relative"
                    >
                      {awardsFields.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeAwardsField(field.id)}
                          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Award</Label>
                          <Input type="text" />
                        </div>
                        <div className="space-y-2">
                          <Label>Year</Label>
                          <Input type="text" />
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button
                    type="button"
                    onClick={addAwardsField}
                    variant="outline"
                    className="mb-8 w-full flex items-center justify-center"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Award
                  </Button>

                  <div className="mb-6">
                    <h5 className="text-xl font-semibold">Memberships</h5>
                  </div>

                  {membershipsFields.map((field) => (
                    <div
                      key={field.id}
                      className="mb-6 p-4 border border-gray-200 rounded-lg relative"
                    >
                      {membershipsFields.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeMembershipsField(field.id)}
                          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                      <div className="space-y-2">
                        <Label>Membership</Label>
                        <Input type="text" />
                      </div>
                    </div>
                  ))}

                  <Button
                    type="button"
                    onClick={addMembershipsField}
                    variant="outline"
                    className="mb-8 w-full flex items-center justify-center"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Membership
                  </Button>

                  <div className="pt-4">
                    <Button
                      onClick={handleNextTab}
                      className="w-full md:w-auto"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="registrations" className="p-4 md:p-6">
                <div className="setting-widget">
                  <div className="mb-6">
                    <h5 className="text-xl font-semibold">Registrations</h5>
                  </div>

                  {registrationsFields.map((field) => (
                    <div
                      key={field.id}
                      className="mb-6 p-4 border border-gray-200 rounded-lg relative"
                    >
                      {registrationsFields.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeRegistrationsField(field.id)}
                          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                      <div className="space-y-2 mb-4">
                        <Label>Registration</Label>
                        <Input type="text" />
                      </div>
                      <div className="space-y-2">
                        <Label>Year</Label>
                        <Input type="text" />
                      </div>
                    </div>
                  ))}

                  <Button
                    type="button"
                    onClick={addRegistrationsField}
                    variant="outline"
                    className="mb-8 w-full flex items-center justify-center"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Registration
                  </Button>

                  <div className="pt-4">
                    <Button className="w-full bg-blue-500 md:w-auto">Done</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
        <Footer/>
    </div></>
  );
}
