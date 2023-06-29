import React from 'react'

export default function SongList() {
  let sadSongs = [
    "其实",
    "演员",
    "被人",
    "绅士",
    "怪咖",
    "嗜好",
    "错季",
    "晚安",
    "想说",
    "她说",
    "空心",
    "暧昧",
    "泡沫",
    "三个字（粤）",
    "想自由",
    "不爱我",
    "断了的弦",
    "夏天的风",
    "修炼爱情",
    "死性不改",
    "无人之岛",
    "好心分手",
    "你的答案",
    "飞鸟和蝉",
    "年少有为",
    "外面的世界",
    "违背的青春",
    "陪你去流浪",
    "只是太爱你",
    "假装没变过",
    "背对背拥抱",
    "面具/天后（粤）",
    "那女孩对我说",
    "你就不要想起我",
    "我一点都不想你",
    "那些你很冒险的梦",
    "我好像在哪见过你",
    "把你揉碎捏成苹果",
    "就让这大雨全都落下",
    "you broke me first",
    "Lonely",
    "Love is Gone",
  ]

  let loveSongs = [
    "十年",
    "彩券",
    "女孩",
    "今天",
    "追光者",
    "第三人称",
    "像风一样",
    "天外来物",
    "好喜欢你",
    "明年今日",
    "宝贝在干嘛",
    "明年今日",
    "初恋[声生不息]",
    "那些你很冒险的梦",
    "Lovely",
    "Wonderful U",
    "Love Someone",
    "Until I Found You",
  ]

  let highSongs = [
    "孤勇者",
    "海阔天空",
    "Shape Of You",
    "Something Just Like This"
  ]

  let rapSongs = [
    "宝贝我不渣",
    "当渣男我不配",
    "他不是",
    "天上飞",
    "官方回答",
    "当渣男你不配",
    "Ing Ing",
    "苦咖啡 · 唯一",
    "忍术",
    "4am",
    "最后一次",
    "Why You Gonna Lie",
    "BINGBIAN病变",
    "爱哭鬼",
    "雪distance",
    "HEY KONG",
    "你要的全拿走",
  ]

  return (
    <main className='text-center'>
      <section className='h-screen bg-rose-500'>
        <h1 className='text-5xl font-bold p-10 text-purple-400'>憨憨温 · 抒情 [LOVE]</h1>
        <div className='text-xl m-10 text-white'>{loveSongs.join(" · ")}</div>

      </section>
      <section className='h-screen bg-red-400'>
        <h1 className='text-5xl font-bold p-10 text-emerald-400'>憨憨温 · 饶舌 [RAP]</h1>
        <div className='text-xl m-10 text-white'>{rapSongs.join(" · ")}</div>

      </section>
      <section className='h-screen bg-blue-600'>
        <h1 className='text-5xl font-bold p-10 text-blue-300'>憨憨温 · 悲歌 [SAD]</h1>
        <div className='text-xl m-10 text-white'>{sadSongs.join(" · ")}</div>
      </section>

      <section className='h-screen bg-pink-600'>
        <h1 className='text-5xl font-bold p-10 text-lime-400'>憨憨温 · 嗨歌 [CLUB]</h1>
        <div className='text-xl m-10 text-white'>{highSongs.join(" · ")}</div>
      </section>
    </main>
  )
}
