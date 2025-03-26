import React from "react";
import "./Hero.css";
import Link from "next/link";
import Image from "next/image";
import { HeroInfoData } from "@/utils/data";
import Head from "next/head";

const Hero = () => {
  return (
    <>
      <section
        className="section u--rel z--2"
        style={{ opacity: "1", visibility: "inherit" }}
      >
        <Head>
          <script src="/scripts/unicornStudio.umd.js" defer></script>
        </Head>
        <div className="bg">
          <div
            data-us-alttext="graphic background"
            data-us-project-src="https://cdn.jsdelivr.net/gh/ilja-van-eck/osmo/assets/scenes/landing-bg@1.0.json"
            data-us-disablemobile="false"
            className="bg-wrapper"
            data-us-initialized="true"
            data-scene-id="1ca7f27b-ce8e-40c1-96b9-c3ae11774e68"
          >
            <canvas
              width="1144"
              height="912"
              style={{width: '915px', height: '729px'}}
              role="image"
            >
              graphic background
            </canvas>
          </div>
        </div>
        <div className="bg__unicorn-dark-overlay"></div>
        <div className="container">
          <div className="home-hero">
            <div className="home-hero__inner">
              <div className="hero-col-info">
                <div className="flex-col">
                  {HeroInfoData.slice(0, 5).map((item, index) => (
                    <div className="p-reg mask" key={index}>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="flex-col">
                  {HeroInfoData.slice(5).map((item, index) => (
                    <div className="p-reg mask" key={index}>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hero-col-title">
                <h1 className="h-display">
                  <div className="single-line-wrap">
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                      }}
                    >
                      Start building websites
                    </div>
                  </div>
                  <div className="single-line-wrap">
                    <div
                      style={{
                        display: "block",
                        textAlign: "start",
                        position: "relative",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                      }}
                    >
                      people remember.
                    </div>
                  </div>
                </h1>
                <div className="flex-row gap--tiny">
                  <Link
                    href={"/"}
                    className="button w-inline-block"
                    style={{
                      opacity: 1,
                      visibility: "inherit",
                      height: "2.6em",
                    }}
                  >
                    <div className="u--clip">
                      <p className="p-reg">Become a member</p>
                    </div>
                    <div className="button-bg"></div>
                  </Link>
                  <button
                    className="button is--secondary"
                    style={{ opacity: 1, visibility: "inherit" }}
                  >
                    <div className="button-inner-row">
                      <Image
                        src={"/images/button_faces.png"}
                        height={20}
                        width={35}
                        alt="button-faces"
                      />
                      <div className="u--clip">
                        <p className="p-reg">About us</p>
                      </div>
                    </div>
                    <div className="button-bg is--secondary"></div>
                  </button>
                </div>
              </div>

              <div className="md--hide"></div>
              <div id="w-node-_2aacde1c-7b79-249f-2926-1a8bf2560dff-b4ef2fa0">
                <div className="home-col-cta">
                  <div className="hero-p__wrap">
                    <p className="p-reg">
                      Osmo came from constantly digging through old projects
                    </p>
                    <p className="p-reg">
                      wondering, ‘How did I build that again?’ It is basically
                      our{" "}
                    </p>
                    <p className="p-reg">
                      personal toolbox, packed with components, techniques,{" "}
                    </p>
                    <p className="p-reg">
                      tricks and tutorials—and it will keep growing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
