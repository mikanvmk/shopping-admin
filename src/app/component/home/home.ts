import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import {SwiperComponent} from "angular2-useful-swiper";
import {FileUploader} from "ng2-file-upload";
import {Constant} from "../../constant";
import {Upload} from "../../uploads/shared/upload";
import {UploadService} from "../../uploads/shared/upload.service";
import {UserService} from "../../service/user.service";
import {AngularFireDatabase} from "angularfire2/database";
import {LoadingDialog} from "../dialog/loading.dialog";
import {isNull, isUndefined} from "util";

@Component({
  selector: 'home',
  templateUrl: "./home.html",
  styleUrls: ['./home.scss']
})

export class Home implements OnInit, AfterViewInit {
  @ViewChild('galleryTop') galleryTop: SwiperComponent;
  @ViewChild('galleryThumbs') galleryThumbs: SwiperComponent;
  public uploader: FileUploader = new FileUploader({url: ''});

  banner: any[] = [];
  currentUpload: Upload;
  isUpload = false;
  isLoadingUpload = false;

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


  constructor(private userService: UserService,
              private db: AngularFireDatabase,
              private loading:LoadingDialog,
              private upSvc: UploadService) {
  }

  ngOnInit() {
    this.userService.isLogin()
      .then(res => {
        if (res) {
          this.db.list('/banner').valueChanges()
            .subscribe(res => {
              if (res.length > 0) {
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

  uploadFile(id?) {
    this.isLoadingUpload = true;
    let name = this.uploader.queue[0].file.name;
    let extension = name.substring(name.lastIndexOf('.') + 1, name.length);
    if (Constant.extension_img.indexOf(extension) !== -1) {
      this.currentUpload = new Upload(this.uploader.queue[0]._file);
      this.upSvc.pushUpload(this.currentUpload)
        .then(res => {
          if (res) {
            this.isUpload = true;
            this.isLoadingUpload = false;
            this.uploader.clearQueue();
            if (isUndefined(id) || isNull(id)) id = this.banner.length > 0 ? this.banner[this.banner.length-1].id+1 : 0;
            this.db.list('/banner')
              .set( id+'', {id: id,url : res}).then(() => this.isUpload = false);
          }
        })
    }
  }

  edit() {

  }

  remove(item) {
    this.loading.show();
    this.upSvc.deleteFile(item.url)
      .then(res => {
        if (res) {
          if (this.banner.length === 1) {
            this.banner = [];
          }
          this.db.list('/banner/' + item.id).remove()
            .then(() => {
              this.loading.close();
            })
        }
      })
  }
}
