"use client";

import {
    Popover,
    PopoverArrow,
    PopoverContent,
    PopoverBody,
    PopoverTrigger,
    Link,
} from "@chakra-ui/react";

export const CustomPopover = (
    name: string,
    children: string[],
    popoverTrigger: boolean,
    handleEnterEvent: () => void,
    handleLeaveEvent: () => void,
    ) => {

    return (
        <Popover isOpen={popoverTrigger} onOpen={handleEnterEvent} onClose={handleLeaveEvent}>
            <PopoverArrow/>
            <PopoverTrigger><Link fontWeight={"medium"} color={"white"} onMouseEnter={handleEnterEvent}>{name}</Link></PopoverTrigger>
                <PopoverContent onMouseEnter={handleEnterEvent} onMouseLeave={handleLeaveEvent} width={"fit-content"}>
                    <PopoverArrow/>
                    <PopoverBody display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width={"100%"}>
                        {children.map((item, id) =>
                            <Link padding={2} href={`/services/${id}`} key={id}>{item.name}</Link>
                        )}
                    </PopoverBody>
                </PopoverContent>
        </Popover>
    );
}