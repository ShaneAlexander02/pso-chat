import { Card } from "@/components/ui/card";
import { CircleArrowLeft, Link } from "lucide-react";
import React from "react"

type Props = {
    imageUrl?: string;
    name: string

}

const Header = ({imageUrl, name}: Props) => {
    return (
        <Card className="w-full flex rounded-lg items-center p-2
        justify-between">
            <div className="flex items-center gap-2">
                <Link className="block lg:hidden"><CircleArrowLeft/></Link>
            </div>
        </Card>
    )
}

export default Header