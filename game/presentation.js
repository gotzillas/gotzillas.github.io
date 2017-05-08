Quintus.Presentation = function(Q) {

    
Q.slide(8,function(stage) {
    stage.tiles("level0.json");
    var bg = stage.background("background3.png");
    bg.p.opacity = 0.6;

    stage.title("การติดต่อ");

    var iframe = new Q.UI.IFrame({ url: "contact.html", w: 680, h: 330, x: 172, y: -520, background: "rgba(255,255,255,0.3)", type: 0 });

    iframe.add("tween").animate({ y: 150 },1,Q.Easing.Quadratic.Out, { delay: 0.5 });

    stage.insert(iframe);
    
  }); 
    
    
Q.slide(7,function(stage) {
    stage.tiles("level0.json");
    stage.background("background3.png");

    stage.title("ผลงาน");


    stage.scroller("1.jpg","Hashtags","-เป็นผลงานที่ใช้ #tags \n ของ instagram เพื่อค้นหา tags ภาพมาแสดง\n เพื่อทำ แกลอรี่รูปภาพต่างๆได้");
    stage.scroller("2.jpg","Sankapan Shop","- เป็นระบบจัดการร้านค้า online\n โดยมีรูปแบบการจัดส่งโดยใช้ map \n และการจัดการข้อมูลแบบครบครั่น");

    stage.scroller("3.jpg","Glasshop","- เป็นระบบขายสินค้า แว่นตาเเละหมวกโดยสินค้า\nสามารถทดลองส่วมใส่ได้ \nและมีการจัดการข้อมูลต่างๆได้");

    stage.scroller("4.jpg","Hotel booking (demo)","- เป็นระบบทดสอบการปรับแต่ง theme\n โดยใช้ yii framwork");

    stage.scroller("5.jpg","Shoueshop","- เป็นระบบขายรองเท้า มีระบบจ่ายเงินผ่านธนาคาร เเละสามารถ\n login ผ่าน facebook ได้  โดยมีระบบหลังร้านสามารถจัดการ\nข้อมูลต่างๆและสามารถออกรายงานได้");
    
     stage.scroller("6.jpg","Minimart","- เป็นระบบจัดการร้านค้าขายสินค้าขนาดเล็ก\nมีระบบจัดการข้อมูลสินค้าประเภทสินค้า สมาชิก \nมีการนับแต้มการสั่งซื้อสินค้าเพื่อมาแลกสินค้าได้ \nโดยระบบรวมๆ ก็เป็นระบบขายสินค้า สามารถออกรายงานการขายได้");
    
     stage.scroller("7.jpg","ระบบจัดการการขาย Computer","-ป็นระบบจัดการข้อมูลการขายสินค้าคอมพิวเคอร์\nโดยทุกๆ การสั่งซื้อจะมีระบบ \n ของแถมว่าสินค้านั้นๆ จะได้ของแถมอะไรบ้าง  \n โดยการจัดการข้อมูลก็เป็นระบบจัดการ\nข้อมูลสินค้าทั่วไป \nและ สามารถออกรายงานการขายและอื่นๆ\nได้");
    
     stage.scroller("8.jpg","ระบบหอพัก","- เป็นรับบจัดการข้อมูลหอพักโดยสามารถจัดการข้อมูล\nที่จำเป็นในการจัดการห้องพัก มีระบบจองห้องพัก \nการเซ็คอิน การเซ็คเอ้า ห้องพัก \nมีการออกรายงานของแต่ละเดือน มีระบบแจ้งเกือน\nกรณีไม่จ่ายค่าห้องพัก ตัวนี่ได้ทีมงานพัฒนาช่วยกัน 3 คน\nช่วงหารายได้ระหว่างเรียน ");

   stage.on("10%",function() {
     stage.triggerScroller();
   });
     stage.insert(new Q.UI.Text({ label: 'กระโดดตรงนี้\nเพื่อเลื่อน', color: 'white', x: 280, y: 700, z: 11, lineHeight: 1, align: 'center' }));
  });
    
    
    Q.slide(6,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.title("ประวัติการทำงาน");
    stage.point("\nมีประวัติการทำงานจากการฝึกประสปการณ์การทำงาน\n\nที่บริษัท freewill solutions (สาขาขอนแก่น)\n\nเป็นระยะเวลา 3 เดือน \n\nซึ่งได้ทำการเขียนโปรแกรมด้วย C# โดยใช้โครงสร้างของ MVC ");
   // var pt = stage.title("We ");
   // pt.p.y = 390;

    var zuk = stage.insert(new Q.Sprite({ asset: "displogo.gif", x: 400, y: 380, type: 0, opacity: 0.01 }).add("tween"));
    stage.on("30%",function() {
      zuk.animate({ opacity: 1 }, null,null);
      //pt .animate({ opacity: 1 }, null,null);

    });
 });
    
Q.slide(5,function(stage) {
    stage.tiles("level0.json");
    stage.background("background3.png");

    stage.title("ความสามารถเพิ่มเติม");


    stage.scroller("bootsstraps.png","Bootstrap","-มีความสามารถในการปรับแต่ง\nและเข้าใจหลักการทำงานของ\nBootstrap สามารถออกแบบ\nการแสดงผลแบบ Responsive ได้");

    stage.scroller("yii.png","Yii PHP Framework","-ปัจจุบันกำลังศึกษาการใช้งาน\nyiif-ramework โดยมีพื้นฐาน\nความรู้ในหลักการทำงาน\nเเละปรับแต่งเบื้องต้นได้");

    stage.scroller("dbdevelops.png","Facebook Developers","-มีความสามารถในการใช้ Plugin ของ facebook\nและ twitter ในการทำ login website \nและอื่นๆที่เกี่ยวข้องได้");

    stage.on("10%",function() {
     stage.triggerScroller();
   });
     stage.insert(new Q.UI.Text({ label: 'กระโดดตรงนี้\nเพื่อเลื่อน', color: 'white', x: 280, y: 700, z: 11, lineHeight: 1, align: 'center' }));
  });
    
    
 


  Q.slide(4,function(stage) {
    stage.tiles("level0.json");
    stage.background("background2.png");

    stage.points();
    stage.title("ความสามารถ\nในการเขียนโปรแกรม",{color:"green"});
    stage.point("1. PHP ระดับ advance\n\n2. .NET C#  ระดับ advance\n\n3. SQL ระดับ advance\n\n4. HTML - CSS ระดับ advance \n\n5. Javascript ระดับ advance");
    
    stage.point("");
    
  });


  Q.slide(3,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.points();
    stage.title("ประวัติการศึกษา",{color:"pink"});
    stage.point("จบการศึกษา ระดับปริญญาตรี ที่ มหาวิทยาลัยราชฏัชอุดรธานี");
    stage.point("คณะวิทยาศาสตร์").set({x:430});
    stage.point("สาขาเทคโนโลยีสารสนเทศพัฒนาซอฟแวร์").set({x:310});
      
       var logo = stage.insert(new Q.Sprite({ asset: "logo.png", x: 350, y: 340, type: 0, opacity: 0.01 }).add("tween"));
    stage.on("10%",function() {
      logo.animate({ opacity: 1 }, null,null);
    });
      
  });


  Q.slide(2,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.points();
    stage.title("แนะนำตัว",{color:"blue"});
    stage.point("ชื่อ : พลกฤษ แสนใจ  ชื่อเล่น : อาก้า  \n\nวันเดือนปีเกิด : 6 มกราคม พ.ศ. 2535 \n\nอายุ : 23 ปี   เพศ : ชาย  สถานภาพทางการสมรส : โสด ");
      
    var zuk = stage.insert(new Q.Sprite({ asset: "me.png", x: 350, y: 400, type: 0, opacity: 0.01 }).add("tween"));
    stage.on("10%",function() {
      zuk.animate({ opacity: 1 }, null,null);
    });


  });

  Q.slide(1,function(stage) {
    stage.tiles("level0.json");
    stage.background("background4.png");

      
      
    var data = stage.insert(new Q.Sprite({ asset: "sign.png", x: 350, y: 0, type: 0, opacity: 0.01 }).add("tween"));
    stage.on("0%",function() {
      data.animate({ opacity: 1 }, null,null);
    });
      
    stage.insert(new Q.Sprite({ sheet: "cab", x: 500, y: 685 - 158, type: 0, z: 11 }));
    stage.insert(new Q.Sprite({ sheet: "hydrant", x: 100, y: 685 - 110, type: 0, z: 11 }));
    var html = new Q.UI.HTMLElement();
    stage.insert(html);
    
 
    

  });

  Q.include("Audio");
  Q.include("Physics");

  Q.audio.enableWebAudioSound();

  // Whatever assets you'll need
  Q.preload([
    'sprites.png','sprites.json','game-background.png', 'sign.png', 'history.png',
    'level.json', 'level2.json', 'level0.json', 'zuckerberg.jpg', 'level_gap.json','me.png','logo.png',
    'html5logo.png',"background2.png",'game-plane.png', "background3.png","background4.png","background5.png",'bootsstraps.png','dbdevelops.png','yii.png','displogo.gif','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg',
  ]);


  // Called after preload
  Q.presentationSetup = function() {
    Q.compileSheets("sprites.png","sprites.json");
    Q.animations('player', {
       run_right: { frames: [0,1,2,3,4,5], rate: 1/8},
       run_left: { frames: [9,10,11,12,13,14], rate: 1/8},
       stand_right: { frames: [2], rate: 1/5},
       stand_left: { frames: [11], rate: 1/5},
       jump_right: { frames: [6,7,8], rate: 1/5, loop: false },
       jump_left: { frames: [15,16,17], rate: 1/5, loop: false},
       fly_right: { frames: [8], rate: 1/5, loop: false },
       fly_left: { frames: [17], rate: 1/5, loop: false}
    });
  };


};

/*  Q.slide(2,function(stage) {
    stage.tiles("level.json");
    stage.background("game-background.png");

    stage.points();
    stage.point("This is a test of the emergency broadcast\nsystem. This is only a test and I\nthink it should stay that way");
    stage.point("This is a second test");
    stage.point("This is a third test");

  });
  */
