import Image from "next/image";

interface PlayerCardProps {
  name: string;
  age: number;
  grade: string;
  avatar: string;
  gameCount: number;
}

export default function PlayerCard({
  name,
  age,
  grade,
  avatar,
  gameCount,
}: PlayerCardProps) {
  return (
    <div className="flex justify-start py-1 px-3  gap-4">
      <div className="relative size-12 rounded-lg overflow-hidden">
        <Image src={avatar} fill alt="" />
      </div>
      <div className="flex flex-col">
        <span>{name}</span>
        <span>
          {age} {grade}
        </span>
        <span className="text-xs">경기수 : {gameCount}</span>
      </div>
    </div>
  );
}
