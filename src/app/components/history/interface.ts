import { CommandOutput } from "@/app/data/available-commands";

export interface History {
    id: number;
    date: Date;
    command: string;
    output: CommandOutput;
  }