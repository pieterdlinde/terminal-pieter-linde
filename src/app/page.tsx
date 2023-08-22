"use client"
import React from "react";
import Input from "./components/input/input";
import History from "./components/history/history";

export default function Home() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef?.current?.focus();
  };


  return (
    <main>
      <div
        className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base"
        onClick={onClickAnywhere}
      >
        <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
          <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
            <div className="overflow-y-auto h-full">
              <History></History>
              <Input></Input>
            </div>
          </div>
        </main>
      </div>
    </main>
  )
}
