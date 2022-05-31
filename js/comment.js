const comment = () => {
  var timer = null;
  var current = []; //存储当前输入框的内容
  var newarr = []; //存储每个弹幕距左边框的距离
  var flag = 0; //标志量
  var num = new Array(); //数组，用来存储划分每个块的序号
  //var t=12;
  var words = [
    "好厉害丫",
    "姐姐 你！是！我！的！神！",
    "超棒哒~",
    "这也太好看了8",
    "perfect！！！",
    "好耶！",
    "秀儿~",
    "很好",
    "我要为姐姐扛大旗！！！！",
    "耶耶耶",
    "姐姐们好棒",
    "冲丫",
  ];
  function $1(id) {
    return document.getElementById(id);
  }
  for (var i = 0; i < $1("barrage").offsetHeight / 20 - 1; i++) {
    num.splice(i, 0, i); //将整个显示框划分成多个块，并对每个块进行标号
    //console.log(num)
  }
  //console.log(num)
  //console.log(num.length)

  window.onload = function () {
    //加载页面发生的事件

    clearInterval(timer); //清除定时器
    for (var i = 0; i < 10; i++) {
      setTimeout(function () {
        var word = words[random(0, words.length - 1)]; //随机产生一个弹幕的内容
        create(word); //创建一个弹幕
      }, 100 * random(10, 100)); //给弹幕随机加一个延迟
    }
    timer = setInterval(move, 20); //开启定时器
  };

  function create(w) {
    //创建一个弹幕
    var node = document.createElement("div"); //创建一个div元素，用来存储弹幕的信息
    //console.log(words.length)
    node.innerHTML = w;
    //console.log($("barrage").offsetHeight)
    var t = random(0, num.length - 1);
    //console.log(num)
    node.style.top = num[t] * 20 + "px"; //从划分的块中随机选中一块。
    Delete(num[t]); //删除已被选中的块
    //console.log(t)
    //console.log(node.style.top);
    node.style.left = "800px";
    node.style.color = "#" + randomColor(); //随机颜色
    $1("barrage").appendChild(node); //插入子节点
    flag++; //创建了一个新弹幕时，更新为0

    //console.log(node.offsetLeft)
  }

  function move() {
    var arr = $1("barrage").getElementsByTagName("div"); //获取所有的弹幕
    for (var i = 0; i < arr.length; i++) {
      newarr.push(arr[i].offsetLeft); //将每个弹幕距左边边框的距离分别存储在newarr数组中
      arr[i].style.left = newarr[i] + "px"; //更新距离
      newarr[i] = newarr[i] - 2; //每次减少2px
      if (newarr[i] < 0) {
        //console.log(arr[i].innerHTML)
        if (currentTest(arr[i].innerHTML) && flag != 0) {
          //当是从输入框发送的弹幕时而且是第一次时,将内容添加到预备的词库中，并删除这个div元素。这么做是为了将弹幕数量维持在一定数量，防止在输入框发送大量弹幕，导致出现错误。
          //console.log(current)
          words.push(arr[i].innerHTML);
          $1("barrage").removeChild(arr[i]);
          newarr.splice(i, 1); //在newarr中删除这个div
          flag--;
        } else {
          //当弹幕到达最左边时，弹幕内容再次随机，同时，将这个块加入到预选块中，并在预选块中随机再选一个，颜色也再次随机，这样就保持块的数量不变。
          newarr[i] = 800;
          //console.log(parseInt(arr[i].style.top))
          //console.log(arr[i].style.top/20)
          arr[i].innerHTML = words[random(0, words.length - 1)];
          num.splice(num.length, 0, parseInt(arr[i].style.top) / 20);

          var t = random(0, num.length);
          arr[i].style.top = num[t] * 20 + "px";
          Delete(num[t]);
          //console.log(num)
          //console.log(node.style.top);
          arr[i].style.left = "800px";
          arr[i].style.color = "#" + randomColor();
        }
      }
    }
  }

  $1("submit").onclick = function () {
    //输入款发送弹幕
    create($1("text").value);
    current[current.length] = $("text").value;
    //console.log(current)
    $1("text").value = "";
  };
  //console.log(num)
  function Delete(m) {
    //从预选块中删除已被选择的块
    for (var i = 0; i < num.length; i++) {
      if (num[i] == m) {
        //console.log(m)
        num.splice(i, 1);
      }
    }
  }

  function currentTest(m) {
    var fl = false;
    for (var i = 0; i < current.length; i++) {
      if (current[i] == m) {
        //console.log(m)
        current.splice(i, 1);
        fl = true;
      }
    }
    return fl;
  }

  function randomColor() {
    //随机颜色
    var color = Math.ceil(Math.random() * 16777215).toString(16);

    while (color.length < 6) {
      color = "0" + color;
    }
    return color;
  }

  function random(m, n) {
    //随机在m、n之间的整数
    return Math.round(Math.random() * (n - m)) + m;
  }

  $("#text").keyup(function (e) {
    if (e.keyCode == 13) {
      $("#submit").click();
    }
  });
};
comment()
document.querySelector('#five').onclick = function (e) {
    doms.content.innerHTML = '';
    doms.content.style.display = 'none';
    doms.comment.style.opacity = 1;
    if(time) clearTimeout(time)
    var time = setTimeout(function () {
    comment()

    },1000)
}