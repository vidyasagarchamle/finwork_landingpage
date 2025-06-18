import { cn } from '../lib/utils'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn('flex items-center space-x-2', className)}>
            {/* Simple Cube Icon */}
            <svg
                width="28"
                height="28"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0">
                <rect
                    x="2"
                    y="2"
                    width="6"
                    height="6"
                    fill={uniColor ? 'currentColor' : 'url(#logo-gradient)'}
                />
                <rect
                    x="10"
                    y="2"
                    width="6"
                    height="6"
                    fill={uniColor ? 'currentColor' : 'url(#logo-gradient)'}
                    opacity="0.7"
                />
                <rect
                    x="2"
                    y="10"
                    width="6"
                    height="6"
                    fill={uniColor ? 'currentColor' : 'url(#logo-gradient)'}
                    opacity="0.7"
                />
                <rect
                    x="10"
                    y="10"
                    width="6"
                    height="6"
                    fill={uniColor ? 'currentColor' : 'url(#logo-gradient)'}
                    opacity="0.4"
                />
                <defs>
                    <linearGradient
                        id="logo-gradient"
                        x1="0"
                        y1="0"
                        x2="20"
                        y2="20"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9B99FE" />
                        <stop
                            offset="1"
                            stopColor="#2BC8B7"
                        />
                    </linearGradient>
                </defs>
            </svg>
            
            {/* Finwork Text */}
            <span className="text-xl font-bold tracking-tight text-foreground transform -translate-y-0.5">
                Finwork
            </span>
        </div>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('shrink-0', className)}>
            <rect
                x="2"
                y="2"
                width="6"
                height="6"
                fill={uniColor ? 'currentColor' : 'url(#logo-icon-gradient)'}
            />
            <rect
                x="10"
                y="2"
                width="6"
                height="6"
                fill={uniColor ? 'currentColor' : 'url(#logo-icon-gradient)'}
                opacity="0.7"
            />
            <rect
                x="2"
                y="10"
                width="6"
                height="6"
                fill={uniColor ? 'currentColor' : 'url(#logo-icon-gradient)'}
                opacity="0.7"
            />
            <rect
                x="10"
                y="10"
                width="6"
                height="6"
                fill={uniColor ? 'currentColor' : 'url(#logo-icon-gradient)'}
                opacity="0.4"
            />
            <defs>
                <linearGradient
                    id="logo-icon-gradient"
                    x1="0"
                    y1="0"
                    x2="20"
                    y2="20"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9B99FE" />
                    <stop
                        offset="1"
                        stopColor="#2BC8B7"
                    />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center space-x-2', className)}>
            {/* Simple Cube Icon - Stroke Version */}
            <svg
                width="28"
                height="28"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0">
                <rect
                    x="2.5"
                    y="2.5"
                    width="5"
                    height="5"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                />
                <rect
                    x="10.5"
                    y="2.5"
                    width="5"
                    height="5"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.7"
                />
                <rect
                    x="2.5"
                    y="10.5"
                    width="5"
                    height="5"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.7"
                />
                <rect
                    x="10.5"
                    y="10.5"
                    width="5"
                    height="5"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.4"
                />
            </svg>
            
            {/* Finwork Text */}
            <span className="text-xl font-bold tracking-tight text-foreground transform -translate-y-0.5">
                Finwork
            </span>
        </div>
    )
}

