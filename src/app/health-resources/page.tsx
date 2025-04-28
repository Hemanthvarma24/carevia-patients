"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Clock, ArrowRight, Mail } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import eventone from "@/assets/home/eventone.jpg"
import eventtwo from "@/assets/home/events.jpg"
import eventthree from "@/assets/home/healthtrip.jpg"
import eventfour from "@/assets/home/health.jpg"

export default function Home() {
  const [currentTip, setCurrentTip] = useState(0)

  const featuredArticles = [
    {
      id: 1,
      title: "10 Morning Habits for Better Health",
      excerpt: "Start your day right with these science-backed habits that boost energy and wellness.",
      category: "Wellness",
      image: eventone,
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Understanding the Benefits of Mediterranean Diet",
      excerpt: "Why doctors and nutritionists consistently rank this eating pattern as one of the healthiest.",
      category: "Nutrition",
      image: eventtwo,
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "How to Build a Sustainable Exercise Routine",
      excerpt: "Create a workout plan that you'll actually stick with for the long term.",
      category: "Fitness",
      image: eventfour,
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Science of Sleep: Why It Matters",
      excerpt: "Discover how quality sleep impacts your physical and mental health.",
      category: "Sleep",
      image: eventtwo,
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Mindfulness Techniques for Stress Reduction",
      excerpt: "Simple practices to help manage stress and improve mental wellbeing.",
      category: "Mental Health",
      image: eventthree,
      readTime: "5 min read",
    },
  ]

  const healthTips = [
    {
      title: "Stay Hydrated",
      content:
        "Drink water first thing in the morning to rehydrate your body after sleep. Aim for 8 glasses throughout the day.",
      icon: "💧",
    },
    {
      title: "Prioritize Sleep",
      content:
        "Aim for 7-9 hours of quality sleep each night. Establish a regular sleep schedule to improve overall health.",
      icon: "😴",
    },
    {
      title: "Eat Colorful Foods",
      content:
        "Include colorful vegetables in at least two meals daily to ensure you get a variety of nutrients and antioxidants.",
      icon: "🥗",
    },
    {
      title: "Take Movement Breaks",
      content:
        "Take short walking breaks if you sit for extended periods. Even 5 minutes of movement every hour makes a difference.",
      icon: "🚶",
    },
    {
      title: "Practice Mindful Eating",
      content: "Slow down and savor each bite. This helps with digestion and prevents overeating.",
      icon: "🧘",
    },
  ]

  const categories = [
    { name: "Nutrition", count: 24 },
    { name: "Fitness", count: 18 },
    { name: "Mental Health", count: 15 },
    { name: "Sleep", count: 9 },
    { name: "Wellness", count: 21 },
  ]

  const nextTip = () => {
    setCurrentTip((prev) => (prev === healthTips.length - 1 ? 0 : prev + 1))
  }

  const prevTip = () => {
    setCurrentTip((prev) => (prev === 0 ? healthTips.length - 1 : prev - 1))
  }

  // Filter articles by category
  const getArticlesByCategory = (category: string) => {
    return featuredArticles.filter((article) => article.category === category)
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between mb-8 mt-3">
            <h2 className="text-3xl font-bold text-gray-800">Health Resources</h2>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-teal-500 to-teal-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Journey to Better Health Starts Here</h1>
              <p className="text-lg md:text-xl mb-8 text-teal-100">
                Discover evidence-based resources, expert tips, and practical guides for a healthier lifestyle.
              </p>
              <Button className="bg-white text-teal-700 hover:bg-teal-50 font-medium px-6 py-3 text-lg rounded-lg shadow-lg">
                Explore Resources
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff" preserveAspectRatio="none">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </div>

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Resources Section */}
          <section className="mb-16">
            <Tabs defaultValue={categories[0].name} className="w-full">
              <TabsList className="mb-8 flex flex-wrap gap-2 justify-start bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.name}
                    value={category.name}
                    className="px-5 py-2.5 rounded-full data-[state=active]:bg-teal-500 data-[state=active]:text-white font-medium transition-all duration-200 data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 hover:bg-gray-200"
                  >
                    {category.name}
                    <span className="ml-2 bg-white text-teal-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {category.count}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.name} value={category.name} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getArticlesByCategory(category.name).map((article) => (
                      <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-md">
                        <div className="relative h-56">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transform hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1.5 bg-teal-500 text-white text-sm font-semibold rounded-full shadow-md">
                              {article.category}
                            </span>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <Link
                            href={`/articles/${article.id}`}
                            className="block mt-1 text-xl leading-tight font-bold text-gray-900 hover:text-teal-600 transition-colors duration-300"
                          >
                            {article.title}
                          </Link>
                          <p className="mt-3 text-gray-600 line-clamp-2">{article.excerpt}</p>
                          <div className="mt-6 flex items-center justify-between">
                            <span className="text-sm text-gray-500 flex items-center">
                              <Clock className="h-4 w-4 text-teal-500 mr-1" />
                              {article.readTime}
                            </span>
                            <Link
                              href={`/articles/${article.id}`}
                              className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
                            >
                              Read more
                              <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    {getArticlesByCategory(category.name).length === 0 && (
                      <div className="col-span-full text-center py-12">
                        <p className="text-gray-500 text-lg">No articles found in this category.</p>
                      </div>
                    )}
                  </div>
                  {getArticlesByCategory(category.name).length > 0 && (
                    <div className="mt-10 text-center">
                      <Button asChild variant="default" className="bg-teal-600 hover:bg-teal-700 px-8 py-2.5 text-base">
                        <Link href={`/categories/${category.name.toLowerCase()}`} className="inline-flex items-center">
                          View All {category.name} Articles
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </section>

          {/* Health Tips Carousel */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Daily Health Tips</h2>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
              <div className="p-8 md:p-10 relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-teal-800 flex items-center">
                    <span className="text-4xl mr-4">{healthTips[currentTip].icon}</span>
                    {healthTips[currentTip].title}
                  </h3>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTip}
                      className="h-10 w-10 rounded-full border-teal-300 text-teal-700 hover:bg-teal-200"
                    >
                      <ChevronLeft className="h-5 w-5" />
                      <span className="sr-only">Previous tip</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTip}
                      className="h-10 w-10 rounded-full border-teal-300 text-teal-700 hover:bg-teal-200"
                    >
                      <ChevronRight className="h-5 w-5" />
                      <span className="sr-only">Next tip</span>
                    </Button>
                  </div>
                </div>

                <p className="text-teal-700 text-xl leading-relaxed">{healthTips[currentTip].content}</p>

                <div className="flex justify-center mt-8">
                  {healthTips.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTip(index)}
                      className={`h-3 w-3 mx-1.5 rounded-full transition-all duration-300 ${
                        currentTip === index ? "bg-teal-600 w-6" : "bg-teal-300 hover:bg-teal-400"
                      }`}
                      aria-label={`Go to tip ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Articles Grid - New Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Top Picks For You</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.length > 0 && (
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-72 group">
                  <Image
                    src={featuredArticles[0].image}
                    alt={featuredArticles[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-teal-500 text-white text-sm font-semibold rounded-full mb-3">
                      Editor&lsquo;s Choice
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{featuredArticles[0].title}</h3>
                    <Link
                      href={`/articles/${featuredArticles[0].id}`}
                      className="inline-flex items-center text-white hover:text-teal-300 font-medium"
                    >
                      Read article <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 gap-6">
                {featuredArticles.slice(1, 3).map((article) => (
                  <div key={article.id} className="flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative w-32 md:w-40">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 25vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1">
                      <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
                        {article.category}
                      </span>
                      <h3 className="text-lg font-semibold mb-1 line-clamp-2">{article.title}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-10 rounded-2xl shadow-xl text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="md:flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
                    <Mail className="h-6 w-6 text-teal-400 mr-3" />
                    Stay Updated
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Get our latest health tips, exclusive content, and special offers delivered straight to your inbox weekly.
                  </p>
                </div>
                <form className="flex flex-col sm:flex-row gap-3 w-full md:w-2/5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="focus:ring-teal-500 focus:border-teal-500 block w-full px-5 py-4 text-base border border-gray-700 bg-gray-800 text-white rounded-lg placeholder-gray-400"
                    placeholder="Your email address"
                    aria-label="Email address"
                  />
                  <Button type="submit" className="bg-teal-500 hover:bg-teal-600 whitespace-nowrap px-6 py-4 text-base font-medium">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}