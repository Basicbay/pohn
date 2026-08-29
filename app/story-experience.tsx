"use client";
/*
      { type: "image", src: "/memories/IMG_0433.JPEG", alt: "อีกหนึ่งความทรงจำของเรา" },\n      { type: "image", src: "/memories/IMG_0905.JPEG", alt: "ช่วงเวลาที่มีค่าของเรา" },\n
*/
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

const HeartScene = dynamic(() => import("./heart-scene"), { ssr: false });

type MediaItem = {
  no?: number;
  type: "image" | "video";
  src: string;
  alt: string;
};
type Chapter = {
  no: string;
  kicker: string;
  title: string;
  text: string;
  emoji: string;
  duration: number;
  media?: MediaItem[];
  final?: boolean;
};

const firstDateExtraVideo: MediaItem = {
  type: "video",
  src: "/memories/ec1fc9a1520f4e1282dc5f6eca72a5d7.MOV",
  alt: "วิดีโอเดทแรกอีกช่วงเวลาหนึ่ง",
};
const momentsExtraMedia: MediaItem[] = [
  {
    type: "image",
    src: "/memories/IMG_0433.JPEG",
    alt: "ช่วงเวลาที่มีค่าของเรา",
  },
  {
    type: "image",
    src: "/memories/IMG_0905.JPEG",
    alt: "อีกหนึ่งความทรงจำของเรา",
  },
];
const familyExtraMedia: MediaItem[] = [
  {
    type: "image",
    src: "/memories/chapter4/IMG_8419.JPEG",
    alt: "ครอบครัวเล็ก ๆ ของเรา",
  },
  {
    type: "image",
    src: "/memories/chapter4/FullSizeRender.JPEG",
    alt: "ช่วงเวลาแสนอบอุ่น",
  },
  { type: "image", src: "/memories/IMG_0433.JPEG", alt: "ความสุขของเรา" },
];
void firstDateExtraVideo;
void momentsExtraMedia;
const finalApology: Record<string, string> = { text: `รู้ว่าตอนนี้ทำให้ผิดหวัง
รู้ว่าตอนนี้ทำให้เสียใจ
รู้ว่าตอนนี้ทำให้เจ็บปวด

ไม่ได้แก้ตัวใดๆ ทั้งนั้น
สิ่งที่ทำลงไป มันผิดจริงๆ
ผิดที่ไม่คิดให้ดีก่อน
ผิดที่ไม่แคร์ความรู้สึกให้มากพอ

แต่สิ่งหนึ่งที่ไม่เคยผิด…
คือความรักที่มีให้ ❤️

ทุกวินาทีที่ผ่านมา
หนูคือคนที่สำคัญที่สุด
จะไม่ปล่อยให้ความสุขของเรา
หายไปเพราะความผิดพลาดของพี่อีกแล้ว
` };
const chapters: Chapter[] = [
  {
    no: "01",
    kicker: "THE DAY WE MET",
    title: "วันแรกที่เราเจอกัน",
    text: "ขอบคุณความบังเอิญทุกอย่างที่ทำให้พี่ได้เจอหนู ขอบคุณทุกสิ่งที่ทำให้เราได้อยู่ด้วยกัน ขอบคุณที่เข้ามาในชีวิตพี่นะครับ ☺️ รอยยิ้มที่สดใสของหนูทำให้พี่รู้สึกว่าโลกนี้ยังมีความสุขอยู่จริง ๆ 🧚  ",
    media: [
      {
        no: 1,
        type: "video",
        src: "/memories/chapter1/809596483.651783.mp4",
        alt: "วิดีโอวันแรกที่เราเจอกัน",
      },
      {
        type: "image",
        src: "/memories/chapter1/IMG_3087.JPEG",
        alt: "ความทรงจำแรก",
      },
      {
        type: "image",
        src: "/memories/chapter1/IMG_3086.JPEG",
        alt: "วันแรกของเรา",
      },
    ],
    emoji: "✨",
    duration: 18000,
  },
  {
    no: "02",
    kicker: "OUR FIRST DATE",
    title: "เดทแรกของเรา",
    text: "เดทแรกที่ตื่นเต้นสุดๆ เลือกเสื้อผ้าอยู่ตั้งนาน กลัวจะไม่ดีพอ แต่พอได้อยู่ด้วยกัน ทุกอย่างก็ลงตัว และทำให้เรารู้สึกว่าเราเข้ากันได้ดีมาก ๆ 💖 พี่มีความสุขมากที่ได้อยู่ด้วยกัน แล้วในวันนั้น... พี่ก็ได้ขอหนูเป็นแฟน 🫢 กลายเป็นแพะ เป็นแฟนกับ อัลปาก้า 🐐🦙",
    media: [
      {
        type: "video",
        src: "/memories/chapter2/ec1fc9a1520f4e1282dc5f6eca72a5d7.MOV",
        alt: "วิดีโอเดทแรก",
      },
      { type: "image", src: "/memories/chapter2/IMG_0905.JPEG", alt: "เดทแรก" },
      {
        type: "image",
        src: "/memories/chapter2/IMG_0454.JPEG",
        alt: "รูปเดทของเรา",
      },
      {
        type: "image",
        src: "/memories/chapter2/IMG_0700.JPEG",
        alt: "วิดีโอเดทแรก",
      },
    ],
    emoji: "🦋",
    duration: 18000,
  },
  {
    no: "03",
    kicker: "A THOUSAND MOMENTS",
    title: "ช่วงเวลาที่มีค่าของเรา",
    text: "ทุกวันที่อยู่ด้วยกัน กลายเป็นความทรงจำที่มีค่าที่สุด ทุกรอยยิ้ม ทุกเสียงหัวเราะ ทุกน้ำตาที่เช็ดให้กัน ทุกมื้ออาหารที่นั่งกินด้วยกัน ทุกที่ที่ไปด้วยกัน… ล้วนเป็นส่วนหนึ่งของ 'เรา' 👩‍❤️‍💋‍👨 ",
    media: [
      {
        type: "video",
        no: 1,
        src: "/memories/chapter3/0de2895efa894f72970c4bf6791bd18c.MOV",
        alt: "วิดีโอความทรงจำ",
      },
      {
        type: "video",
        no: 2,
        src: "/memories/chapter3/1b1dde0eb7464f9b98879d20853e5526.MOV",
        alt: "ความทรงจำของเรา",
      },
      {
        type: "video",
        no: 3,
        src: "/memories/chapter3/4014918ac36e40c8bde808e3e16c7f38.MOV",
        alt: "อีกหนึ่งช่วงเวลาของเรา",
      },
      {
        type: "video",
        no: 4,
        src: "/memories/chapter3/66374711904c4061abc2f60063ce9ec0.MOV",
        alt: "อีกหนึ่งช่วงเวลาของเรา",
      },
      {
        type: "video",
        no: 5,
        src: "/memories/chapter3/e774f7b17742439488edba38d192a6d2.MOV",
        alt: "อีกหนึ่งช่วงเวลาของเรา",
      },
    ],
    emoji: "✦",
    duration: 18000,
  },
  {
    no: "04",
    kicker: "GROWING TOGETHER",
    title: "เราเติบโตไปด้วยกัน",
    text: "จากคนแปลกหน้าที่ไม่เคยรู้จักกัน วันหนึ่งกลับกลายเป็นคนที่ขาดไม่ได้ในชีวิต ผ่านมาด้วยกันทั้งวันที่มีความสุข และวันที่ต้องจับมือกันผ่านเรื่องยาก ๆระหว่างทางเราได้เรียนรู้ว่า ความรักไม่ใช่แค่ความรู้สึกดี ๆ ที่มีให้กัน แต่คือการเลือกที่จะมีกันในทุกวันคือความอดทนในวันที่ไม่เข้าใจกัน การให้อภัยในวันที่ผิดพลาด และการยังรักกัน แม้ในวันที่อะไร ๆ ไม่ได้เป็นอย่างที่ใจคิด... เพราะอ้อมกอดที่อบอุ่นจะช่วยฮิลใจได้เสมอ 🫂💓",
    media: [
      {
        type: "image",
        src: "/memories/chapter4/IMG_4006.JPEG",
        alt: "เราเติบโตไปด้วยกัน",
      },
      {
        type: "image",
        src: "/memories/chapter4/IMG_7287.JPEG",
        alt: "ชีวิตของเราสองคน",
      },
      {
        type: "image",
        src: "/memories/chapter4/IMG_6764.JPEG",
        alt: "วิดีโอของเรา",
      },
    ],
    emoji: "∞",
    duration: 18000,
  },
  {
    no: "05",
    kicker: "OUR LITTLE FAMILY",
    title: " ใจดี ...ลูกหมูตัวน้อยของเรา",
    text: " 'วันที่เราตัดสินใจเลี้ยงเขาด้วยกัน… เป็นวันที่อบอุ่นที่สุด' จากคนสองคน กลายเป็นครอบครัวเล็ก ๆ ที่มีสมาชิกตัวนุ่มฟูเพิ่มมาอีกหนึ่ง เจ้าตัวเล็กที่ทำให้เราหัวเราะได้ทุกวัน 😂 ทุกครั้งที่เห็นมันวิ่งมาหา ก็รู้สึกว่า… นี่แหละ ความสุขที่แท้จริงของเรา 💗🐰",
    media: [
      {
        type: "video",
        no: 1,
        src: "/memories/chapter5/IMG_0525.MOV",
        alt: "กระต่ายของเรา",
      },
      {
        type: "image",
        no: 2,
        src: "/memories/chapter5/IMG_0797.JPEG",
        alt: "สมาชิกตัวน้อย",
      },
      {
        type: "image",
        no: 3,
        src: "/memories/chapter5/DB1DE776-B356-4D2D-B015-6C5AD7DCA11C.jpg",
        alt: "วิดีโอกระต่ายของเรา",
      },
      {
        type: "image",
        no: 4,
        src: "/memories/chapter5/IMG_4578.JPEG",
        alt: "วิดีโอกระต่ายของเรา",
      },
    ],
    emoji: "🐰",
    duration: 18000,
  },
  {
    no: "06",
    kicker: "29 · 08 · 69",
    title: "Happy Birthday น้องพร ",
    text: "babypohn babygirl my onlyworld ของพี่เบย์ , ขอให้ปีนี้ใจดีกับหนู ให้หนูยิ้มเยอะๆ ได้ทำทุกอย่างตามที่ฝัน และมีพี่อยู่ข้างๆ เสมอ ในทุกวันที่หนูต้องการนะครับ 🥰💖 สุขสันต์วันเกิดนะครับคนดีของพี่เบย์ 🎂🎉",
    media: [
      {
        type: "image",
        src: "/memories/chapter6/3C4C1A59-557A-43EA-BF2A-CAFEA0C24845.jpg",
        alt: "สุขสันต์วันเกิด",
      },
      {
        type: "image",
        src: "/memories/chapter6/3107DF7F-D34D-44A7-991F-C7F72412D7FD.jpg",
        alt: "วันเกิดของเธอ",
      },
      {
        type: "image",
        src: "/memories/chapter6/C632025C-F7F0-4044-9622-FE9BFA6C4CAA.jpg",
        alt: "วิดีโอวันเกิด",
      },
    ],
    emoji: "✺",
    duration: 18000,
  },
  {
    no: "07",
    kicker: "ONE LAST THING",
    title: "ขอโทษนะครับ…",
    text: "รู้ว่าทำให้ผิดหวัง รู้ว่าทำให้เสียใจ และไม่ขอแก้ตัวกับสิ่งที่ผิดพลาด แต่สิ่งหนึ่งที่ไม่เคยเปลี่ยน คือความรักที่มีให้เธอ ขอโอกาสให้เราได้พิสูจน์อีกครั้งได้ไหม?",
    emoji: "♥",
    duration: 18000,
    ...finalApology,
    final: true,
  },
];

function Countdown({
  duration,
  running,
}: {
  duration: number;
  running: boolean;
}) {
  const [remaining, setRemaining] = useState(Math.ceil(duration / 1000));
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(
      () => setRemaining((value) => Math.max(0, value - 1)),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [running]);
  return (
    <div
      className="chapter-countdown"
      aria-label={`${remaining} seconds remaining`}
    >
      {String(remaining).padStart(2, "0")}s
    </div>
  );
}

function Memory({
  item,
  emoji,
  active,
}: {
  item: MediaItem;
  emoji: string;
  active: boolean;
}) {
  void active;
  const [missing, setMissing] = useState(false);
  const [uploaded, setUploaded] = useState<MediaItem | null>(null);
  const current = uploaded ?? item;
  const chooseFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setMissing(false);
    setUploaded({
      type: file.type.startsWith("video/") ? "video" : "image",
      src: URL.createObjectURL(file),
      alt: file.name,
    });
  };
  if (missing && !uploaded)
    return (
      <label className="portal-placeholder">
        <span>{emoji}</span>
        <small>ADD YOUR MEMORY</small>
        <input type="file" accept="image/*,video/*" onChange={chooseFile} />
      </label>
    );
  if (current.type === "video")
    return (
      <video
        src={current.src}
        aria-label={current.alt}
        autoPlay
        muted
        loop
        preload="auto"
        playsInline
        onError={() => setMissing(true)}
      />
    );
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img src={current.src} alt={current.alt} onError={() => setMissing(true)} />
  );
}

export default function StoryExperience() {
  const [started, setStarted] = useState(false),
    [index, setIndex] = useState(0),
    [paused, setPaused] = useState(false),
    [muted, setMuted] = useState(false),
    [accepted, setAccepted] = useState(false),
    [mediaIndex, setMediaIndex] = useState(0);
  const chapter = chapters[index],
    last = index === chapters.length - 1;
  useEffect(() => {
    if (!started) return;
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".scene-copy .kicker, .scene-copy h2, .scene-copy .story-text, .scene-copy .accepted",
      ),
    );
    const timers: number[] = [];
    nodes.forEach((node, nodeIndex) => {
      const text = node.textContent ?? "";
      node.textContent = "";
      const cursor = document.createElement("i");
      cursor.className = "typewriter-cursor";
      cursor.setAttribute("aria-hidden", "true");
      node.append(cursor);
      let cursorIndex = 0;
      const timer = window.setInterval(
        () => {
          cursorIndex += 1;
          node.textContent = text.slice(0, cursorIndex);
          node.append(cursor);
          if (cursorIndex >= text.length) window.clearInterval(timer);
        },
        nodeIndex === 1 ? 68 : nodeIndex === 2 ? 26 : 42,
      );
      timers.push(timer);
    });
    return () => timers.forEach((timer) => window.clearInterval(timer));
  }, [index, started, accepted]);
  const start = useCallback(() => setStarted(true), []);
  useEffect(() => {
    if (!started || paused || last) return;
    const timer = window.setTimeout(
      () => setIndex((i) => Math.min(chapters.length - 1, i + 1)),
      Math.max(1000, chapter.duration),
    );
    return () => clearTimeout(timer);
  }, [chapter.duration, index, last, paused, started]);
  useEffect(() => {
    if (!started || paused || last || !chapter.media?.length) return;
    const timer = setInterval(
      () => setMediaIndex((i) => (i + 1) % chapter.media!.length),
      3600,
    );
    return () => clearInterval(timer);
  }, [chapter.media, last, paused, started]);
  const sound = () => {
    const frame = document.getElementById(
      "youtube-music",
    ) as HTMLIFrameElement | null;
    frame?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: muted ? "unMute" : "mute",
        args: [],
      }),
      "https://www.youtube.com",
    );
    setMuted((v) => !v);
  };
  return (
    <main className="cosmos">
      {!started ? (
        <section className="launch">
          <HeartScene chapter={0} paused={false} />
          <div className="launch-glow" />
          <div className="launch-copy">
            <p>29 · 08 · 69</p>
            <h1>
              Our <i>Love</i>
              <br />
              Story
            </h1>
            <span className="launch-description">
              เรื่องราวทั้งหมดนี้ มี พร เป็นคนโปรดเสมอ
            </span>
            <button
              className="heart-launch"
              onClick={start}
              aria-label="แตะที่หัวใจเพื่อเปิด"
            >
              <b>♡</b>
            </button>
            <small className="heart-hint">แตะที่หัวใจเพื่อเปิด</small>
          </div>
          <div className="launch-corner">
            MADE WITH
            <br />
            ALL MY HEART P BAY
          </div>
        </section>
      ) : (
        <section className={`cinema scene-${index}`}>
          <HeartScene chapter={index} paused={paused} />
          <iframe
            id="youtube-music"
            className="youtube-music"
            title="เพลงประกอบเรื่องราว"
            src="https://www.youtube.com/embed/GL_GqP6XMxc?autoplay=1&loop=1&playlist=GL_GqP6XMxc&controls=0&playsinline=1&rel=0&modestbranding=1&enablejsapi=1"
            allow="autoplay; encrypted-media"
          />
          <div className="vignette" />
          <header>
            <div className="wordmark">
              OUR STORY <b>♥</b>
            </div>
            <div className="timeline">
              {chapters.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={i === index ? "active" : i < index ? "done" : ""}
                  aria-label={`ตอนที่ ${i + 1}`}
                >
                  <span />
                </button>
              ))}
            </div>
            <button className="sound" onClick={sound}>
              {muted ? "♪̸" : "♫"}
            </button>
          </header>
          <div key={`layout-${index}`} className="scene-layout">
            <div className="scene-copy">
              <div className="scene-index">{chapter.no}</div>
              <p className="kicker">{chapter.kicker}</p>
              <h2>{chapter.title}</h2>
              <p className="story-text">{chapter.text}</p>
              {last ? (
                <div className="promise">
                  {accepted ? (
                    <div className="accepted">
                      ขอบคุณที่ยังจับมือกันนะ <b>♥</b>
                    </div>
                  ) : (
                    <></>
                    // <button className="promise-text" onClick={() => setAccepted(true)}>
                    //   ให้โอกาสเราอีกครั้งนะ <span>→</span>
                    // </button>
                  )}
                </div>
              ) : null}
            </div>
            {!last ? (
              <div className="memory-constellation">
                {(index === 4
                  ? [...(chapter.media ?? []), ...familyExtraMedia]
                  : chapter.media
                )
                  ?.slice()
                  .sort(
                    (a, b) =>
                      Number(b.type === "video") - Number(a.type === "video"),
                  )
                  .map((item, i) => {
                    const activeIndex =
                      mediaIndex %
                      ((chapter.media?.length || 1) +
                        (index === 1
                          ? 1
                          : index === 2
                            ? 2
                            : index === 4
                              ? 1
                              : 0));
                    return (
                      <div
                        className={`media-card media-${i} ${i === activeIndex ? "is-active" : ""}`}
                        key={item.src}
                      >
                        <Memory
                          item={item}
                          emoji={chapter.emoji}
                          active={i === activeIndex}
                        />
                        <span>{String(item.no ?? i + 1).padStart(2, "0")}</span>
                      </div>
                    );
                  })}
                <div className="orbit-line orbit-one" />
                <div className="orbit-line orbit-two" />
                {/* <div className="gallery-caption">
                  MEMORIES / {chapter.no} ·{" "}
                  {(mediaIndex % (chapter.media?.length || 1)) + 1} /{" "}
                  {chapter.media?.length}
                </div> */}
              </div>
            ) : (
              <div className="final-space" aria-hidden="true">
                <span>FOREVER</span>
                <i>∞</i>
              </div>
            )}
          </div>
          <footer>
            <button
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
            >
              ←
            </button>
            <button
              className="pause"
              onClick={() => setPaused((v) => !v)}
              aria-label={paused ? "Play story" : "Pause story"}
              title={paused ? "Play" : "Pause"}
            >
              {paused ? "▶" : "Ⅱ"}
            </button>
            <span>
              {index + 1} / {chapters.length}
            </span>
            <button
              onClick={() =>
                setIndex((i) => Math.min(chapters.length - 1, i + 1))
              }
              disabled={last}
            >
              →
            </button>
            <button
              className="restart"
              onClick={() => {
                setStarted(false);
                setIndex(0);
                setPaused(false);
                setAccepted(false);
                setMediaIndex(0);
              }}
              aria-label="Restart story"
              title="Restart story"
            >
              ↻
            </button>
          </footer>
          <Countdown
            key={index}
            duration={chapter.duration}
            running={started && !paused && !last}
          />
          {/* <div className="scene-label">
            A LOVE STORY
            <br />
            IN SEVEN ACTS
          </div> */}
        </section>
      )}
    </main>
  );
}
