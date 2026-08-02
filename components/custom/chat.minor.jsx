import {notifications} from "@/config/notifications";
import {
    Button,
    Description,
    Drawer,
    Label, Surface, Avatar, Chip, Input
} from "@heroui/react";
import {Send} from "@mynaui/icons-react";
import {ChatMessages} from "@mynaui/icons-react";
import {Chats} from "@/config/chats"

export function GlobalChat() {
    return (
        <Drawer>
            <Button variant="tertiary" isIconOnly size="lg">
                <ChatMessages/>
            </Button>
            <Drawer.Backdrop>
                <Drawer.Content placement="right">
                    <Drawer.Dialog>
                        <Drawer.Header>
                            <Drawer.Heading>Gobal Chat</Drawer.Heading>
                        </Drawer.Header>
                        <Drawer.Body className="px-0 space-y-3">
                            {
                                Chats.map((itm, idx) => (
                                    <Surface variant={"secondary"}
                                             className={"rounded-xl p-2 flex flex-row gap-2 relative"}>
                                        <Avatar size={"sm"}>
                                            <Avatar.Image src={"/avatars/avatar-1.png"}/>
                                        </Avatar>
                                        <div className={"flex flex-col w-full"}>
                                            <Label>{itm.name}</Label>
                                            <Description>{itm.message}</Description>
                                        </div>
                                    </Surface>
                                ))
                            }
                        </Drawer.Body>
                        <Drawer.Footer>
                            <div className={"w-full flex flex-col gap-1"}>
                                <div className="flex w-full gap-2">
                                    <Input type={"text"} variant={"secondary"} className={"w-full flex-1"}/>
                                    <Button className={"shrink-0"} isIconOnly={true}><Send/></Button>
                                </div>
                            </div>
                        </Drawer.Footer>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    );
}
