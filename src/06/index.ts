import { readFileSync } from "fs";

const input = [...readFileSync(`${__dirname}/input.txt`, "utf-8")];

let packetLength = 4;
let startOfPacket1 = 0;
let buffer: string[] = [];

input.some((bit: string, index: number) => {
  buffer.push(bit);
  if (buffer.length === packetLength) {
    const isStart = new Set(buffer).size === packetLength;
    if (isStart) {
      startOfPacket1 = index + 1;
      return true;
    }
    buffer.shift();
  }
});

packetLength = 14;
let startOfPacket2 = 0;
buffer = [];

input.some((bit: string, index: number) => {
  buffer.push(bit);
  if (buffer.length === packetLength) {
    const isStart = new Set(buffer).size === packetLength;
    if (isStart) {
      startOfPacket2 = index + 1;
      return true;
    }
    buffer.shift();
  }
});

console.log({ partOne: startOfPacket1, partTwo: startOfPacket2 });
