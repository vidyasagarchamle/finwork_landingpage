import { Calculator, FileText, Users, Shield, BarChart3, Zap } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section id="features" className="py-16 md:py-20 bg-background">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Built for Modern CA Practices</h2>
                    <p className="text-muted-foreground text-lg">Finwork brings together everything you need to run your practice efficiently. From client management to tax compliance, we&apos;ve got you covered.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl border border-zinc-800 rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3 bg-zinc-950 shadow-lg">
                    <div className="space-y-3 p-8 border-r border-b border-zinc-800 sm:border-r lg:border-r">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-lg">
                                <Calculator className="size-5 text-primary" />
                            </div>
                            <h3 className="text-base font-semibold text-white">Smart Tax Management</h3>
                        </div>
                        <p className="text-sm text-gray-400">Automate tax calculations, track deadlines, and ensure compliance with the latest regulations.</p>
                    </div>
                    
                    <div className="space-y-3 p-8 border-r border-b border-zinc-800 sm:border-r-0 lg:border-r">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-lg">
                                <Users className="size-5 text-primary" />
                            </div>
                            <h3 className="text-base font-semibold text-white">Client Relationship Management</h3>
                        </div>
                        <p className="text-sm text-gray-400">Manage client information, communication history, and project progress in one place.</p>
                    </div>
                    
                    <div className="space-y-3 p-8 border-b border-zinc-800 sm:border-r lg:border-r-0">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-lg">
                                <FileText className="size-5 text-primary" />
                            </div>
                            <h3 className="text-base font-semibold text-white">Document Management</h3>
                        </div>
                        <p className="text-sm text-gray-400">Securely store, organize, and share documents with clients and team members.</p>
                    </div>
                    
                    <div className="space-y-3 p-8 border-r border-zinc-800 sm:border-r lg:border-r sm:border-b-0">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-lg">
                                <BarChart3 className="size-5 text-primary" />
                            </div>
                            <h3 className="text-base font-semibold text-white">Practice Analytics</h3>
                        </div>
                        <p className="text-sm text-gray-400">Get insights into your practice performance, client profitability, and growth opportunities.</p>
                    </div>
                    
                    <div className="space-y-3 p-8 border-r border-zinc-800 sm:border-r-0 lg:border-r sm:border-b-0">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-lg">
                                <Shield className="size-5 text-primary" />
                            </div>
                            <h3 className="text-base font-semibold text-white">Bank-Grade Security</h3>
                        </div>
                        <p className="text-sm text-gray-400">Your data is protected with enterprise-level security and compliance standards.</p>
                    </div>
                    
                    <div className="space-y-3 p-8 sm:border-b-0 lg:border-r-0">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-lg">
                                <Zap className="size-5 text-primary" />
                            </div>
                            <h3 className="text-base font-semibold text-white">AI-Powered Automation</h3>
                        </div>
                        <p className="text-sm text-gray-400">Leverage AI to automate routine tasks and focus on high-value client work.</p>
                    </div>
                </div>
            </div>
        </section>
    )
} 