import { ConvexError, v } from "convex/values";
import { query } from "./_generated/server";
import { getUserByClerkId } from "./_utils";

export const get = query({
    args: {
        id: v.id("conversations")
    }, handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity()

        if (!identity) {
            throw new Error("Unauthorized")
        }

        const currentUser = await getUserByClerkId({
            ctx, clerkId: identity.subject,
        })

        if (!currentUser) {
            return;
        }

        const conversation = await ctx.db.get(args.id)

        if(!conversation) {
            throw new ConvexError("convooo not founddd")
        }

        const membership = await ctx.db
        .query("conversationMembers")
        .withIndex("by_memberId_conversationId", 
            q => q.eq("memberId",currentUser._id).eq("conversationId", conversation._id)
        ).unique()
    },
});
