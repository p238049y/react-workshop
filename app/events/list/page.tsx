import Headline from "@/components/atoms/Headline";
import Card from "@/components/molecules/Card";

const EventList = () => {
    return (
        <div>
             <Headline title="ここはイベント一覧画面です"  />
             <Card
                title="【React入門】絶対に躓かないReact（Next.js）ワークショップ #2"
                description="最近フロントエンドを学び始めた人や、これからフロントエンドを学んで行きたい人向けに、Reactのハンズオンを開催します!"
                startAt="2023-07-27 19:30"
                url="https://okinawa-frontend.connpass.com/event/289268/"
            />
        </div>
    )
}

export default EventList;