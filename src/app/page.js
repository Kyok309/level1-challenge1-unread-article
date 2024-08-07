import { Card } from "./components/card";
export default function Home() {
  return (
    <main className="min-h-full bg-[#FAFAFA] flex justify-center items-center">
      <div className="w-[1186px] max-w-[1186px] flex flex-col justify-center items-center px-[35px] tablet:px-[20px]">
        <div className="w-full flex justify-end">
          <Card profilesrc="tushigt.jpeg"
            author="Tushigt-Erdene"
            date="7 сарын 31, 2024"
            time="16 мин"
            category="Би хэрхэн ажилладаг вэ?"
            title="Соёлын Гавьяат Зүтгэлтэн, Хөдөлмөрийн Баатар, зохиолч Чинагийн Галсан"
            picsrc="galsan.jpg"
            textalign="text-right"
            rounded="rounded-tr-none"/>
        </div>
        <div className="w-full flex justify-start">
          <Card profilesrc="tushigt.jpeg"
            author="Tushigt-Erdene"
            date="7 сарын 30, 2024"
            time="4 мин"
            category="Techworm"
            title="Beeper: Нэгдсэн “шуудангийн хайрцаг” - Бүх чатаа нэг дороос"
            picsrc="beeper.jpg"
            className="flex-row-reverse"
            textalign="text-left"
            rounded="rounded-tl-none"/>
        </div>
        <div className="w-full flex justify-end">
          <Card profilesrc="unread.jpg"
            author="Unread Today"
            date="7 сарын 30, 2024"
            time="2 мин"
            category="Мэдүүштэй"
            title="Дэлхийн шилдэг амьд хөгжмийг дэргэдээс нь сонсох боломж"
            picsrc="ride.jpg"
            textalign="text-right"
            rounded="rounded-tr-none"/>
        </div>
      </div>
    </main>
  );
}
