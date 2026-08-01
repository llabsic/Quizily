import {TextHeader} from "@/components/custom/heading.minor";
import {Avatar, Table, Label, Description} from "@heroui/react";

export default function Page() {

    return (
        <div className={"flex flex-col gap-2"}>
            <TextHeader title={"History"}/>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-[600px]">
                        <Table.Header>
                            <Table.Column isRowHeader>Name</Table.Column>
                            <Table.Column>Role</Table.Column>
                            <Table.Column>Status</Table.Column>
                            <Table.Column>Email</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell className={"flex flex-row gap-2"}>
                                    <Avatar>
                                        <Avatar.Fallback>AL</Avatar.Fallback>
                                    </Avatar>
                                    <span className={"flex flex-col"}>
                                        <Label>ALI</Label>
                                        <Description>Bronze</Description>
                                    </span>
                                </Table.Cell>
                                <Table.Cell>CEO</Table.Cell>
                                <Table.Cell>Active</Table.Cell>
                                <Table.Cell>kate@acme.com</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>John Smith</Table.Cell>
                                <Table.Cell>CTO</Table.Cell>
                                <Table.Cell>Active</Table.Cell>
                                <Table.Cell>john@acme.com</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Sara Johnson</Table.Cell>
                                <Table.Cell>CMO</Table.Cell>
                                <Table.Cell>On Leave</Table.Cell>
                                <Table.Cell>sara@acme.com</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Michael Brown</Table.Cell>
                                <Table.Cell>CFO</Table.Cell>
                                <Table.Cell>Active</Table.Cell>
                                <Table.Cell>michael@acme.com</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    )
}