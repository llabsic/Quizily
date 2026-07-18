import {Avatar, Button, ButtonGroup, Popover} from "@heroui/react";
import {DribbbleLogoIcon, ThreadsLogoIcon} from "@phosphor-icons/react";
import {Fire, Gift} from "@mynaui/icons-react";
import Link from "next/link";

export function AvaterProfile() {
    return (
        <Popover>
            <Button isIconOnly>
                <Avatar>
                    <Avatar.Fallback className="bg-accent dark:bg-accent text-background">
                        AQ
                    </Avatar.Fallback>
                </Avatar>
            </Button>
            <Popover.Content className="w-[320px] mt-3" placement="left">
                <Popover.Dialog>
                    <Popover.Arrow/>
                    <Popover.Heading>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start flex-col">
                                <div className="rounded-lg h-12 overflow-hidden">
                                    <img
                                        className="object-cover object-top w-full"
                                        src="https://img.magnific.com/free-photo/abstract-gradient-background-with-grain-texture_84443-2838.jpg?semt=ais_hybrid&w=740&q=80"
                                        alt="Mountain"
                                    />
                                </div>
                                <Avatar size="lg" className="-mt-6 ml-4 ring-2 ring-white">
                                    <Avatar.Image
                                        alt="Alex"
                                        src="/avatars/avatar-1.png"
                                    />
                                    <Avatar.Fallback>SJ</Avatar.Fallback>
                                </Avatar>
                                <div className="mt-2">
                                    <p className="text-base">Alex John</p>
                                    <p className="text-muted text-sm">alex.co@ins.edu</p>
                                </div>
                            </div>
                        </div>
                    </Popover.Heading>
                    <div
                        className={"w-full grid grid-cols-3 *:bg-accent-soft *:ring-1 *:ring-accent *:rounded-xl h-16 gap-2 mt-2"}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="mt-2 flex justify-between gap-2">
                        <ButtonGroup variant="tertiary" size={"sm"}>
                            <Button isIconOnly>
                                <Gift/>
                            </Button>
                            <Button>
                                <Fire/>
                                32
                            </Button>
                        </ButtonGroup>
                        <Link href={"/dashboard/profile"} className={"w-full"}>
                            <Button fullWidth size={"sm"}>Profile</Button>
                        </Link>
                    </div>
                </Popover.Dialog>
            </Popover.Content>
        </Popover>
    );
}
