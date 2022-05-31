const homeHtml = `<div class="home-item">
<div class="logo-item animate__animated animate__zoomIn">
    <span class="animate__animated animate__rotateIn">M </span>
    <span class="animate__animated animate__zoomIn">U </span>
    <span class="animate__animated animate__slideInDown">S </span>
    <span class="animate__animated animate__flipInY">I </span>
    <span class="animate__animated animate__lightSpeedInRight animate__delay-1s">C </span>
</div>

</div>
<div class="carousel-container">
<div class="carousel-list">
  <!-- <img src="./img/Wallpaper1.jpg" alt="">
  <img src="./img/Wallpaper2.jpg" alt=""> -->
</div>
<div class="indicator">
  <!-- <span class="active"></span>
  <span></span> -->
</div>
<div class="arrow">
  <div class="arrow-left"></div>
  <div class="arrow-right"></div>
</div>
</div>`
const productsHtml = `<div class="content-item product-item animate__animated animate__backInRight">
<a href="https://music.migu.cn/v3">咪咕音乐网</a>
<p></p>
<img class="product" src="./images/products/migu.png" alt="">
<p>咪咕音乐网是中国移动官方音乐门户,旨在提供音乐首发、高品质音乐试听、彩铃订购、歌曲下载、铃音管理、音乐电台、音乐视频等一站式音乐互动体验,好音乐尽在music.migu.cn!</p>
</div>
<div class="content-item product-item animate__animated animate__backInRight">
<a href="https://music.migu.cn/v3">酷我音乐</a>
<p></p>
<img class="product" src="./images/products/kuwo.png" alt="">
<p>酷我音乐-无损音质正版在线试听网站,酷我音乐为您提供高品质音乐,无损音乐下载,拥有各类音乐榜单,快捷的新歌速递,完善的主题电台,个性化的歌曲推荐,高品质音乐在线听,好音质,用酷我。</p>
</div>
<div class="content-item product-item animate__animated animate__backInRight">
<a href="https://music.migu.cn/v3">网易云音乐</a>
<p></p>
<img class="product" src="./images/products/wangyiyun.png" alt="">
<p>网易云音乐是一款由网易开发的音乐产品，是网易杭州研究院的成果，依托专业音乐人、DJ、好友推荐及社交功能，在线音乐服务主打歌单、社交、大牌推荐和音乐指纹，以歌单、DJ节目、社交、地理位置为核心要素，主打发现和分享。</p>
</div>
<div class="content-item product-item animate__animated animate__backInRight">
<a href="https://music.migu.cn/v3">酷狗音乐</a>
<p></p>
<img class="product" src="./images/products/kugou.png" alt="">
<p>酷狗音乐是中国极具技术创新基因的数字音乐交互服务提供商，致力于为互联网用户和数字音乐产业发展提供完善的解决方案。在数字音乐发展上大胆尝试，与唱片公司、版权管理机构合作探索发展，积累音乐版权，在推动广范围的跨行业、跨平台合作上做出努力。给予用户人性化功能，实行多源下载，提升下载速度。国内最先提供在线试听功能。</p>
</div>
<div class="content-item product-item animate__animated animate__backInRight">
<a href="https://music.migu.cn/v3">QQ音乐</a>
<p></p>
<img class="product" src="./images/products/QQ.png" alt="">
<p>QQ音乐是腾讯公司推出的一款网络音乐服务产品,海量音乐在线试听、新歌热歌在线首发、歌词翻译、手机铃声下载、高品质无损音乐试听、海量无损曲库、正版音乐下载、空间背景音乐设置、MV观看等。</p>
</div>
<div class="content-item product-item animate__animated animate__backInRight">
<a href="https://music.migu.cn/v3">千千音乐</a>
<p></p>
<img class="product" src="./images/products/qianqian.png" alt="">
<p>千千音乐致力于提供更专业、更懂你的「场景音乐」,打造一款个性化、智能化的音乐伴侣产品,让你感受音乐本身的魅力。这里有来自不同国家的数百名音乐设计师,为你提供更好的 音乐服务。</p>
</div>`;
const introduceHtml = ` <div class="content-item introduce-item">
<h2 class="animate__animated animate__bounceInDown">①项目背景</h2>
<p class="animate__animated animate__bounceInUp">网站成为人们生活中的一部分,音乐网站对音乐艺术的发展、传播等起着重要的作用。有数据显示,互联网视频和音乐在搜索引擎、通信交友、电商贸易平台,已成为人们在网络上使用的第四大应用。互联网是全新媒体,其传播的广度和速度是其他媒体难以比拟的,在文、图、形、声等方面也体现出明显优势。互联网诞生后,人们逐步改变了音乐的传统传播方式,使音乐传播更加公平化、互动化与精细化。网络传播删减了部分流通环节与制作环节的成本,避开发布、创作等低效又复杂的过程,每个人通过互联网发布音乐作品。听众可以借助网络传播模式倾听音乐、回馈感受与提出意见,创作者也能够不断地调整音乐,使之更加完美。网络媒体的发展为音乐创作与传播注入了蓬勃的活力与生机。</p>
<h2 class="animate__animated animate__bounceInDown">②项目目标</h2>
<p class="animate__animated animate__bounceInUp">面向音乐试听用户的功能主要有根据歌曲或歌单进行搜索、对各类型音乐的歌单和歌手进行分类管理、下载和试听歌曲及查看歌词等。登录后的用户可以进行歌曲收藏、歌单评论、评论点赞、歌单评分以及个人设置等操作。</p>
<p class="animate__animated animate__bounceInUp">面向管理员的主要操作内容是首页的饼图和柱状图数据展示、包含用户收藏歌曲管理功能的用户个人信息管理、包含每个歌手的歌曲列表展示的歌手管理和歌单管理等功能。其中,歌单管理包含每个歌单的歌曲管理和歌单的评论列表管理等。管理员在后台页面必须登录之后,才可以进行上述所有操作,用户在前台页面可以不登录进行部分操作。</p>
<h2 class="animate__animated animate__bounceInDown">③应用场景</h2>
<p class="animate__animated animate__bounceInUp">music网站满足人们对于网络试听的需求,为大众提供基本的试听服务。基本达到了界面友好、功能齐全的目的,同时具有用户便利、灵活地浏览主页和试听音乐的效果.前台管理实现了用户注册和登录、歌曲查询、歌曲试听功能,后台管理完成了歌曲添加、歌曲信息管理、账户管理、歌曲审核功能。</p>
<h2 class="animate__animated animate__bounceInDown">④功能需求</h2>
<p class="animate__animated animate__bounceInUp">前台模块主要面向用户,内容是歌手歌单的展示以及播放音乐。用户登录之后可以收藏音乐和评价、评论歌单以及点赞其他用户的评论。管理员必须登录才可以进入后台首页。首页是对用户、歌手、歌单和歌曲的柱状图和饼图的分析展示,可以一目了然地看到前台的各种数据集合,方便管理员提取和分析整个音乐网站的数据。管理员的用户管理部分,存放了前台模块的所有用户数据。后台管理员可以对这些用户进行增删改查操作,还可以管理用户的收藏歌曲列表。管理员的歌手管理部分,主要是前台所有歌手的信息集合列表。管理员可以对这些歌手增删改查,管理歌手其下的歌曲列表,除了增删改查这些歌曲外,还可以更新歌曲的MP3文件和测试歌曲是否能播放。歌单管理与同级的歌手管理相似,附加一个评论管理功能,管理员有权限删除某一歌单中的任何评论。</p>
<h2 class="animate__animated animate__bounceInDown">⑤界面需求</h2>
<p class="animate__animated animate__bounceInUp">系统界面以冷色调为主，操作灵活、方便。作为音乐网站方便访问人群使用，操作简单易懂。</p>
</div>`
const designHtml = `<div class="content-item design-item animate__animated animate__zoomInDown">
<p>参考现有音乐网站,从用户需求出发,首先设计基本的功能模块,其次确定网站的主要架构。网站从整体进行规划和设计,从歌手、歌曲、歌单3个模块进行分层设计,自顶向下逐步细化。使用者目前为普通用户和系统管理员。在设计过程中,要满足普通用户对音乐网站前台歌曲和歌单的基本功能使用,也要满足管理员对前台用户管理、歌手管理和歌单管理的全部数据管理需要。在该项目中,当歌曲量不再满足普通用户的需求时,要在后台及时添加和更新歌曲。网站对于一些违规用户也应及时注销,营造一个良好的共享音乐网站。
</p>
<p>通过划分系统模块、设计数据流程图和数据库表等方法来确定项目的基本框架和原型。前台模块的主题应根据需求突出风格,本项目设计的整个页面以冷色调为主,
    打造一个简约自然的音乐网站,并且海量歌曲是可以免费试听的,以满足用户的基本要求。</p>
</div>
<div class="content-item design-item draw" >
<div class="pic animate__animated animate__rollIn">
    <img src="./images/usage/userage.png" alt="">
</div>
<div class="pic animate__animated animate__rollIn">
    <img src="./images/ER/Admin表ER图.png" alt="">
</div>
<div class="pic animate__animated animate__rollIn">
    <img src="./images/ER/collect表ER图.png" alt="">
</div>
<div class="pic animate__animated animate__rollIn">
    <img src="./images/ER/consumer表ER图.png" alt="">
</div>
<div class="pic animate__animated animate__rollIn">
    <img src="./images/ER/list_song（前端）表ER图.png" alt="">
</div>
<div class="pic animate__animated animate__rollIn">
    <img src="./images/ER/music网站e-r图.png" alt="">
</div>
<div class="pic animate__animated animate__rollIn">
    <img src="./images/ER/rank表ER图.png" alt="">
</div>
<div class="pic animate__animated animate__rollIn">
    <img src="./images/ER/song_list（后端）表ER图.png" alt="">
</div>
<div class="pic animate__animated animate__rollIn">
    <img src="./images/ER/song表ER图.png" alt="">
</div>
</div>`
const commentHtml = `<section>
<header class="major">
    <h2>吐槽一下</h2>
</header>


<div id="barrage"></div>
<div id="btn">
    <input type="text" id="text"/>
    <input type="button" id="submit" value="发送"/>
</div>
</section>`