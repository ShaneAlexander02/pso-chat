"use client";

import React from 'react';
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import { Dialog, DialogContent } from '@radix-ui/react-dialog';
import { Tooltip } from '@radix-ui/react-tooltip';
import { TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useMutationState } from '@/hooks/useMutationState';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';
import { api } from '../../../../../convex/_generated/api';
import { toast } from 'sonner';
import { ConvexError } from 'convex/values';


const addFriendFormSchema = z.object({
    email: z
        .string()
        .min(1, { message: "This field can't be empty" })
        .email("please enter a valid email"),
});

const AddFriendDialog = () => {
    const {mutate: createRequest, pending} = useMutationState(api.request.create);

    const form = useForm<z.infer<typeof addFriendFormSchema>>({
        resolver: zodResolver(addFriendFormSchema),
        defaultValues: {
            email: "",
        },
    });

    const handlesubmit = async(values: z.infer<typeof addFriendFormSchema>) => {
        await createRequest({email: values.email}).then(() => {
            form.reset();
            toast.success("Friend request sent!");
        })
        .catch(error => {
            toast.error(error instanceof ConvexError ? error.data : "unexpected error occured"
            );
        });
    }; 
     
    return (
        <Dialog>
            <Tooltip>
                <TooltipTrigger>
                    <Button size="icon" variant="outline">
                        <DialogTrigger>
                            <UserPlus />
                        </DialogTrigger>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add Friend</p>
                </TooltipContent>
            </Tooltip>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Friend</DialogTitle>
                    <DialogDescription>
                        Send a request to connect with your friends! 
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handlesubmit)}className="space-y-8">
                        <FormField control={form.control} name="email" render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <input placeholder="email..." {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                        <DialogFooter>
                            <Button disabled={false} type="submit">
                                Send
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
};

export default AddFriendDialog;