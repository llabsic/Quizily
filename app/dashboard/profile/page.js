import {Avatar, Button, Chip, Label, Surface, Typography} from "@heroui/react";
import {Edit, Fire, Flame} from "@mynaui/icons-react";
import {Profile} from "@/config/profile"

export default function Page() {

    return (
        <div className={"grid grid-cols-5 gap-3"}>
            <div className={"col-span-3 flex flex-col gap-3"}>
                <div className="flex items-center justify-between">
                    <div className="flex items-start flex-col">
                        <div className="rounded-xl h-36 overflow-hidden relative">
                            <img
                                className="object-cover object-top w-full"
                                src="https://img.magnific.com/free-photo/abstract-gradient-background-with-grain-texture_84443-2838.jpg?semt=ais_hybrid&w=740&q=80"
                                alt="Mountain"
                            />
                            <Button variant={"tertiary"} isIconOnly
                                    className={"absolute top-2 right-2"}><Edit/></Button>
                        </div>
                        <div className={"flex justify-between"}>
                            <Avatar className="-mt-16 ml-8 ring-3 h-28 w-28 ring-background rounded-full">
                                <Avatar.Image
                                    alt="Alex"
                                    src="/avatars/avatar-1.png"
                                />
                                <Avatar.Fallback>SJ</Avatar.Fallback>
                            </Avatar>
                            <div className={"flex gap-2 justify-start items-center pl-3"}>
                                <Chip size={"lg"} color={"accent"} variant={"primary"}>Level 12</Chip>
                                <Chip size={"lg"} color={"danger"} variant={"soft"}><Fire className={"text-danger size-5"} />Streaks {Profile.streaks.filter((itm)=> itm == 1).length}</Chip>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Typography.Heading level={3}>Alex John</Typography.Heading>
                            <Typography.Paragraph>alex.co@ins.edu</Typography.Paragraph>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"col-span-2"}>
                <div>
                    <Typography.Heading level={5}>Streaks</Typography.Heading>
                    <Surface className="flex flex-row items-center justify-start gap-3 flex-wrap" variant="default">
                        {
                            Profile.streaks.map((itm, idx) => (
                                <div>
                                    <div
                                        className={"rounded-t-xl bg-accent-hover flex items-center justify-center pt-1 px-2"}>
                                        <p className={"text-xs text-background"}>March {12 + idx + 1}</p>
                                    </div>
                                    <div
                                        className={"bg-accent-soft rounded-b-xl p-2 flex items-center justify-center *:size-8"}
                                        key={`${itm}-${idx}`}>
                                        {itm == 1 ? <Fire className={"text-danger"}/> :
                                            <Flame className={"text-muted"}/>}
                                    </div>
                                </div>
                            ))
                        }
                    </Surface>
                </div>
                <div>
                    <Typography.Heading level={5}>Progress</Typography.Heading>
                    <div className={"w-full grid grid-cols-3 gap-2"}>
                        <Surface variant={"default"}></Surface>
                        <Surface variant={"default"}></Surface>
                        <Surface variant={"default"}></Surface>
                    </div>
                </div>

            </div>
        </div>
    )
}