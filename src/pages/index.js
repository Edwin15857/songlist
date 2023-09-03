import React from 'react'
import { Search } from '@/Components/search';

export default function SongList() {
  let sadSongs = [
    {
      img_url: "https://p2.music.126.net/ywVjRpbu9KpcBQh9KJz2HA==/109951164499974026.jpg",
      title: "其实",
      artist: "薛之谦"
    },
    {
      img_url: "https://p2.music.126.net/ywVjRpbu9KpcBQh9KJz2HA==/109951164499974026.jpg",
      title: "演员",
      artist: "薛之谦"
    },
    {
      img_url: "https://i.ytimg.com/vi/qAL8FxbYgWE/mqdefault.jpg",
      title: "被人",
      artist: "薛之谦"
    },
    {
      img_url: "https://p2.music.126.net/ywVjRpbu9KpcBQh9KJz2HA==/109951164499974026.jpg",
      title: "绅士",
      artist: "薛之谦"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b2736dd022cf5045bb120f575f61",
      title: "怪咖",
      artist: "薛之谦"
    },
    {
      img_url: "https://cdns-images.dzcdn.net/images/cover/f7fcf54aa922a6d1ee1a10bcad10c267/264x264.jpg",
      title: "嗜好",
      artist: "颜人中"
    },
    {
      img_url: "https://cdns-images.dzcdn.net/images/cover/5a56d184dc77363f561b8a2f4802e96d/264x264.jpg",
      title: "错季",
      artist: "秋原依"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b2733d39dd26ad0450e41a50d9f1",
      title: "晚安",
      artist: "颜人中"
    },
    {
      img_url: "https://p3.itc.cn/q_70/images03/20200715/ffdde26e66684fcc8ce6a7bebae1266e.jpeg",
      title: "想说",
      artist: "颜人中"
    },
    {
      img_url: "https://images.genius.com/4517a3b127ebd0e6ea0a9f7af9330006.998x1000x1.jpg",
      title: "她说",
      artist: "林俊杰"
    },
    {
      img_url: "https://cdns-images.dzcdn.net/images/cover/2abd1f96a15c1f7ea7cc41ef7ed7b13f/264x264.jpg",
      title: "空心",
      artist: "光泽"
    },
    {
      img_url: "https://i.scdn.co/image/efbca0629b5ca00f6cdb4b1889d6ad98a4acb7c6",
      title: "暧昧",
      artist: "薛之谦"
    },
    {
      img_url: "https://cdns-images.dzcdn.net/images/cover/1d37c187f67f6c4087ed632d70543e0b/350x350.jpg",
      title: "泡沫",
      artist: "邓紫棋"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b273f0c201510f193c7c86b69ab3",
      title: "想自由",
      artist: "林宥嘉"
    },
    {
      img_url: "https://i.discogs.com/yg85mPHM3MAsUFILMgE6Vlf8XBt8o-jzRyIDWq-T8fU/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1OTM1/OTQ5LTE2MDA1MTU3/NzktNzkwMy5wbmc.jpeg",
      title: "不爱我",
      artist: "薛之谦"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b2737290e67979e9ecdc9ba1ee32",
      title: "断了的弦",
      artist: "周杰伦"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d00001e02541e72950c28e3b9de03764f",
      title: "夏天的风",
      artist: "温岚"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b273352fb54206892599dcfbc792",
      title: "修炼爱情",
      artist: "林俊杰"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b273bd40c80b58e558079a7ddb5f",
      title: "死性不改",
      artist: "Twins/Boy'Z"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b273dfb13a39f0976b75efd6bf84",
      title: "无人之岛",
      artist: "任然"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b2737477f8b0d0395ff1b706fdc7",
      title: "好心分手",
      artist: "卢巧音/王力宏"
    },
    {
      img_url: "https://i1.sndcdn.com/artworks-7hBsFZqVyuA26WZn-ZSS7lA-t500x500.jpg",
      title: "你的答案",
      artist: "阿冗"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b273afb5e5bc125efd4405cc3061",
      title: "飞鸟和蝉",
      artist: "任然"
    },
    {
      img_url: "https://images.genius.com/d0c5fe7c2908b5e116e6d235e8d9efae.1000x1000x1.jpg",
      title: "年少有为",
      artist: "李荣浩"
    },
    {
      img_url: "https://lastfm.freetls.fastly.net/i/u/300x300/4da73cc62690414879c754fa21e854c3.jpg",
      title: "外面的世界",
      artist: "莫文蔚"
    },
    {
      img_url: "https://i1.sndcdn.com/artworks-jgk8ZJyJ18yxzZUY-9XBsMg-t500x500.jpg",
      title: "违背的青春",
      artist: "薛之谦"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b2737aea37885cba1a46ed61b408",
      title: "陪你去流浪",
      artist: "薛之谦"
    },
    {
      img_url: "https://i1.sndcdn.com/artworks-aDtfVLneWCdl-0-t500x500.jpg",
      title: "只是太爱你",
      artist: "張敬軒"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b2734987ae4cc2a4932cb381d2cc",
      title: "假装没变过",
      artist: "颜人中"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b2733d737f101009adc635ca286a",
      title: "背对背拥抱",
      artist: "林俊杰"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b273dd0a9a9136292eb66128a731",
      title: "面具/天后（粤）",
      artist: "陳勢安/许廷铿"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b2732d32dc9e1c926b104c4488a8",
      title: "那女孩对我说",
      artist: "黄义达"
    },
    {
      img_url: "https://images.genius.com/32fed12283dc98ed623196f99de26a87.1000x1000x1.jpg",
      title: "你就不要想起我",
      artist: "张杰"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b27314888932f089e66bdf447a37",
      title: "那些你很冒险的梦",
      artist: "林俊杰"
    },
    {
      img_url: "https://img.mymusic.net.tw/mms/album/L/978/383978.jpg",
      title: "我好像在哪见过你",
      artist: "薛之谦"
    },
    {
      img_url: "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/b0/98/7b/b0987b2c-b3eb-cc24-b722-b228a4e04eea/382901083.jpg/1200x1200bf-60.jpg",
      title: "把你揉碎捏成苹果",
      artist: "薛之谦"
    },
    {
      img_url: "https://i.kfs.io/album/global/234112132,2v1/fit/500x500.jpg",
      title: "就让这大雨全都落下",
      artist: "容祖儿/卢卢快闭嘴"
    },
    {
      img_url: "https://i1.sndcdn.com/artworks-PELQHaAFjWeRvZfy-TG3xTQ-t500x500.jpg",
      title: "you broke me first",
      artist: "Tate McRae"
    },
    {
      img_url: "https://i1.sndcdn.com/artworks-rtzSYblqnyVRo1JA-2lMQZA-t500x500.jpg",
      title: "Lonely",
      artist: "Justin Bieber"
    },
    {
      img_url: "https://i1.sndcdn.com/artworks-000636297964-248e9u-t500x500.jpg",
      title: "Love is Gone",
      artist: "Dylan Matthew/SLANDER"
    },
  ];

  let loveSongs = [
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b273822b40ed87abd5054b48f0aa",
      title: "十年",
      artist: "陈奕迅"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b2732d6d8fd8dd3a0475253d3d29",
      title: "彩券",
      artist: "薛之谦"
    },
    {
      img_url: "https://oss.tan8.com/jtpnew/29/56129/jtpnew20180817151451_big.jpg",
      title: "女孩",
      artist: "韦礼安"
    },
    {
      img_url: "https://i.kfs.io/album/global/148342874,0v1/fit/500x500.jpg",
      title: "今天",
      artist: "颜人中"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b27303065148262b97bc76882b62",
      title: "追光者",
      artist: "岑寧兒"
    },
    {
      img_url: "https://i.kfs.io/playlist/global/72372723v1/cropresize/300x300.jpg",
      title: "第三人称",
      artist: "HUSH"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b273b79d17e42a1a3bb1fb525976",
      title: "像风一样",
      artist: "薛之谦"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b273c2504a7fca5a1fb4bdbd929d",
      title: "天外来物",
      artist: "薛之谦"
    },
    {
      img_url: "https://cdns-images.dzcdn.net/images/cover/81104b6384e830eb2f33f4ff78d91e16/264x264.jpg",
      title: "好喜欢你",
      artist: "颜人中"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b27302885cbad1c51d43708c00e4",
      title: "明年今日",
      artist: "陈奕迅"
    },
    {
      img_url: "https://p2.music.126.net/2meKM6LYhljpNV2pf4HtRQ==/109951168647704197.jpg",
      title: "宝贝在干嘛",
      artist: "嘿人李逵NoiseMakers"
    },
    {
      img_url: "https://i1.sndcdn.com/artworks-EpedzmSjMeOgUtxB-TcfuYQ-t500x500.jpg",
      title: "初恋[声生不息]",
      artist: "曾比特"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b273b79d17e42a1a3bb1fb525976",
      title: "你还要我怎样",
      artist: "薛之谦"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d00001e0211a2cf9260354dd4e539e3b7",
      title: "那里都是你",
      artist: "队长"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d00001e02bb8936ae79875a61b65934e8",
      title: "三个字 I Love You",
      artist: "凌加峻"
    },
    {
      img_url: "https://m.media-amazon.com/images/M/MV5BYTRkNGMzMjgtY2MwZC00M2E1LTg5NTktYmUwNDg0NDM3YmUyXkEyXkFqcGdeQXVyMTI4Nzg5MDA@._V1_.jpg",
      title: "Lovely",
      artist: "Billie Eilish"
    },
    {
      img_url: "https://cdns-images.dzcdn.net/images/cover/8a9eb51156ca10c828831ae1a59ad9c3/264x264.jpg",
      title: "Wonderful U",
      artist: "AGA"
    },
    {
      img_url: "https://upload.wikimedia.org/wikipedia/en/3/3d/LoveSomeoneLG.jpg",
      title: "Love Someone",
      artist: "Lukas Graham"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b2737b25c072237f29ee50025fdc",
      title: "Love Story",
      artist: "Taylor Swift"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d00001e020c76be87f513c8361d06d6bd",
      title: "A Thousand Years",
      artist: "Christina Perri"
    },
    {
      img_url: "https://i1.sndcdn.com/artworks-JFTIswNqRrLgfNOg-aRN5Yg-t500x500.jpg",
      title: "golden hour",
      artist: "JVKE"
    },
    {
      img_url: "https://i1.sndcdn.com/artworks-gHa3JzsPFK85Xoi1-nwr8XQ-t500x500.jpg",
      title: "Heather",
      artist: "Conan Gray"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b273bfa45ad8f63c2098a573b009",
      title: "double take",
      artist: "dhruv"
    },
    {
      img_url: "https://i1.sndcdn.com/artworks-000084314548-w6ysb3-t500x500.jpg",
      title: "photograph",
      artist: "Ed Sheeran"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b27365fe0e7c05d8a219e90a56ad",
      title: "moonlight",
      artist: "dhruv"
    },
    {
      img_url: "https://cdns-images.dzcdn.net/images/cover/82bc376f08876a4f74b83af9ef3fdebc/500x500.jpg",
      title: "Until I Found You",
      artist: "Stephen Sanchez"
    },
  ];

  let rapSongs = [
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b2738e637f07434b31dd65d2a568",
      title: "宝贝我不渣",
      artist: "BigYear大年"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b273ca27ca866e8c53c68dc511e6",
      title: "她不是",
      artist: "BigYear大年"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b273d878d73359ba113a5d048322",
      title: "天上飞",
      artist: "二狗子Saddoggy"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b27398b57d95c7df3075b5b0d9ba",
      title: "官方回答",
      artist: "O.WEN欧阳子文"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b2732a6e1ef817a349616fef6d97",
      title: "当渣男你不配",
      artist: "Coco这个李文"
    },
    {
      img_url: "https://y.gtimg.cn/music/photo_new/T002R300x300M000003QiJmY44aDaL_1.jpg",
      title: "我一点都不想你",
      artist: "BigYear大年"
    },
    {
      img_url: "https://y.qq.com/music/photo_new/T002R300x300M000000fOuJ14YpmV8_2.jpg",
      title: "Ing Ing",
      artist: "BigYear大年"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b27323c11fe3a0db35607517c1bf",
      title: "苦咖啡 · 唯一",
      artist: "那奇沃夫/KKECHO"
    },
    {
      img_url: "https://p1.music.126.net/TnJleJtLP2s8a80uuAWQQA==/109951163857140095.jpg",
      title: "忍术",
      artist: "Oliver Jiang"
    },
    {
      img_url: "https://i1.sndcdn.com/artworks-FLRAeHY715W0hjZC-T1UcXA-t500x500.jpg",
      title: "4am",
      artist: "XMASwu"
    },
    {
      img_url: "https://cdns-images.dzcdn.net/images/cover/852e6b3a71207589f4d5a948594d385b/500x500.jpg",
      title: "最后一次",
      artist: "OSN高爾宣"
    },
    {
      img_url: "https://lineimg.omusic.com.tw/img/album/1580161.jpg?v=20210406180826",
      title: "Why You Gonna Lie",
      artist: "OSN高爾宣"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b27376cfc8026d094583df620aac",
      title: "BINGBIAN病变",
      artist: "Cubi/BRGang/Aydo$"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d00001e02a0db4db330923b9b5d356cce",
      title: "爱哭鬼",
      artist: "BigYear大年"
    },
    {
      img_url: "https://images.genius.com/3ef24f0ffb324634af09668d933ee464.1000x1000x1.jpg",
      title: "雪distance",
      artist: "Capper/罗言"
    },
    {
      img_url: "https://i.kfs.io/album/global/206059207,0v1/fit/500x500.jpg",
      title: "HEY KONG",
      artist: "KEY.L刘聪"
    },
    {
      img_url: "https://c-cl.cdn.smule.com/rs-s79/arr/17/55/05989b5c-c994-4e53-8a96-aa4a09df3194.jpg",
      title: "你要的全拿走",
      artist: "胡彦斌"
    },
  ];

  let highSongs = [
    {
      img_url: "https://e.snmc.io/i/600/s/ff7c57a1344fa108988fa3968a8ef407/9545875/%E9%99%B3%E5%A5%95%E8%BF%85-eason-chan-%E5%AD%A4%E5%8B%87%E8%80%85-Cover-Art.jpg",
      title: "孤勇者",
      artist: "陈奕迅"
    },
    {
      img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmfbMOQRgQEajfdALjLaQ_fpOuzk9-TgnhiFEWLJUOaYp2DNgKd68KJsYUC1bSH8jfaM&usqp=CAU",
      title: "海阔天空",
      artist: "Beyond"
    },
    {
      img_url: "https://i1.sndcdn.com/artworks-000209654353-64lsxv-t500x500.jpg",
      title: "Shape Of You",
      artist: "Ed Sheeran"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b27341e31d6ea1d493dd77933ee5",
      title: "STAY",
      artist: "Justin Bieber"
    },
    {
      img_url: "https://i.pinimg.com/564x/7c/ba/10/7cba10935c8e0d39e06e59f8fb2f66f7.jpg",
      title: "Something Just Like This",
      artist: "Coldplay"
    },
    {
      img_url: "https://i1.sndcdn.com/artworks-000211644976-c3ebcm-t500x500.jpg",
      title: "Closer",
      artist: "Coldplay"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b273575ea7fb7b79570981128341",
      title: "傷心的人別聽慢歌",
      artist: "五月天"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d00001e02205d09c3b49e03a625024d0b",
      title: "蜜汁沼澤",
      artist: "OSN高爾宣"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b27385f68c118fc945b0107a7ecd",
      title: "没钥匙的锁",
      artist: "KEY.L刘聪"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b2739cd7759a53f88fa89f89c421",
      title: "爱人错过",
      artist: "告五人"
    },
    {
      img_url: "https://i1.sndcdn.com/artworks-LP9QCIBfurUTHXq3-J8XMKQ-t500x500.jpg",
      title: "HEARTBREAK ANNIVESARY",
      artist: "Giveon"
    },
    {
      img_url: "https://i.scdn.co/image/ab67616d0000b273a197a2ef3ad6704d1f44aa4e",
      title: "Titanium",
      artist: "David Guetta feat. Sia"
    },
  ];

  let emptyArr = [
    {
      img_url: "",
      title: "",
      artist: ""
    },
    {
      img_url: "",
      title: "",
      artist: ""
    },
    {
      img_url: "",
      title: "",
      artist: ""
    },
  ]


  return (
    <main className='text-center'>
      <section className='h-full bg-rose-500 overflow-auto'>
        <h1 className='text-5xl font-bold p-10 text-purple-400'>憨憨温 · 抒情 [LOVE]</h1>
        <Search list={loveSongs} />

      </section>
      <section className='h-full bg-red-400 overflow-auto'>
        <h1 className='text-5xl font-bold p-10 text-emerald-400'>憨憨温 · 饶舌 [RAP]</h1>
        <Search list={rapSongs} />

      </section>
      <section className='h-full bg-blue-600 overflow-auto'>
        <h1 className='text-5xl font-bold p-10 text-blue-300'>憨憨温 · 悲歌 [SAD]</h1>
        <Search list={sadSongs} />
      </section>

      <section className='h-full bg-pink-600 overflow-auto'>
        <h1 className='text-5xl font-bold p-10 text-lime-400'>憨憨温 · 嗨歌 [CLUB]</h1>
        <Search list={highSongs} />
      </section>
    </main>
  )
}
