import QuizBlock from "@/components/custom/quiz-component";
import { templatesData, Users } from "@/config/data";
import { Avatar, Card } from "@heroui/react";
import { TextHeader } from "@/components/custom/heading.minor";

export default function Page() {
    const userMap = new Map(Users.map((user) => [user.id, user]));

    return (
        <div className="space-y-3">
            <TextHeader title="Templates" description="Discover MCQs templates created by others" />
            <div className="grid grid-cols-4 w-full gap-2">
                {templatesData.map((item) => {
                    const author = userMap.get(item.userId);

                    return (
                        <Card key={item.id} className="cursor-pointer">
                            <Card.Header>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Description>{item.description}</Card.Description>
                            </Card.Header>
                            <Card.Footer className="gap-1">
                                <Avatar aria-label={`${author?.name || "User"}'s profile picture`} className="size-5">
                                    <Avatar.Image
                                        alt={`${author?.name || "User"}'s avatar`}
                                        src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/red.jpg"
                                    />
                                    <Avatar.Fallback className="text-xs">
                                        {author?.name?.slice(0, 2).toUpperCase() || "U"}
                                    </Avatar.Fallback>
                                </Avatar>
                                <span className="text-xs">{author?.name || "Unknown User"}</span>
                            </Card.Footer>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}