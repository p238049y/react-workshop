import Link from "next/link"

type CardProps = {
    url: string
    startAt?: string
    title?: string
    description?: string
}

const Card = (props: CardProps) => {
    return (
        <div className="border">
            <div>
                <span>{props.startAt}</span>
                <h2 >
                    <Link href={props.url} target="_blank">{props.title}</Link>
                </h2>
                <p className="text-gray-500">{props.description}</p>
                <div>
                    <Link href={props.url} target="_blank">詳しく見る</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;