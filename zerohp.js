
 // 設定開始（メッセージの内容を設定してください）

var msg1 = 'おはよう！			'; // 時間帯1
var msg2 = '午前中はやる気出ないです。。			'; // 時間帯2
var msg3 = 'お昼はもう食べた？			'; // 時間帯3
var msg4 = 'とりあえず午後も頑張りますか'; // 時間帯4
var msg5 = '一日お疲れ様でした '; // 時間帯5
var msg6 = 'お風呂入ったかー？ '; // 時間帯6
var msg7 = 'まだ起きてるの？ '; // 時間帯7

// 設定終了


var now = new Date();

var hour = now.getHours();


// 表示開始

// 時間帯1
if(hour >= 5 && hour <= 8){

	document.write(msg1);

}
// 時間帯2
else if(hour >= 9 && hour <= 11){

	document.write(msg2);

}
// 時間帯3
else if(hour >= 12 && hour <= 13){

	document.write(msg3);

}
// 時間帯4
else if(hour >= 14 && hour <= 17){

	document.write(msg4);

}
// 時間帯5
else if(hour >= 17 && hour <= 20){

	document.write(msg4);

}
// 時間帯6
else if(hour >= 18 && hour <= 23){

	document.write(msg5);

}
// 時間帯7
else{

	document.write(msg6);

}

document.addEventListener('DOMContentLoaded', function() {
    const targets = document.querySelectorAll('img.yp1');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    targets.forEach(target => {
        observer.observe(target);
    });
});

