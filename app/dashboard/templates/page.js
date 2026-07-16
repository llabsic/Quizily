import QuizBlock from "@/components/custom/quiz-component";
import {templatesData} from "@/config/data";
import {Avatar, Card} from "@heroui/react";
import {TextHeader} from "@/components/custom/heading.minor";

export default function Page() {

    return (
        <div className={"py-6 space-y-3"}>
            <TextHeader title={"Templates"} description={"Discover MCQs Templates created by others and Ai"}/>

            <div className={"grid grid-cols-4 w-full gap-2"}>
                {
                    templatesData.map((item, index) => (
                        <Card key={index} className={"cursor-pointer"}>
                            <Card.Header>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Description>{item.description}</Card.Description>
                            </Card.Header>
                            <Card.Footer className={"gap-1"}>
                                <Avatar aria-label="Martha's profile picture" className="size-5">
                                    <Avatar.Image
                                        alt="Martha's avatar"
                                        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
                                    />
                                    <Avatar.Fallback className="text-xs">IH</Avatar.Fallback>
                                </Avatar>
                                <span className="text-xs">Abdul</span>
                            </Card.Footer>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}
