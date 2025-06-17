import { Logo } from '@/components/logo'
import Link from 'next/link'

const links = [
    {
        group: 'Product',
        items: [
            {
                title: 'Features',
                href: '#features',
            },
            {
                title: 'Solutions',
                href: '#solutions',
            },
            {
                title: 'Pricing',
                href: '#pricing',
            },
            {
                title: 'Contact',
                href: '#contact',
            },
        ],
    },
    {
        group: 'For CA Firms',
        items: [
            {
                title: 'Solo Practitioners',
                href: '#solutions',
            },
            {
                title: 'Small Firms',
                href: '#solutions',
            },
            {
                title: 'Large Practices',
                href: '#solutions',
            },
            {
                title: 'Tax Specialists',
                href: '#features',
            },
            {
                title: 'Practice Management',
                href: '#features',
            },
        ],
    },
    {
        group: 'Resources',
        items: [
            {
                title: 'Help Center',
                href: '#contact',
            },
            {
                title: 'Documentation',
                href: '#contact',
            },
            {
                title: 'Pricing Guide',
                href: '#pricing',
            },
            {
                title: 'Feature Overview',
                href: '#features',
            },
        ],
    },
    {
        group: 'Company',
        items: [
            {
                title: 'About Us',
                href: '#about',
            },
            {
                title: 'Contact',
                href: '#contact',
            },
            {
                title: 'Support',
                href: '#contact',
            },
        ],
    },
]

export default function FooterSection() {
    return (
        <footer id="about" className="border-t bg-background pt-16">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-5">
                    <div className="md:col-span-2">
                        <Link
                            href="/"
                            aria-label="go home"
                            className="block size-fit">
                            <Logo />
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground max-w-sm">
                            Empowering chartered accountants with intelligent practice management solutions. 
                            Streamline your workflow, enhance client service, and grow your practice.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="space-y-4 text-sm">
                                <span className="block font-medium">{link.group}</span>
                                {link.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-muted-foreground hover:text-primary block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
                    <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
                        © {new Date().getFullYear()} Finwork. All rights reserved.
                    </span>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        <Link href="#privacy" className="text-muted-foreground hover:text-primary">
                            Privacy Policy
                        </Link>
                        <Link href="#terms" className="text-muted-foreground hover:text-primary">
                            Terms of Service
                        </Link>
                        <Link href="#security" className="text-muted-foreground hover:text-primary">
                            Security
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
} 