import { Countdown } from '@components/Countdown'
import { ProgressBar } from '@components/ProgressBar'
import { StorySummary } from '@components/StorySummary'
import { VisitorCounter } from '@/components/VisitorCounter'
import { SocialShare } from '@/components/SocialShare'

export const HomePage = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center px-4 gap-8 md:gap-16">
            <Countdown />
            <ProgressBar />
            <StorySummary />
            <VisitorCounter />
            <SocialShare />
        </div>
    )
}