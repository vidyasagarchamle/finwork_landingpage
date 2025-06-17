import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CTASection() {
    return (
        <section id="contact" className="py-16 md:py-20 bg-background">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Ready to Transform Your Practice?</h2>
                    <p className="mt-4 text-muted-foreground">Start streamlining your CA firm operations today with our intelligent practice management platform.</p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="#contact">
                                <span>Start Free Trial</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="#demo">
                                <span>Book Demo</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
} 