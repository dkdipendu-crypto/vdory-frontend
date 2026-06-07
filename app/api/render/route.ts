import { NextResponse } from "next/server";
import ffmpeg from "fluent-ffmpeg";
import fs from "fs";
import path from "path";
ffmpeg.setFfmpegPath("ffmpeg");

export async function POST(request: Request) {
const formData = await request.formData();

const video = formData.get("video") as File;

if (!video) {
return NextResponse.json({
success: false,
error: "No video received",
});
}
const bytes = await video.arrayBuffer();
const buffer = Buffer.from(bytes);

const renderDir = path.join(process.cwd(), "public", "renders");

if (!fs.existsSync(renderDir)) {
fs.mkdirSync(renderDir, { recursive: true });
}

const inputPath = path.join(renderDir, "input.mov");

fs.writeFileSync(inputPath, buffer);

console.log("VIDEO SAVED:");
console.log(inputPath);

console.log("VIDEO RECEIVED:");
console.log(video.name);
console.log(video.size);
const outputPath = path.join(renderDir, "output.mp4");

await new Promise((resolve, reject) => {
ffmpeg(inputPath)
.setStartTime(0)
.setDuration(3)
.output(outputPath)
.on("end", () => {
console.log("RENDER COMPLETE:");
console.log(outputPath);
resolve(true);
})
.on("error", (err) => {
console.error("FFMPEG ERROR:", err);
reject(err);
})
.run();
});
return NextResponse.json({
success: true,
fileName: video.name,
fileSize: video.size,
message: "Video received successfully",
});
}
