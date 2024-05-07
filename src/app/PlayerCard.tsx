import Image from "next/image";

export default function PlayerCard() {
  return (
    <div className="flex justify-start py-1 px-3  gap-4">
      <div className="relative size-12 rounded-lg overflow-hidden">
        <Image
          src="https://mintonofall.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%83%E1%85%A2.jpeg"
          fill
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <span>이용대</span>
        <span>30 S</span>
        <span className="text-xs">경기수 : 4</span>
      </div>
    </div>
  );
}
