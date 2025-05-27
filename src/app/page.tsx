import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BookOpen, Users, Award } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-primary">KenyaMed Guidelines</h1>
            <div className="flex gap-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Evidence-Based Medical Guidelines for Kenya
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access, understand, and implement the latest medical guidelines. 
            Empowering healthcare professionals across Kenya with standardized care protocols.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              <Search className="mr-2 h-5 w-5" />
              Search Guidelines
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Comprehensive Library</CardTitle>
                <CardDescription>
                  Access a vast collection of medical guidelines covering all major specialties
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Evidence-based protocols</li>
                  <li>Regular updates</li>
                  <li>Specialty-specific guidance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Collaborative Platform</CardTitle>
                <CardDescription>
                  Connect with healthcare professionals across Kenya
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Discussion forums</li>
                  <li>Case studies</li>
                  <li>Peer reviews</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Quality Assurance</CardTitle>
                <CardDescription>
                  Verified and approved by leading medical institutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Expert reviewed</li>
                  <li>Ministry approved</li>
                  <li>International standards</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">KenyaMed Guidelines</h3>
              <p className="text-sm text-muted-foreground">
                Democratizing medical knowledge for better healthcare outcomes in Kenya.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guidelines">Guidelines Library</Link></li>
                <li><Link href="/specialties">Specialties</Link></li>
                <li><Link href="/updates">Latest Updates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/forum">Discussion Forum</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/contribute">Contribute</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms">Terms of Use</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/disclaimer">Medical Disclaimer</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}