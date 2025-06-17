import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function PricingSection() {
    return (
        <section id="pricing" className="relative py-16 md:py-20 bg-background">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Simple, Transparent Pricing for CA Firms</h2>
                    <p className="mt-4 text-muted-foreground text-lg">Scale your practice with confidence. Pay only for what you use.</p>
                </div>
                <div className="mt-12 md:mt-16">
                    <div className="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5">
                        <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                            <div className="pb-12 text-center md:pb-0 md:pr-12">
                                <h3 className="text-2xl font-semibold">Finwork Pro</h3>
                                <p className="mt-2 text-lg text-muted-foreground">Perfect for CA firms of any size</p>
                                <div className="mb-6 mt-12">
                                    <span className="inline-block text-6xl font-bold">
                                        <span className="text-4xl">₹</span>500
                                    </span>
                                    <div className="text-muted-foreground text-sm mt-2">per user per month</div>
                                </div>

                                <div className="flex justify-center">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-8">
                                        <Link href="#contact">Start Free Trial</Link>
                                    </Button>
                                </div>

                                <p className="text-muted-foreground mt-8 text-sm">14-day free trial • No setup fees • Cancel anytime</p>
                            </div>
                            <div className="relative">
                                <ul
                                    role="list"
                                    className="space-y-4">
                                    {[
                                        'Complete Client Management System', 
                                        'AI-Powered Tax Calculations', 
                                        'Automated Compliance Tracking', 
                                        'Secure Document Management',
                                        'Multi-user Team Collaboration'
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3">
                                            <Check className="size-4 text-green-600 mt-0.5 shrink-0" />
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                                    <p className="text-muted-foreground text-sm font-medium">Perfect for:</p>
                                    <p className="text-muted-foreground text-xs mt-1">Solo practitioners, small firms, and large CA practices. Scale seamlessly as your team grows.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-16 text-center">
                    <p className="text-muted-foreground text-sm">
                        Need a custom solution for your enterprise? 
                        <Link href="#contact" className="text-primary hover:underline ml-1">Contact our sales team</Link>
                    </p>
                </div>
            </div>
        </section>
    )
} 