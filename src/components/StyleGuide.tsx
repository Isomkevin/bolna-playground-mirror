
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Check, AlertTriangle, AlertCircle, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function StyleGuide() {
  const [activeTab, setActiveTab] = useState("colors");

  return (
    <div className="container mx-auto p-6 space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">AfriCopilot AI Style Guide</h1>
          <p className="text-muted-foreground text-lg">A comprehensive guide to our design system</p>
        </div>
        <ThemeToggle />
      </div>

      <Tabs defaultValue="colors" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="spacing">Spacing & Layout</TabsTrigger>
          <TabsTrigger value="helpers">Utilities</TabsTrigger>
        </TabsList>

        {/* Colors Tab */}
        <TabsContent value="colors" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Brand Colors</CardTitle>
              <CardDescription>
                These are the core colors of the AfriCopilot AI brand.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1.5">
                  <div className="h-16 w-full bg-africopilot-blue rounded-md"></div>
                  <div className="text-xs">Blue</div>
                  <div className="text-xs text-muted-foreground">#1E55F7</div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-16 w-full bg-africopilot-darkBlue rounded-md"></div>
                  <div className="text-xs">Dark Blue</div>
                  <div className="text-xs text-muted-foreground">#0F3AD2</div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-16 w-full bg-africopilot-lightBlue rounded-md"></div>
                  <div className="text-xs">Light Blue</div>
                  <div className="text-xs text-muted-foreground">#EBF0FF</div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-16 w-full bg-africopilot-teal rounded-md"></div>
                  <div className="text-xs">Teal</div>
                  <div className="text-xs text-muted-foreground">#0FC8D2</div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-16 w-full bg-africopilot-purple rounded-md"></div>
                  <div className="text-xs">Purple</div>
                  <div className="text-xs text-muted-foreground">#6E59A5</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Functional Colors</CardTitle>
              <CardDescription>
                Colors used to communicate status, feedback, and actions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1.5">
                  <div className="h-16 w-full bg-africopilot-green rounded-md"></div>
                  <div className="text-xs">Success</div>
                  <div className="text-xs text-muted-foreground">#34D399</div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-16 w-full bg-africopilot-yellow rounded-md"></div>
                  <div className="text-xs">Warning</div>
                  <div className="text-xs text-muted-foreground">#FBBF24</div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-16 w-full bg-africopilot-orange rounded-md"></div>
                  <div className="text-xs">Orange</div>
                  <div className="text-xs text-muted-foreground">#F97316</div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-16 w-full bg-africopilot-red rounded-md"></div>
                  <div className="text-xs">Error</div>
                  <div className="text-xs text-muted-foreground">#EF4444</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Neutral Colors</CardTitle>
              <CardDescription>
                A consistent grayscale palette for UI elements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
                  <div key={weight} className="space-y-1.5">
                    <div className={`h-16 w-full bg-africopilot-${weight} rounded-md border`}></div>
                    <div className="text-xs">{weight}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Typography Tab */}
        <TabsContent value="typography" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Headings</CardTitle>
              <CardDescription>
                Typography scale for headings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h1 className="text-display-1 font-bold">Display 1 (3.75rem)</h1>
                <div className="text-muted-foreground mt-1">For hero sections and major headlines</div>
              </div>
              <div>
                <h1 className="text-display-2 font-bold">Display 2 (3rem)</h1>
                <div className="text-muted-foreground mt-1">For secondary headlines</div>
              </div>
              <div>
                <h1 className="text-heading-1 font-bold">Heading 1 (2.5rem)</h1>
                <div className="text-muted-foreground mt-1">Primary section headers</div>
              </div>
              <div>
                <h2 className="text-heading-2 font-bold">Heading 2 (2rem)</h2>
                <div className="text-muted-foreground mt-1">Section headers</div>
              </div>
              <div>
                <h3 className="text-heading-3 font-semibold">Heading 3 (1.75rem)</h3>
                <div className="text-muted-foreground mt-1">Subsection headers</div>
              </div>
              <div>
                <h4 className="text-heading-4 font-semibold">Heading 4 (1.5rem)</h4>
                <div className="text-muted-foreground mt-1">Small section headers</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Body Text</CardTitle>
              <CardDescription>
                Typography for body content.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-title-lg font-semibold">Title Large (1.25rem)</p>
                <div className="text-muted-foreground mt-1">For card titles and prominent content</div>
              </div>
              <div>
                <p className="text-title-md font-semibold">Title Medium (1.125rem)</p>
                <div className="text-muted-foreground mt-1">For secondary titles</div>
              </div>
              <div>
                <p className="text-title-sm font-semibold">Title Small (1rem)</p>
                <div className="text-muted-foreground mt-1">For small titles</div>
              </div>
              <div>
                <p className="text-body-lg">Body Large (1.125rem)</p>
                <div className="text-muted-foreground mt-1">For important body text</div>
              </div>
              <div>
                <p className="text-body-md">Body Medium (1rem)</p>
                <div className="text-muted-foreground mt-1">Default body text</div>
              </div>
              <div>
                <p className="text-body-sm">Body Small (0.875rem)</p>
                <div className="text-muted-foreground mt-1">For secondary body text</div>
              </div>
              <div>
                <p className="text-caption-md text-muted-foreground">Caption Medium (0.875rem)</p>
                <div className="text-muted-foreground mt-1">For captions and helper text</div>
              </div>
              <div>
                <p className="text-caption-sm text-muted-foreground">Caption Small (0.75rem)</p>
                <div className="text-muted-foreground mt-1">For small captions and metadata</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gradient Text</CardTitle>
              <CardDescription>
                Text with gradient effects for emphasis.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h2 className="text-heading-2 font-bold text-gradient-blue">Blue Gradient Text</h2>
                <div className="text-muted-foreground mt-1">For emphasized headings</div>
              </div>
              <div>
                <h2 className="text-heading-2 font-bold text-gradient-purple">Purple Gradient Text</h2>
                <div className="text-muted-foreground mt-1">For alternative emphasis</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Components Tab */}
        <TabsContent value="components" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>
                Button variants for different contexts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
                <Button className="africopilot-button-primary">AfriCopilot</Button>
                <Button disabled>Disabled</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cards</CardTitle>
              <CardDescription>
                Card components for grouping content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Standard Card</CardTitle>
                    <CardDescription>The default card style</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This is a standard card component with header and content.</p>
                  </CardContent>
                </Card>
                <div className="africopilot-card p-6 space-y-3">
                  <h3 className="font-semibold text-lg">AfriCopilot Card</h3>
                  <p className="text-muted-foreground text-sm">Custom card style with the africopilot-card class.</p>
                </div>
                <div className="africopilot-card-gradient p-6 space-y-3">
                  <h3 className="font-semibold text-lg">Gradient Card</h3>
                  <p className="text-muted-foreground text-sm">Card with subtle gradient background.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>
                Status indicators and labels.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge className="bg-africopilot-blue">AfriCopilot</Badge>
                <Badge className="bg-africopilot-green">Success</Badge>
                <Badge className="bg-africopilot-yellow text-black">Warning</Badge>
                <Badge className="bg-africopilot-red">Error</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
              <CardDescription>
                Notification and feedback components.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Default Alert</AlertTitle>
                <AlertDescription>
                  This is a default alert component.
                </AlertDescription>
              </Alert>
              <Alert className="bg-africopilot-lightBlue border-africopilot-blue">
                <Info className="h-4 w-4 text-africopilot-blue" />
                <AlertTitle className="text-africopilot-blue">Info Alert</AlertTitle>
                <AlertDescription>
                  This is an info alert with AfriCopilot styling.
                </AlertDescription>
              </Alert>
              <Alert className="bg-green-50 border-africopilot-green">
                <Check className="h-4 w-4 text-africopilot-green" />
                <AlertTitle className="text-africopilot-green">Success Alert</AlertTitle>
                <AlertDescription>
                  This is a success alert with AfriCopilot styling.
                </AlertDescription>
              </Alert>
              <Alert className="bg-yellow-50 border-africopilot-yellow">
                <AlertTriangle className="h-4 w-4 text-africopilot-yellow" />
                <AlertTitle className="text-africopilot-yellow">Warning Alert</AlertTitle>
                <AlertDescription>
                  This is a warning alert with AfriCopilot styling.
                </AlertDescription>
              </Alert>
              <Alert className="bg-red-50 border-africopilot-red">
                <AlertCircle className="h-4 w-4 text-africopilot-red" />
                <AlertTitle className="text-africopilot-red">Error Alert</AlertTitle>
                <AlertDescription>
                  This is an error alert with AfriCopilot styling.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Spacing Tab */}
        <TabsContent value="spacing" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Spacing Scale</CardTitle>
              <CardDescription>
                Our spacing system for consistent layouts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Spacing Examples</h3>
                  <div className="flex flex-col gap-3">
                    {[1, 2, 3, 4, 6, 8, 12, 16, 24].map((space) => (
                      <div key={space} className="flex items-center">
                        <div className={`w-${space} h-${space} bg-africopilot-blue rounded-sm`}></div>
                        <span className="ml-4 text-sm">{space} ({space * 0.25}rem)</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Layout Components</CardTitle>
              <CardDescription>
                Container and grid layouts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium mb-3">Container</h3>
                  <div className="africopilot-container border border-dashed border-africopilot-300 p-4 rounded-lg">
                    <p className="text-center text-sm text-muted-foreground">Standard container with responsive padding</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-3">Grid Examples</h3>
                  <div className="africopilot-grid">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="bg-muted h-24 rounded-lg flex items-center justify-center text-sm">
                        Grid Item {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Utilities Tab */}
        <TabsContent value="helpers" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Animation Utilities</CardTitle>
              <CardDescription>
                Reusable animation classes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Button className="animate-fade-in">Fade In</Button>
                  <div className="text-sm text-muted-foreground">animate-fade-in</div>
                </div>
                <div className="space-y-3">
                  <Button className="animate-scale-in">Scale In</Button>
                  <div className="text-sm text-muted-foreground">animate-scale-in</div>
                </div>
                <div className="space-y-3">
                  <Button className="animate-pulse-gentle">Pulse</Button>
                  <div className="text-sm text-muted-foreground">animate-pulse-gentle</div>
                </div>
                <div className="space-y-3">
                  <Button className="hover-lift">Hover Lift</Button>
                  <div className="text-sm text-muted-foreground">hover-lift</div>
                </div>
                <div className="space-y-3">
                  <Button className="hover-scale">Hover Scale</Button>
                  <div className="text-sm text-muted-foreground">hover-scale</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Visual Effects</CardTitle>
              <CardDescription>
                Custom visual treatments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="glassmorphism p-6 rounded-lg">
                    <h4 className="font-medium">Glassmorphism</h4>
                    <p className="text-sm text-muted-foreground">Frosted glass effect</p>
                  </div>
                  <div className="text-sm text-muted-foreground">glassmorphism</div>
                </div>
                <div className="space-y-3">
                  <div className="p-6 rounded-lg pattern-dots">
                    <h4 className="font-medium">Pattern Dots</h4>
                    <p className="text-sm text-muted-foreground">Subtle dot pattern</p>
                  </div>
                  <div className="text-sm text-muted-foreground">pattern-dots</div>
                </div>
                <div className="space-y-3">
                  <div className="p-6 rounded-lg pattern-grid">
                    <h4 className="font-medium">Pattern Grid</h4>
                    <p className="text-sm text-muted-foreground">Subtle grid pattern</p>
                  </div>
                  <div className="text-sm text-muted-foreground">pattern-grid</div>
                </div>
                <div className="space-y-3">
                  <div className="text-shadow-sm font-bold text-2xl p-6 bg-gradient-to-r from-africopilot-blue to-africopilot-purple rounded-lg text-white">
                    Text Shadow
                  </div>
                  <div className="text-sm text-muted-foreground">text-shadow-sm</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
