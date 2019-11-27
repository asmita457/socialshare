import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  public sendTo   : any;
  public subject  : string = 'Message from Social Sharing App';
  public message  : string = 'Take your app development skills to the next level with Mastering Ionic - the definitive guide';
  public image    : string	= 'Message from Social Sharing App';
  public uri      : string	= 'https://play.google.com/store/apps/details?id=com.tracey.barrierbuster&hl=en';

  constructor(private socialSharing: SocialSharing,
    public navCtrl    : NavController,
    public platform   : Platform) { }


  share() {
    // alert("share");
    // this.socialSharing.canShareViaEmail().then(() => {
    //   // Sharing via email is possible
    // }).catch(() => {
    //   // Sharing via email is not possible
    // });
    
    // // Share via email
    // this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
    //   // Success!
    // }).catch(() => {
    //   // Error!
    // });

    // this.socialSharing.shareViaWhatsAppToReceiver
    this.socialSharing.shareVia('instagram','abc', 'Subject', 'recipient@example.org','xyz').then(() => {

    }).catch(() => {
      // Error!
    });
  }

  shareViaEmail()
   {
      this.platform.ready()
      .then(() =>
      {
        this.socialSharing.canShareViaEmail()
         .then(() =>
         {
          this.socialSharing.shareViaEmail(this.message, this.subject, this.sendTo)
            .then((data) =>
            {
               console.log('Shared via Email');
            })
            .catch((err) =>
            {
               console.log('Not able to be shared via Email');
            });
         })
         .catch((err) =>
         {
            console.log('Sharing via Email NOT enabled');
         });
      });
   }

   shareViaFacebook()
   {
      this.platform.ready()
      .then(() =>
      {
        this.socialSharing.canShareVia('com.apple.social.facebook', this.message, this.image, this.uri)
         .then((data) =>
         {

          this.socialSharing.shareViaFacebook(this.message, this.image, this.uri)
            .then((data) =>
            {
               console.log('Shared via Facebook');
            })
            .catch((err) =>
            {
               console.log('Was not shared via Facebook');
            });

         })
         .catch((err) =>
         {
            console.log('Not able to be shared via Facebook');
         });

      });
   }




   shareViaInstagram()
   {
      this.platform.ready()
      .then(() =>
      {

        this.socialSharing.shareViaInstagram(this.message, this.image)
         .then((data) =>
         {
            console.log('Shared via shareViaInstagram');
         })
         .catch((err) =>
         {
            console.log('Was not shared via Instagram');
         });

      });
   }




   sharePicker()
   {
      this.platform.ready()
      .then(() =>
      {

        this.socialSharing.share(this.message, this.subject, this.image, this.uri)
         .then((data) =>
         {
            console.log('Shared via SharePicker');
         })
         .catch((err) =>
         {
            console.log('Was not shared via SharePicker');
         });

      });
   }




   shareViaTwitter()
   {
      this.platform.ready()
      .then(() =>
      {

        this.socialSharing.canShareVia('com.apple.social.twitter', this.message, this.image, this.uri)
         .then((data) =>
         {

          this.socialSharing.shareViaTwitter(this.message, this.image, this.uri)
            .then((data) =>
            {
               console.log('Shared via Twitter');
            })
            .catch((err) =>
            {
               console.log('Was not shared via Twitter');
            });

         });

      })
      .catch((err) =>
      {
         console.log('Not able to be shared via Twitter');
      });
   }
}
