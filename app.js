(function() {
    'use strict';
    var app = angular.module('application', ['ngSanitize']);
    app.controller('MainController', function($scope) {
        $scope.change_lang = function(lang) {
            if (lang == 'thai') {

                $scope.message = {
                    'show_menu_header': {
                        'Home': 'หน้าหลัก',
                        'About': 'เกี่ยวกับฉัน',
                        'Skill': 'ความสามารถ',
                        'Experience': 'ประสปการณ์',
                        'Education': 'การศึกษา',
                        'Portfolio': 'ผลงาน',
                        'Contact': 'การติดต่อ'
                    },
                    'home_data': {
                        'header': 'พลกฤษ แสนใจ',
                        'under_header': 'โปรแกรมเมอร์ & เว็บดีไซน์เนอร์',
                        'connect': 'การติดต่อ',
                        'slideTitle': "♥ ",
                        'slide_1': 'Web Developer',
                        'slide_2': 'Web Designer',
                        'slide_3': 'Mobile Developer',
                        'slide_4': 'Win App Developer.',
                        'details': 'สวัสดีครับ ผมชื่อ นาย พลกฤษ แสนใจ เว็บไซต์นี้เป็นเว็บไซต์แนะนำตัวและผลงานที่ผมเคยทำมา ครับ แนะนำ browser ที่ใช้เปิดให้ใช้ google chrome นะครับเพื่อการแสดงผลที่เต็ม 100% ',
                        'btn_title': 'เกี่ยวกับฉัน',
                        'btn_title_resume': 'MY RESUME'
                    },
                    'promote_data': {
                        'tab_one_title': 'การพัฒนาเว็บไซต์',
                        'tab_one_name': 'Web Developer',
                        'tab_one_details': "มีความถนัดสูงทางด้านการเขียนเว็บไชต์เป็นอย่างดีทั้งในภาษา PHP Javascript และ ASP.NET C#.",
                        'tab_two_title': 'การออกแบบเว็บไซต์',
                        'tab_two_name': 'Web Designer',
                        'tab_two_details': 'มีความสามารถในการออกแบบเว็บไซต์ด้วย  front-end framework Bootstrap , Css3 ได้เป็นอย่างดี .',
                        'tab_three_title': 'ผลงาน',
                        'tab_three_name': 'Potfolio',
                        'tab_three_details': 'มีผลงานขณะทำการเรียน และผลงานระหว่างฝึกประสปการณ์ทำงาน. เเละขณะทำงาน',
                        'tab_four_title': 'การทำงานเป็นทีม',
                        'tab_four_name': 'Skilled Team',
                        'tab_four_details': 'สามารถทำงานเป็นทีมและสามารถทำงานในหลักการทำงานแบบ MVC ได้'
                    },
                    'about_data': {
                        'title': 'เกี่ยวกับฉัน',
                        'details_one': '<b> ประวัติส่วนตัว </b><hr/><br/> ชื่อ : นายพลกฤษ แสนใจ <br/> วันเดือนปีเกิด : 6 มกราคม พ.ศ. 2535 <br/> อายุ : 25 ปี <br/> สุขภาพ : สุขภาพดีไม่มีโรคติดต่อ <br/> น้ำหนัก : 59 กิโลกรัม <br/> ส่วนสูง : 177 เซนติเมตร <br/> สถานภาพทางการสมรส : <b class="text-danger" > โสด </b> ',
                        'details_two': 'ปัจจุบันรับงานเขียนเว็บทั่วไป เเละ windows app , Android App Private .',
                        'tab_one': 'ประวัตืส่วนตัว',
                        'tab_two': 'การศึกษา',
                        'tab_three': 'ความสามารถ'
                    },
                    'show_content': {
                        'experience': 'ปี ประสปการณ์ทำงาน',
                        'portfolio': 'ผลงานที่สำเร็จ'
                    },
                    'skill_data': {
                        'title': 'ความสามารถ',
                        'details': 'ความสามารถ ทางด้านภาษาการเขียนโปรแกรม จากประสปการณ์ในระหว่างทำการเรียนเเละศึกษาด้วยตัวเองมีความสามารถของแต่ละภาษาคร่าวๆ ด้วยกันดังนี้ + อื่นๆ NodeJs , Angularjs , React  Config Vps Digitalocean , AWS ได้เล็กน้อย ',
                        'title_skill': 'ความสามารถทางภาษา'
                    },
                    'skill_content': {
                        'skill_title_1': 'Yii framework',
                        'skill_des_1': 'ความสามารถในการใช้  Yii framework',
                        'skill_details_1': 'สามารถเขียนโปรแกรมโดยใช้ Framework Php Yii1 ได้เป็นอย่างดี',
                        'skill_title_2': 'Bootstrap',
                        'skill_des_2': 'ความสามารถในการใช้ Bootstrap',
                        'skill_details_2': 'มีความสามารถในการปรับแต่งและเข้าใจหลักการทำงานของ Bootstrap สามารถออกแบบการแสดงผลแบบ Responsive ได้',
                        'skill_title_3': 'API & Other',
                        'skill_des_3': 'ความสามารถในการใช้ API และ อื่นๆ',
                        'skill_details_3': 'มีความสามารถในการใช้ Plugin ของ facebook twitter , Github , Firebase และจัดการ server Linux ได้เป็นอย่างดี',
                        'skill_title_4': 'Mobile Apps / Android - IOS',
                        'skill_des_4': 'ความสามารถในการเขียน Mobile  apps',
                        'skill_details_4': 'สามารถเขียน Mobile Apps โดยใช้ HTML5 (Phonegap, Cordova , Ionic) รับ - ส่งข้อมูลแบบ json  ได้ (Php webserver) '
                    },
                    'exs_data': {
                        'title': 'ประสปการณ์',
                        'des': 'ปีในการทำงาน',
                        'details': 'ประสปการณ์ทำงานในที่ต่างๆ ปัจจุบันรับงานทั่วไป',
                        'current': 'ปัจจุบัน',
                        'data_foure': '1 ก.ค 58',
                        'data_foure_des': '30 ม.ย 59',
                        'data_five': '1 ก.ค 59',
                        'data_five_des': '31 มี.ค 60 - ปัจจุบัน',
                        'date_one': ' ปี 4 ถึง',
                        'date_one_des': 'ฝึกงาน',
                        'date_two': 'ปี 3 ถึง',
                        'date_two_des': 'ปี 4 ',
                        'date_three': 'ปี 1 ถึง',
                        'date_three_des': 'ปี 3 ',
                        'des_title_1': 'ฝึกประสปการณ์ทำงาน',
                        'des_des_1': 'ฝึกประสปการณ์ทำงาน และ รับงาน freeland',
                        'des_details_1': 'ในขณะที่ทำการฝึกงานได้ทำการศึกษาข้อมูลเเละได้เขียนโปรแกรมกับหน่วยงานบริษัท (Freewill Solutions สาขาขอนแก่น) โดยงานที่ได้รับมอบหมายก็เขียนตามโครงสร้างของผู้ออกแบบระบบ ได้ทำการฝึกการเขียนโปรแกรมแบบ MVC ของ ASP.NET C# และในขณะที่ว่างได้รับงานเว็บไซต์ทั่วไปทำขณะฝึกงาน โดย ตอนจบฝึกงานทางบริษัทได้ชักชวนให้ทำงานด้วย แต่ต้องผ่านเกมทหารก่อน.. ปีนั้นำด้สละสิทธฺผ่อนผันต่อเเล้วจึงไปหางานที่อุดรบ้านเกิด',
                        'des_title_2': 'เริ่มทำโปรเจค',
                        'des_des_2': 'ปี 3 ถึง ปี 4 ในขณะที่ทำการศึกษา',
                        'des_details_2': 'ได้ศึกษาและทำโปรเจคเว็บไซต์ ขายสินค้าด้วย AR หมวกเเละแว่นตาที่สามารถทดลองสวมใส่ได้ {เสมือนจริง) โดยได้เริ่มเขียนเว็บไซต์แบบ Responsive โดยใช้ Bootstrap จนสามารถทำให้โปรเจคนั้นเสำเร็จลงได้ด้วยดี ',
                        'des_title_3': 'ทำการศึกษาข้อมูล',
                        'des_des_3': 'ได้ศึกษาการเขียน Java , Sql , PHP , C# เบื้องต้น',
                        'des_details_3': 'ในขณะเรียนได้ทำการศึกษา หาข้อมูลการเขียนโปรแกรมของภาษาที่ถนัดเพื่อนำไปพัฒนาเป็นโปรเจคจบทำการวางแผนโปรเจคว่าจะทำเกมส์แต่เนื่องจากฝีมือการปั้น 3D น้อย จึงหันมาทำเว็บไซต์แทน',
                        'des_title_4': 'Peed Studio (อุดรธานี)',
                        'des_des_4': 'ทำงานที่บริษัท Peed Studio เป็นเวลา 1 ปี www.peedstudio.co.th ',
                        'des_details_4': 'ได้ทำงานที่นี่ถือว่าเป็นอันที่ภูมิใจเนื่องจากเป็นบริษัทแรกที่ลองสมัครเเล้วได้งานเลย ทำการฝึกงาน 2 อาทิตย์ พี่หัวหน้าที่บริษัทได้รับเข้าทำงาน โดยโปรแกรมเมอร์ มี 2 คนรวมผมได้ร่วมกันทำงาน  โดยงานส่วนมากที่ทำจะใช้ Yii เป็นหลัก ขณะทำงานอาจารย์ทางมหาวิทยาลัยได้เชิญให้ไปเป็นวิทยากรให้น้องๆ ที่กำลังศึกษาด้วย ผลงานที่นี้ได้เยอะ สาเหตุที่ออกเนื่องจากไกลจากหอพัก ย้ายไปทำงานที่ใกล้แทน',
                        'des_title_5': 'The Best Design Studio (อุดรธานี)',
                        'des_des_5': 'ทำงานที่บริษัท The Best Design Studio เป็นเวลา 9 เดือน www.tbds.co.th',
                        'des_details_5': 'ย้ายมาทำงานนี่นี่เนื่องจากไกล้หอพัก ได้ทำงานงานเป็นหัวหน้าตัวเองเพราะมีโปรแกรมเมอร์คนเดียว เนื่องจากทำงานรูปแบบคนเดียวรูปแบบงานที่เขียนจะเป็น Oop ส่วนมากงานจะเป็นงานภายในระบบการเงิน เงินเดือนดีหัวหน้าพาทำอะไรหลากหลาย สาเหตุที่ออก : คัดเลือกทหาร - บวช',
                    },
                    'edu_data': {
                        'title': 'การศึกษา',
                        'univer': 'มหาวิทยาลัย',
                        'coleg': 'มํธยมศึกษาตอนปลาย',
                        'school': 'มัธยมศึกษาตอนต้น'
                    },
                    'edu_univer': {
                        'title': 'การศึกษา ระดับปริญญาตรี',
                        'des': 'คณะวิทยาศาสตร์ - สาขาเทคโนโลยีสารสนเทศพัฒนาซอฟแวร์',
                        'date': 'พ.ศ.2554 - พ.ศ.2558',
                        'details': 'การศึกษาในระดับปริญญาตรี ในมหาวิทยาลัยราชฏัชอุดรธานีได้รู้จักผู้คน และรูปแบบการเขียนโปรแกรมมากมาย จึงได้เริ่มศึกษาที่ตัวเองสนใจ จนในช่วงหนึ่งได้มุ่งเน้นมาทางเว็บไซต์เเละโมบาย เพราะมองเห็นว่าในอนาคตทุกอย่างคงจะมาทำที่เว็บไซต์หมดเเล้ว'
                    },
                    'edu_coleg': {
                        'title': 'การศึกษา ระดับมัธยมปลาย',
                        'des': 'สายวิทย์ - คณิต',
                        'date': 'พ.ศ.2550 - พ.ศ.2554',
                        'details': 'ได้ทำการศึกษาวิชาพื้นฐาน แนวคิด ต่างๆ ในช่วงที่กำลังทำการศึกษาได้มีส่วนร่วมในวิชาการคอมพิวเตอร์ในการแข่งขันในระดับเขต เเละระดับจังหวัด ทำให้มีความรู้ทางคอมพิวเตอร์มากขึ้น จึงมีแนวคิดศึกษาต่อ ว่าจะเป็น  (โปรแกรมเมอร์)  '
                    },
                    'edu_school': {
                        'title': 'การศึกษา ระดับมัธยมต้น',
                        'des': '-----------------------',
                        'date': 'พ.ศ.2548 - พ.ศ.2550',
                        'details': 'ในช่วงระหว่างนี้ได้ทำการหัด ซ่อมคอมพิวเตอร์ ติดตั้งโปรแกรมเบื้องต้น ตามประสาเด็กอยากรู้ โดยมีอาจารย์สอนให้หัดใช้โปรแกรมต่างๆ การทำเว็บไซต์เบื้องต้น จึงทำให้รักในการทำงานเกี่ยวกับคอมพิวเตอร์มาตั้งแต่เด็กครับ'
                    },
                    'portfolio_data': {
                        'title': 'ผลงาน (เฉพาะที่ลง Code เองมากกว่า 80%)',
                        'tab_1': 'ทั้งหมด',
                        'tab_2': 'เว็บไซต์',
                        'tab_3': 'วินโดว์แอพพลิเคชั่น',
                        'tab_4': 'โมบาย',
                        'tab_5': 'เกมส์'
                    },
                    'contract_data': {
                        'title': 'การติดต่อ',
                        'des': 'เบอร์โทรติดต่อ : 085-459-3048 (อาก้า) <br/>อีเมลล์ : phonkritSaenjai@gmail.com , gotzillaphonkrit@gmail.com',
                        'name': 'ชื่อ',
                        'email': 'อีเมลล์ติดต่อกลับ',
                        'subject': 'หัวข้อ',
                        'message': 'ข้อความ',
                        'send': 'ส่งข้อความ'
                    },
                    'resume_description': {
                        'title': '',
                        'des': '',
                        'title_project': '',
                        'des_project': '',
                        'data_project': ''
                    },
                    'doc': {
                        'more': 'รายละเอียด',
                        'view': 'แสดงภาพ'
                    },


                    'web_doc_1': {
                        'title': 'ระบบขายรองเท้า online',
                        'des': 'เว็บไซต์ 2015'
                    },

                    'web_doc_2': {
                        'title': 'Hashtags',
                        'des': '(โปรเจค Hashtags Intragram) เว็บไซต์ 2015'
                    },

                    'web_doc_3': {
                        'title': 'ระบบขายสังฆภันณ์ online',
                        'des': 'เว็บไซต์ 2015',
                    },


                    'web_doc_4': {
                        'title': 'ระบบขายเเว่นตาเเละหมวกด้วย AR',
                        'des': 'เว็บไซต์ 2015',
                    },

                    'web_doc_5': {
                        'title': 'ห้องพัก Yii framework',
                        'des': 'เว็บไซต์ 2015',
                    },

                    'web_doc_6': {
                        'title': 'ระบบขายสินค้า Minimart',
                        'des': 'แอพพลิเคชั่นวินโดว์ 2015',
                    },

                    'web_doc_7': {
                        'title': 'ระบบจัดการร้านคอมพิวเตอร์',
                        'des': 'แอพพลิเคชั่นวินโดว์ 2015',
                    },

                    'web_doc_8': {
                        'title': 'ระบบหอพัก',
                        'des': 'แอพพลิเคชั่นวินโดว์ 2015',
                    },

                    'web_doc_9': {
                        'title': 'การรับส่งข้อมูลด้วย Json Mobile',
                        'des': 'แอพโมบาย 2015',
                    },


                    'web_doc_11': {
                        'title': 'โรงแรม Forrahill resort',
                        'des': 'เว็บไซต์ 2016',
                    },

                    'web_doc_12': {
                        'title': 'Tbds.co.th เว็บบริษัท',
                        'des': 'เว็บไซต์ 2016',
                    },

                    'web_doc_13': {
                        'title': 'Easy Stock',
                        'des': 'เว็บไซต์ 2016',
                    },
                    'web_doc_14': {
                        'title': 'Doggudy Shop',
                        'des': 'เว็บไซต์ 2015',
                    },
                    'web_doc_15': {
                        'title': 'smart drive อุดร',
                        'des': 'เว็บไซต์ 2015',
                    },
                    'web_doc_16': {
                        'title': 'siampetrotrade',
                        'des': 'เว็บไซต์ 2015',
                    },
                    'web_doc_17': {
                        'title': 'ivillage',
                        'des': 'เว็บไซต์ 2015',
                    },
                    'web_doc_18': {
                        'title': 'มวยไทยออนไลน์',
                        'des': 'เว็บไซต์ 2015',
                    },
                    'web_doc_19': {
                        'title': 'Duballsod',
                        'des': 'เว็บไซต์ 2016',
                    },
                    'web_doc_20': {
                        'title': 'Designsbo',
                        'des': 'เว็บไซต์ 2016',
                    },
                    'web_doc_21': {
                        'title': 'Tdedzean App',
                        'des': 'แอพโมบาย 2015',
                    },
                    'web_doc_22': {
                        'title': 'Duballsod App',
                        'des': 'แอพโมบาย 2016',
                    },
                    'web_doc_23': {
                        'title': 'DamnRoad',
                        'des': 'แอพพลิเคชั่นวินโดว์ 2017',
                    },
                    'web_doc_24': {
                        'title': 'nongkhainewsonline',
                        'des': 'เว็บไซต์ 2015',
                    },
                    'web_doc_25': {
                        'title': 'แดกโลด (ระบบจัดการร้านอาหาร)',
                        'des': 'แอพพลิเคชั่นวินโดว์ 2017',
                    },
                    'slideview':
                    {
                        'title' : 'Slide ที่นำเสนอ : Link'
                    },
                    

                    'portfolio_list': {
                        'data': [{
                                'title': 'ระบบขายรองเท้า online',
                                'des': 'เว็บไซต์',
                                'image': 'images/5.jpg',
                                'limage': 'images/5big.jpg',
                                'template': 'potfolio/template.html?project=01',
                                'type': 'web-site'
                            },
                            {
                                'title': 'Hashtags',
                                'des': '(โปรเจค Hashtags Intragram) เว็บไซต์',
                                'image': 'images/5.jpg',
                                'limage': 'images/5big.jpg',
                                'template': 'potfolio/template.html?project=01',
                                'type': 'web-site'
                            },
                            {
                                'title': 'ระบบขายสังฆภันณ์ online',
                                'des': 'เว็บไซต์',
                                'image': 'images/5.jpg',
                                'limage': 'images/5big.jpg',
                                'template': 'potfolio/template.html?project=01',
                                'type': 'web-site'
                            },
                            {
                                'title': 'ระบบขายเเว่นตาเเละหมวกด้วย AR',
                                'des': 'เว็บไซต์ (responsive)',
                                'image': 'images/5.jpg',
                                'limage': 'images/5big.jpg',
                                'template': 'potfolio/template.html?project=01',
                                'type': 'web-site'
                            },
                            {
                                'title': 'ห้องพัก Yii framework (Demo)',
                                'des': 'เว็บไซต์',
                                'image': 'images/5.jpg',
                                'limage': 'images/5big.jpg',
                                'template': 'potfolio/template.html?project=01',
                                'type': 'web-site'
                            },
                            {
                                'title': 'ระบบขายสินค้า Minimart',
                                'des': 'แอพพลิเคชั่นวินโดว์',
                                'image': 'images/5.jpg',
                                'limage': 'images/5big.jpg',
                                'template': 'potfolio/template.html?project=01',
                                'type': 'web-site'
                            },
                            {
                                'title': 'ระบบจัดการร้านคอมพิวเตอร์',
                                'des': 'แอพพลิเคชั่นวินโดว์',
                                'image': 'images/5.jpg',
                                'limage': 'images/5big.jpg',
                                'template': 'potfolio/template.html?project=01',
                                'type': 'web-site'
                            },
                            {
                                'title': 'ระบบหอพัก',
                                'des': 'แอพพลิเคชั่นวินโดว์',
                                'image': 'images/5.jpg',
                                'limage': 'images/5big.jpg',
                                'template': 'potfolio/template.html?project=01',
                                'type': 'web-site'
                            },
                            {
                                'title': 'การรับส่งข้อมูลด้วย Json Mobile',
                                'des': 'โมบายแอพ',
                                'image': 'images/5.jpg',
                                'limage': 'images/5big.jpg',
                                'template': 'potfolio/template.html?project=01',
                                'type': 'web-site'
                            },
                            {
                                'title': 'ร้านอาหารภายในอุดรธานี',
                                'des': 'โมบายแอพ',
                                'image': 'images/5.jpg',
                                'limage': 'images/5big.jpg',
                                'template': 'potfolio/template.html?project=01',
                                'type': 'web-site'
                            }
                        ]
                    }
                }

            } else {
                $scope.message = {


                    'show_menu_header': {
                        'Home': 'HOME',
                        'About': 'ABOUT ME',
                        'Skill': 'Skills',
                        'Experience': 'Experience',
                        'Education': 'Education',
                        'Portfolio': 'Portfolio',
                        'Contact': 'Contact'
                    },

                    'home_data': {
                        'header': 'PHONKRIT SAENJAI',
                        'under_header': 'Programmer And Web Designer',
                        'connect': 'Connect Me',
                        'slideTitle': "♥ ",
                        'slide_1': 'Web Developer',
                        'slide_2': 'Web Designer',
                        'slide_3': 'Mobile Developer',
                        'slide_4': 'Win App Developer.',
                        'slide_5': 'Game Developer',
                        'details': 'Hello, my name is Mr. Phonkrit Saenjai , this website is a introduce and works .the browser enabled to use Google Chrome To display the full 100% if want to see resume create, click on My resume (only Web Browser Google Chrome).',
                        'btn_title': 'About ME',
                        'btn_title_resume': 'MY RESUME'
                    },

                    'promote_data': {
                        'tab_one_title': 'Web Developer',
                        'tab_one_name': 'Web Developer',
                        'tab_one_details': "A high aptitude for develop website as well, both in the language and PHP ASP.NET C #.",
                        'tab_two_title': 'Web Designer',
                        'tab_two_name': 'Web Designer',
                        'tab_two_details': 'Have the ability to design website, front-end framework Bootstrap Css3 as well.',
                        'tab_three_title': 'Potfolio',
                        'tab_three_name': 'Potfolio',
                        'tab_three_details': 'Work while studying and work between training experience to work.',
                        'tab_four_title': 'Skilled Team',
                        'tab_four_name': 'Skilled Team',
                        'tab_four_details': 'Able to work as a team and can work in the working principles of MVC.'
                    },


                    'about_data': {
                        'title': 'About Me',
                        'details_one': '<b> About </b><hr/><br/> Name : Phonkrit Saenjai <br/> Birthday  : 6 January 1992 <br/> Age : 25  <br/> Health : Excellent <br/> weight : 59 kilogram <br/> high : 177 centimeter <br/> Marital Status : <b class="text-danger" > Single </b> ',
                        'details_two': 'At present, develop website in general, and windows app , Android App Private . ',
                        'tab_one': 'About',
                        'tab_two': 'Education',
                        'tab_three': 'Skilled'
                    },


                    'show_content': {
                        'experience': 'Year Experience',
                        'portfolio': 'Project Complete',
                    },

                    'skill_data': {
                        'title': 'Skilled',
                        'details': 'The ability of programming language From experience during the study and study by themselves have the ability of each language together as follows. +  NodeJs , Angularjs , React Config Vps Digitalocean , AWS',
                        'title_skill': 'Language computer programming Skill'
                    },


                    'skill_content': {
                        'skill_title_1': 'Yii framework',
                        'skill_des_1': 'The ability to use Yii framework.',
                        'skill_details_1': 'The  framework use the advance knowledge in the working principle and advance configuration',

                        'skill_title_2': 'Bootstrap',
                        'skill_des_2': 'The ability to use Bootstrap.',
                        'skill_details_2': 'Have the ability to customize and understand the working principle of Bootstrap can display designer Responsive.',

                        'skill_title_3': 'API & Other',
                        'skill_des_3': 'The ability to use Socail API and other.',
                        'skill_details_3': 'The ability to use API of Facebook Twitter and in doing login website and other related fields. + Github , Firebase Linux server',

                        'skill_title_4': 'Mobile Apps / Android - IOS',
                        'skill_des_4': 'The ability to develop Mobile apps.',
                        'skill_details_4': 'Can develop Mobile Apps using HTML5 (Phonegap Cordova , Ionic), with jquerymobile by sending and receiving data JSON.  (Php webserver)'


                    },


                    'exs_data': {
                        'title': 'Experience',
                        'des': 'Year Experience',
                        'details': 'Experience training and experience in programming',
                        'current': 'Current',
                        'date_one': 'Years 4 in college to',
                        'date_one_des': 'apprentice',
                        'date_two': 'Years 3 in college to',
                        'date_two_des': 'Years 4 in college',
                        'date_three': 'Years 1 in college to',
                        'date_three_des': 'Years 3 in college',
                        'data_foure': '1 July 58',
                        'data_foure_des': '30 April 59',
                        'data_five': '1 July 59',
                        'data_five_des': '31 March 60 - present',

                        'des_title_1': 'Practice experience.',
                        'des_des_1': 'Trained experience work and job Freeland.',
                        'des_details_1': 'While the training data has been studied and developed a program with the agency company (Freewill Solutions konkean) by the assignment is written by the structure of the designed system. The practice of programming MVC ASP.NET C # and while leisure get site general do while training.',
                        'des_title_2': 'Start the project.',
                        'des_des_2': 'Year to year 3 4 while study',
                        'des_details_2': 'Study and development of the project site, product sales by AR hat and glasses were worn (virtual) by began writing website. Responsive using Bootstrap can finally make the project was accomplished well.',
                        'des_title_3': 'Study computer language education.',
                        'des_des_3': 'Study development of program language Java Sql PHP C # introduction.',
                        'des_details_3': 'While studying the study. Find out the programming of language aptitude to developed a graduation project the plan project. Games, but due to low skill 3D molding turned website instead.',
                        'des_title_4': 'Peed Studio (Udonthani)',
                        'des_des_4': 'The company. Peed Studio For 1 years. www.peedstudio.co.th ',
                        'des_details_4': 'Working here is considered to be proud of, because the company is the first to apply this job. The job 2 week. boss get in. The programmer has 2 people including me have worked together to the most to do is used as the main  Yii Framework while the University invited as a guest to the children. Studying. Why due out far away from residential move to work near instead',
                        'des_title_5': 'The Best Design Studio (Udonthani)',
                        'des_des_5': 'The company. The Best Design Studio For 7 month . www.tbds.co.th',
                        'des_details_5': 'Moving to work here because near the dormitory. Working it self, because the programmer alone. Because the work pattern alone use OOP most work is within the system to the money. Good salary chief take doing variety causes out: military recruitment - ordained.',
                    },


                    'edu_data': {
                        'title': 'Education',
                        'univer': 'Univer CIty',
                        'coleg': 'Senior ',
                        'school': 'Junior '
                    },

                    'edu_univer': {
                        'title': 'Undergraduate degree',
                        'des': 'Faculty of Science - Information Technology Software Development .',
                        'date': '2014 - 2018',
                        'details': 'A bachelors degree. In the University Rajabpat Udon Thani know people. Model and program development. The study itself. And during one has focused on websites and mobile. Because they see that in the future, everything would be made at the website is up.'
                    },

                    'edu_coleg': {
                        'title': 'Senior High school',
                        'des': 'The Science - math.',
                        'date': '2010 - 2014',
                        'details': 'Study on fundamental concepts in various ranges are investigated to participate in academic computer in competition in the district level and provincial level. The knowledge of the computer more and more. The idea is to study (Programmer).'
                    },

                    'edu_school': {
                        'title': ' Junior high school',
                        'des': '----------',
                        'date': '2007 - 2010',
                        'details': 'During this, the measles, computer repair, installation. Some children wanted to know by the teacher to use programs. Make a website. Therefore, love working on computers since I was young.'
                    },


                    'portfolio_data': {
                        'title': 'Potfolio',
                        'tab_1': 'All',
                        'tab_2': 'Web site',
                        'tab_3': 'Windows App',
                        'tab_4': 'Mobile',
                        'tab_5': 'Game',
                    },




                    'contract_data': {
                        'title': 'Contact',
                        'des': 'Tel : 085-459-3048 (Arkar) <br/> Email : phonkritSaenjai@gmail.com , gotzillaphonkrit@gmail.com',
                        'name': 'Name',
                        'email': 'Email',
                        'subject': 'Subject',
                        'message': 'Message',
                        'send': 'Send'
                    },

                    'resume_description': {
                        'title': '',
                        'des': '',
                        'title_project': '',
                        'des_project': '',
                        'data_project': '',
                    },


                    doc: {
                        'more': 'More Details',
                        'view': 'View '
                    },

                    'web_doc_1': {
                        'title': 'Shoueshop online',
                        'des': 'website 2015',
                    },

                    'web_doc_2': {
                        'title': 'Resiver Json (Intragram Hashtags) ',
                        'des': 'website 2015',
                    },

                    'web_doc_3': {
                        'title': 'SankapanShop online',
                        'des': 'website 2015',
                    },


                    'web_doc_4': {
                        'title': 'GlasesAndHat Shop (AR)',
                        'des': 'website 2015',
                    },

                    'web_doc_5': {
                        'title': 'Hotel ',
                        'des': 'website 2015',
                    },

                    'web_doc_6': {
                        'title': 'Minimart',
                        'des': 'windows app 2015',
                    },

                    'web_doc_7': {
                        'title': 'Computer Shop',
                        'des': 'windows app 2015',
                    },

                    'web_doc_8': {
                        'title': 'Motel',
                        'des': 'windows app',
                    },

                    'web_doc_9': {
                        'title': 'Food Cal',
                        'des': 'Mobile 2015',
                    },
                    'web_doc_11': {
                        'title': 'Forrahill resort',
                        'des': 'website 2016',
                    },

                    'web_doc_12': {
                        'title': 'Tbds.co.th',
                        'des': 'website 2016',
                    },

                    'web_doc_13': {
                        'title': 'Easy Stock',
                        'des': 'website 2016',
                    },
                    'web_doc_14': {
                        'title': 'Doggudy Shop',
                        'des': 'website 2015',
                    },
                    'web_doc_15': {
                        'title': 'smart drive udon',
                        'des': 'website 2015',
                    },
                    'web_doc_16': {
                        'title': 'siampetrotrade',
                        'des': 'website 2015',
                    },
                    'web_doc_17': {
                        'title': 'ivillage',
                        'des': 'website 2015',
                    },
                    'web_doc_18': {
                        'title': 'Muaythaionline',
                        'des': 'website 2015',
                    },
                    'web_doc_19': {
                        'title': 'Duballsod',
                        'des': 'website 2016',
                    },
                    'web_doc_20': {
                        'title': 'Designsbo',
                        'des': 'website 2016',
                    },
                    'web_doc_21': {
                        'title': 'Tdedzean App',
                        'des': 'Mobile 2015',
                    },
                    'web_doc_22': {
                        'title': 'Duballsod App',
                        'des': 'Mobile 2016',
                    },
                    'web_doc_23': {
                        'title': 'DamnRoad',
                        'des': 'windows app 2017',
                    },
                    'web_doc_24': {
                        'title': 'nongkhainewsonline',
                        'des': 'website 2015',
                    },
                    'web_doc_25': {
                        'title': 'DamnRoad',
                        'des': 'windows app 2017',
                    },
                    'slideview':
                    {
                        'title' : 'Slide : Link'
                    }
                    

                }
            }
        }
        $scope.change_lang('thai');
    });
})();