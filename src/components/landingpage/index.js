import React from "react";
import MavenLogo from "../../app/content/images/content-images/logo-maven.svg";
import BannerImg from "../../app/content/images/content-images/banner-section-background.jpeg";
import Btnappstoreimg from "../../app/content/images/style-images/btn-app-store.svg";
import Btnplaystoreimg from "../../app/content/images/style-images/btn-play-store.svg";
import BtnPlayVideo from "../../app/content/images/style-images/btn-play.svg";
import UserCount from "../../app/content/images/content-images/user-count.svg";
import Holdinghands from "../../app/content/images/content-images/banner-couples-holding-hands.png";
import Iconconnectionrequests from "../../app/content/images/style-images/icon-connection-requests.svg";
import IconMeta2 from "../../app/content/images/style-images/icon-meta2.svg";
import Bannermavennterface from "../../app/content/images/content-images/banner-maven-app-interface.png";
import Bannermatches from "../../app/content/images/content-images/banner-maven-matches.png";
import VerifiedProfiles from "../../app/content/images/content-images/banner-verified-profiles.png";
import BannerLucy from "../../app/content/images/content-images/banner-lucy.png";
import IconQuote from "../../app/content/images/style-images/icon-quote.svg";
import Image from "next/image";
const MainPage = () => {
  return (
    <div className="landing-page">
      {/* <!-- Header section starts --> */}
      <header>
        <nav className="navbar bg-transparent position-absolute w-100 z-index-1">
          <div className="container p-md-0">
            <div className="row w-100">
              <div className="col-12 col-md-3">
                <a className="navbar-brand" href="javascript:void(0)">
                  {/* <img
                    srcSet={imgasd}
                    alt="Maven Logo"
                    width="59"
                    height="59"
                  /> */}
                  <MavenLogo width="59" height="59" />
                </a>
              </div>
              <div className="col-12 col-md-9 p-0">
                <ul className="nav align-items-center justify-content-end h-100">
                  <li className="nav-item">
                    <a className="nav-link text-grey" href="javascript:void(0)">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-grey" href="javascript:void(0)">
                      How it works
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-grey" href="javascript:void(0)">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-grey" href="javascript:void(0)">
                      Testimonials
                    </a>
                  </li>
                  <li className="nav-item purple-border-grad border-rounded-4">
                    <a className="nav-link text-grey" href="javascript:void(0)">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* <!-- Header section ends --> */}
      {/* <!-- Banner slider section --> */}
      <main>
        <section
          className="banner-section bg-purple-dark-grad"
          style={{ marginBottom: "100px" }}
        >
          <div className="banner-background-image position-absolute w-100">
            <picture>
              <source srcSet={BannerImg.src} />
              <Image
                src={BannerImg.src}
                width="1920"
                height="1068"
                alt="Banner section background image"
              />
            </picture>
          </div>
          <div className="container" style={{ paddingTop: "220px" }}>
            <div className="row">
              <div className="col-md-6">
                <div className="content">
                  <h1>Embark on a Journey of Love</h1>
                  <p>
                    Find Your Maven, Find Your Match: Unveil Love's Potential
                  </p>
                  <div className="btn-group d-flex">
                    <div className="btn-app-store">
                      {/* <picture>
                        <source
                          media="(min-width:992px)"
                          srcSet={Btnappstoreimg.src}
                        />
                        <source
                          media="(min-width:576px)"
                          srcSet={Btnappstoreimg.src}
                        />
                        <source media="" srcSet={Btnappstoreimg.src} /> */}
                      <Btnappstoreimg
                        alt="App store button"
                        width="133"
                        height="51"
                        // sizes="(min-width: 992px) 24vw,
                        //   (min-width: 992px) 45vw,
                        //   100vw"
                      />
                      {/* </picture> */}
                    </div>
                    <div className="btn-play-store">
                      <picture>
                        <source
                          media="(min-width:992px)"
                          srcset="content/images/style-images/btn-play-store.svg"
                        />
                        <source
                          media="(min-width:576px)"
                          srcset="content/images/style-images/btn-play-store.svg"
                        />
                        <source
                          media=""
                          srcset="content/images/style-images/btn-play-store.svg"
                        />
                        <Btnplaystoreimg
                          alt="Play store button"
                          width="133"
                          height="51"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="intro-video media align-items-center">
                  <div className="img-block">
                    <picture>
                      <source srcset="content/images/style-images/btn-play.svg" />
                      <BtnPlayVideo
                        alt="Watch Intro Video"
                        width="100"
                        height="100"
                      />
                    </picture>
                  </div>
                  <div className="media-body">
                    <span>Watch</span>
                    <span>Intro Video</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="user-count d-flex justify-content-end">
                {/* <picture>
                  <source srcset="content/images/content-images/user-count.svg" /> */}
                <UserCount
                  alt="Maven user count"
                  width="320"
                  height="89"
                  // style={{ width: "320px" }}
                />
                {/* </picture> */}
              </div>
              <div className="banner-image position-absolute w-100">
                {/* <picture> */}
                {/* <source srcset="content/images/content-images/banner-couples-holding-hands.png" /> */}
                <Image
                  src={Holdinghands}
                  alt="Banner Couples holding hands"
                  width={778}
                  height={519}
                />
                {/* </picture> */}
              </div>
            </div>
          </div>
        </section>

        {/* <!-- How It Works section --> */}
        <section className="how-it-works-section pt-140">
          <div className="container">
            <div className="row">
              <div className="col-md-6 order-md-2">
                <h2>How It Works</h2>
                <div className="image-text-block d-none d-md-block">
                  <div className="row justify-content-center">
                    <div className="col-4 col-md-auto d-flex">
                      <div className="media bg-grad-blur">
                        <div className="img-block">
                          <picture>
                            <source srcset="content/images/style-images/icon-connection-requests.svg" />
                            <Iconconnectionrequests
                              alt="connection requests"
                              width={98}
                              height={98}
                            />
                          </picture>
                        </div>
                        <div className="media-body">
                          <h5>Send or accept Connection Requests</h5>
                          <p>
                            Send or accept connection requests to/from friends
                            or act as a mentor
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 col-md-auto d-flex">
                      <div className="media bg-grad-blur">
                        <div className="img-block">
                          {/* <picture>
                            <source srcSet="content/images/style-images/icon-meta2.svg" /> */}
                          <IconMeta2
                            src="content/images/style-images/icon-meta2.svg"
                            alt="Meta connection"
                            width={98}
                            height={98}
                          />
                          {/* </picture> */}
                        </div>
                        <div className="media-body">
                          <h5>Connect: Meta, Insta and Snapchat</h5>
                          <p>
                            Link your Meta, Instagram or Snapchat account to
                            connect with friends
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 col-md-auto d-flex">
                      <div className="media bg-grad-blur">
                        <div className="img-block">
                          {/* <picture>
                            <source srcSet="content/images/style-images/icon-meta2.svg" /> */}
                          <IconMeta2
                            alt="Expand connection"
                            width={98}
                            height={98}
                          />
                          {/* </picture> */}
                        </div>
                        <div className="media-body">
                          <h5>Expand, Explore, Thrive and Connect</h5>
                          <p>
                            Discover mutual interests and expand your social
                            circle within the app
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="how-it-works-carousel"
                  className="how-it-works-carousel carousel slide carousel-fade d-block d-md-none"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="media bg-grad-blur">
                        <div className="img-block">
                          {/* <picture>
                            <source srcSet="content/images/style-images/icon-connection-requests.svg" /> */}
                          <Iconconnectionrequests
                            //src="content/images/style-images/icon-connection-requests.svg"
                            alt="connection requests"
                            width={98}
                            height={98}
                          />
                          {/* </picture> */}
                        </div>
                        <div className="media-body">
                          <h5>Send or accept Connection Requests</h5>
                          <p>
                            Send or accept connection requests to/from friends
                            or act as a mentor
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="media bg-grad-blur">
                        <div className="img-block">
                          {/* <picture> */}
                          {/* <source srcSet="content/images/style-images/icon-meta2.svg" /> */}
                          <IconMeta2
                            //src="content/images/style-images/icon-meta2.svg"
                            alt="Meta connection"
                            width={98}
                            height={98}
                          />
                          {/* </picture> */}
                        </div>
                        <div className="media-body">
                          <h5>Connect: Meta, Insta and Snapchat</h5>
                          <p>
                            Link your Meta, Instagram or Snapchat account to
                            connect with friends
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="media bg-grad-blur">
                        <div className="img-block">
                          {/* <picture> */}
                          {/* <source srcSet="content/images/style-images/icon-meta2.svg" /> */}
                          <IconMeta2
                            //src="content/images/style-images/icon-meta2.svg"
                            alt="Expand connection"
                            width={98}
                            height={98}
                          />
                          {/* </picture> */}
                        </div>
                        <div className="media-body">
                          <h5>Expand, Explore, Thrive and Connect</h5>
                          <p>
                            Discover mutual interests and expand your social
                            circle within the app
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-control-wrapper">
                    <ol className="carousel-indicators">
                      <li
                        data-target="#how-it-works-carousel"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#how-it-works-carousel"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#how-it-works-carousel"
                        data-slide-to="2"
                      ></li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-md-1">
                {/* <picture>
                  <source
                    media="(min-width:992px)"
                    srcSet="content/images/content-images/banner-maven-app-interface.png"
                  />
                  <source
                    media="(min-width:576px)"
                    srcSet="content/images/content-images/banner-maven-app-interface.png"
                  />
                  <source srcSet="content/images/content-images/banner-maven-app-interface.png" /> */}
                {/* <Bannermavennterface
                  alt="Maven app interface"
                  width={591}
                  height={719}
                /> */}
                {/* </picture> */}
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Maven Approved Matches section --> */}
        <section className="approved-matches-section bg-pattern">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Maven Approved Matches</h2>
              <p>
                The devastating and wide-ranging impact of ALS on people's lives
                is often not well known by the public.
              </p>
            </div>
            {/* <picture>
              <source
                media="(min-width:992px)"
                srcSet="content/images/content-images/banner-maven-matches.png"
              />
              <source
                media="(min-width:576px)"
                srcSet="content/images/content-images/banner-maven-matches.png"
              />
              <source srcSet="content/images/content-images/banner-maven-matches.png" /> */}
            <Image src={Bannermatches} alt="" width="1200" height="496" />
            {/* </picture> */}
          </div>
        </section>

        {/* <!-- Verified Profiles section --> */}
        <section className="verified-profiles-section bg-pattern">
          <div className="container">
            <div className="section-heading text-md-left">
              <h2>Only Real Verified Profiles Are Allowed To Join</h2>
              <p className="d-md-none">
                Unlock the power of trusted connections as our Mavens create
                meaningful matches, connecting you with their trusted friends
                for exciting new connections
              </p>
            </div>
            <div className="note-text">
              <p>
                "Join with confidence - we prfioritize safety and authenticity
                through strict profile verification."
              </p>
            </div>
            {/* <picture>
              <source
                media="(min-width:992px)"
                srcSet="content/images/content-images/banner-verified-profiles.png"
              />
              <source
                media="(min-width:576px)"
                srcSet="content/images/content-images/banner-verified-profiles.png"
              />
              <source srcSet="content/images/content-images/banner-verified-profiles.png" /> */}
            <Image
              src={VerifiedProfiles}
              alt="Verified profiles banner"
              width="1114"
              height="456"
            />
            {/* </picture> */}
            <div className="bg-grey-dark">
              <h3></h3>
              <p></p>
              <div className="row">
                <div className="col-md-4">
                  {/* <picture>
                    <source
                      media="(min-width:992px)"
                      srcSet="content/images/content-images/banner-lucy.png"
                    />
                    <source
                      media="(min-width:576px)"
                      srcSet="content/images/content-images/banner-lucy.png"
                    /> */}
                  {/* <source srcSet="content/images/content-images/banner-lucy.png" /> */}
                  <Image
                    src={BannerLucy}
                    alt="Lucy Co Founder"
                    width={278}
                    height={374}
                  />
                  {/* </picture> */}
                </div>
                <div className="col-md-5">
                  <div className="team-note">
                    <picture>
                      <source
                        media="(min-width:992px)"
                        srcSet="content/images/style-images/icon-quote.svg"
                      />
                      <source
                        media="(min-width:576px)"
                        srcSet="content/images/style-images/icon-quote.svg"
                      />
                      <source srcSet="content/images/style-images/icon-quote.svg" />
                      <IconQuote
                        //src="content/images/style-images/icon-quote.svg"
                        alt="Quote icon"
                        width={92}
                        height={70}
                      />
                    </picture>
                    <p className="font-weight-bold">Lucy Fernandes</p>
                    <p className="text-grey2">Co Founder</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Non magna semper
                      eu orci. Egestas lectus egestas tortor quisque eget ac
                      diam commodo. Ut diam mi ipsum ut volutpat iaculis dolor
                      diam. Sed proin cursus aliquam interdum varius auctor.
                      Lorem ipsum dolor sit amet consectetur.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <h4></h4>
                  <p></p>
                  <h4></h4>
                  <p></p>
                  <h4></h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Footer section --> */}
        <footer className="bg-purple-dark2 py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3 mb-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bde6b77c-143c-40fa-aba1-e93644414636?apiKey=5151ddbef91541528bdb68746c0a3d02"
                  className="img-fluid mb-3"
                />
                <p className="text-white">
                  Experience meaningful connections with a touch of trusted
                  matchmaking.
                </p>
                <p className="text-white mt-3">Follow us</p>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0da364e0-8bbc-4ead-b765-f0ad47ca31d8?apiKey=5151ddbef91541528bdb68746c0a3d02"
                  className="img-fluid mt-2"
                />
              </div>

              <div className="col-md-3 mb-4">
                <h5 className="text-purple">Services</h5>
                <ul className="list-unstyled text-white mt-3">
                  <li>Home</li>
                  <li>How it works</li>
                  <li>Maven approved matches</li>
                  <li>Note from team</li>
                </ul>
              </div>

              <div className="col-md-3 mb-4">
                <h5 className="text-purple">Quick Links</h5>
                <ul className="list-unstyled text-white mt-3">
                  <li>FAQ</li>
                  <li>Terms and conditions</li>
                  <li>Privacy policy</li>
                </ul>
              </div>

              <div className="col-md-3 mb-4">
                <h5 className="text-purple">Contact Us</h5>
                <ul className="list-unstyled text-white mt-3">
                  <li>(555) 555-1234</li>
                  <li>mavenmatch@gmail.com</li>
                  <li>4016 Doane Street, Fremont CA 94538</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="bg-purple mt-5" />

          <div className="text-center text-md-right text-white text-sm mt-2">
            &copy; 2023 MAVEN MATCH | ALL RIGHTS RESERVED
          </div>
        </footer>
      </main>
    </div>
  );
};

export default MainPage;
