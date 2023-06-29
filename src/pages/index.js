import React from 'react'

export default function SongList() {
  let sadSongs = [
    "其实", "不爱我", "把你揉碎捏成苹果", "就让这大雨全都落下"
  ]

  let loveSongs = [
    "像风一样",
    "Until I Found You",
    "天外来物",
    "好喜欢你",
    "女孩",
    "宝贝在干嘛",
    "初恋[声生不息]",
    "明年今日",
    "十年",
    "那些你很冒险的梦"
  ]

  let highSongs = [
    "海阔天空",
    "Shape Of You",
    "Something Just Like This"
  ]

  let rapSongs = [
    "宝贝我不渣", "当渣男我不配", "他不是", "天上飞", "官方回答", "当渣男你不配", "Ing Ing", "苦咖啡 · 唯一", "忍术", "4am", "最后一次", "Why You Gonna Lie", "BINGBIAN病变", "爱哭鬼", "雪distance"
  ]

  return (
    <main className='text-center'>
      <section className='h-screen bg-rose-500'>
        <h1 className='text-5xl font-bold p-10 text-purple-400 '>憨憨温 · 抒情 [LOVE]</h1>
        <div className='text-xl'>{loveSongs.join(" · ")}</div>

      </section>
      <section className='h-screen bg-red-400'>
        <h1 className='text-5xl font-bold p-10 text-emerald-400'>憨憨温 · 饶舌 [RAP]</h1>
        <div className='text-xl'>{rapSongs.join(" · ")}</div>

      </section>
      <section className='h-screen bg-blue-600'>
        <h1 className='text-5xl font-bold p-10 text-blue-300'>憨憨温 · 悲歌 [SAD]</h1>
        <div className='text-xl'>{sadSongs.join(" · ")}</div>
      </section>

      <section className='h-screen bg-pink-600'>
        <h1 className='text-5xl font-bold p-10 text-lime-400'>憨憨温 · 嗨歌 [CLUB]</h1>
        <div className='text-xl'>{highSongs.join(" · ")}</div>
      </section>
    </main>
  )
}
