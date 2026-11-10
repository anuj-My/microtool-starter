import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Dev-only (page.dev.tsx never reaches a build): every shadcn component on one screen, so the design phase can
// restyle them to DESIGN.md and check them at 375 px. Add new components here when you `npx shadcn add` them.
export const metadata: Metadata = { title: "UI components", robots: { index: false } };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold">UI components</h1>
      <p className="mt-2 text-muted-foreground">
        Dev only. Restyle these to DESIGN.md in <code>src/components/ui/</code> and the tokens in <code>globals.css</code>.
      </p>

      <Section title="Buttons">
        <div className="flex flex-wrap gap-3">
          <Button>Primary action</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      <Section title="Form fields">
        <div className="grid max-w-md gap-5">
          <div className="grid gap-2">
            <Label htmlFor="ui-amount">Amount</Label>
            <Input id="ui-amount" type="number" inputMode="decimal" defaultValue="1200" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="ui-unit">Unit</Label>
            <Select defaultValue="w">
              <SelectTrigger id="ui-unit" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="w">Watts</SelectItem>
                <SelectItem value="kw">Kilowatts</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label id="ui-hours-label">Hours per day</Label>
            <Slider aria-labelledby="ui-hours-label" defaultValue={[6]} min={0} max={24} step={1} />
          </div>
          <div className="flex min-h-11 items-center gap-3">
            <Switch id="ui-round" defaultChecked />
            <Label htmlFor="ui-round">Round the result</Label>
          </div>
        </div>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="simple" className="max-w-md">
          <TabsList>
            <TabsTrigger value="simple">Simple</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          <TabsContent value="simple" className="pt-3">The simple form.</TabsContent>
          <TabsContent value="advanced" className="pt-3">The advanced form.</TabsContent>
        </Tabs>
      </Section>

      <Section title="Tooltip">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover or focus me</Button>
            </TooltipTrigger>
            <TooltipContent>Short help text</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Section>

      <Section title="Card (the tool's result)">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Result</CardTitle>
            <CardDescription>The answer gets the most visual weight on the page.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold tabular-nums">7.2 hours</p>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
