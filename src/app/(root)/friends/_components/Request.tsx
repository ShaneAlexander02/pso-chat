import React from "react";
import { Id } from "../../../../../convex/_generated/dataModel";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
    id: Id<"requests">;
    imageURL: string;
    username: string;
    email: string;
};

const Request = ({ id, imageURL, username, email }: Props) => {
    return <Card className="w-full p-2 flex flex-row items-center justify-between gap-2">
        <div className="flex item-center gap-4 truncate">
            <Avatar>
                <AvatarImage src={imageURL} />
                <AvatarFallback>
                    <User />
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col truncate">
                <h4 className="truncate">{username}</h4>
                <p className="text-xstext-muted-foreground truncate">{email}</p>
            </div>
        </div>
        <div className="flex-item-center gap-2">
            <Button size="icon" onClick={() => { }}>
                <Check />
            </Button>
            <Button size="icon" variant={"destructive"} onClick={() => { }}>
                <X className="h-4 w-4" />
            </Button>
        </div>
    </Card>
}

export default Request 