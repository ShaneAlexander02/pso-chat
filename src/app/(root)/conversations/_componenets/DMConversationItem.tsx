import { Link, User } from "lucide-react";
import { Id } from "../../../../../convex/_generated/dataModel"
import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props ={
    id: Id<"conversations">;
    imageUrl: string;
    username: string;
};

const DMConversationItem = ({id, imageUrl, username}: Props) => {
    return <Link href="/conversations/${id}" >
        <Card className="p-2 flex-row items-center gap-4 truncate">
            <div className="flex flex-row items-center gap-4 truncate">
                <Avatar>
                    <AvatarImage src={imageUrl}/>
                    <AvatarFallback>
                        <User />
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col truncate">
                {username}<h4>
                    <p className="text-sm text-muted-foreground truncate">
                        start the conversationnnn
                    </p>
                </h4>
                </div>
            </div>
        </Card>
    </Link>
};

export default DMConversationItem