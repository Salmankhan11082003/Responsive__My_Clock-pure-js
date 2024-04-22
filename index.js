setInterval(() => {
      d = new Date();
      htime = d.getHours();// 12hr clock
      mtime = d.getMinutes(); // 60 min
      stime = d.getSeconds();// 60 sec
      hrotation = 30 * htime + mtime / 2;// 12hr clock
      mrotation = 6 * mtime;// 60 min
      srotation = 6 * stime;// 60 sec

      hour.style.transform = `rotate(${hrotation}deg)`;// 12hr clock
      minute.style.transform = `rotate(${mrotation}deg)`;// 60 min
      second.style.transform = `rotate(${srotation}deg)`// 60 sec
}, 1000);
