import { NextResponse } from "next/server";
import ffmpeg from "fluent-ffmpeg";
import fs from "fs";
import path from "path";
ffmpeg.setFfmpegPath("ffmpeg");

export async function POST(request: Request) {
const formData = await request.formData();

const videos = formData.getAll("videos") as File[];

if (videos.length === 0) {
return NextResponse.json({
success: false,
error: "No videos received",
});
}

const renderDir = path.join(process.cwd(), "public", "renders");

if (!fs.existsSync(renderDir)) {
fs.mkdirSync(renderDir, { recursive: true });
}

const inputPaths: string[] = [];

for (let i = 0; i < videos.length; i++) {
const bytes = await videos[i].arrayBuffer();
const buffer = Buffer.from(bytes);

const filePath = path.join(renderDir, `input-${i}.mov`);

fs.writeFileSync(filePath, buffer);

inputPaths.push(filePath);

console.log("VIDEO RECEIVED:");
console.log(videos[i].name);
}
const concatFile = path.join(renderDir, "concat.txt");

fs.writeFileSync(
concatFile,
inputPaths
.map((file) => `file '${file.replace(/\\/g, "/")}'`)
.join("\n")
);
const outputPath = path.join(renderDir, "output.mp4");

const mergedPath = path.join(renderDir, "merged.mp4");

await new Promise((resolve, reject) => {
ffmpeg()
.input(concatFile)
.inputOptions(["-f concat", "-safe 0"])
.outputOptions(["-c copy"])
.save(mergedPath)
.on("end", resolve)
.on("error", reject);
});

await new Promise((resolve, reject) => {
ffmpeg(mergedPath)
.setStartTime(0)
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
message: "Videos received successfully",
});
}
