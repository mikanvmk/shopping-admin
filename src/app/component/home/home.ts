import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import {SwiperComponent} from "angular2-useful-swiper";
import {FileUploader} from "ng2-file-upload";
import {Constant} from "../../constant";
import {Upload} from "../../uploads/shared/upload";
import {UploadService} from "../../uploads/shared/upload.service";
import {UserService} from "../../service/user.service";
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'home',
  templateUrl: "./home.html",
  styleUrls : ['./home.scss']
})

export class Home implements OnInit,AfterViewInit{
  @ViewChild('galleryTop') galleryTop: SwiperComponent;
  @ViewChild('galleryThumbs') galleryThumbs: SwiperComponent;
  public uploader:FileUploader = new FileUploader({url: ''});

  banner: any[] = [];
  currentUpload: Upload;

  galleryTopConfig: any = {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 10
  };

  galleryThumbsConfig: any = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true
  };


  constructor(private userService:UserService,
    private db:AngularFireDatabase,
    private upSvc: UploadService) { }

  ngOnInit() {
    this.userService.isLogin()
      .then(res=>{
        if (res) {
          this.db.list('/banner').valueChanges()
            .subscribe(res=>{
              if (res.length > 0 ){
                this.banner = res;
              }
            });
        }
      })
  }

  ngAfterViewInit() {
    this.galleryTop.swiper.params.control = this.galleryThumbs.swiper;
    this.galleryThumbs.swiper.params.control = this.galleryTop.swiper;
  }

  uploadFile() {
    let name = this.uploader.queue[0].file.name;
    let extension = name.substring(name.lastIndexOf('.') + 1, name.length);
    if (Constant.extension_img.indexOf(extension) !== -1) {
      this.currentUpload = new Upload(this.uploader.queue[0]._file);
      this.upSvc.pushUpload(this.currentUpload)
        .then(res=>{
          if (res) {
            this.db.list('/banner')
              .push(res);
          }
        })
    }
  }
}
