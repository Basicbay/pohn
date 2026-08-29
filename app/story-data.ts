export type StoryScene = {
  eyebrow: string;
  title: string;
  body: string;
  duration: number;
  media?: { type: "image" | "video"; src: string; alt: string };
  tone: "rose" | "amber" | "night" | "peach";
};

// Customize the words and replace the files in public/memories.
export const story: StoryScene[] = [
  {
    eyebrow: "CHAPTER 01 · THE BEGINNING",
    title: "จากวันธรรมดาวันหนึ่ง",
    body: "ใครจะรู้ว่า การได้เจอเธอในวันนั้น จะกลายเป็นจุดเริ่มต้นของเรื่องโปรดในชีวิตเรา",
    duration: 8500,
    media: {
      type: "image",
      src: "/memories/first-day.jpg",
      alt: "ภาพแรกของเรา",
    },
    tone: "rose",
  },
  {
    eyebrow: "CHAPTER 02 · US",
    title: "แล้วคำว่า ‘เรา’ ก็เกิดขึ้น",
    body: "เราเรียนรู้กันผ่านเสียงหัวเราะ ความงอแง และวันธรรมดาที่พิเศษขึ้นมาเพราะมีเธอ",
    duration: 9000,
    media: {
      type: "image",
      src: "/memories/us.jpg",
      alt: "ช่วงเวลาของเราสองคน",
    },
    tone: "amber",
  },
  {
    eyebrow: "CHAPTER 03 · OUR MOMENTS",
    title: "ทุกวินาที มีความหมาย",
    body: "บางความทรงจำไม่ได้สมบูรณ์แบบ แต่แค่มีเธออยู่ตรงนั้น มันก็ดีพอแล้ว",
    duration: 11000,
    media: {
      type: "video",
      src: "/memories/our-moment.mp4",
      alt: "วิดีโอความทรงจำของเรา",
    },
    tone: "night",
  },
  {
    eyebrow: "29 · 08 · 69",
    title: "Happy Birthday, my love",
    body: "ขอให้ปีนี้ใจดีกับเธอ ให้เธอได้ยิ้มเยอะ ๆ และมีเราอยู่ข้าง ๆ ในทุกวันที่เธอต้องการ",
    duration: 10000,
    media: {
      type: "image",
      src: "/memories/birthday.jpg",
      alt: "สุขสันต์วันเกิด",
    },
    tone: "peach",
  },
  {
    eyebrow: "ONE LAST THING",
    title: "เราอยากขอโทษเธอ",
    body: "ขอโทษสำหรับทุกครั้งที่ทำให้เสียใจ สำหรับคำพูดและการกระทำที่เราอาจไม่ทันคิด เราไม่ได้อยากชนะในทุกเรื่อง—เราแค่อยากรักษาเธอและความรักของเราไว้ให้นานที่สุด",
    duration: 12000,
    tone: "rose",
  },
];
