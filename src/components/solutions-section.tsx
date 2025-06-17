import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Calculator, Users, Bot } from 'lucide-react'
import { ReactNode } from 'react'

export default function SolutionsSection() {
    return (
        <section id="solutions" className="bg-zinc-950 py-16 md:py-32 dark:bg-zinc-950">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-white">Built for Modern CA Practices</h2>
                    <p className="mt-4 text-gray-300">Everything you need to streamline your chartered accountancy practice and serve clients better.</p>
                </div>
                <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16 bg-zinc-950 border-zinc-800">
                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Calculator
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-white">Smart Tax Management</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-gray-400">Automate complex tax calculations, track compliance deadlines, and ensure accuracy with our intelligent tax management system.</p>
                        </CardContent>
                    </div>

                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Users
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-white">Complete Client Management</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm text-gray-400">Manage client relationships, track communication history, and organize documents in one comprehensive platform.</p>
                        </CardContent>
                    </div>

                    <div className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Bot
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-white">AI-Powered Insights</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm text-gray-400">Leverage artificial intelligence for predictive analytics, risk assessment, and automated compliance monitoring.</p>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="bg-radial to-background absolute inset-0 from-transparent to-75%"
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
) 