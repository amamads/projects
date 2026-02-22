import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import { Card } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Separator } from "./components/ui/separator";
import { Slider } from "./components/ui/slider";
import { Button } from "./components/ui/button";
import { Pause, Play } from "lucide-react";

export default function App() {
  const audioEl = useRef<HTMLAudioElement | null>(null);
  const [musicURl, setMusicURl] = useState<string | undefined>(undefined);
  const [musicTime, setMusicTime] = useState<
    { duration: number; currentTime: number } | undefined
  >(undefined);
  const [musicName, setMusicName] = useState<string | null>(null);
  const [isPlay, setIsPlay] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    // console.log(file);
    setMusicName(file.name.split(".")[0]);
    const url = URL.createObjectURL(file);
    setMusicURl(url);
    setIsPlay(false)
  }

  function setInfoWhenLoadedData(
    e: React.SyntheticEvent<HTMLAudioElement, Event>,
  ) {
    const target = e.target as HTMLAudioElement;
    const { duration, currentTime } = target;

    setMusicTime({
      duration: duration || 0,
      currentTime: currentTime || 0,
    });
  }
  function playPauseMusic() {
    if (isPlay) {
      audioEl.current?.pause();
      setIsPlay(false);
    } else {
      audioEl.current?.play();
      setIsPlay(true);
    }
  }

  function formatTime(time: number) {
    if (isNaN(time)) return "0:00";

    const sec = Math.floor(time % 60),
      min = Math.floor(time / 60),
      mainSec = sec >= 10 ? sec : `0${sec}`;

    return `${min}:${mainSec}`;
  }

  return (
    <div className="w-19/20 mx-auto">
      <Navbar />
      <Separator />
      <div className="py-5 grid grid-cols-2 max-md:grid-cols-1 gap-5">
        <Card className="flex-1 text-center">
          <h2>Input music</h2>
          <div className="w-3/4 m-auto space-y-3">
            <Label htmlFor="input-file-music">Select your music</Label>
            <Input
              id="input-file-music"
              type="file"
              onChange={handleFileChange}
            />
          </div>
        </Card>
        {musicURl && (
          <Card className="flex-1 text-center">
            <h2>Music player</h2>

            <h3>{musicName}</h3>
            <div className="w-4/5 m-auto space-y-5">
              <Slider
                min={0}
                max={musicTime?.duration}
                value={[musicTime?.currentTime ?? 0]}
                onValueChange={(e) =>
                  audioEl.current ? (audioEl.current.currentTime = e[0]) : null
                }
                className="hover:cursor-pointer"
              />
              {musicTime && (
                <div className="flex justify-between">
                  <p>{formatTime(musicTime.currentTime)}</p>
                  <p>{formatTime(musicTime.duration)}</p>
                </div>
              )}
              <Button onClick={playPauseMusic}>
                {isPlay ? <Pause /> : <Play />}
              </Button>
            </div>

            <audio
              ref={audioEl}
              src={musicURl}
              onLoadedMetadata={setInfoWhenLoadedData}
              onTimeUpdate={setInfoWhenLoadedData}
              // onLoad={() => setIsPlay(false)}
            />
          </Card>
        )}
      </div>
    </div>
  );
}
