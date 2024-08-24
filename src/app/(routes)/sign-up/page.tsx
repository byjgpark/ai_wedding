import * as React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LabelInput } from "@/components/shared/label-input";

const Page = async () => {
  return (
    <main className="flex flex-col w-1/2 mx-auto mt-4">
      <div className="grid grid-cols-2 gap-2">
        <LabelInput type="text" placeholder="username">
          Username
        </LabelInput>
        <LabelInput type="password" placeholder="Password">
          Password
        </LabelInput>
      </div>
      <Separator className="h-[1px] w-full bg-black" orientation="vertical" />
      <div className="grid grid-cols-2 gap-2 mt-6">
        <LabelInput type="text" placeholder="Nickname">
          Nickname
        </LabelInput>
        <LabelInput type="text" placeholder="Age">
          Age
        </LabelInput>
        <LabelInput type="text" placeholder="M/F">
          Gender
        </LabelInput>
        <LabelInput type="date" placeholder="Wedding Date">
          Wedding Date
        </LabelInput>
        <LabelInput type="text" placeholder="Wedding Budget">
          Wedding Budget
        </LabelInput>
        <LabelInput type="text" placeholder="0">
          Wedding Participants
        </LabelInput>
      </div>
      <div className="flex justify-center">
        <Button className="mr-4">Cancel</Button>
        <Button className="mr-4">Sign Up</Button>
      </div>
    </main>
  );
};

export default Page;
