import {Avatar, Card, Label, Chip, Skeleton, Surface, Description} from "@heroui/react";
import {Ranking} from "@/config/ranking";
import { ChevronUp,ChevronDown } from "@mynaui/icons-react";

export default function Page() {
    const SortedRanks = [...Ranking].sort((a, b) => b.rank - a.rank);

    const getRankStyles = (rank) => {
        switch (rank) {
            case 1:
                return "-translate-y-6 border-primary shadow-lg ring-danger";
            case 2:
                return "ring-warning";
            default:
                return "-translate-y-3 ring-success";
        }
    };

    return (
        <div className="flex gap-6 items-start">
            <div className="flex w-full flex-col gap-6">
                {/* Top 3 Ranks - Unchanged */}
                <div className="flex flex-1 flex-row items-end justify-center gap-2 h-full min-w-sm pt-6">
                    {SortedRanks.slice(0, 3).map((item, idx) => (
                        <Card
                            key={item.id}
                            className={`min-w-[200px] gap-2 transition-all relative ${getRankStyles(idx)}`}
                        >
                            <span
                                className={`font-stack-sans-notch text-7xl absolute bottom-4 right-4 ${idx == 0 ? "text-success-hover" : idx == 1 ? "text-danger-hover" : "text-accent-hover"}`}
                            >
                                {idx == 0 ? "2" : idx == 1 ? "1" : "3"}
                            </span>
                            <div className="flex items-start justify-between">
                                <img
                                    alt="Indie Hackers community"
                                    className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
                                    loading="lazy"
                                    src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
                                />
                                <Chip
                                    className="font-stack-sans-notch"
                                    size="lg"
                                    variant="primary"
                                    color={idx == 0 ? "success" : idx == 1 ? "danger" : "accent"}
                                >
                                    #{item.rank}
                                </Chip>
                            </div>
                            <Card.Header>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Description>{item.name.replaceAll(" ", "-").toLowerCase() + idx}</Card.Description>
                            </Card.Header>
                            <Card.Footer className="flex gap-2">
                                <Chip variant={"soft"} color={item.status[0] == "-"? "danger": "success"}>{item.status[0] == "+"? <ChevronUp size={"16"} />: <ChevronDown size={"16"} />}{item.status}</Chip>
                            </Card.Footer>
                        </Card>
                    ))}
                </div>

                {/* Remaining List Skeleton UI */}
                <div className="w-full flex flex-col gap-2">
                    {Ranking.slice(3, 10).map((itm, idx) => (
                        <Surface
                            key={idx}
                            variant="default"
                            className="flex items-center justify-between min-w-sm min-h-10 p-2"
                        >
                            <div className="flex items-center gap-2 max-w-sm">
                                <Avatar>
                                    <Avatar.Image src={"/avatars/avatar-1.png"}/>
                                </Avatar>
                                <div className={"flex flex-col"}>
                                    <Label>{itm.name}</Label>
                                    <Description>{itm.name.replaceAll(" ", "-").toLowerCase() + idx}</Description>
                                </div>
                            </div>
                            <div className={"flex gap-2 items-center"}>
                                <Chip variant={"soft"} color={itm.status[0] == "-"? "danger": "success"}>{itm.status[0] == "+"? <ChevronUp size={"16"} />: <ChevronDown size={"16"} />}{itm.status}</Chip>
                                <Chip variant={"soft"} color={"accent"}>{itm.rank}</Chip>
                            </div>
                        </Surface>
                    ))}
                </div>
            </div>

            {/* Sidebar Skeleton UI */}
            <Surface
                variant="default"
                className="min-w-sm shrink-0 rounded-2xl border border-default-100 p-4 flex flex-col gap-4"
            >
                <Skeleton className="h-5 w-32 rounded-md"/>
                <Skeleton className="h-24 w-full rounded-xl"/>
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-full rounded"/>
                    <Skeleton className="h-4 w-4/5 rounded"/>
                    <Skeleton className="h-4 w-2/3 rounded"/>
                </div>
            </Surface>
        </div>
    );
}