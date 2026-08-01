import {Avatar, Button, Chip, Surface, Typography, Label, ProgressBar, Table, Description} from "@heroui/react";
import {Controller, Edit, Fire, Flame, WinkGhost, TrendingUp} from "@mynaui/icons-react";
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
                                <Chip size={"lg"} color={"danger"} variant={"soft"}><Fire
                                    className={"text-danger size-5"}/>Streaks {Profile.streaks.filter((itm) => itm == 1).length}
                                </Chip>
                                <Chip size={"lg"} color={"accent"} variant={"soft"}><WinkGhost
                                    className={"size-5"}/>{Profile.xp}</Chip>
                            </div>
                        </div>
                        <div className="mt-2">
                            <Typography.Heading level={3}>Alex John</Typography.Heading>
                            <Typography.Paragraph>alex.co@ins.edu</Typography.Paragraph>
                        </div>
                        <div className={"grid grid-cols-10 gap-2 *: h-full w-full mt-3"}>
                            <Surface className={"flex flex-col items-center bg-accent-soft ring-1 ring-accent"}>
                                <Label>Wins</Label>
                                <p className={"font-stack-sans-notch font-bold text-3xl"}>{Profile.quizzesWon}</p>
                            </Surface>
                            <Surface className={"flex flex-col items-center bg-accent-soft ring-1 ring-accent"}>
                                <Label>Retries</Label>
                                <p className={"font-stack-sans-notch font-bold text-3xl"}>{Profile.retries}</p>
                            </Surface>
                            <Surface
                                className={"flex flex-col items-center bg-danger-soft ring-1 ring-danger col-span-2"}>
                                <Label>Max Streaks</Label>
                                <div className={"flex items-center gap-1"}>
                                    <Fire className={"size-7 text-danger"}/>
                                    <p className={"font-stack-sans-notch font-bold text-3xl"}>{Profile.maxStreaks}</p>
                                </div>
                            </Surface>
                            <Surface
                                className={"flex flex-col items-center bg-warning-soft ring-1 ring-warning justify-center"}>
                                <img src={"/mock/rank.svg"} className={"size-10"} alt="Alex John"/>
                            </Surface>
                            <Surface
                                className={"flex flex-col items-center bg-danger-soft ring-1 ring-danger col-span-2"}>
                                <Label>Matches Played</Label>
                                <div className={"flex items-center gap-1"}>
                                    <Controller className={"size-7 text-danger"}/>
                                    <p className={"font-stack-sans-notch font-bold text-3xl"}>{Profile.matchesPlayed}</p>
                                </div>
                            </Surface>
                            <Surface
                                className={"flex flex-col items-start bg-danger-soft ring-1 ring-danger col-span-3"}>
                                <Label>Top Leaderboard Rank</Label>
                                <div className={"flex items-center gap-1"}>
                                    <TrendingUp className={"size-7 text-danger"}/>
                                    <p className={"font-stack-sans-notch font-bold text-3xl"}>120,112</p>
                                </div>
                            </Surface>
                        </div>
                        <div className={"w-full"}>
                            <div className="mt-2">
                                <Typography.Heading level={3}>Recent Stats</Typography.Heading>
                                <Typography.Paragraph>Status of Quizes recently played</Typography.Paragraph>
                                <Table className={"mt-1"}>
                                    <Table.ScrollContainer>
                                        <Table.Content aria-label="Team members" className={"w-full"}>
                                            <Table.Header>
                                                <Table.Column isRowHeader>Match</Table.Column>
                                                <Table.Column>Category</Table.Column>
                                                <Table.Column>Status</Table.Column>
                                                <Table.Column>Competitor</Table.Column>
                                            </Table.Header>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell>#1</Table.Cell>
                                                    <Table.Cell>Tech</Table.Cell>
                                                    <Table.Cell>
                                                        <Chip size={"sm"} color={"success"} variant={"primary"}>Won</Chip>
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        <div className={"flex flex-row gap-1 items-center"}>
                                                            <Avatar size={"sm"}>
                                                                <Avatar.Fallback>AE</Avatar.Fallback>
                                                            </Avatar>
                                                            <div className={"flex flex-col"}>
                                                                <Label>Victor</Label>
                                                                <Description>Rank #1,281</Description>
                                                            </div>
                                                        </div>
                                                    </Table.Cell>
                                                </Table.Row>

                                            </Table.Body>
                                        </Table.Content>
                                    </Table.ScrollContainer>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"col-span-2 space-y-1"}>
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
                        <Surface variant={"default"} className={"flex flex-col gap-2 justify-start"}>
                            <Label>Rank</Label>
                            <img className={"size-24 self-center mb-2"} src={"/mock/rank.svg"} alt={"rank"}/>
                        </Surface>
                        <Surface variant={"default"} className={"flex flex-col"}>
                            <Label>Top Friends</Label>
                            <div className={"flex items-center justify-center h-full gap-1 w-full"}>
                                <Avatar size={"md"} className={"mt-2"}>
                                    <Avatar.Image src={"/avatars/avatar-2.png"}/>
                                </Avatar>
                                <Avatar size={"lg"}>
                                    <Avatar.Image src={"/avatars/avatar-3.png"}/>
                                </Avatar>
                                <Avatar size={"md"} className={"mt-2"}>
                                    <Avatar.Image src={"/avatars/avatar-4.png"}/>
                                </Avatar>
                            </div>
                            <div className={"flex items-center justify-center h-full gap-1 w-full"}>
                                <Avatar size={"md"}>
                                    <Avatar.Image src={"/avatars/avatar-1.png"}/>
                                </Avatar>
                                <Avatar size={"md"}>
                                    <Avatar.Image src={"/avatars/avatar-2.png"}/>
                                </Avatar>
                            </div>
                        </Surface>
                        <Surface variant={"default"} className={"flex flex-col gap-2"}>
                            <Label>Last Match</Label>
                            <Surface variant={"default"}
                                     className={"ring-1 p-2 ring-accent bg-accent-soft flex flex-col"}>
                                <div className={"w-full flex items-center gap-1 justify-between"}>
                                    <Avatar size={"sm"}>
                                        <Avatar.Image src={"/avatars/avatar-1.png"}/>
                                    </Avatar>
                                    <Typography.Heading level={4}
                                                        className={"font-stack-sans-notch text-accent"}>+34</Typography.Heading>
                                </div>
                                <Chip size={"sm"} variant={"primary"} color={"accent"}
                                      className={"self-center"}>Won</Chip>
                                <div className={"w-full flex flex-row-reverse items-center gap-1 justify-between"}>
                                    <Avatar size={"sm"}>
                                        <Avatar.Image src={"/avatars/avatar-2.png"}/>
                                    </Avatar>
                                    <Typography.Heading level={4}
                                                        className={"font-stack-sans-notch text-danger"}>-16</Typography.Heading>
                                </div>
                            </Surface>
                        </Surface>
                    </div>
                </div>

            </div>
        </div>
    )
}