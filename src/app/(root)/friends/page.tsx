import ConversationFallback from "@/components/ui/shared/Conversation/ConversationFallback";
import ItemList from "@/components/ui/item-list/ItemList";
import React from "react";
import AddFriendDialog from "./_components/AddFriendDialog";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Loader2 } from "lucide-react";

type Props = {};

const FriendsPage = (props: Props) => {
    const requests = useQuery(api.requests.get)

    return (
        <div>
            <ItemList title="Friends" action={<AddFriendDialog />}>
                {requests ? (
                    requests.length === 0 ? (
                        <p className="w-full h-full flex item-center justify-center">
                            No friend requests found
                        </p>
                    ) : (
                        requests.map((request) => {
                            return (
                                <Request
                                    key={request.request._id}
                                    id={request.request._id}
                                    imageUrl={request.sender.imageUrl}
                                    username={request.sender.username}
                                    email={request.sender.email}
                                />
                            );
                        })
                    )
                ) : (

                    <Loader2 className="h-8 w-8" />
                )}
            </ItemList>
            <ConversationFallback />
        </div>
    );
};

export default FriendsPage;