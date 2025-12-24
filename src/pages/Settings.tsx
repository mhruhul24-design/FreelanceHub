import { TopBar } from "@/components/layout/TopBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { User, Mail, Bell, Palette, Shield, CreditCard } from "lucide-react";

export default function Settings() {
  return (
    <div className="min-h-screen">
      <TopBar title="Settings" subtitle="Manage your account and preferences" />
      <div className="p-6">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-muted/50 p-1 rounded-xl">
            <TabsTrigger
              value="profile"
              className="gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm rounded-lg"
            >
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm rounded-lg"
            >
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="appearance"
              className="gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm rounded-lg"
            >
              <Palette className="h-4 w-4" />
              Appearance
            </TabsTrigger>
            <TabsTrigger
              value="billing"
              className="gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm rounded-lg"
            >
              <CreditCard className="h-4 w-4" />
              Billing
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="gap-2 data-[state=active]:bg-card data-[state=active]:shadow-sm rounded-lg"
            >
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="animate-fade-in">
            <div className="glass-card p-6 space-y-6">
              <div>
                <h3 className="section-title mb-1">Profile Information</h3>
                <p className="text-sm text-muted-foreground">
                  Update your personal details and business information
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-primary-foreground">
                  JD
                </div>
                <div>
                  <Button variant="outline" size="sm">
                    Change Photo
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    JPG, PNG or GIF. Max 2MB.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" className="input-field" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" className="input-field" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john@example.com"
                    className="input-field"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    defaultValue="+1 (555) 123-4567"
                    className="input-field"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="business">Business Name</Label>
                  <Input
                    id="business"
                    defaultValue="FreelanceHub Studio"
                    className="input-field"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="btn-primary">Save Changes</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="animate-fade-in">
            <div className="glass-card p-6 space-y-6">
              <div>
                <h3 className="section-title mb-1">Notification Preferences</h3>
                <p className="text-sm text-muted-foreground">
                  Choose what notifications you want to receive
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Email Notifications",
                    description: "Receive email updates about your projects and invoices",
                    enabled: true,
                  },
                  {
                    title: "Project Updates",
                    description: "Get notified when project status changes",
                    enabled: true,
                  },
                  {
                    title: "Invoice Reminders",
                    description: "Receive reminders about pending and overdue invoices",
                    enabled: true,
                  },
                  {
                    title: "New Client Alerts",
                    description: "Get notified when a new client is added",
                    enabled: false,
                  },
                  {
                    title: "Weekly Summary",
                    description: "Receive a weekly summary of your business activity",
                    enabled: true,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary/30 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <Switch defaultChecked={item.enabled} />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="appearance" className="animate-fade-in">
            <div className="glass-card p-6 space-y-6">
              <div>
                <h3 className="section-title mb-1">Appearance Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Customize the look and feel of your dashboard
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div>
                    <p className="font-medium text-foreground">Theme</p>
                    <p className="text-sm text-muted-foreground">
                      Choose between light and dark mode
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      Light
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      Dark
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div>
                    <p className="font-medium text-foreground">Compact Mode</p>
                    <p className="text-sm text-muted-foreground">
                      Use a more condensed layout
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div>
                    <p className="font-medium text-foreground">Animations</p>
                    <p className="text-sm text-muted-foreground">
                      Enable smooth transitions and animations
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="billing" className="animate-fade-in">
            <div className="glass-card p-6 space-y-6">
              <div>
                <h3 className="section-title mb-1">Billing & Invoicing</h3>
                <p className="text-sm text-muted-foreground">
                  Configure your default billing settings
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <select
                    id="currency"
                    className="input-field w-full"
                    defaultValue="USD"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxRate">Default Tax Rate (%)</Label>
                  <Input
                    id="taxRate"
                    type="number"
                    defaultValue="10"
                    className="input-field"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentTerms">Payment Terms (Days)</Label>
                  <Input
                    id="paymentTerms"
                    type="number"
                    defaultValue="14"
                    className="input-field"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="invoicePrefix">Invoice Prefix</Label>
                  <Input
                    id="invoicePrefix"
                    defaultValue="INV-"
                    className="input-field"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="btn-primary">Save Settings</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="animate-fade-in">
            <div className="glass-card p-6 space-y-6">
              <div>
                <h3 className="section-title mb-1">Security Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your account security
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-medium text-foreground">Password</p>
                      <p className="text-sm text-muted-foreground">
                        Last changed 30 days ago
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change Password
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div>
                    <p className="font-medium text-foreground">
                      Two-Factor Authentication
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div>
                    <p className="font-medium text-foreground">Session Timeout</p>
                    <p className="text-sm text-muted-foreground">
                      Automatically log out after inactivity
                    </p>
                  </div>
                  <select className="input-field w-32" defaultValue="30">
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="never">Never</option>
                  </select>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
