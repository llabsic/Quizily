import {Button} from "@heroui/react";

export default function Page(){

    return(
        <div className={"flex items-center "}>
            <div className={"flex-1"}>hello</div>
            <div className={"flex flex-col gap-2 justify-center bg-background-secondary"}>
                <Button>Streaks</Button>
                <Button>Quick Answers</Button>
                <Button>Top Contributors</Button>
            </div>
        </div>
    )
}