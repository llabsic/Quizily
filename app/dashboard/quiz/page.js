"use client";

import { useRef, useState, useEffect } from "react";
import { Card, Button } from "@heroui/react";
import { LinkTwo, ArrowUp } from "@mynaui/icons-react";

export default function Page() {
    const [value, setValue] = useState("");
    const textareaRef = useRef(null);

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, [value]);

    return (
        <div className="w-full min-h-svh flex items-center justify-center p-4">
            <Card className={"min-w-2xl"}>
                <Card.Header className="flex flex-col h-auto">
                    <textarea
                        ref={textareaRef}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Type your message..."
                        rows={1}
                        className="w-full text-sm resize-none overflow-hidden outline-none bg-transparent"
                    />
                </Card.Header>
                <Card.Footer>
                    <div className="w-full flex items-center justify-between">
                        <Button isIconOnly size="lg">
                            <LinkTwo />
                        </Button>

                        <Button isIconOnly size="lg">
                            <ArrowUp />
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
}